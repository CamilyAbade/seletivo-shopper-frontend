import styled from "styled-components";
import { colorPrimary, colorSecondary, gray3 } from "../../Assets/constants/Colors";

export const HeaderStyled = styled.div`
    width: 100vw;
    height: 15vh;
    border-top: 10px solid ${colorPrimary};
    background-color: ${colorSecondary};
    box-shadow: 0 8px 20px -13px ${gray3};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    img{
        width: 12%;
        cursor: pointer;
    }
    @media (max-width: 1000px){
        height: 8vh;
        box-shadow: 0 8px 20px -13px ${gray3};
        margin-bottom: 2rem;
        img{
            width: 30%;
            margin-top: 1rem;
        }
    }
`