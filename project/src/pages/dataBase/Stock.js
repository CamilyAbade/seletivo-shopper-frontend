import { useState } from 'react';
import { useEffect } from 'react';
import { ProductCard, SectionProducts } from './StockStyled';
import { getAllProducts } from '../../Requests/products'


export const Stock = () => {

  const [products, setProducts] = useState([{}])

  useEffect(() => {
    getAllProducts(setProducts) 


  }, []);

  const productsList = products.map((product) => {
    return (
      <ProductCard>
        <br />
        <h6>Nome: {product.name}</h6>
        <p>Estoque: {product.qty_stock}</p>
        <br />
      </ProductCard>
    )
  })


  return (
    <SectionProducts>
      {productsList}
    </SectionProducts>

      )
}
      export default Error;