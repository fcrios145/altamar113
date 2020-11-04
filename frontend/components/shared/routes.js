import React from 'react';
import Home from './Home'
import Login from './Login'
import Menu from '../browser/Menu'
import Plate from '../browser/Plate'

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
        component: Plate,
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