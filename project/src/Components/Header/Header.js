import {HeaderStyled} from './HeaderStyled'
import Logo from '../../Assets/imgs/Logo.png'
import { goToHome } from '../../Router/Cordinator'
import { useHistory } from 'react-router-dom'

export function Header() {
    const history = useHistory()

    return (
        <HeaderStyled>
            <img onClick={() => goToHome(history)} src={Logo}/>
        </HeaderStyled>
    )
  }