import React from 'react'
import Navbar from "../browser/Navbar";
import Header from '../browser/Header'
import { NavLink } from "react-router-dom";

export default function Home () {
    return (
        <div className="wrapper space-between">
            <Header imageInHeader={true}>
                <Navbar />
            </Header>
            <div className="container">
                <h2>Somos la combinación perfecta entre <span>ceviches y sushi nice &#127843;</span></h2>
            </div>
            <div className="center-container">
                <NavLink to={`/menu/ceviches/tony-espacial`}>
                    <button className='button'>
                        Ir al Menú
                    </button>
                </NavLink>
            </div>
            <footer className='center-container'>
                <a href="https://www.facebook.com/Altamar113" target='_blank'>
                    <img src="/static/images/facebook.png" alt="facebookLogo"/>
                </a>
                <a href="https://www.instagram.com/altamar113/" target='_blank'>
                    <img src="/static/images/instagram.png" alt="instagramLogo"/>
                </a>
            </footer>
        </div>
)
}