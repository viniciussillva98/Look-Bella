import styled from "styled-components";

export const Button = styled.button`
    padding: 13px 21px;
    font-size: 19px;
    font-weight: bolder;
    border: none;
    border-radius: 3px;
    z-index: 997;

    font-family: "Cormorant Garamond", serif;
    background-color: #c9b08a;
    word-spacing: 15px;
    color: #1A1A1A;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
        &:hover {
         background-color:  #978667;
            transform: translateY(-1.5px);
        }
`