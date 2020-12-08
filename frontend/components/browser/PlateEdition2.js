import React, { useEffect, useState, useRef} from "react";
import {connect} from "react-redux";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom"
import Layoutadmin from "./LayoutAdmin";
import {
    Form, Wrapper, Input, Select, InputFileButton,
    TextArea, ButtonsContainer, ButtonGreen,
    ButtonRed, ButtonBlue, ButtonOrange} from "../styled/StyledComponents";

const PlateEdition2 = ({plateSelected, match: {params}}) => {
    const inputFileElement = useRef(null);
    const [values, setValues, handleValues] = useForm({});
    let history = useHistory();

    const handleClickFile = event => {
        inputFileElement.current.click();       
    }

    const handleChangeFile = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded);
    }

    return(
        <Layoutadmin>
            <Wrapper>
                <ButtonsContainer>
                    <ButtonGreen  type="button">Actualizar</ButtonGreen>
                    <ButtonRed >Eliminar</ButtonRed>
                    <ButtonBlue >Regresar</ButtonBlue>
                    <ButtonOrange>Inactivo</ButtonOrange>
                </ButtonsContainer>
                <Form >

                    <label htmlFor="name">Nombre</label>
                    <Input type="text" name="name" value={values.name} onChange={handleValues} />

                    <label htmlFor="description">Descripcion</label>
                    <TextArea type="text" name="description" value={values.description} onChange={handleValues} />

                    <label htmlFor="name">Categoria</label>
                    <Select name="category" defaultValue={""} value={values.category} onChange={handleValues} >
                        <option value="" ></option>
                        <option value="1">uno</option>
                    </Select>

                    <label htmlFor="description">Descripcion</label>
                    <TextArea type="text" name="description" />
                    
                    <label htmlFor="image">Imagen</label>
                    <InputFileButton onClick={handleClickFile} type="button">Subir Imagen</InputFileButton>
                    <input onChange={handleChangeFile} name="photo" style={{display: 'none'}} ref={inputFileElement} type="file"/>

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
)(PlateEdition2);

