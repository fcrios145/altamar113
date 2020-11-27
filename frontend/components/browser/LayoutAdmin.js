import React from "react";
import Navbar from './Navbar'

const Layoutadmin = ({children}) => {
    return(
        <>
            <div className="topbar-color"></div>
            <header>
                <nav style={{justifyContent: 'flex-start', padding: '0 2em'}}>
                    <img className='logo logo-small' src="/static/images/logo.png" alt="altamarLogo.png"/>
                </nav>
            </header>
            {children}
        </>
    )
}

export default Layoutadmin;