
import styled from "styled-components";

export const Container = styled.div`
padding: 17px 10%;
position: fixed;
top: 0;
left: 0;
width: 100%;
background-color: #1A1A1A;
z-index: 998;

display: flex;
justify-content: center;
gap: 150px;
border-bottom: 2px solid #a8926d;

img {
    height: 45px;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
}

@media screen and (max-width: 1030px) {
    justify-content: space-between;
}

`



export const Buttons = styled.button<{ $active: boolean }>`
border: none;
background: transparent;
font-size: 14px;
font-weight: 700;
cursor: pointer;
padding: 0px 10px;
color: ${({ $active }) => $active ? '#a8926d' : '#ffffffd1'};
position: relative;
transition: color 0.2s ease;
font-family: "Cormorant Garamond", serif;  

&::after{
    content:"";
    position: absolute;
    height: 0.8px;
    width:  0px;
    background-color: #a8926d;
    bottom: 10px;
    left: 0;
    transition: width 0.2s ease;
}

&:hover::after{
    width: 100%;
}
&:hover {
    color: #a8926d;
}
`
export const Nav = styled.nav`
display: flex;
gap: 30px;

@media screen and (max-width: 1030px) {
    display: none;
}
`

export const IconButton = styled.button`
  border: none;
  background: transparent;
  color: #a8926d;
  cursor: pointer;

@media screen and (min-width: 1030px) {
    display: none;
}
`

export const Ul = styled.ul`
@media screen and (min-width: 1030px) {
    display: none;
}
        display: flex;
        flex-direction: column;
        background: #161616e9;
        position: absolute;
        top: 70px;
        right: 20px;
        left: 20px;
        padding: 20px;
        border: 2px solid #a8926d;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        gap: 15px;

                @media screen and (min-width: 760px) {
                           position: absolute;
                            top: 70px;
                            right: 20px;
                            left: auto;
                            width: 200px;
                }

`

export const Li = styled.li<{ $active: boolean }>`

    list-style: none;
    font-size: 16px;
    font-weight: 800;
    color: ${( {$active} ) =>$active ? '#a8926d' : '#ffffffd1'};
    font-family: "Cormorant Garamond", serif;   
    padding: 10px 10px;
    cursor: pointer;
    position: relative;
    transition: color 0.3s ease;
    gap: 15px;

    &::after{
    content:"";
    position: absolute;
    height: 2.5px;
    width:  0px;
    background-color: #a8926d;
    bottom: 5px;
    left: 0;
    transition: width 0.2s ease;
}

&:hover::after{
    width: 100%;
}
&:hover {
    color: #a8926d;
}





`