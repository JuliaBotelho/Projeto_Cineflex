import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Seats() {
    const [movie, setMovie] = useState({})
    const [error, setError] = useState(false)
    const [day, setDay] = useState({})
    const [hour , setHour] = useState({})
    const [seats, setSeats] = useState([])
    const { sectionId } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sectionId}/seats`)

        promise.then((response) => {
            setHour(response.data)
            setMovie(response.data.movie)
            setDay(response.data.day)
            setSeats(response.data.seats)
        })

        promise.catch((error) => {
            setError(true)
        })
    }, [])

    return (
        <>
            <SeatChoice>
                <h1>Selecione o(s) assento(s)</h1>
            </SeatChoice>
            <SeatDisplay>
                <SeatButtons>
                {seats.map((seat) => <button>{seat.name}</button>)}
                </SeatButtons>
            </SeatDisplay>
            <SeatSubtittle>
                <SeatGreen>
                    <div></div>
                    <p>Selecionado</p>
                </SeatGreen>
                <SeatGray>
                    <div></div>
                    <p>Disponível</p>
                </SeatGray>
                <SeatYellow>
                    <div></div>
                    <p>Indisponível</p>
                </SeatYellow>
            </SeatSubtittle>
            <SeatInputs>
                <div>
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..." />
                </div>
                <div>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..." />
                </div>
            </SeatInputs>
            <ReserveButton>
                <button>Reservar assento(s)</button>
            </ReserveButton>
            <SeatsFooter>
                <img src={movie.posterURL} />
                <div>
                    <h2>{movie.title}</h2>
                    <h2>{day.date} - {hour.name}</h2>
                </div>
            </SeatsFooter>
        </>
    )
}

const SeatChoice = styled.div`
    padding-top: 65px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    h1{
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 22px;
        margin-top: 30px;
        margin-bottom:25px;
    }
`

const SeatDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 22px;
`

const SeatButtons = styled.div`
    width: 335px;
    height: 210px;
    button{
        width: 24px;
        height: 24px;
        background-color: #c3cfd9;
        border-radius: 13px;
        border: 1px solid #808f9d;
        font-family: 'Roboto', sans-serif;
        font-size: 10px;
        margin-bottom: 10px;
        margin-right: 9px;
    }
`

const SeatSubtittle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 42px;
`

const SeatGreen = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        width: 24px;
        height: 24px;
        background-color: #1aae9e;
        border-radius: 13px;
        border: 1px solid #0e7d71;
    }
    p{
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 12px;
        margin-top: 9px;
    }
`

const SeatGray = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        width: 24px;
        height: 24px;
        background-color: #c3cfd9;
        border-radius: 13px;
        border: 1px solid #808f9d;
    }
    p{
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 12px;
        margin-top: 9px;
    }
`

const SeatYellow = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        width: 24px;
        height: 24px;
        background-color: #fbe192;
        border-radius: 13px;
        border: 1px solid #f7c52b;
    }
    p{
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 12px;
        margin-top: 9px;
    }
`

const SeatInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #293845;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 8px;
    }
    input{
        width: 325px;
        height: 50px;
        border-radius: 4px;
        background-color: #FFFFFF;
        border: 1px solid #d5d5d5;
        font-style: italic;
        font-size: 16px;
        color: #afafaf;
    }
`

const ReserveButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 130px;
    button{
        width: 225px;
        height: 43px;
        font-size: 16px;
        background-color: #e8833a;
        color: #ffffff;
        border-radius: 4px;
        border: 3px solid #e8833a;
        &:hover{
            border-color:#adb7c7
        }
    }
`

const SeatsFooter = styled.div`
    width: 100%;
    height: 118px;
    background-color: #DFE6ED;
    border-top: 1.5px solid #9eadba;
    position: fixed;
    display: flex;
    align-items: center;
    left: 0px;
    bottom: 0px;
    z-index: 2;
    img{
        width:49px;
        height:73px;
        border-radius: 3px;
        border-width: 9px;
        border-style: solid;
        border-color: #FFFFFF;
        margin-left: 25px;
        margin-right:15px;
        box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.1);
    }
    h2{
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 21px; 
        margin-bottom: 8px;
    }
`


