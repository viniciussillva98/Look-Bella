import styled from "styled-components";

export const ContainerFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 60px;
   background-color: #1A1A1A;

        @media screen and (max-width: 768px) {
            gap: 20px;
    }
`;
export const HeaderFooter = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #58675e;
    top: 0;
    gap: 25px;

        @media screen and (max-width: 768px) {
            height: 30%;
            flex-direction: column;
            gap: 25px;
        }
`;

export const ContainerTextHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    
        @media screen and (max-width: 768px) {
            align-items: center;
            text-align: center;
    }
    `

export const TerxtHeader = styled.p`
    color: #ffffffd7;
    font-size: 45px;
    font-weight: bold;
    font-family: "Cormorant Garamond", serif;
    
        @media screen and (max-width: 768px) {
            font-size: 26px;
            text-align: center;
            padding: 0 10px;
    }
`;
export const SubTextHeader = styled.p`
    color: #ffffffd7;
    margin-top: 10px; 
    font-size: 14px;
    
        @media screen and (max-width: 768px) {
            font-size: 12px;
            text-align: center;
            padding: 0 10px;
    }
`;



export const ContentFooter = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            gap: 20px;
            height: auto;
    }
`;
export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

        @media screen and (max-width: 768px) {
            align-items: center;
     }
`;


export const Image = styled.img`
    height: 65px;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
    margin-top: 40px;
     }
`;
export const TitleLeft = styled.h1`
    font-family: "Cormorant Garamond", serif;
    color: #a8926d;
    margin-top: 10px;
    font-size: 28px;

            @media screen and (max-width: 768px) {
                font-size: 20px;
                margin-top: 20px;
                margin-bottom: 10px;  
            }
`;

export const TextLeft = styled.p`
    color: #ffffffb9;
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
    

            @media screen and (max-width: 768px) {
                font-size: 12px;  
                margin-top: 10px;
                margin-bottom: 10px;  
            }
`;
export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;

                @media screen and (max-width: 768px) {
                    align-items: center;
                    text-align: center;
                 }
`;
export const TitleRight = styled.h1`
    color: #a8926d;
    font-size: 29px;
    font-family: "Cormorant Garamond", serif;
`;
export const ContainerContato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const TextContato = styled.p`
    color: #ffffffb9;
    font-size: 14px;

    span{
        font-weight: bold;
    }
    a{
        color: #ffffffb9;
        text-decoration: none;
        position: relative;
        transition: color 0.2s ease;
        text-decoration: none;

    &::after{
        content:"";
        position: absolute;
        height: 1px;
        width:  0px;
        background-color:  #a8926d;;
        bottom: 1px;
        left: 0;
        transition: width 0.2s ease;
    }

        &:hover:after{
            width: 100%;
        }   
        &:hover {
           color: #a8926d;
        }    
            
}
`;

export const FooterAll = styled.div`
    width: 70%;
    height: 20%;
    border-top: 1px solid #ffffffb9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffffb9;

                    @media screen and (max-width: 768px) {
                    align-items: center;
                    text-align: center;
                    margin-top: 20px;
                    width: 90%;
                 }
`;

export const TextFooter = styled.div`
    text-align: center;
    font-size: 12px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
`;

export const InfoBy = styled.div`
    display: flex;
   
    justify-content: center;
    margin-top: 5px;

    p{
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8b9cae98;
    }

        @media screen and (max-width: 768px) {
        margin-top: 35px;
    }
`

export const Links = styled.a`
         cursor: pointer;
         position: relative;
`


export const IntaImage = styled.img`
         position: absolute;
         left: 4px;
         top: 0;
         width: 15px;
`


export const WhatsImage = styled.img`
         position: absolute;
         left: 20px;
         top: -2px;
         width: 21px;
`