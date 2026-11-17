import styled from "styled-components";
import backgroundImage from "../../../assets/salaoLookBella.png"


export const Container = styled.div`
margin-top: 50px;
height: 70vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: #161515e0;
background-image: url(${backgroundImage});
gap: 23px;
position: relative;


&::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.59); // Cor de sobreposição com opacidade

}

        @media screen and (max-width: 1030px) {

            background-size: cover;
            background-position: center;
          
    }
`
export const Title = styled.h1`
    z-index: 1;
    font-size: 45px;
    color: #fff;
    font-family: "Cormorant Garamond", serif;  
`
export const Subtitle = styled.p`
    z-index: 1;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    font-family: "Cormorant Garamond", serif;
`