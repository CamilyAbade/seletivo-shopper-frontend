import styled from "styled-components";
import {dark1, gray3, gray4, gray5 } from "../../Assets/constants/Colors";

export const SectionProducts = styled.div`

justify-content: space-evenly;
    display: flex;
    padding: 80px;
    flex-wrap: wrap;
@media(max-width: 520px) {
    margin: 2rem 0 0 0;
    padding: 20px;
}
`

export const ProductCard = styled.div`
    width: 200px;
    height: auto;
    color: ${dark1};
    border: 1px solid ${gray5};
    text-transform: uppercase;
    text-align: center;
    font-size: 17px;
    padding: 1rem 1rem 0 1rem;
    outline: none;
    border-radius: 4px;
    font-family: 'Raleway', sans-serif;
    margin: 2rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &:hover{
        box-shadow: 10px 10px 20px -13px ${gray3};
    }
    h6{
        padding-bottom: 1rem;
        color: ${gray4};
    }
`
