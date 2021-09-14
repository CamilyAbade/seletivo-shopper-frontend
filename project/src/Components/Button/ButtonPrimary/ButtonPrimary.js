import {ButtonPrimaryStyled} from './ButtonPrimaryStyled'

export function ButtonPrimary(props) {

    return (
        <ButtonPrimaryStyled onClick={props.onClick}>
            {props.buttonText}
        </ButtonPrimaryStyled>
    )
  }