export function fetchBreeds(){
    const KEY = 'live_rEv9nGLilDCvc0lglvJrH2rw3bUAK6aaFuCccjTCugKD7vuBlRJW6SgB1L7JOtF8';
const END_POINT = '/breeds';
const BASE_URL = 'https://api.thecatapi.com/v1'
    return fetch(`${BASE_URL}${END_POINT}?api_key=${KEY}`)
    .then(response => {
        return response.json()
    })
}