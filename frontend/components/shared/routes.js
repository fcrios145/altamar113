import React from 'react';
import Home from './Home'
import Login from './Login'
import Menu from '../browser/Menu'
import MenuPlate from '../browser/MenuPlate'

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
        component: Menu,
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