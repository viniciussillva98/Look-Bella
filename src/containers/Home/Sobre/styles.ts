import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    padding: 90px 20px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media screen and (max-width: 1030px) {
        flex-direction: column;
    }

`;

export const Image = styled.img`
    height: 65%;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03); 
    }

        @media screen and (max-width: 1030px) {
        width: 100%;
        height: auto;
        }
`

export const SobreContent = styled.div`
    max-width: 100%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const Title = styled.h1`
    z-index: 2; 
    font-size: 50px;
    padding: 20px 0 10px 0;
    font-weight: bold;
    color: #4A3825;
    font-family: "Cormorant Garamond", serif; 
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

    span{
        color: #1a1a1a;
    }

        @media screen and (max-width: 768px) {
          text-align: center;
        }
    `

export const Text = styled.p`
    color: #6b6b6b;
    line-height: 1.4;
    text-align: center;
    line-height: 2.0;
    font-weight: bold;
    span{
       font-weight: normal;
    }
`