import React from 'react';
import Home from "../browser/Home";
import Login from './Login'
import Menu from '../browser/Menu'
import Plate from '../browser/Plate'
import Test2 from "../browser/Test2";

const routes =  [
    {
        path: '/',
        exact: true,
        protectedPage: false,
        component: Home,
    },
    {
        path: '/menu/:categoria?/:platillo?',
        protectedPage: false,
        component: Test2,
    },
    // {
    //     path: '/popular/:id',
    //     component: Grid,
    //     protectedPage: true,
    //     fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
    // },
    // {
    //     path: '/pro',
    //     authRequired: true,
    //     component: ProtectedPage
    // },
    {
        path: '/login',
        protectedPage: false,
        component: Login
    }

];

export default routes