import { useContext } from "react";
import styled from "styled-components";
import { deleteRegister } from '../../Services/api'
import getConfig from '../../Services/getConfig'
import globalContext from '../../Context/globalContext'
import { useNavigate } from "react-router-dom";

export default function BalanceItem({ value }) {

    const { reRender, setReRender } = useContext(globalContext)
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    function deleteItem() {
        if (window.confirm('tem certeza que deseja deletar o registro?')) {

            const promise = deleteRegister(value._id, getConfig(token))
            promise
                .then(res => {
                    setReRender(!reRender)

                })
                .catch((error) => {
                    console.log(error.message)
                })

        }

    }

    return (
        <MiniWrapper >
            <Day>{value.day}</Day>
            <Description onClick={() => {
                navigate(`/updateRegister/${value.type}/${value._id}`)
            }}>
                {value.description}
            </Description>
            <Value type={value.type} >
                {Number(value.value).toFixed(2).toLocaleString('pt-BR')}
            </Value>
            <ion-icon
                onClick={deleteItem}
                name="trash-outline" />
        </MiniWrapper>
    )
}


const MiniWrapper = styled.div`
width: 100%;
height: auto;

display:flex;
justify-content: flex-start;

padding: 10px;

font-size: 16px;
font-weight: 900;
color: #fff;

ion-icon{
    color: #000;
    min-width: 20px;
    min-height: 10px;

    margin-left: 5px;
    margin-right: 5px;

    cursor: pointer;
}

ion-icon:hover{

    transform: scale(1.3);

}


`;

const Day = styled.div`
width: 50px;
margin-left: 8px;
margin-right: 8px;

color:#C6C6C6;

`
const Description = styled.div`
width: 100%;
margin-left: 8px;

color:#000;

cursor: pointer;

:hover{
    opacity: 0.5;
}
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