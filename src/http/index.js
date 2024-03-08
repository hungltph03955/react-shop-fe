import axios from "axios";

// commonly use hune confugration set garne
const http = axios.create({
    baseUL: import.meta.env.VITE_API_URL,
    header: {'Accept': 'application/json'}
});

export default http