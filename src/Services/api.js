import axios from "axios";

const URL = "http://localhost:5000";

// Sign-Up--------------------------------
function signUp(body) {
    return axios.post(`${URL}/signup`, body)
}
// LogIn
function logIn(body) {
    return axios.post(`${URL}/signin`, body)
}
// createRegister
function createRegister(body, getConfig) {
    return axios.post(`${URL}/createRegister`, body, getConfig)
}
// Home--------------------------------
function getBalance(getConfig) {
    return axios.get(`${URL}/home`, getConfig)
}
// Update-------------------------------
function updateRegister(body,id, getConfig) {
    return axios.put(`${URL}/updateRegister/${id}`,body,  getConfig)
}
// Delete --------------------------------
function deleteRegister(id, getConfig) {
    console.log('passando')
    return axios.delete(`${URL}/deleteRegister/${id}`,getConfig)
}

export {
    signUp,
    logIn,
    createRegister,
    getBalance,
    deleteRegister,
    updateRegister
}

