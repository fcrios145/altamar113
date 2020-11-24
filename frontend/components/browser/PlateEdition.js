import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";


const PlateEdition = ({plateSelected}) => {
    const [plateSelectedClone, setPlateSelectedClone] = useState({});
    const onSubmitForm = (e) => {
        console.log(e);
    }
    useEffect(() => {
        setPlateSelectedClone(JSON.parse(JSON.stringify(plateSelected)));
    }, [plateSelected])
    return(
        <Fragment>
            <h2>Plate Edition</h2>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="name">Nombre</label>
                <input type="text" value={plateSelectedClone.name} name="name"/>
                <label htmlFor="description">Descripcion</label>
                <input type="text" name="description" value={plateSelectedClone.description}/>
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