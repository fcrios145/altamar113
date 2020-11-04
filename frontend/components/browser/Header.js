import React from 'react';
import Navbar from "./Navbar";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="topbar-color"></div>
                {
                    this.props.imageInHeader &&
                    <img src="/static/images/logo.png" alt="altamar logo"/>
                }
                {this.props.children}
                {/*<Navbar />*/}
            </header>
        );
    }
}