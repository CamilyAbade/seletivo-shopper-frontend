import  {Header} from '../../Components/Header/Header' 
import {CheckoutContent, Section} from './CheckoutStyled'
import {Footer} from '../../Components/Footer/Footer'
import {Form} from '../../Components/Form/Form'

const Checkout = () => {
    return(
      <>
      <Section>
        <Header/>
          <CheckoutContent>
            <div>
              <h3>Pronto!</h3>
              <p>Agora preencha o nome do destinatário e a data para a compra ser entregue</p>
              <p>=D</p>
            </div>
          </CheckoutContent>
            <Form/>
      </Section>
            <Footer/>
      </>
    )

}
export default Checkout;