import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom"
import Layoutadmin from "./LayoutAdmin";
import {
    Form, Wrapper, Input,
    TextArea, ButtonsContainer, ButtonGreen,
    ButtonRed, ButtonBlue, ButtonOrange} from "../styled/StyledComponents";

const PlateEdition = ({plateSelected, match: {params}}) => {
    let history = useHistory();
    const [plateSelectedClone, setPlateSelectedClone] = useState({});
    const [{name, description, categoryIdFk}, setValues, handleValues] = useForm({name: "", description: "", categoryIdFk: 1});
    const [showDeleteButton, setshowDeleteButton] = useState(() => params.platillosId !== 'add');
    const [textButtonSaveUpdate, settextButtonSaveUpdate] = useState(
        () =>
        params.platillosId !== 'add' ? "Actualizar" : "Guardar"
    )

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
        if (confirm(`Estas seguro que deseas eliminar ${name}`)) {
            axios.delete(`/plates/${params.platillosId}`).then(response => {
                history.push(`/admin/platillos/`)
            })
        } else {

        }

    }

    const onClickGoBack = () => {
        history.push(`/admin/platillos/`);
    }

    return(
        <Layoutadmin>
            <Wrapper>
                <ButtonsContainer>
                    <ButtonGreen onClick={onSubmitForm} type="button">{textButtonSaveUpdate}</ButtonGreen>
                    {
                        showDeleteButton && <ButtonRed onClick={deleteButtonClick} >Eliminar</ButtonRed>
                    }
                    <ButtonBlue onClick={onClickGoBack}>Regresar</ButtonBlue>
                    <ButtonOrange>Inactivo</ButtonOrange>
                </ButtonsContainer>
                <Form onSubmit={onSubmitForm}>

                    <label htmlFor="name">Nombre</label>
                    <Input type="text" name="name" value={name} onChange={handleValues} />

                    <label htmlFor="description">Descripcion</label>
                    <TextArea type="text" name="description" value={description} onChange={handleValues}/>


                </Form>
            </Wrapper>
            

            
            
        </Layoutadmin>
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