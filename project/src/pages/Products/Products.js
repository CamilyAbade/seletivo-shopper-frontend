import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {BASE_URL} from '../../Assets/Url';
import axios from 'axios';

const Products = () => {
    const history = useHistory()
    const [products, setProducts] = useState({})

    useEffect(() => {
       
        axios.get(`${BASE_URL}/list/products`)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log('Não há produtos aqui!!')
        })
     
    }, []);

    return(
      <>
        <p>Products</p>
    </>
    )
}
export default Products;