import React from 'react';
import { Route, Redirect } from "react-router-dom";
import axios from 'axios';
import {connect} from "react-redux";

// export const logged = async () => {
//     const data =  await axios.get(`/auth/logged`);
//     return data;
// };

function PrivateRoute2({ component: Component, path, exact, logged }) {
    return (
        <Route
            key={path} path={path} exact={exact}
            render={({ location, ...props }) =>
                logged ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        logged: state.logged
    }
};

export default connect(
    mapStateToProps,
    null
)(PrivateRoute2)
