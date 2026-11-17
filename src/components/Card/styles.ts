import styled from "styled-components";

export const ContainerCard = styled.div`

border-radius: 8px;

background-size: cover;
background-position: center;
width: 100%;
height: 350px;

display: flex;
align-items: end;
justify-content: start;
padding-bottom: 15px;
padding-left: 20px;

&::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.39); // Cor de sobreposição com opacidade
    border-radius: 10px;
}

`
export const Text = styled.p`
z-index: 1;
font-size: 25px;
font-weight: bold;
color: #fff;
font-family: "Cormorant Garamond", serif;   
`
