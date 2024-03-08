import axios from "axios";
import { fromStorage } from "../lib/functions";

// commonly use hune confugration set garne
const headers = { 'Accept': 'application/json' };
let token = fromStorage('admin_token')

if (token) {
    headers = {
        ...headers,
        'Authorize': `Bearer $(token)`
    }
}

const cmsHttp = axios.create({
    baseUL: import.meta.env.VITE_API_URL,
    headers,
});

export default cmsHttp