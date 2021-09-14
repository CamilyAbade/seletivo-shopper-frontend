import styled from "styled-components";
import { blue5, colorPrimary, colorSecondary, gray5, gray6, green, purple1 } from "../../Assets/constants/Colors";

export const CartContainer = styled.div`
    width: 350px;
    max-height: 150px;
    background-color:${gray5};
    opacity: 0.9;
    border: 1px solid ${colorPrimary};
    border-radius: 0px 40px 0px 40px;
    position: fixed;
    left: 0;
    top:0;
    color: ${purple1};
    margin: 1rem;
    padding: 1rem;
    h2{padding-bottom: 1rem;}
    ::-webkit-scrollbar {
        width: 0px;
    }
    div{
        background-color: ${gray6};
        margin-bottom: 1rem;
        padding: 1rem;
    }
    h4{
        color: ${blue5};
        cursor: pointer;
    }
    @media (max-width: 1000px){
        opacity: 1;
        width: 250px;
        h2{padding-bottom: 0.5rem;}
        h3{font-size: 1rem;}
        button{
         width: 80px;
        }
    }
    button{
        background-color: ${colorPrimary};
        border: none;
        padding: 0.5rem;
        position: absolute;
        top: 8px;
        right:0;
        color: ${colorSecondary};
        &:hover{
            background-color: ${green};
            transition: 0.5s;
    }

     
`