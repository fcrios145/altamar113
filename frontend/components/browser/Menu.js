import React from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import SubNavbar from './Subnavbar';

export default class Menu extends React.Component {
    render() {
        const { categoria, platillo } = this.props.match.params;
        return (
            <Header>
                <Navbar imageLogo={true} />
                <SubNavbar category={categoria} plate={platillo}></SubNavbar>
            </Header>
        );
    }
}