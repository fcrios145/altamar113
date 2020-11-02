import React, { Component } from 'react'
import routes from './routes'
// import NavBar from './Navbar'
import {Route, Link, Switch, NavLink, Redirect } from 'react-router-dom'
import PrivateRoute, { logged, fakeAuth } from "../browser/PrivateRoute";


function NoMatch() {
    return(
        <div>404</div>
    )
}


class App extends Component {

    render() {
        // const notAuthRoutes = routes.filter((route) => route.protectedPage === false && route.path !== '/login' );
        const notAuthRoutes = routes.filter((route) => route.protectedPage === false );
        // const loginPage = routes.filter((route) => route.path === '/login' );
        const authRoutes = routes.filter((route) => route.protectedPage === true);
        return (
            <React.Fragment>
                <div>



                    <Switch>

                        {notAuthRoutes.map(({ path, exact, component: Component, ...rest }) =>
                            <Route key={path} path={path} exact={exact} render={(props) => {
                                return <Component {...props} {...rest} />
                            }} />
                        )}

                        {authRoutes.map(({ path, protectedPage, component: Component, ...rest }) =>
                            <PrivateRoute path={path} component={Component} {...rest} />
                        )}
                        <Route render={(props) => <NoMatch {...props} /> } />
                    </Switch>
                </div>

            </React.Fragment>
        )
    }
}

export default App