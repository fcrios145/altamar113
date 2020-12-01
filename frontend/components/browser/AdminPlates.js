import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";
import LayoutAdmin from "./LayoutAdmin";
import {FloatingButton} from "../styled/StyledComponents";


const AdminPlate = ({dispatch}) => {
    let history = useHistory();
    const getPlates = () => {
        return axios.get(`/plates`); //=> {
    }
    const [ plates, setPlates ] = useState([]);

    useEffect(() =>  {
        getPlates().then(({data}) => {
            setPlates(data)
        }).catch(error => {
            console.log(error);
        });
    }, []);

   

    const onClickTableElement = ({currentTarget}) => {
        const plateSelected = JSON.parse(currentTarget.getAttribute("data"));
        dispatch({"type": "SET_PLATE_SELECTED", payload: plateSelected})
        history.push(`/admin/platillos/${plateSelected.plateId}`)
    }

    const onClickAdd = (e) => {
        dispatch({"type": "SET_PLATE_SELECTED", payload: {}})
        history.push(`/admin/platillos/add`)
    }

    return(
        <LayoutAdmin>
            <FloatingButton onClick={onClickAdd}>Nuevo</FloatingButton>
            {/*<button onClick={onClickAdd}>Nuevo</button>*/}
            <div className="center-table">
                <table style={{marginTop: "1em"}}>
                    <thead>
                    </thead>
                    <tbody>
                    {plates.map(plate =>
                        <tr key={plate.plateId} data={JSON.stringify(plate)} onClick={onClickTableElement}>
                            <td>{plate.name}</td>
                            {/*<td>{plate.description}</td>*/}
                        </tr> )}
                    </tbody>

                </table>
            </div>
        </LayoutAdmin>
    )
}

const mapStateToProps = (state) => {
    return {
        plateSelected: state.plateSelected
    }
}

export default connect(
  mapStateToProps,
  null
)(AdminPlate);
