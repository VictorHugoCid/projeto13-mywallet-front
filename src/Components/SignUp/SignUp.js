import React from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useContext } from "react";
import GlobalContext from '../../Context/globalContext';
import { signUp } from '../../Services/api'

export default function SingUp() {

    const navigate = useNavigate();
    const { username, setUsername } = useContext(GlobalContext);

    const [password, setPassword] = useState('')
    const [secondPassword, setSecondPassword] = useState('')
    const [email, setEmail] = useState('')
    const [disable, setdisable] = useState(false)
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }
    function verifyPassword() {
        if (password === secondPassword) {
            return true
        }
    }

    function sendForm() {

        if (!verifyPassword()) {
            alert('a senha não confere')
            return;
        }

        const body = {
            username,
            email,
            password,
        }

        const promise = signUp(body)
            .catch(err => {
                alert(err.message);
            })
            .then(res => {
                Navigate('/')
            }, 1000);

    }


    return (

        <Wrapper>
            <HomeTitle>My Wallet</HomeTitle>
            <InputLogin
                type='name'
                placeholder="Nome"
                onChange={handleForm}
                value={username}
                disabled={disable}
            />

            <InputLogin
                type='email'
                placeholder="E-mail"
                onChange={handleForm}
                value={email}
                disabled={disable}
            />

            <InputLogin
                type='password'
                placeholder="Senha"
                onChange={handleForm}
                value={password}
                disabled={disable}
            />

            <InputLogin
                type='password'
                placeholder="Confirme a senha"
                onChange={handleForm}
                value={secondPassword}
                disabled={disable}
            />

            <ConfirmButton onClick={sendForm}>Cadastrar</ConfirmButton>
            <MiniWrapper>
                <Link to='/'>Já tem uma conta? Entre agora!</Link>
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
font-size: 26px;

color: #000;

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