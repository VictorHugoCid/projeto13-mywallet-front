import React from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useContext } from "react";
import GlobalContext from '../../Context/globalContext';
import { logIn } from "../../Services/api";

export default function LogIn() {

    const { setUsername } = useContext(GlobalContext);
    const navigate = useNavigate();

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [disable, setDisable] = useState(false)

    function sendForm() {
        setDisable(true);

        const body = {
            email,
            password,
        }

        // const promise = logIn(body)
        //     .catch((err) => {
        //         alert(err.message);
        //     })
        //     .then((res) => {
        //         setUsername(res.data.username)

        //         setTimeout(() =>{
        //             navigate('/home');
        //         }, 1000);
        //     })

        setUsername('rodilindo')
        navigate('home')

    }

    return (

        <Wrapper>
            <HomeTitle>My Wallet</HomeTitle>
            <InputLogin
                type='email'
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={disable}
            />
            <InputLogin
                type='password'
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={disable}
            />

            <ConfirmButton onClick={sendForm}>Entrar</ConfirmButton>
            <MiniWrapper>
                <Link to='/signup'>Primeira vez? Cadastre-se</Link>
            </MiniWrapper>
        </Wrapper>

    );

}


const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: #8C11BE;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const HomeTitle = styled.div`
width: 87vw;
height: 8vh;

font-size: 32px;
font-family: 'Saira Stencil One', cursive;
color: #FFF;

display:flex;
justify-content: center;

`

const InputLogin = styled.input`
width: 87vw;
height: 8vh;
border-radius:5px;

margin-bottom: 13px;

color: #000;
font-size: 26px;

::placeholder{
    margin-left: 10px;
}

`;


const ConfirmButton = styled.button`
width: 87vw;
height: 7vh;
border-radius:5px;
background-color: #A328D6;

display:flex;
justify-content: center;
align-items: center;

font-size: 20px;
color: #fff;

cursor: pointer;


`;

const MiniWrapper = styled.div`
width: 87vw;
height: 7vh;

display:flex;
justify-content: center;
align-items: center;

font-size: 15px;
font-weight: 900;
color: #fff;
text-decoration-line: underline;

cursor: pointer;


`;