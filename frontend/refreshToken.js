import axios from 'axios';

const refreshToken = async (session) => {
  const { refresh } = session;
  if(refresh === undefined) {
      return false;
  }
  try {
      const bodyData = { "refresh": refresh };
      const data =  await axios.post(`http://localhost:8000/api/token/refresh/`, bodyData );
      if(data.status !== 200) { //TODO check if the logged return false we need to set the logged global variable as false
          return false;
      }
      session.token = data.data.access;
      return true;
  } catch(error) {
      console.log(error);
      return false;
  }
}

export default refreshToken;
