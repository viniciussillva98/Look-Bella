
import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 align-items: center;
 justify-content: center;
 padding: 120px 180px;

 h1{
    margin-top: 50px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 45px;
    font-weight: bold;
    color: #4A3825;
    font-family: "Cormorant Garamond", serif;   

      @media screen and (max-width: 768px) {
         font-size: 30px;
         padding-bottom: 90px;
    }
 }

         @media screen and (max-width: 1030px) {
            padding: 0;
            height: 100%;
            padding-top: 120px;
            padding-left: 5%;
            padding-right: 5%;
            padding-bottom: 150px;
    }

  
`