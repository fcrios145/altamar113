import React from 'react';
import Layout from "./Layout";
import {NavLink} from "react-router-dom";

export default class Home extends React.Component {
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
                <div className="container">
                    <h2>Somos la combinación perfecta entre <span>ceviches y sushi nice &#127843;</span></h2>
                    <div className="center-container">
                        <NavLink to={`/menu/ceviches/tony-espacial`}>
                            <button className='button'>
                                Ir al Menú
                            </button>
                        </NavLink>
                    </div>
                </div>
            </Layout>
        );
    }
}