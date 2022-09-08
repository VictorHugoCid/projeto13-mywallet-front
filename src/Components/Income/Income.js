import styled from "styled-components";
import GlobalContext from "../../Context/globalContext";
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function Income() {
    
    const navigate = useNavigate();
    const { array, setArray } = useContext(GlobalContext);

    const [form, setForm] = useState({
        value:'',
        description:'',
        day: dayjs(new Date()).format('DD/MM'),
        type: 'income',
    });

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })

    }

    function sendForm(){
        setArray([...array,{
            day :dayjs(new Date()).format('DD/MM'),
            value: Number(form.value),
            description: form.description,
            type: 'income',
        }])

        navigate('/home')
    }

    return (

        <Wrapper>
            <HomeTitle>Nova entrada</HomeTitle>
            <InputValue 
            type='number' 
            name='value'
            placeholder="Valor"
            onChange={handleForm}
            value={form.value}
            />
            <InputDescription 
            type='text' 
            name='description'
            placeholder="Descrição"
            onChange={handleForm}
            value={form.description}
            />
            <ConfirmButton onClick={sendForm}>
                Salvar entrada
            </ConfirmButton>
        </Wrapper>


    );

}


const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: #8C11BE;
padding-top: 20px;

display: flex;
flex-direction: column;
align-items: center;
`;

const HomeTitle = styled.div`
width: 87vw;
height: 5vh;

font-size: 32px;
font-weight: 700;
color: #FFF;

display:flex;
justify-content: flex-start;

`

const InputValue = styled.input`
width: 87vw;
height: 8vh;
border-radius:5px;

margin-bottom: 13px;
font-size: 26px;

color: #000;

::placeholder{
margin-left: 10px;

}

-moz-appearance: textfield;

`;

const InputDescription = styled.input`
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

