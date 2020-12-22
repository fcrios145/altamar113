import React from 'react';
import Layout from "./Layout";
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom'
import { Helmet } from 'react-helmet'

const liMenuStyle = {
    color: '#053861',
    fontSize: '1.2em',
    marginBottom: '0.7em'
};

const spanTitle = {
    fontSize: '1.5em',
    color: '#2196F3'
}

function createMarkup(markup) {
      return {__html: unescape(markup)};
}

class Plate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {plate: {}, category: {}}
    }

    componentDidMount() {
        this.props.dispatch({ "type": "IMAGE_IN_HEADER", payload: true });
        this.props.dispatch({ "type": "SHOW_CATEGORY_NAVBAR", payload: true });
        this.props.dispatch({ "type": "SHOW_PLATE_NAVBAR", payload: true });
    }
    

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { categoria, platillo } = this.props.match.params;
        if(platillo) {
            const plate = this.props.platesServer.find(plate => plate.url === platillo)
            const category = this.props.categoriesServer.find(category => category.url === categoria)
            document.title = `${category.name} - ${plate.name}`;
        } else if(!categoria) {
            document.title = 'menu';
        } else {
            document.title = `${categoria}`;
        }
    }


    render() {
        const { categoria, platillo } = this.props.match.params;
        const { categoriesServer, platesServer } = this.props;
        const plate = platesServer.find(plate => plate.url === platillo)
        console.log("aksdjkasdjkasjdkasjdkasjkd----------------------------------------------------")
        console.log(plate)
        return (
            <Layout {...this.props}>
                {plate && (
                    <Helmet>
                        <meta name="description" content={plate.description} />
                    </Helmet>
                )}
                <div className="plate mobile-only">
                    {plate &&
                    <React.Fragment>
                        <img style={{width: '100%', height: 'auto'}} className='plate-image' src={plate.photo} alt="ceviche" />
                        <div className="text-in-image">
                            <h1 className='plate-title'>{plate.name}</h1>
                            <p className='plate-description' dangerouslySetInnerHTML={unescape(createMarkup(plate.description_html))}></p>
                        </div>

                        <a href="/" className='icon icon--left-arrow'>
                            Kiwi Corp
                        </a>

                        <a href="/" className='icon icon--right-arrow'>
                            Kiwi Corp
                        </a>

                    </React.Fragment>
                    }
                </div>
                <div className="not-mobile">
                    <div className="rows">
                        <div className="row" style={{display: 'flex', justifyContent: 'space-between', marginRight: '5em'}}>
                            {categoriesServer.map(category => (
                                <div key={category.id}>
                                    <span style={spanTitle}>{category.name}</span>
                                    <ul style={{marginTop: '1.5em'}}>
                                        {
                                            platesServer && platesServer
                                            .filter(plate => plate.category === category.id)
                                                .map(plate => (
                                                    <li key={plate.id}>
                                                        <NavLink style={{textDecoration: 'none'}}
                                                            to={`/menu/${category.url}/${plate.url}/`}>
                                                            {plate.name}
                                                        </NavLink>
                                                    </li>
                                                ))
                                        }
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {plate && 
                        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <h1 style={{
                                    fontWeight: '900',
                                    fontSize: '2em',
                                    color: '#2196F3',
                                    textAlign: 'center'
                                }}>{plate.name}</h1>
                                <p style={{
                                    fontSize: '1.5em',
                                    textAlign: 'center',
                                    color: '#053861',
                                    margin: '1.5em 0'
                                }} dangerouslySetInnerHTML={createMarkup(plate.description_html)}>
                                </p>
                                <img style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '500px',
                                    alignSelf: 'center',
                                    marginBottom: '1em',
                                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                                }} src={plate.photo} alt=""/>
                            </div>
                        </div>
                        }


                    </div>
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        showCategoryNavbar: state.showCategoryNavbar,
        categories: state.categories,
        categoriesServer: state.categoriesServer,
        platesServer: state.platesServer
    }
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(
    mapStateToProps,
    null
)(Plate)
