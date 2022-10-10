import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Sections() {
    const [movie, setMovie] = useState({})
    const [sections, setSections] = useState([])
    const [error, setError] = useState(false)
    const { imageId } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${imageId}/showtimes`)

        promise.then((response) => {
            setMovie(response.data)
            setSections(response.data.days)
        })

        promise.catch((error) => {
            setError(true)
        })
    }, [])

    if (error === true){
        return <SectionChoice> <h1>Perdão houve um erro na requisição! Por favor tente novamente!</h1></SectionChoice>
    }

    if (!error && sections === []){
        return <SectionChoice> <h1>Carregando...</h1></SectionChoice>
    }

    return (
        <>
            <SectionChoice>
                <h1>Selecione o horário</h1>
            </SectionChoice>
             {sections.map((section)=> 
            <>
                <Section>
                    <h2>{section.weekday} - {section.date}</h2>
                </Section>
                <SectionButtons>
                    {section.showtimes.map((hour) => <Link to = {`/sessao/${hour.id}`}> <button>{hour.name}</button> </Link>)}
                </SectionButtons>
            </>)
            } 
            <SectionFooter>
                <img src={movie.posterURL} />
                <h2>{movie.title}</h2>
            </SectionFooter>
        </>
    )
}

const SectionChoice = styled.div`
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

const Section = styled.div`
margin-top: 10px;
margin-left: 25px;
    h2{
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 19px;
        margin-bottom:23px;
    }
`

const SectionButtons = styled.div`
    display:flex;
    margin-left: 25px;
    margin-bottom: 28px;
    button{
        width: 83px;
        height: 43px;
        margin-right:10px;
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

const SectionFooter = styled.div`
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
    }
`

