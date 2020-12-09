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

    const [ categories, setCategories ] = useState([]);
    const [ photo, setPhoto ] = useState();
    const [values, setValues, handleValues] = useForm({name: ""});
    let history = useHistory();

    const [textButtonSaveUpdate, settextButtonSaveUpdate] = useState(
        () =>
        params.platillosId !== 'add' ? "Actualizar" : "Guardar"
    )

    const [showDeleteButton, setshowDeleteButton] = useState(() => params.platillosId !== 'add');

    const handleClickFile = event => {
        inputFileElement.current.click();       
    }

    const handleChangeFile = event => {
        const fileUploaded = event.target.files[0];
        setPhoto(fileUploaded)
        console.log(fileUploaded);
    }

    const onClickGoBack = () => {
        history.push(`/admin/platillos/`);
    }

    const deleteButtonClick = (e) => {
        if (confirm(`Estas seguro que deseas eliminar ${name}`)) {
            axios.delete(`/plates/${params.platillosId}`).then(response => {
                history.push(`/admin/platillos/`)
            })
        }
    }


    const onSubmitForm = (e) => {
        e.preventDefault();
        const { name, description, category } = values;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('photo', photo);
        const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        if(params.platillosId === "add") { //Save
            axios.post(`/plates/`, formData, config)
        } else {
            axios.put(`/plates/${params.platillosId}`, {name, description, category })
        }
    }

    useEffect(() => {
        axios.get(`/categories/`).then(data => setCategories(data.data))
        if(params.platillosId !== 'add') {
            axios.get(`/plates/${params.platillosId}`).then(data => setValues(({...data.data})))
        }

    }, []);

    return(
        <Layoutadmin>
            <Wrapper>
                <ButtonsContainer>
                    <ButtonGreen type="button" onClick={onSubmitForm}>{textButtonSaveUpdate}</ButtonGreen>
                    {
                        showDeleteButton && <ButtonRed onClick={deleteButtonClick} >Eliminar</ButtonRed>
                    }
                    <ButtonBlue onClick={onClickGoBack}>Regresar</ButtonBlue>
                    <ButtonOrange>Inactivo</ButtonOrange>
                </ButtonsContainer>
                <Form >

                    <label htmlFor="name">Nombre</label>
                    <Input type="text" name="name" value={values.name} onChange={handleValues} />

                    <label htmlFor="description">Descripcion</label>
                    <TextArea type="text" name="description" value={values.description} onChange={handleValues} />

                    <label htmlFor="name">Categoria</label>
                    <Select name="category" value={values.category} onChange={handleValues} >
                        <option value=""></option>
                        {categories.map(category => <option key={category.id} value={category.id}>{category.name} </option> )}
                    </Select>
                    
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

