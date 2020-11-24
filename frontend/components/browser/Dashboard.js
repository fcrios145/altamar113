import React from "react";
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <React.Fragment>
            <h2>dashboard</h2>
            <ul>
                <li>
                    <Link to={'/admin/platillos'}>
                        Platillos Menu
                    </Link>
                </li>
            </ul>
        </React.Fragment>

    )
}

export default Dashboard;