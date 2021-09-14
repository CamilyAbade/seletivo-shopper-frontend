import { CartContainer } from './CartStyled';

export function Cart (props) {
    return (
        <CartContainer>
            <h2>Total: {props.text}</h2>
            <button onClick={props.onClick}>Finalizar compra!</button>
            <p>{props.product}</p>
        </CartContainer>
    )
  }