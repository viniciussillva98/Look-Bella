import styled from "styled-components";

export const Container = styled.div`
    
    width: 100%; 
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    z-index: 999;
    padding: 90px 20px;
    background-color: #000000aa;

    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
`;



export const ContainerForm = styled.div`
   
    width: 450px;
    max-width:450px;    
    max-height: 90vh;
    background-color:#fff;
    border-radius: 10px;
    border: 1.5px solid #6b6b6b;

    padding: 35px;
    display: flex;
    flex-direction: column;

    position: relative ;

    
    `
export const Title = styled.h1`
    z-index: 2; 
    font-size: 30px;
    font-weight: bold;
     color: #1A1A1A;;
    `

export const SubTitle = styled.p`
font-size: 14px;
color: #6b6b6b;
margin: 20px 0;
`
export const ButtonOnclose = styled.button`
position: absolute;
top: 15px;
right: 12px;
display: flex;
justify-content: center;
align-items: center;

background-color: #c9b08a;
border: none;
border-radius: 100%;
padding: 5px;

transition: all 0.3s ease;
        &:hover {
         background-color:  #978667;
        }
`



export const ContentForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
gap: 15px;
margin-top: 15px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 8px;

    &:focus {
        outline: none;
        border-color: #c9b08a;;
    }
`


export const Button = styled.button`
    padding: 13px 21px;
    font-size: 19px;
    border: none;
    border-radius: 3px;
    width: 100%;
    margin-top: 20px;

    background-color: #c9b08a;;
    color: #1A1A1A;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
        &:hover {
         background-color:  #978667;
            transform: translateY(-1.5px);
        }
`