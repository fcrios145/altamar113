import express from 'express'
const router = express.Router();
import axios from 'axios'

/* GET plates listing. */
router.get('/', async function(req, res, next) {
    let data = {};
    const { token } = req.session;
    if(token === 'undefined') {
        return [];
    }

    try {
        // const postForm = req.body;
        data =  await axios.get(`http://localhost:8080/api/plates/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    } catch(error) {
        console.log(error);
    }
    // console.log(data);
    res.send(data.data)
});

/* GET plate by id. */
router.get('/:plateId', async function(req, res, next) {
    let data = {};
    const { token } = req.session;
    if(token === 'undefined') {
        return [];
    }
    //TODO try parse the req param, to int only, to avoid errors
    try {
        // const postForm = req.body;
        data =  await axios.get(`http://localhost:8080/api/plates/${req.params.plateId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    } catch(error) {
        console.log(error);
    }
    // console.log(data);
    res.send(data.data)
});

/* POST save plate */
router.post('/', async function(req, res, next) {
    let data = {};
    const { token } = req.session;
    if(token === 'undefined') {
        return [];
    }
    console.log("-----------------")
    console.log(req.body)
    console.log("-----------------")
    try {
        // const postForm = req.body;
        data =  await axios.post(`http://localhost:8080/api/plates/`, req.body, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    } catch(error) {
        console.log(error);
    }
    // console.log(data);
    res.send(data.data)
});

/* PUT update plate */
router.put('/:plateId', async function(req, res, next) {
    let data = {};
    const { token } = req.session;
    if(token === 'undefined') {
        return [];
    }
    console.log("-----------------")
    console.log(req.body)
    console.log("-----------------")
    try {
        // const postForm = req.body;
        data =  await axios.put(`http://localhost:8080/api/plates/${req.params.plateId}`, req.body, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    } catch(error) {
        console.log(error);
    }
    // console.log(data);
    res.send(data.data)
});

/* PUT update plate */
router.delete('/:plateId', async function(req, res, next) {
    let data = {};
    const { token } = req.session;
    if(token === 'undefined') {
        return [];
    }
    console.log("-----------------")
    console.log(req.body)
    console.log("-----------------")
    try {
        // const postForm = req.body;
        data =  await axios.delete(`http://localhost:8080/api/plates/${req.params.plateId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    } catch(error) {
        console.log(error);
    }
    // console.log(data);
    res.send(data.data)
});

export default router
