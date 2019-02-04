import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-f4f28.firebaseio.com/'
})

export default instance;