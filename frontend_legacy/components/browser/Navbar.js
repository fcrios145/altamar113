import React from 'react';
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav>
                {this.props.imageLogo &&
                    <img className='logo logo-small' src="/static/images/logo.png" alt="altamarLogo.png"/>
                }
                <ul>
                    <li>
                        <NavLink exact to={`/`}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>Contáctanos</li>
                    <li><img src="/static/images/hamburger-icon.svg" alt=""/></li>
                </ul>
            </nav>
        )
    }
}