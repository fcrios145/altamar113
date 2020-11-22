import React, {Component} from 'react'
import routes from './routes'
import {Route, Switch} from 'react-router-dom'
import {connect} from "react-redux";


function NoMatch() {
    return (
        <div>404</div>
    )
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: '',
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

        return (
            <React.Fragment>
                    <Switch>
                        {routes.map(({path, exact, component: Component, ...rest}) =>
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

                        <Route render={(props) => <NoMatch {...props} />}/>
                    </Switch>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        logged: state.logged
    }
};

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(
    mapStateToProps,
    null
)(App)

// export default App