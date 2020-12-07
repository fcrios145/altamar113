import axios from "axios";

const isLogged = async (activeRoute, req) => {
    if(activeRoute.protectedPage || activeRoute.path === '/login') {
        const { token, refresh } = req.session;
        console.log(token);
        console.log(req.session);
        console.log('token');
        if(token === undefined) {
            return false;
        }
        try {
            const bodyData = { "refresh": refresh };
            const data =  await axios.post(`http://localhost:8000/api/token/refresh/`, bodyData, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }, );
            if(data.status !== 200) { //TODO check if the logged return false we need to set the logged global variable as false
                return false;
            }
            req.session.token = data.data.access;
            return data.data;
        } catch(error) {
            console.log(error);
            return false;
        }
    }
};

export default isLogged;
