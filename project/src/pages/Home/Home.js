import {Txt, Img, ContentHome} from './HomeStyled';
import ImgShopMobile from '../../Assets/imgs/ImgShopMobile.jpg';
import  {Header} from '../../Components/Header/Header' 
import {ButtonPrimary} from '../../Components/Button/ButtonPrimary/ButtonPrimary'
import { goToProducts } from '../../Router/Cordinator';
import { useHistory } from 'react-router-dom';
import {text1PagHome, text2PagHome, text3PagHome, buttonToPagProduct} from '../../Assets/constants/Text'


const Home = () => {
    const history = useHistory()
    return(
      <>
        <Header/>

        <ContentHome>
          <Txt>
            <h3>{text1PagHome}</h3>
            <br/>
            <h1>{text2PagHome}</h1>
            <h1>{text3PagHome}</h1>

            <ButtonPrimary onClick = {() => goToProducts(history)} buttonText={buttonToPagProduct} />
          </Txt>

          <Img>
            <img src={ImgShopMobile}/>
          </Img>

        </ContentHome>
    </>
    )
}
export default Home;