import React from 'react';
import { NavLink } from "react-router-dom";

export default class SubNavbar3 extends React.Component {
    render() {
        const { categories } = this.props;
        return (
            <nav className='subnav'>
                <ul>
                    {
                        categories && categories.map(item => (
                            <li key={item.name}>
                                <NavLink
                                    to={`/menu/${item.name}/`}>
                                    {item.text}
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav>
        );
    }
}