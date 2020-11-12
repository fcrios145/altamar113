import React from 'react';
import Layout from "./Layout";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux'

const imageStyle = {
    width: '100%', 
    height: 'auto', 
    maxWidth: '500px'
}

const imageStyleNone = {
    width: '100%', 
    height: 'auto', 
    maxWidth: '500px',
    display: 'none'
}

class Home extends React.Component {
    componentDidMount() {
        this.props.setGlobalState({
            imageInHeader:false,
            showCategoryNavbar: false,
            showPlateNavbar: false
        })
    }

    render() {
        return (
            <Layout {...this.props}>
                {/* <h1>Counter: {this.props.counter}</h1>
                <button onClick={() => this.props.dispatch({ "type": "INCREMENT" })}>Sum</button> */}
                <div className="container rows" style={{margin: '1.5em 0'}}>
                    <div className='row'>
                        <h2>Somos la combinación perfecta entre <br/><span>ceviches y sushi nice &#127843;</span></h2>
                    </div>
                    <div className='row mobile-only'>
                        <div className="center-container">
                            <NavLink to={`/menu/ceviches/tony-espacial`}>
                                <button className='button'>
                                    Ir al Menú
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='row not-mobile'>
                        <div style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'column'}}>
                            <div style={{position: 'relative'}}>
                                <img style={imageStyle} src='/static/images/slider-1.png' />
                                <img style={imageStyleNone} src='https://source.unsplash.com/VFGEhLznjPU' />
                                <div style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '0',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(51, 51, 51, 0.5)',
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                                    }}>
                                    <div style={{
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        alignItems: 'center', 
                                        justifyContent: 'flex-end',
                                        }}>
                                        <button style={{
                                            backgroundColor: '#2196F3',
                                            fontFamily: 'Montserrat',
                                            border: '0',
                                            fontSize: '1.5em',
                                            color: '#E7F4FE',
                                            fontWeight: '700',
                                            padding: '1em 3em',
                                            marginBottom: '1em',
                                            borderRadius: '0.15em' 
                                            }}>Ir al Menú</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            
        );
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      counter: state
    }
  }
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
  export default connect(
    mapStateToProps,
    null
  )(Home)
  