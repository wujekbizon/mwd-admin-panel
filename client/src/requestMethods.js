import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/api/';

const TOKEN = JSON.parse(
  JSON.parse(localStorage.getItem('persist:root'))?.user || '{}'
)?.currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: 'https://adminpanelmwd.herokuapp.com/api/',
});

export const userRequest = axios.create({
  baseURL: 'https://adminpanelmwd.herokuapp.com/api/',
  headers: { token: `Bearer ${TOKEN}` },
});
