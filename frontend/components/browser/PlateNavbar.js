import React from 'react';
import { NavLink } from "react-router-dom";

export default class PlateNavbar extends React.Component {
    render() {
        const { plates, category } = this.props;
        return (
            <nav className='subnav-sub'>
                <ul>
                    {
                        ((plates && category )) && plates.plates.map(item => (
                            <li key={item.name}>
                                <NavLink
                                    to={`/menu/${category}/${item.url}/`}>
                                    {item.name}
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        );
    }
}