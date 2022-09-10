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

// Income--------------------------------
function createIncome(body, getConfig) {
    return axios.post(`${URL}/income`, body, getConfig)
}

// Outcome--------------------------------
function createOutcome(body, getConfig) {
    return axios.post(`${URL}/outcome`, body, getConfig)
}

// Home--------------------------------
function getBalance(getConfig) {
    return axios.get(`${URL}/home`, getConfig)
}

// Delete --------------------------------
function deleteRegister(id, getConfig) {
    return axios.delete(`${URL}/delete/${id}`,getConfig)
}

// Update-------------------------------
function updateIncome(body,id, getConfig) {
    return axios.put(`${URL}/income-update/${id}`,body,  getConfig)
}

function updateOutcome(body,id, getConfig) {
    return axios.put(`${URL}/outcome-update/${id}`,body,  getConfig)
}

export {
    signUp,
    logIn,
    createIncome,
    createOutcome,
    getBalance,
    deleteRegister,
    updateIncome,
    updateOutcome
}

