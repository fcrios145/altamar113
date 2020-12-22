import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";

class CategoryNavbar extends React.Component {
    render() {
        const { categories, categoriesServer } = this.props;
        return (
            <nav className='subnav mobile-only'>
                <ul>
                    {
                        categoriesServer && categoriesServer.map(item => (
                            <li key={item.id}>
                                <NavLink
                                    to={`/menu/${item.url}/`}>
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
        categoriesServer: state.categoriesServer
    }
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(
    mapStateToProps,
    null
)(CategoryNavbar)
