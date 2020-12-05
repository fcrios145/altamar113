import axios from "axios";

const isLogged = async (activeRoute, req) => {
    if(activeRoute.protectedPage || activeRoute.path === '/login') {
        const { token } = req.session;
        console.log(token);
        console.log(req.session);
        console.log('token');
        if(token === undefined) {
            return false;
        }
        try {
            const data =  await axios.get(`http://localhost:8080/api/auth/logged`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if(data.status !== 200) { //TODO check if the logged return false we need to set the logged global variable as false
                return false;
            }
            return data.data;
        } catch(error) {
            console.log(error);
            return false;
        }
    }
};

export default isLogged;