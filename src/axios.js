import axios from 'axios';

const Axios =() =>{
    const instance=axios.create({
        baseURL: 'http://localhost:4000/',
    });
    instance.defaults.headers.common['auth'] = localStorage.getItem('token');
    instance.defaults.headers.common['user'] = localStorage.getItem('email');
    return instance;
}

export default Axios;