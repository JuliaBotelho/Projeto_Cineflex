import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Success({movietitle, moviedate, moviehour, movieseats, moviebuyer, moviecpf}) {

    return (
        <>
            <SuccessTitle>
                <h1>Pedido feito com sucesso!</h1>
            </SuccessTitle>
            <SuccessInfo data-identifier="buyer-infos-reserve-finished">
                <div>
                    <h1>Filme e sessão</h1>
                    <h2>{movietitle}</h2>
                    <h2>{moviedate} - {moviehour}</h2>
                </div>
                <div>
                    <h1>Ingressos</h1>
                    {movieseats.map((num)=> <h2>Assento {num}</h2>)}
                </div>
                <div>
                    <h1>Comprador</h1>
                    <h2>Nome: {moviebuyer}</h2>
                    <h2>CPF: {moviecpf}</h2>
                </div>
            </SuccessInfo>
            <SuccessButton>
                <Link to="/"><button data-identifier="back-to-home-btn" >Voltar pra Home</button></Link>
            </SuccessButton>
        </>
    )
}

const SuccessTitle = styled.div`
    padding-top: 65px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    h1{
        font-family: 'Roboto', sans-serif;
        color: #247a6b;
        font-size: 23px;
        margin-top: 30px;
        margin-bottom:14px;
        font-weight: 700;
    }
`
const SuccessInfo = styled.div`
    margin-left: 30px;
    h1{
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 21px;
        margin-top: 30px;
        margin-bottom:15px;
        font-weight: 700;
    }
    h2{
        font-family: 'Roboto', sans-serif;
        color: #293845;
        font-size: 19px;
        margin-top: 10px;
        margin-bottom:10px;
        font-weight: 400;
    }
`

const SuccessButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
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