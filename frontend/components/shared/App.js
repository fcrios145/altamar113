import React, {Component} from 'react'
import routes from './routes'
import {Route, Link, Switch, NavLink, Redirect} from 'react-router-dom'
import PrivateRoute, {logged, fakeAuth} from "../browser/PrivateRoute";


function NoMatch() {
    return (
        <div>404</div>
    )
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageInHeader: true,
            selectedCategory: '',
            showCategoryNavbar: false,
            showPlateNavbar: false,
            plates: [],
            categories: [
                {
                    text: 'Ceviches',
                    name: 'ceviches',
                    plates: [
                        {
                            name: "Tony espacial",
                            url: "tony-espacial"
                        },
                        {
                            name: "Mango beach",
                            url: "manco-beach"
                        }
                    ]
                },
                {
                    text: 'Aguachiles',
                    name: 'aguachiles',
                    plates: [
                        {
                            name: "Aguachile 1",
                            url: "agua1"
                        },
                        {
                            name: "Aguachile 2",
                            url: "agua-2"
                        }
                    ]
                },
                {
                    text: 'Sushis',
                    name: 'sushis',
                    plates:[
                        {
                            name: "Sushi 2",
                            url: "sushi-2"
                        }
                    ]
                }
            ]
        };
        this.setGlobalState = this.setGlobalState.bind(this);
        this.searchPlate = this.searchPlate.bind(this);
    }

    setGlobalState(state) {
        this.setState({...this.state, ...state})
    }

    searchPlate(category = "") {
        return this.state.categories.find(item => item.name === category) || {};
    }


    render() {
        // const notAuthRoutes = routes.filter((route) => route.protectedPage === false && route.path !== '/login' );
        const notAuthRoutes = routes.filter((route) => route.protectedPage === false);
        // const loginPage = routes.filter((route) => route.path === '/login' );
        const authRoutes = routes.filter((route) => route.protectedPage === true);
        const { selectedCategory } = this.state;
        return (
            <React.Fragment>
                {/*<div className="wrapper space-between">*/}
                {/*    <Header imageInHeader={this.state.imageInHeader}>*/}
                {/*        <Navbar imageLogo={!this.state.imageInHeader}/>*/}
                {/*    </Header>*/}
                    <Switch>

                        {notAuthRoutes.map(({path, exact, component: Component, ...rest}) =>
                            <Route key={path} path={path} exact={exact} render={(props) => {
                                return <Component
                                    {...props}
                                    {...rest}
                                    {...this.state}
                                    setGlobalState={this.setGlobalState}
                                    searchPlate={this.searchPlate}
                                />
                            }}/>
                        )}

                        {authRoutes.map(({path, protectedPage, component: Component, ...rest}) =>
                            <PrivateRoute path={path} component={Component} {...rest} />
                        )}
                        <Route render={(props) => <NoMatch {...props} />}/>
                    </Switch>

                    {/*<footer className='center-container'>*/}
                    {/*    <a href="https://www.facebook.com/Altamar113" target='_blank'>*/}
                    {/*        <img src="/static/images/facebook.png" alt="facebookLogo"/>*/}
                    {/*    </a>*/}
                    {/*    <a href="https://www.instagram.com/altamar113/" target='_blank'>*/}
                    {/*        <img src="/static/images/instagram.png" alt="instagramLogo"/>*/}
                    {/*    </a>*/}
                    {/*</footer>*/}

                {/*</div>*/}

            </React.Fragment>
        )
    }
}

export default App