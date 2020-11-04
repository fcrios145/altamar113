import React, { Component } from 'react'
import routes from './routes'
// import NavBar from './Navbar'
import {Route, Link, Switch, NavLink, Redirect } from 'react-router-dom'
import PrivateRoute, { logged, fakeAuth } from "../browser/PrivateRoute";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

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
                <div className="wrapper space-between">



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

                    <footer className='center-container'>
                        <a href="https://www.facebook.com/Altamar113" target='_blank'>
                            <img src="/static/images/facebook.png" alt="facebookLogo"/>
                        </a>
                        <a href="https://www.instagram.com/altamar113/" target='_blank'>
                            <img src="/static/images/instagram.png" alt="instagramLogo"/>
                        </a>
                    </footer>

                </div>

            </React.Fragment>
        )
    }
}

export default App