import React from 'react';
import Layout from "./Layout";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux'
import Slider from '../browser/Slider'
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch({ "type": "SHOW_PLATE_NAVBAR", payload: false });
        this.props.dispatch({ "type": "IMAGE_IN_HEADER", payload: false });
        this.props.dispatch({ "type": "SHOW_CATEGORY_NAVBAR", payload: false });
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
                            <NavLink to={`/menu/`}>
                                <button className='button'>
                                    Ir al Menú
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='row not-mobile'>
                        <Slider/>
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
  
