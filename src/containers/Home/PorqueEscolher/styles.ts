import styled from "styled-components";

export const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #1A1A1A; 
    padding: 5% 10%;
    gap: 30px;

        @media screen and (max-width: 768px) {
            height: auto;
            min-height: 100vh;
    }
`

export const Title = styled.h1`
    color: #fff;
    font-family: "cormorant garamond", serif;
    font-size: 49px;
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;

    span{
        color: #a8926d;
    }
`

export const TitleFeature = styled.h2`
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 8px;
    `
export const SubTitleFeature = styled.h3`
    color: #fff;
    font-size: 14px;
    font-weight: 400;
`

export const Content = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    gap: 12px;
    grid-template-columns: repeat(2, 1fr);// Ajusta o número de colunas com base no tamanho disponível

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);// Em telas menores, exibe 2 colunas
        gap: 75px; // Adiciona um espaçamento entre os itens
    }

`
export const ItemFeature = styled.div`
    height: 30px;
    background-color: transparent;
    border-radius: 10px;
    display: flex;
    justify-content: start;
    align-items: center;

`

export const ContainerTitleFeature = styled.div`
    height: 100%;   
    display: flex;
    width: 80%;
    flex-direction: column;
    margin-left: 10px;
`


export const ContainerCheck = styled.div`
    width: 35px;
    height: 35px;
    margin-right: 10px;
    background-color: #c9b08a;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`