import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalContext from "../../Context/globalContext";
import BalanceItem from '../BalanceItem/BalanceItem';
import { getBalance } from '../../Services/api'
import getConfig from '../../Services/getConfig'

export default function Home() {

    const navigate = useNavigate();

    const { username, token, reRender, setReRender } = useContext(GlobalContext)

    const [balance, setBalance] = useState([])

    useEffect(() => {

        const promise = getBalance(getConfig(token))
        promise
            .catch(() => {
                alert('error')
                // ajustar error
            })
            .then(res => {
                setBalance(res.data)
            })

    }, [reRender])

    let sum = 0;
    for (let i = 0; i < balance.length; i++) {
        if (balance[i].type === 'income') {
            sum += Number(balance[i].value)
        }
        if (balance[i].type === 'outcome') {
            sum = sum - Number(balance[i].value)
        }
    }


    return (

        <Wrapper>

            <HomeTitle>
                <p>Olá, {username}</p>
                <ion-icon name="log-out-outline"></ion-icon>
            </HomeTitle>


            <Container >
                {balance.map((value, index) => (
                    <BalanceItem
                        key={index}
                        value={value}
                        type={value.type}
                    />
                ))}

                <Balance sum={sum}>
                    <h1>Saldo</h1>
                    <h2>{sum.toLocaleString('pt-BR')}</h2>
                </Balance>

            </Container>

            <ButtonWrapper>
                <AddButton onClick={() => navigate('/income')}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </AddButton>
                <AddButton onClick={() => navigate('/outcome')}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </AddButton>
            </ButtonWrapper>
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

font-size: 26px;
font-weight: 700;
color: #FFF;

display:flex;
justify-content: space-between;
align-items: center;

ion-icon{
    cursor: pointer;
}

`
const Container = styled.div`
width: 87vw;
height: 67vh;
border-radius:5px;

margin-bottom: 13px;

display: flex;
flex-direction: column;

background-color: #FFF;
color: #868686;

display: flex;

position: relative;


`;

const Balance = styled.div`
position: absolute;
bottom: 10px;
left: 10px;
right: 10px;

display: flex;
justify-content: space-between;

background-color: #FFF;

h1{
    font-size: 20px;
    color:#000;
    font-weight: 900;
}

h2{
    font-size: 20px;
    font-weight: 900;
    color:${props => props.sum >= 0 ? '#03AC00' : '#C70000'};

}
`

const ButtonWrapper = styled.div`
width: 87vw;
height: 17vh;

display: flex;
justify-content: space-between;

`

const AddButton = styled.button`
width: 41vw;
height: 17vh;
border-radius:5px;
background-color: #A328D6;

display:flex;
flex-direction: column;
justify-content: space-between;

font-size: 20px;
font-weight: 900;
color: #fff;

cursor: pointer;


ion-icon{
    width: 35px;
    height: 35px;
    margin-left: 8px;
    margin-top: 8px;

    
}

p{
    width: 50px;
    margin-left: 8px;
    margin-bottom: 8px;
    
}

`;

const MiniWrapper = styled.div`
width: 100%;
height: auto;

display:flex;
justify-content: flex-start;

padding: 10px;

font-size: 16px;
font-weight: 900;
color: #fff;
`;

const Day = styled.div`
width: 50px;
margin-left: 8px;

color:#C6C6C6;

`
const Description = styled.div`
width: 310px;
margin-left: 8px;

color:#000;

`
const Value = styled.div`
width: 50px;
margin-left: 8px;

display: flex;
justify-content: flex-end;

/* color: #03AC00; */
    /* color: #C70000; */
color: ${props => {
        if (props.type === 'income') {
            return '#03AC00'
        }
        if (props.type === 'outcome') {
            return '#C70000'
        }
    }}
`



