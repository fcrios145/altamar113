import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import axios from "axios";
import { useForm } from "../hooks/useForm";


const PlateEdition = ({plateSelected, match: {params}}) => {
    const [plateSelectedClone, setPlateSelectedClone] = useState({});
    const [{name, description, categoryIdFk}, setValues, handleValues] = useForm({name: "", description: "", categoryIdFk: 1});

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(params);
        // plateSelectedClone.categoryIdFk = 1;
        if(params.platillosId === "add") { //Save
            axios.post(`/plates/`, {name, description, categoryIdFk})
        } else {
            axios.put(`/plates/${params.platillosId}`, {name, description, categoryIdFk})
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
            setValues(clonePlate);
        }
    }, [plateSelected])

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