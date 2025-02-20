import React, { useState } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom'
import {connect} from "react-redux";
import Layoutadmin from './LayoutAdmin';
/*
    TODO all axios calls, refactor into another file, may be, separating by method type
    I'm having the same logic in different files
*/

const Login = ({logged, dispatch}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e, dispatch) => {
        e.preventDefault();

        axios.post(`/auth/login`, {
            "username": username,
            "password": password
        }).then((response) => {
            console.log(response.data);
            if(response.data) {
                dispatch({ "type": "LOGGED_TRUE" });
            }
        }).catch((error) => {
            console.log(error);
        });
    };
    return(
        <Layoutadmin>
            {logged && <Redirect to="/admin/dashboard" />
            }
            <div className="topbar-color"></div>
            <div className="center-horizontal wrapper">
                <form className='form-login' method='POST' onSubmit={(e) => onSubmit(e, dispatch)}>
                    <label htmlFor="username">Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name='username'/>

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name='password'/>

                    <button className="button" type='submit'>Entrar</button>
                </form>
            </div>
        </Layoutadmin>
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
)(Login)

// export default Login2;
