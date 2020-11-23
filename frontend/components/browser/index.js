import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { storeReducer } from '../shared/store'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = window.__INITIAL_DATA_STORE__;

const store = createStore(storeReducer, initialState, composeWithDevTools())

hydrate(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);