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
        data =  await axios.get(`http://localhost:8080/api/plates`, {
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
