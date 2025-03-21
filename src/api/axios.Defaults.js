import axios from "axios";

axios.defaults.baseURL = 'https://dj-rest-framework-api-68cf3c77d2b0.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;