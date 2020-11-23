import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";

class PlateNavbar extends React.Component {
    render() {
        const { category } = this.props;
        const plates = this.props.categories.find(item => item.name === category) || {};
        return (
            <nav className='subnav-sub mobile-only'>
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

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        categories: state.categories
    }
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(
    mapStateToProps,
    null
)(PlateNavbar)