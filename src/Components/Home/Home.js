import React from "react";
import styled from "styled-components";

export default function Home() {

    return (

        <Wrapper>

            <HomeTitle>
                <p>Olá, Fulano</p>
                <ion-icon name="log-out-outline"></ion-icon>
            </HomeTitle>


            <Container >
                <MiniWrapper>
                    <Time>30/11</Time>
                    <Description>Almoço mãe</Description>
                    <Value>39000.90</Value>
                </MiniWrapper>

                <MiniWrapper>
                    <Time>30/11</Time>
                    <Description>Almoço mãe</Description>
                    <Value>3900.90</Value>
                </MiniWrapper>

                <MiniWrapper>
                    <Time>30/11</Time>
                    <Description>Almoço mãe</Description>
                    <Value>390.90</Value>
                </MiniWrapper>

                <MiniWrapper>
                    <Time>30/11</Time>
                    <Description>Almoço mãe</Description>
                    <Value>390.90</Value>
                </MiniWrapper>
            </Container>

            <ButtonWrapper>
                <AddButton>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </AddButton>
                <AddButton>
                    <ion-icon name="add-circle-outline"></ion-icon>
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


`;

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

const Time = styled.div`
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

color: #03AC00;
    /* color: #C70000; */
`



