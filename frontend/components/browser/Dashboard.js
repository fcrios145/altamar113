import React from "react";
import {Link} from "react-router-dom";
import Layoutadmin from "./LayoutAdmin";

const Dashboard = () => {
    return (
        <Layoutadmin>
            <h2>dashboard</h2>
            <ul>
                <li>
                    <Link to={'/admin/platillos'}>
                        Platillos Menu
                    </Link>
                </li>
            </ul>
        </Layoutadmin>

    )
}

export default Dashboard;