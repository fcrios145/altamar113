import Home from "../browser/Home";
import Admin from "../browser/Admin";
import PlateList from "../browser/PlateList";
import PlateEdition2 from "../browser/PlateEdition2";
import Login from '../browser/Login'
import Plate from "../browser/Plate";
import Dashboard from "../browser/Dashboard";
import fetchMenuData from "../shared/fetchMenuData";

const routes =  [
    {
        path: '/',
        exact: true,
        protectedPage: false,
        component: Home,
        fetchInitialData: () => fetchMenuData()
    },
    {
        path: '/menu/:categoria?/:platillo?',
        protectedPage: false,
        component: Plate,
        fetchInitialData: () => fetchMenuData()
    },
    {
        path: '/login',
        protectedPage: false,
        component: Login,
    },
    {
        path: '/admin',
        protectedPage: true,
        exact: true,
        component: Admin
    },
    {
        path: '/admin/dashboard',
        protectedPage: true,
        exact: true,
        component: Dashboard
    },
    {
        path: '/admin/platillos',
        protectedPage: true,
        exact: true,
        component: PlateList
    },
    {
        path: '/admin/platillos/:platillosId?',
        protectedPage: true,
        exact: true,
        component: PlateEdition2
    }
    // {
    //     path: '/popular/:id',
    //     component: Grid,
    //     protectedPage: true,
    //     fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
    // },

];

export default routes
