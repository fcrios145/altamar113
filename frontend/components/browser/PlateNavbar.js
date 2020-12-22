import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";

class PlateNavbar extends React.Component {
    render() {
        const category = this.props.categoriesServer.find(category => category.url === this.props.category) || {}
        const plates = this.props.platesServer.filter(plate => plate.category === category.id);
        return (
            <nav className='subnav-sub mobile-only'>
                <ul>
                    {
                        ((plates && category )) && plates.map(item => (
                            <li key={item.name}>
                                <NavLink
                                    to={`/menu/${category.url}/${item.url}/`}>
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

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        categories: state.categories,
        categoriesServer: state.categoriesServer,
        platesServer: state.platesServer
    }
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(
    mapStateToProps,
    null
)(PlateNavbar)
