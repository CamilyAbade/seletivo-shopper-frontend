import { goToProducts } from '../../Router/Cordinator';
import { useHistory } from 'react-router';
import {Header, Txt, Img, SectionHome} from './HomeStyled';
import imagemCompras from './imgHome.jpg'; 
import LOGO from './LOGO.png'

const Home = () => {
  const history = useHistory()
    
    return(
      <>
        <Header>
          <img src={LOGO}/>
        </Header>

        <SectionHome>
          <Txt>
            <h3>Bem vindo(a) á Shopper :)</h3>
            <br/>
            <h1>Aqui você compra</h1>
            <h1>Sem ir ao mercado.</h1>
            <button onClick={() => goToProducts(history)}>Ir para as compras</button>
          </Txt>

          <Img>
            <img src={imagemCompras}/>
          </Img>

        </SectionHome>
    </>
    )
}
export default Home;