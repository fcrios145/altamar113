import React, {useState, useEffect} from "react";
import axios from "axios";

const AdminPlate = () => {
    const getPlates = () => {
        axios.get(`/plates`).then((response) => {
            console.log(response.data);
            if(response.data) {

            }
        }).catch((error) => {
            console.log(error);
        });
    }
    const [ plates, setPlates ] = useState([{"name": "uno"}, {"name": "dos"}]);
    return(
        <React.Fragment>
            <h2>Platillos</h2>
            <ul>
                {plates.map(plate =>
                    <li key={plate.name}>{plate.name}</li>
                )}
            </ul>
            <button onClick={(e) => getPlates()}>Get Plates Call</button>
        </React.Fragment>
    )
}

export default AdminPlate