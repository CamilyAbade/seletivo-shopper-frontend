import styled from "styled-components";
import { keyframes } from "styled-components";
import { colorPrimary,  gray4 } from "../../Assets/constants/Colors";


export const jump = keyframes`
0%   { transform: translateY(5px);   }
50%  { transform: translateY(15px);    }
100% { transform: translateY(5px);   }
`
export const jump2 = keyframes`
0%   { transform: translateY(15px);   }
50%  { transform: translateY(5px);    }
100% { transform: translateY(15px);   }
`


export const LoadingStyled = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
.ball {
    float:left;
    width: 10px;
    height: 10px;
    margin: auto 10px;
    border-radius: 50px;
    animation-duration: 1s infinite ease-in-out;


  }    
  .ball:nth-child(1) {
    background: ${colorPrimary};
    animation: ${jump2} 1s infinite ease-in-out;
  }

  
  .ball:nth-child(2) {
    background: ${gray4};
    -webkit-animation: ${jump} 1s infinite ease-in-out;
  }

  

  .ball:nth-child(3) {
    background: ${colorPrimary};  
    -webkit-animation: ${jump2} 1s infinite ease-in-out;
  }
  

  .ball:nth-child(4) {
    background: ${gray4};  
    -webkit-animation: ${jump} 1s infinite ease-in-out;
  }

`