import styled from "styled-components";
import { colorPrimary, colorSecondary } from "../../Assets/Colors";



export const Header = styled.div`
    width: 100vw;
    height: 15vh;
    border-top: 10px solid ${colorPrimary};
    background-color: ${colorSecondary};
    box-shadow: 0 8px 20px -13px #D3D3D3;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 12%;
    }
    @media (max-width: 1000px){
        height: 8vh;
        box-shadow: 0 8px 20px -13px #D3D3D3;
        margin-bottom: 2rem;
        img{
            width: 30%;
            margin-top: 1rem;
        }
    }
`

export const SectionHome = styled.div`
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
    button{
        margin-top: 2rem;
        width: 80%;
        heigth: 10rem;
        background-color: ${colorPrimary};
        border-radius: 10px;
        padding: 1rem;
        font-size: 1rem;
        color: white;
        font-weight: bold;
        transition: 1s;

        &:hover{
            background-color: transparent;
            border: 1px solid ${colorPrimary};
            color: ${colorPrimary};
            transition: 0.5s;
        }
    }
    @media (max-width: 1000px){
        h3{font-size: 1rem;}
        h1{font-size: 2rem;}
        width: 100%;
        align-items: center;
        left: 0;
        button{
            border-radius: 25px;
            width: 70%;
        }
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