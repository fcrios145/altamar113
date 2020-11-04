import React from 'react';
import {fakeAuth, logged} from "../browser/PrivateRoute";
import {
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import axios from "axios";


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            redirect: null,
            logged: false
        }
    }

    componentDidMount() {
        logged().then((response) => {
            fakeAuth.isAuthenticated = response.data;
            this.setState({'logged': response.data})
        })
    }

    handleState(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    login(event) {
        event.preventDefault();
        axios.post(`/auth/login`, {
            "userName": this.state.userName,
            "password": this.state.password
        }).then((response) => {
            console.log(response.data);
            fakeAuth.isAuthenticated = true;
            this.setState({...this.state, redirect: true});
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { redirect, logged } = this.state;
        if (redirect || logged === true) {
            return <Redirect to='/' />
        }
        return (
            <div className='flex bg-blue-400 justify-center items-center h-screen login-container'>
                <div className='bg-gray-100 shadow-lg login-form rounded-md px-40 py-16'>
                    <form className='flex flex-col' method='POST' onSubmit={(e) => this.login(e)}>
                        <label className='mb-2 text-base' htmlFor="userName">Usuario:</label>
                        <input className='h-16 rounded-md mb-10' onChange={(event) => this.handleState(event)} value={this.state.userName} type="text" name='userName'/>
                        <br/>
                        <label className='mb-2' htmlFor="password">Contraseña:</label>
                        <input className='h-16 rounded-md mb-24' onChange={(event) => this.handleState(event)} value={this.state.password} type='password' name='password'/>

                        <button className='h-20 text-white font-bold first-blue py-3 px-32 rounded-md' onClick={(e) => this.login(e)}>Entrar</button>
                    </form>
                </div>
            </div>
        );
    }

}