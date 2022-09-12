import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../Styles/globalStyle';
import { useState } from 'react';
import GlobalContext from '../Context/globalContext';

import LogIn from './LogIn/LogIn';
import SingUp from './SignUp/SignUp';
import Home from './Home/Home.js';
import Income from './Income/Income.js';
import Outcome from './Outcome/Outcome.js';
import UpdateRegister from './Update/UpdateRegister.js';

export default function App() {
    const[reRender, setReRender] = useState(true);

    const [value, setValue] = useState('')

    return (
        <>
            <GlobalStyle />
            <GlobalContext.Provider value = {{ setValue, reRender, setReRender}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LogIn />} />
                        <Route path="/signup" element={<SingUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/income" element={<Income />} />
                        <Route path="/outcome" element={<Outcome />} />
                        <Route path="/updateRegister/:type/:id" element={<UpdateRegister/>} />
                    </Routes>
                </BrowserRouter>
            </GlobalContext.Provider>
        </>
    );
}