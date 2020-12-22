import { createStore } from 'redux';

export const initialState = {
    logged: false,
    imageInHeader: true,
    showCategoryNavbar: false,
    showPlateNavbar: false,
    plateSelected: {},
    platesServer: [],
    categoriesServer: [],
    categories: [
        {
            text: 'Ceviches',
            name: 'ceviches',
            plates: [
                {
                    name: "Tony espacial",
                    url: "tony-espacial"
                },
                {
                    name: "Mango beach",
                    url: "manco-beach"
                }
            ]
        },
        {
            text: 'Aguachiles',
            name: 'aguachiles',
            plates: [
                {
                    name: "Aguachile 1",
                    url: "agua1"
                },
                {
                    name: "Aguachile 2",
                    url: "agua-2"
                }
            ]
        },
        {
            text: 'Sushis',
            name: 'sushis',
            plates:[
                {
                    name: "Sushi 2",
                    url: "sushi-2"
                }
            ]
        }
    ]
};



export function storeReducer(state = initialState, action) {
    switch (action.type) {
        case 'IMAGE_IN_HEADER':
            return {...state, imageInHeader: action.payload}
        case 'SHOW_CATEGORY_NAVBAR':
            return {...state, showCategoryNavbar: action.payload}
        case 'SHOW_PLATE_NAVBAR':
            return {...state, showPlateNavbar: action.payload}
        case 'LOGGED_FALSE':
            return {...state, logged: false};
        case 'LOGGED_TRUE':
            return {...state, logged: true};
        case "SET_PLATE_SELECTED":
            return {...state, plateSelected: action.payload}
        default:
            return state;
    }
}

