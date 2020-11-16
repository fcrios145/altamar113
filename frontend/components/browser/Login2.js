import React, { useState } from 'react';
import axios from "axios";
import {fakeAuth} from "./PrivateRoute";
import { Redirect } from 'react-router-dom'
import {connect} from "react-redux";

const onSubmit = (e, username, password, dispatch) => {
    e.preventDefault();

    axios.post(`/auth/login`, {
        "username": username,
        "password": password
    }).then((response) => {
        console.log(response.data);
        if(response.data) {
            dispatch({ "type": "LOGGED_TRUE" });
        }
        fakeAuth.isAuthenticated = true;
    }).catch((error) => {
        console.log(error);
    });
};

const Login2 = ({logged, dispatch}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return(
        <React.Fragment>
            {logged && <Redirect to="/admin" />
            }
            <form method='POST' onSubmit={(e) => onSubmit(e, username, password, dispatch)}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name='username'/>

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name='password'/>

                <button type='submit'>Entrar</button>
            </form>
        </React.Fragment>
    )
};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        logged: state.logged
    }
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(
    mapStateToProps,
    null
)(Login2)

// export default Login2;