import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login');
}

export { handleLoginApi }