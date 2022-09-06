import React from "react";
import styled from "styled-components";

export default function LogIn(){



    return(
        
        <Wrapper>
            <HomeTitle>My Wallet</HomeTitle>
            <InputLogin placeholder="E-mail"></InputLogin>
            <InputLogin placeholder="Senha"></InputLogin>
            <ConfirmButton>Entrar</ConfirmButton>
            <MiniWrapper >Primeira vez? Cadastre-se</MiniWrapper>
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