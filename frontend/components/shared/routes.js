import React from 'react';
import Home from "../browser/Home";
import Admin from "../browser/Admin";
import AdminPlates from "../browser/AdminPlates";
import Login2 from '../browser/Login2'
import Plate from "../browser/Plate";

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
    {
        path: '/login',
        protectedPage: false,
        component: Login2,
    },
    {
        path: '/admin',
        protectedPage: true,
        exact: true,
        component: Admin
    },
    {
        path: '/admin/platillos',
        protectedPage: true,
        exact: true,
        component: AdminPlates
    }
    // {
    //     path: '/popular/:id',
    //     component: Grid,
    //     protectedPage: true,
    //     fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
    // },

];

export default routes