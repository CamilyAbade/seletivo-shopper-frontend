import {ButtonCartStyled} from './ButtonCartStyled'

export function ButtonCart(props) {

    return (
        <ButtonCartStyled onClick={props.onClick}>
            {props.buttonText}
        </ButtonCartStyled>
    )
  }