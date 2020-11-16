import React from 'react';
import { Route, Redirect } from "react-router-dom";
import axios from 'axios';

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signOut(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);

    }
};

export const logged = async () => {
    const data =  await axios.get(`/auth/logged`);
    return data;
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ component: Component, logged, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location, ...props }) =>
                logged ? (
                    <Component {...rest} {...props}></Component>
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


export default  PrivateRoute