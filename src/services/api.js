import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export default api;

///////////////////////////////////////////////////////////////
// To use this URL you must do:
// api.get('user/nameoftheuser')
