import styled from "styled-components";

interface Cardfeatures {// Definindo a interface para as props do Cardfeatures
  $img: string;
}

export const Container = styled.div`
    width: 100%; 
    height: 100vh;
    padding: 90px 12%;
    background-color: #f9f9f9;


        @media screen and (max-width: 1030px) {
          
            height: auto;
            padding: 150px 5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
    }
`;

export const Title = styled.h2`
font-family: "Cormorant Garamond", serif;
margin-top: 10px;
font-size: 40px;
font-weight: 500;
text-align: center;
color: #1a1a1a;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

@media (max-width: 768px) {
    font-size: 30px;
}
`

export const SubTitle = styled.p`
margin-top: 10px;
font-size: 15px;
font-weight: 600;
line-height: 1.5;
text-align: center;
color: #1a1a1a;
word-spacing: 3px;
span{
color: #666;
}

`;

export const Sectionfeatures = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr); // 4 colunas de largura igual
gap: 20px;
margin-top: 20px;

    @media screen and (max-width: 1030px) {
        grid-template-columns: repeat(2, 1fr); // 1 coluna para telas menores
        margin-top: 50px;
    }

    @media screen and (max-width: 768px) {
     grid-template-columns: 1fr; // 1 coluna para telas menores
    }



`
export const Cardfeatures = styled.div<Cardfeatures>`

background-image: url(${props => props.$img});
height: 400px;
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: end;
padding-bottom: 20px;
gap: 10px;
border-radius: 10px;
background-color: #fffffffa;
position: relative;
transition: transform 0.3s ease;

h1{
    z-index: 2;
    color: #fff;
    font-size: 40px;
    font-weight: 500;
    font-family: "Cormorant Garamond", serif;
}
p{
    z-index: 2;
    color:  #fff;
    font-weight: 400;
    text-align: center;   
    font-size: 14px;
    padding: 0px 18px;
}

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

   &:hover {
        transform: scale(1.03); 
    }
`