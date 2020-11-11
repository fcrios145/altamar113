import React from 'react';
import Layout from "./Layout";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux'

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
                    <div className='row'>
                        <div className="center-container">
                            <NavLink to={`/menu/ceviches/tony-espacial`}>
                                <button className='button'>
                                    Ir al Menú
                                </button>
                            </NavLink>
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