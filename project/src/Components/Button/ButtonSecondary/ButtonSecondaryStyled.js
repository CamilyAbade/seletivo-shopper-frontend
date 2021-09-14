import styled from "styled-components";
import { colorPrimary, colorSecondary} from "../../../Assets/constants/Colors";

export const ButtonSecondaryStyled = styled.button`
    margin-top: 2rem;
    width: 100%;
    heigth: 10rem;
    background-color: ${colorSecondary};
    border: 1px solid ${colorPrimary};
    border-radius: 10px;
    padding: 1rem;
    font-size: 1rem;
    color: ${colorPrimary};
    font-weight: bold;
    transition: 1s;
    &:hover{
        background-color: ${colorPrimary};
        border: 1px solid ${colorPrimary};
        color: ${colorSecondary};
        transition: 0.5s;
    }

    @media (max-width: 1000px){
        button{
            border-radius: 25px;
            width: 70%;
        }
    }


`
    