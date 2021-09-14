import styled from "styled-components";
import { gray3 } from "../../Assets/constants/Colors";

export const FormContainer = styled.div`
    width: 80%;
    min-height: 20vh;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            width: 80%;
            height: 4vh;
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 1px solid ${gray3};
            margin: 0.5rem 0;
            &:focus {
                outline: none;
            }
     
        }
    }



`