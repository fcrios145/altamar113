import React from 'react';
import {NavLink} from "react-router-dom";

const Admin = () => {
    return(
        <React.Fragment>
            <h2>Admin</h2>
            <NavLink to="/admin/platillos">
                Platillos
            </NavLink>
        </React.Fragment>
    )
};

export default Admin;