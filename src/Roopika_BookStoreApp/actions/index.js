import { BASE_URL, TOKEN } from "../utils/url.js";
import axios from 'axios';

function getBooksData() {
    return{
        type: 'GET_BOOK',
        payload:axios.get(`${BASE_URL}/Books?token=${TOKEN}`)
        .then(response => {
            return response.data.d;
        })
    }
}

export {
    getBooksData
};