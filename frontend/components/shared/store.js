import { createStore } from 'redux';

export const initialState = {
    logged: false,
    imageInHeader: true,
    showCategoryNavbar: false,
    showPlateNavbar: false
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
        default:
            return state;
    }
}

