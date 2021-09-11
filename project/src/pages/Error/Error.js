
import { useHistory } from 'react-router-dom'
import {Bloco} from './ErrorStyled'
import { goToHome } from '../../Router/Cordinator'

export const Error = () => {
    const history = useHistory()
    return(
        <Bloco>
            <h3>Página não encontrada :(</h3>
            <button onClick={() => goToHome(history)} >Voltar para a Home</button>
        </Bloco>
    )
}
export default Error;