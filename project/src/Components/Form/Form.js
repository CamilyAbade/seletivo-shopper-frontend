import {FormContainer} from './FormStyled'
import useForm from '../../Hooks/UseForm';
import { ButtonCart } from '../Button/ButtonCart/ButtonCart';
import { postAndPut } from '../../Requests/postPurchase'; 

export function Form() {
    const input = localStorage.getItem("FormatCart")

    const {form, onChange, cleanFields } = useForm({
        name: "",
        date: "",
        list: ""
  });

  const body = {
      name: form.name,
      date: form.date,
      list: input
  }

  const postNewPurchase = (event) => {
      event.preventDefault()
      postAndPut(body)
      cleanFields()
  }


  return (
        <FormContainer>

            <form onSubmit={postNewPurchase}>

                <input
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    placeholder="Nome"
                    required
                    pattern={"[a-z]]{3,}$"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />

                <input
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    placeholder="Data de entraga"
                />

                <ButtonCart onClick = {postNewPurchase} buttonText={'Finalizar compra'} />
            </form>


        </FormContainer>
    )
  }