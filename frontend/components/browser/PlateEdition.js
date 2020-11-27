import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom"

const PlateEdition = ({plateSelected, match: {params}}) => {
    let history = useHistory();
    const [plateSelectedClone, setPlateSelectedClone] = useState({});
    const [{name, description, categoryIdFk}, setValues, handleValues] = useForm({name: "", description: "", categoryIdFk: 1});
    const [showDeleteButton, setshowDeleteButton] = useState(() => params.platillosId !== 'add');

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(params);
        // plateSelectedClone.categoryIdFk = 1;
        if(params.platillosId === "add") { //Save
            axios.post(`/plates/`, {name, description, categoryIdFk})
        } else {
            axios.put(`/plates/${params.platillosId}`, {name, description, categoryIdFk: 1})
        }
    }
    const getPlateFromServer = () => {
        return axios.get(`/plates/${params.platillosId}`)
    }
    useEffect(() => {
        if(Object.keys(plateSelected).length === 0 && params.platillosId !== "add") { //if object is empty and is not add
            getPlateFromServer().then(({data}) => {
                setPlateSelectedClone(JSON.parse(JSON.stringify(data)));
            }).catch(error => {
                console.log(error)
            })
        } else {
            var clonePlate = JSON.parse(JSON.stringify(plateSelected));
            setValues(({
                categoryIdFk: 1,
                name: "",
                description: "",
                ...clonePlate
            }));
        }
    }, [plateSelected])

    const deleteButtonClick = (e) => {
        axios.delete(`/plates/${params.platillosId}`).then(response => {
            history.push(`/admin/platillos/`)
        })
    }

    return(
        <Fragment>
            <h2>Plate Edition</h2>
            <form onSubmit={onSubmitForm}>

                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" value={name} onChange={handleValues} />

                <label htmlFor="description">Descripcion</label>
                <input type="text" name="description" value={description} onChange={handleValues}/>

                <button type="submit">Guardar</button>
            </form>
            
            {
                showDeleteButton && <button onClick={deleteButtonClick} >Eliminar</button>  
            }
            
            
        </Fragment>
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
)(PlateEdition);