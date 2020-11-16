import express from 'express'
const router = express.Router();
import axios from 'axios'

/* GET users listing. */
router.post('/login', async function(req, res, next) {

    let data = {};
    try {
        // const postForm = req.body;
        const {username, password} = req.body
        console.log(username, password);
        data = await axios.post(`http://localhost:8080/api/auth/login`, {
            "userName": username,
            "password": password
        });
        //SET Session value
        const sess = req.session;
        sess.token = data.data.token;
        sess.username = data.data.username
    } catch(error) {
        console.log(error);
    }
    // console.log(data);
    res.send(data.data)
});

router.get('/logged', async function(req, res, next) {
    let data = {};
    const { token } = req.session;
    console.log(req.session.token);
    console.log(token)


    if(token === 'undefined') {
        return false;
    }

    try {
        // const postForm = req.body;
        data =  await axios.get(`http://localhost:8080/api/auth/logged`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    } catch(error) {
        console.log(error);
    }
    console.log(data);
    res.send(data.data)
});

export default router
