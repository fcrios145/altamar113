import React, {Fragment, useEffect, useState, useRef} from "react";
import {connect} from "react-redux";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import { useHistory } from "react-router-dom"
import Layoutadmin from "./LayoutAdmin";
import {
    Form, Wrapper, Input, Select, InputFileButton,
    TextArea, ButtonsContainer, ButtonGreen,
    ButtonRed, ButtonBlue, ButtonOrange} from "../styled/StyledComponents";

const PlateEdition = ({plateSelected, match: {params}}) => {
    const inputFileElement = useRef(null);
    let history = useHistory();
    const [ categories, setCategories ] = useState([]);
    const [{name, description, category: {categoryId}}, setValues, handleValues] = useForm({
            name: "",
            description: "",
            category: {
                categoryId: 1
            }
        });
    const [showDeleteButton, setshowDeleteButton] = useState(() => params.platillosId !== 'add');
    const [textButtonSaveUpdate, settextButtonSaveUpdate] = useState(
        () =>
        params.platillosId !== 'add' ? "Actualizar" : "Guardar"
    )

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(params);
        // plateSelectedClone.categoryId = 1;
        if(params.platillosId === "add") { //Save
            axios.post(`/plates/`, {name, description, categoryId})
        } else {
            axios.put(`/plates/${params.platillosId}`, {name, description, categoryId: 1})
        }
    }
    const getPlateFromServer = () => {
        return axios.get(`/plates/${params.platillosId}`)
    }
    useEffect(() => {
        if(Object.keys(plateSelected).length === 0 && params.platillosId !== "add") { //if object is empty and is not add
            getPlateFromServer().then(({data}) => {
                setValues(({
                    ...data
                }));
            }).catch(error => {
                console.log(error)
            })
        } else {
            var clonePlate = JSON.parse(JSON.stringify(plateSelected));
            setValues(({
                ...clonePlate
            }));
        }
    }, [plateSelected])

    useEffect(() => {
        axios.get('/categories').then(data => {
            setCategories(data.data);
        })
    }, [])

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

    const handleClickFile = event => {
        inputFileElement.current.click();       
    }

    const handleChangeFile = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded);
        // props.handleFile(fileUploaded)
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

                    <label htmlFor="name">Categoria</label>
                    <Select name="category[categoryId]" id="category" value={categoryId} onChange={handleValues} >
                        {categories.map(category => <option key={category.categoryId} value={category.categoryId}>{category.name} </option> )}
                    </Select>

                    <label htmlFor="description">Descripcion</label>
                    <TextArea type="text" name="description" value={description} onChange={handleValues}/>
                    
                    <label htmlFor="image">Imagen</label>
                    <InputFileButton onClick={handleClickFile}>Subir Imagen</InputFileButton>
                    <input onChange={handleChangeFile} style={{display: 'none'}} ref={inputFileElement} type="file"/>

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