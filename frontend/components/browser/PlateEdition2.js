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

import { useForm as useFormHook } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"




const PlateEdition2 = ({plateSelected, match: {params}}) => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        category: yup.string().required(),
        description: yup.string().required(),
        photo: yup.mixed().test("required", "Please upload a file", (value) => {
            if(params.platillosId !== 'add') {
                return true; //attachment is not required when the view
            }
            if (!value.length) {
                return false // attachment is required
            }
            return true
        }),
        //name: yup.number().positive().integer().required()
    });

    const { register, handleSubmit, errors, setValue } = useFormHook({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        const { name, description, category } = data;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('category', category);
        if(data.photo !== undefined) {
            formData.append('photo', data.photo[0]);
        }
        const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        if(params.platillosId === "add") { //Save
            axios.post(`/plates/`, formData, config).then(res => {
                if(res.status === 201) {
                    alert("guardado")
                    onClickGoBack();
                }
            })
        } else {
            axios.put(`/plates/${params.platillosId}`, formData, config).then(res => {
                if(res.status === 200) {
                    alert("guardado")
                    onClickGoBack();
                }
            }).catch(error => alert('Hubo un error al intentar guardar'))
        }

    };

    let inputFileElement = null
    const buttonSaveElement = useRef(null);


    const [ categories, setCategories ] = useState([]);
    const [ imageSource, setImageSource ] = useState([]);
    const [ photo, setPhoto ] = useState();
    const [values, setValues, handleValues] = useForm({name: ""});
    let history = useHistory();

    const [textButtonSaveUpdate, settextButtonSaveUpdate] = useState(
        () =>
        params.platillosId !== 'add' ? "Actualizar" : "Guardar"
    )

    const [showDeleteButton, setshowDeleteButton] = useState(() => params.platillosId !== 'add');

    const handleClickFile = event => {
        inputFileElement.click();       
    }

    const handleChangeFile = event => {
        console.log('hola');
    }

    const onClickGoBack = () => {
        history.push(`/admin/platillos/`);
    }

    const handleClickSaveButton = () => {
        buttonSaveElement.current.click();
    }

    const deleteButtonClick = (e) => {
        if (confirm(`Estas seguro que deseas eliminar ${name}`)) {
            axios.delete(`/plates/${params.platillosId}`).then(response => {
                history.push(`/admin/platillos/`)
            })
        }
    }

    useEffect(() => {
        axios.get(`/categories/`).then(data => setCategories(data.data))
        if(params.platillosId !== 'add') {
            axios.get(`/plates/${params.platillosId}`).then(data => {
                setValue("name", data.data.name);
                setValue("description", data.data.description);
                setValue("category", data.data.category);
                setImageSource(data.data.photo)
                //TODO set photo value
            })
        }

    }, []);

    return(
        <Layoutadmin>
            <Wrapper>
                <ButtonsContainer>
                    <ButtonGreen type="button" onClick={handleClickSaveButton}>{textButtonSaveUpdate}</ButtonGreen>
                    {
                        showDeleteButton && <ButtonRed onClick={deleteButtonClick} >Eliminar</ButtonRed>
                    }
                    <ButtonBlue onClick={onClickGoBack}>Regresar</ButtonBlue>
                    <ButtonOrange>Inactivo</ButtonOrange>
                </ButtonsContainer>
                <Form onSubmit={handleSubmit(onSubmit)} >

                    <label htmlFor="name">Nombre</label>
                    <Input type="text" name="name" ref={register}/>
                    <p>{errors.name?.message}</p>

                    <label htmlFor="description">Descripcion</label>
                    <TextArea type="text" name="description" ref={register}/>
                    <p>{errors.description?.message}</p>

                    <label htmlFor="name">Categoria</label>
                    <Select name="category" ref={register}>
                        <option value=""></option>
                        {categories.map(category => <option key={category.id} value={category.id}>{category.name} </option> )}
                    </Select>
                    <p>{errors.category?.message}</p>
                    
                    <label htmlFor="image">Imagen</label>
                    <InputFileButton onClick={handleClickFile} type="button">Subir Imagen</InputFileButton>
                    <input ref={(ref) => {
                        inputFileElement = ref;
                        register(ref)
                    }}  name="photo" style={{display: 'none'}} onChange={handleChangeFile} type="file" accept="image/x-png,image/gif,image/jpeg" />
                    <p>{errors.photo?.message}</p>
                    <button style={{display: 'none'}} ref={buttonSaveElement} type="submit">Enviar</button>
                </Form>
                <img src={imageSource}/>
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

