const dotenv = require('dotenv');
/***
 * Represent error send by API
 * */
export class ApiErrors{
    constructor(errors) {
        this.errors = errors;
    }
}
/**
 * @param {string} endpoint
 * @param {object} options
 * **/
export async function apiFetch(endpoint, options = {}) {
    const response = await fetch('https://api.github.com' + endpoint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': "ca301660890e908588c3fc7844c2cc11f82bba83"
        },
        ...options
    })
    if (response.status === 204) {
        return null;
    }
    const responseData = await response.json()
    if (response.ok) {
        return responseData;
    } else {
        if (responseData.message) {
            throw new ApiErrors(responseData.message)
        }
    }
}