import axios from "axios";

//  vai mudar pro localhost
const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";



// Sign-Up--------------------------------
function signUp(body) {
    return axios.post(`${URL}/signUp`, body)
}

function logIn(body) {
    return axios.post(`${URL}/signIn`, body)
}

// Income--------------------------------
function createIncome(body, getConfig) {
    return axios.post(`${URL}/balance`, body, getConfig)
}

// Outcome--------------------------------
function createOutcome(body, getConfig) {
    return axios.post(`${URL}/balance`, body, getConfig)
}

// Home--------------------------------

function getBalance(getConfig) {
    return axios.get(`${URL}/balance`, getConfig)
}

// Delete --------------------------------

function deleteRegister(id, getConfig) {
    return axios.delete(`${URL}/habits/${id}`,getConfig)
}

// Update-------------------------------


export {
    signUp,
    logIn,
    createIncome,
    createOutcome,
    getBalance,
    deleteRegister,
}

