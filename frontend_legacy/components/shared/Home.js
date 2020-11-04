import React from 'react'
import Navbar from "../browser/Navbar";
import Header from '../browser/Header'
import { NavLink } from "react-router-dom";

export default class Home extends  React.Component {
    constructor(props) {
        super(props);
        this.props.setGlobalState({imageInHeader:true});
    }
    render() {
        return (
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
        );
    }

}