import React from 'react'
import Navbar from "../browser/Navbar";
import { NavLink } from "react-router-dom";



export default function Home () {
    return (
        <React.Fragment>
            <div className="wrapper">
                <header>
                    <div className="topbar-color"></div>
                    <img src="/static/images/logo.png" alt="altamar logo"/>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={`/`}>
                                    Inicio
                                </NavLink>
                            </li>
                            <li>Contáctanos</li>
                            <li><img src="/static/images/hamburger-icon.svg" alt=""/></li>
                        </ul>
                    </nav>
                </header>
                <div className="container">
                    <h2>Somos la combinación perfecta entre <span>ceviches y sushi nice &#127843;</span></h2>
                </div>
                <div className="center-container">
                    <button className='button'>Ir al menú </button>
                </div>
                <footer>
                </footer>
            </div>


        </React.Fragment>
    )
}