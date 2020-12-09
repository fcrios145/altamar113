import express from 'express'
import axios from 'axios'
const router = express.Router();
import multer from 'multer'
import FormData from 'form-data'
import fs from 'fs';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({storage: storage})

router.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.file)
    console.log(req.body)
    res.send(req.file)
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

/* GET plates listing. */
router.get('/', async function(req, res, next) {
    let data = {};
    const { token } = req.session;
    if(token === 'undefined') {
        return [];
    }

    try {
        // const postForm = req.body;
        data =  await axios.get(`http://localhost:8000/api/plates/`, {
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
        data =  await axios.get(`http://localhost:8000/api/plates/${req.params.plateId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    } catch(error) {
        console.log(error);
    }
    res.send(data.data)
});

/* POST save plate */
router.post('/', upload.single('photo'), async function(req, res, next) {
    let data = {};
    const { token } = req.session;
    if(token === 'undefined') {
        return [];
    }
    console.log("-----------------")
    console.log(req.file)
    console.log("-----------------")
    const formData = new FormData();
    const { name, description, category } = req.body;
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);

    console.log(formData)
    try {
        // const postForm = req.body;
        data =  await axios.post(`http://localhost:8000/api/plates/`, req.body, {
            headers: {
                "Authorization": `Bearer ${token}`,
                'content-type': 'multipart/form-data'
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
        data =  await axios.put(`http://localhost:8000/api/plates/${req.params.plateId}/`, req.body, {
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
        data =  await axios.delete(`http://localhost:8000/api/plates/${req.params.plateId}`, {
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
