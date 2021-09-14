import styled from "styled-components";
import { colorPrimary } from "../../Assets/constants/Colors";

export const FooterContent = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: ${colorPrimary};
    position: absolute;
    bottom: 0;

    }
    @media (max-width: 1000px){
        padding: 20px;
        flex-direction: column;
        align-items: center;
    }
`

