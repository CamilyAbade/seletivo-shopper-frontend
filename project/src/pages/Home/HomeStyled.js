import styled from "styled-components";
import { colorPrimary } from "../../Assets/constants/Colors";

export const ContentHome = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    position: absolute;
    padding: 80px;
    ::-webkit-scrollbar {
        width: 100px;  
      }

    @media (max-width: 1000px){
        padding: 20px;
        flex-direction: column;
        align-items: center;
    }
`

export const Txt = styled.div`
    h3, h1{
        color: ${colorPrimary};
    }
    h3{font-size: 1.5rem;}
    h1{font-size: 3.5rem;}
    display: flex;
    justify-content: center;
    flex-direction: column;  
    position: relative;
    left: 100px;
   
    @media (max-width: 1000px){
        h3{font-size: 1rem;}
        h1{font-size: 2rem;}
        width: 100%;
        align-items: center;
        left: 0;
    }
`

export const Img = styled.div`
    img{
    width: 80%;
    heigth: auto;
}
    max-width: 50%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1000px){
        max-width: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        img{
            margin-top: 3rem;
        }
    }
`