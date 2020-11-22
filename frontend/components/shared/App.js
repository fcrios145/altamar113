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