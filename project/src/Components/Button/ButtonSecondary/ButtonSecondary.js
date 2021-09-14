import {ButtonSecondaryStyled} from './ButtonSecondaryStyled'

export function ButtonSecondary(props) {
    return (
        <ButtonSecondaryStyled onClick={props.onClick}>
            {props.buttonText}
        </ButtonSecondaryStyled>
    )
  }