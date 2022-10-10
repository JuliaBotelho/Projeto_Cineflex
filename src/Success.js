import styled from "styled-components"

export default function Success() {
    return (
        <>
            <SuccessTitle>
                <h1>Pedido feito com sucesso!</h1>
            </SuccessTitle>
            <SuccessInfo>
                <div>
                    <h1>Filme e sessão</h1>
                    <h2>jhjkhdjkhdsjkhsa</h2>
                    <h2>nsjskasjdkhjskh</h2>
                </div>
                <div>
                    <h1>Ingressos</h1>
                    <h2>nnkjnjsanj</h2>
                    <h2>nxnjkncjknjk</h2>
                </div>
                <div>
                    <h1>Comprador</h1>
                    <h2>Nome: ncjncjnjkzcnjk</h2>
                    <h2>CPF: bhbcjhbhcjbj</h2>
                </div>
            </SuccessInfo>
            <SuccessButton>
                <button>Voltar pra Home</button>
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