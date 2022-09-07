// import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../Styles/globalStyle';
import { useState } from 'react';
import globalContext from '../Context/globalContext';

import LogIn from './LogIn/LogIn';
import SingUp from './SignUp/SignUp';
import Home from './Home/Home.js';
import Income from './Income/Income.js';
import Outcome from './Outcome/Outcome.js';



export default function App() {

    const [username, setUsername] = useState('')
    const [day, setDay] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('')
    const[array, setArray] = useState([
        {
            day: '30/11',
            description: 'almoço mãe',
            type: 'outcome',
            value: "40.15",

        }, {
            day: '05/12',
            description: 'salário',
            type: 'income',
            value: '4000',

        }, {
            day: '06/12',
            description: 'provi',
            type: 'outcome',
            value: '800',

        }
    ])

    return (
        <>
            <GlobalStyle />
            <globalContext.Provider value = {{username, setUsername, setDay, setDescription, setType, setValue, array, setArray}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LogIn />} />
                        <Route path="/signup" element={<SingUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/income" element={<Income />} />
                        <Route path="/outcome" element={<Outcome />} />
                    </Routes>
                </BrowserRouter>
            </globalContext.Provider>
        </>
    );
}