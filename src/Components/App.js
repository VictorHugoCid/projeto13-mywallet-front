import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../Styles/globalStyle';
import { useState } from 'react';
import GlobalContext from '../Context/globalContext';

import LogIn from './LogIn/LogIn';
import SingUp from './SignUp/SignUp';
import Home from './Home/Home.js';
import Income from './Income/Income.js';
import Outcome from './Outcome/Outcome.js';
import Update_Income from './Update_Income/Update_Income.js';
import Update_Outcome from './Update_Outcome/Update_Outcome.js';

export default function App() {
    // const token = 'd1474bda-6e5e-40df-8706-e4e726ac79fe'
    const[token, setToken] = useState('');
    const[reRender, setReRender] = useState(true);

    const [username, setUsername] = useState('')
    const [day, setDay] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState('')

    return (
        <>
            <GlobalStyle />
            <GlobalContext.Provider value = {{username, setUsername, setDay, setDescription, setType, setValue, token, setToken, reRender, setReRender}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LogIn />} />
                        <Route path="/signup" element={<SingUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/income" element={<Income />} />
                        <Route path="/outcome" element={<Outcome />} />
                        <Route path="/update-income/:id" element={<Update_Income />} />
                        <Route path="/Update-Outcome/:id" element={<Update_Outcome />} />
                    </Routes>
                </BrowserRouter>
            </GlobalContext.Provider>
        </>
    );
}