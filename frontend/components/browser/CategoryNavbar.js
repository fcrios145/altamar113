import React from 'react';
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";

class CategoryNavbar extends React.Component {
    render() {
        const { categories } = this.props;
        return (
            <nav className='subnav mobile-only'>
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

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        categories: state.categories
    }
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(
    mapStateToProps,
    null
)(CategoryNavbar)