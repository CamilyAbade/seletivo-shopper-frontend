import styled from "styled-components";
import {dark1, gray3, gray4 } from "../../Assets/constants/Colors";

export const SectionProducts = styled.div`

justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    padding: 80px;
@media(max-width: 520px) {
    margin: 2rem 0 0 0;
    padding: 20px;
}
`

export const ProductCard = styled.div`
    height: auto;
    color: ${dark1};
    border: 1px solid ${gray3};
    text-transform: uppercase;
    text-align: center;
    font-size: 17px;
    padding: 1rem 1rem 0 1rem;
    outline: none;
    border-radius: 4px;
    font-family: 'Raleway', sans-serif;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h6{
        padding-bottom: 1rem;
        color: ${gray4};
    }
`
