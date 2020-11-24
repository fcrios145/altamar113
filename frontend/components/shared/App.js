import React, {Component} from 'react'
import routes from './routes'
import {Route, Switch} from 'react-router-dom'
import {connect} from "react-redux";
import PrivateRoute2 from "../browser/PrivateRoute";


function NoMatch() {
    return (
        <div>404</div>
    )
}


class App extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <React.Fragment>
                    <Switch>
                        {routes
                            .filter(route => !route.protectedPage)
                            .map(({path, exact, component: Component}) =>
                            <Route key={path} path={path} exact={exact} render={(props) => {
                                return <Component
                                    {...props}
                                    />
                                }}
                            />
                        )}
                        {routes
                            .filter(route => route.protectedPage)
                            .map(rest => <PrivateRoute2 key={rest.path} {...rest}/>)
                        }

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