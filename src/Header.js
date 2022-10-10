import styled from "styled-components"

export default function Header() {
    return(
        <HeaderBox>
            <h1>CINEFLEX</h1>
        </HeaderBox>
    )
}

const HeaderBox = styled.div`
    width: 100%;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 2;
    background-color: #c3cfd9;
    box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2);
    h1{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 34px;
        color: #e8833a;
        background-color: #c3cfd9;
    }
`