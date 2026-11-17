import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;
background-color: #e7e6e6;

display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;

@media screen and (max-width: 1030px) {
   flex-direction: column;
   padding: 0;
   }
`

export const Content = styled.div`
background-color: #fff;
display: flex;
width: 80%;
height: 80%;
border-radius: 20px;

@media screen and (max-width: 1030px) {
   flex-direction: column;
   width: 100%;
   height: 80%;
   
   }

`

export const ContentInfo = styled.section`
width: 50%;
padding: 25px;

display: flex;
flex-direction: column;
gap: 40px;

@media screen and (max-width: 1030px) {
   gap:8px;
   width: 100%;
   height: 100%;
   align-items: center;
   text-align: center;
   }

`
export const Title = styled.div`
font-family: "Cormorant Garamond", serif;  
color: #4A3825;
font-size: 34px;
font-weight : bolder;
`

export const LocalizacaoContent = styled.div`
display: flex;
gap: 12px;

@media screen and (max-width: 1030px) {
   align-items: center;
   
   }
`

export const LocalizacaoInfo = styled.div`
display: flex;
flex-direction: column;
gap: 8px;


`

export const TitleInfo = styled.h2`
font-size: 15px;
`

export const SubTitleInfo = styled.p`
font-size: 13px;
color: #666;

span{
    color: #a8926d;
}
`

export const HorariosContent = styled.div`
display: flex;
gap: 12px;
@media screen and (max-width: 1030px) {
   align-items: center;
   
   }
`

export const HorariosInfo = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

export const TitleHorario = styled.h2`
font-size:15px;
`

export const SubTitleHorarios = styled.p`
font-size: 13px;
color: #666;
`
export const Obs = styled.p`
font-size: 12px;
color: #ab0707;
`
export const ContatoContent = styled.div`
display: flex;
gap: 12px;
@media screen and (max-width: 1030px) {
   align-items: center;
   
   }
`
export const ContatoInfo = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`
export const TitleContato = styled.h2`
font-size: 15px;
`
export const Link = styled.a`
cursor: pointer;
font-size: 15px;
color: #a8926d;
`
export const Button = styled.button`
cursor: pointer;
background-color: #1a1a1af6;
height: 45px;
width: 60%;
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 8px;
gap: 10px;

color: #fff;
padding: 10px;

transition: all 0.3s ease;
&:hover{
    color: #a8926d;
    background-color: #1A1A1A;
    transform: translateX(1.9px);
}
`
