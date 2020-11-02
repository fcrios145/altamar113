import React from 'react'
import Navbar from "../browser/Navbar";

export default function Home () {
    return (
        <header>
            Header
            <img src="/static/images/logo.png" alt="altamar logo"/>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Contáctanos</li>
                    <li>Hamburger icon</li>
                </ul>
            </nav>
        </header>
    )
}