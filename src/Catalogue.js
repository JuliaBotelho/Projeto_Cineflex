import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Catalogue() {
    const [images, setImages] = useState(undefined)
    const [error, setError] = useState(false)

    useEffect(()=>{
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promise = axios.get(URL)

        promise.then((response)=>{
            setImages(response.data)
        })

        promise.catch((err) => {
            setError(true)
        })
    },[])

    if (error === true){
        return <MovieChoice> <h1>Perdão houve um erro na requisição! Por favor tente novamente!</h1></MovieChoice>
    }

    if (!error && images === undefined){
        return <MovieChoice> <h1>Carregando...</h1></MovieChoice>
    }

    return (
        <>
            <MovieChoice>
                <h1> Selecione o filme </h1>
                <Movies>
                    {images.map((img)=> <Link to={`/filme/${img.id}`} > <img data-identifier="movie-outdoor" src={img.posterURL} key={img.id}/> </Link>)}
                </Movies>
            </MovieChoice>
        </>
    )
}

const MovieChoice = styled.div`
    padding-top: 65px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
    display: flex;
    flex-direction:column;
    align-items: center;
    h1{
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 22px;
        margin-top: 30px;
        margin-bottom:25px;
    }
`

const Movies = styled.div`
    padding-bottom: 30px;
    display:flex;
    flex-wrap: wrap;
    img{
        width:129px;
        height:193px;
        margin-left:10px;
        margin-right:10px;
        margin-bottom: 15px;
        border-radius: 3px;
        border-width: 9px;
        border-style: solid;
        border-color: #FFFFFF;
        box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.1);
        &:hover{
            box-shadow: 3px 3px 3px 3px rgba(255, 165, 0, 0.5);
        }
    }
`