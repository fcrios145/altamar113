import React from 'react';
import { NavLink } from "react-router-dom";

const liStyles = {
    marginBottom: '1em'
}

const liSubMenu = {
    color: '#B2DAFB',
    marginLeft: '0.8em',
    marginTop: '0.7em'
}

const liPlateStyle = {
    color: '#E7F4FE',
    marginLeft: '1.2em',
    marginTop: '0.7em'
}

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            widthMenu: '0%',
            display: 'none'
        }
    }

    clickHamburgerIcon() {
        this.setState({...this.state, widthMenu: '100%', display: 'block'})
    }

    closeMenu(e) {
        e.preventDefault()
        this.setState({...this.state, widthMenu: '0%', display: 'none'})
    }

    keyOverlay(event) {
        if(event.key === 'Escape') {
            this.closeMenu()
        }
    }

    render() {
        return (
            <React.Fragment>
                <div tabIndex='0' onKeyDown={(e) => this.keyOverlay(e)} style={{
                    position: 'fixed',
                    height: '100%',
                    width: this.state.widthMenu,
                    zIndex: 1,
                    left: '0',
                    top: '0',
                    padding: '5.5em 1em',
                    backgroundColor: '#033496',
                    display: this.state.display
                }}>
                    <a className='icon--close-big' onClick={(e) => this.closeMenu(e)}></a>
                    <div className="content" style={{
                        fontSize: '14px'
                    }}>
                        <ul style={{
                            color: '#2196F3',
                            fontSize: '1.8em',
                            fontWeight: 'bold',
                        }}>
                            <li style={liStyles}>Contacto</li>
                            <li style={liStyles} >Promociones</li>
                            <li style={liStyles} >
                                Menú
                                <ul>
                                    <li style={liSubMenu}>
                                        Ceviches
                                        <ul style={liPlateStyle}>
                                            <li>
                                                Tony especial
                                            </li>
                                        </ul>
                                    </li>
                                    <li style={liSubMenu}>
                                        Aguachiles
                                        <ul style={liPlateStyle}>
                                            <li>
                                                Aguachile especial
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            <nav>
                {this.props.imageInHeader &&
                    <img className='logo logo-small' src="/static/images/logo.png" alt="altamarLogo.png"/>
                }
                <ul>
                    <li>
                        <NavLink exact to={`/`}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>Contáctanos</li>
                    <li style={{cursor: 'pointer'}} onClick={(e) => this.clickHamburgerIcon()}><img src="/static/images/hamburger-icon.svg" alt=""/></li>
                </ul>
            </nav>
            </React.Fragment>
        )
    }
}