import styled from "styled-components";
import banner from "../../../assets/bannerLookBellaDesktop.png";
import bannerMobile from "../../../assets/bannerLookBellaMobile.png";


export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    background-image: url(${banner});
    background-size: cover;
    background-position: top;

    &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.37); // Cor de sobreposição com opacidade

}


    @media screen and (max-width: 768px) {
        background-image: url(${bannerMobile});
        padding: 25px;
        background-size: cover;
  }

`;

export const Content = styled.div`
    display: flex;
    align-items: end;
    justify-content: start;
    height: 100%;
    padding-left: 100px;

      @media screen and (max-width: 768px) {
        align-items: end;
        padding-bottom: 70px;   
        text-align: center;
        padding-left: 0px;
        justify-content: center;
        
        }
`
export const Title = styled.h1` 
    z-index: 1;
    font-size: 60px;
    padding-bottom: 30px;
    font-weight: bold;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.86);
    color: #fff;
    font-family: "Cormorant Garamond", serif;   

        @media screen and (max-width: 768px) {
            font-size: 48px;
            color: #fff
        }
`
