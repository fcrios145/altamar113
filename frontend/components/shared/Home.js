import React from 'react'
import Navbar from "../browser/Navbar";
import Header from '../browser/Header'
import { NavLink } from "react-router-dom";

export default function Home () {
    return (
        <React.Fragment>
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
        </React.Fragment>
)
}