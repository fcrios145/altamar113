import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import axios from "axios";


const PlateEdition = ({plateSelected, match: {params}}) => {
    const [plateSelectedClone, setPlateSelectedClone] = useState({});
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(params);
    }
    const getPlateFromServer = () => {
        return axios.get(`/plates/${params.platillosId}`)
    }
    useEffect(() => {
        if(Object.keys(plateSelected).length === 0) { //if object is empty
            getPlateFromServer().then(({data}) => {
                setPlateSelectedClone(JSON.parse(JSON.stringify(data)));
            }).catch(error => {
                console.log(error)
            })
        } else {
            setPlateSelectedClone(JSON.parse(JSON.stringify(plateSelected)));
        }
    }, [plateSelected])
    return(
        <Fragment>
            <h2>Plate Edition</h2>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="name">Nombre</label>
                <input type="text" value={plateSelectedClone.name} name="name"/>
                <label htmlFor="description">Descripcion</label>
                <input type="text" name="description" value={plateSelectedClone.description}/>
                <button type="submit">Enviar</button>
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