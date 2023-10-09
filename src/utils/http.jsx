import axios from "axios";

//pondasi axios
const http = axios.create({
    baseURL : process.env.REACT_APP_SERVER,
    timeout : 30000,
    headers : {
         accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_KEY}`
    } 
})

export {http}