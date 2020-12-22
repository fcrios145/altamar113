import React from 'react';
import axios from 'axios';
import { ADDRESS } from '../../config';

const fetchMenuData = () => {
    return axios.get(`${ADDRESS}/api/plates/`)
        .then((data) => data.data)
        .then((plates) => {
          return axios.get(`${ADDRESS}/api/categories/`).then(data => ({"platesServer": plates, "categoriesServer": data.data}))
        })
        .then((all) => all)
        .catch((error) => {
          console.warn(error)
          return null
        });
}

export default fetchMenuData;

