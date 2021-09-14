import styled from "styled-components";
import { red1, red2 } from "../../Assets/constants/Colors";

export const Section = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CheckoutContent = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px;
    ::-webkit-scrollbar {
        width: 100px;  
      }
    div{
        width: 80%;
        min-height: 20vh;
        background-color: ${red2};
        color: ${red1};
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 0.5rem;
        h3{font-size: 1.8rem; line-height: 2;}
        p{font-size: 1.2rem; line-height: 2;}
    }
    @media (max-width: 1000px){
        padding: 20px;
        flex-direction: column;
        align-items: center;
        div{
            min-height: 20vh;
            h3{font-size: 1.2rem;}
            p{font-size: 1rem;}}
        }
    }
`
