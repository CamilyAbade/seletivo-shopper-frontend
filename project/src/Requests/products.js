import { BASE_URL } from '../Assets/constants/Url';
import axios from 'axios';

export function getAllProducts(setProducts, setCart) {
    
  
    axios.get(`${BASE_URL}/list/products`)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log('Não há produtos aqui!!')
      })

  }

