import { createStore } from 'redux';

export const initialState = {
    logged: false
};



export function storeReducer(state = initialState, action) {
    switch (action.type) {
        // case 'INCREMENT':
        //     return state + 1;
        // case 'DECREMENT':
        //     return state - 1;
        case 'LOGGED_FALSE':
            return {...state, logged: false};
        case 'LOGGED_TRUE':
            return {...state, logged: true};
        default:
            return state;
    }
}

