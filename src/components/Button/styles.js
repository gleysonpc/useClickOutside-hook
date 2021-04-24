import styled from "styled-components";

export const ButtonContainer = styled.button`
   height: 43px;
    width: 100px;
    -webkit-transition: all .5ms ease-in-out;
    transition: all .5ms ease-in-out;
    border: 2px solid #0aa8c1;
    border-radius: 5px;
    color: #0aa8c1;
    background-color: #fbf8f8;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        box-shadow: 0px 0px 6px 1px rgba(46,166,255,0.75);
    }
`