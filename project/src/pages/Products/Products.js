import React, { useState, useEffect } from 'react';
import { SectionProducts, ProductCard } from './productsStyled';
import { Loading } from '../../Components/Loading/Loading'
import { Header } from '../../Components/Header/Header'
import { ButtonSecondary } from '../../Components/Button/ButtonSecondary/ButtonSecondary';
import {buttonTextAddCartPagProduct} from '../../Assets/constants/Text'
import { Cart } from '../../Components/Cart/Cart';
import {getAllProducts} from '../../Requests/products'
import {AddToCart} from '../../Requests/cart'
import {Subtract} from '../../Requests/cart'
import {deleteProductToCart} from '../../Requests/cart'
import { goToCheckout } from '../../Router/Cordinator';
import { useHistory } from 'react-router-dom';

const Products = () => {
  const history = useHistory()
  
  const [products, setProducts] = useState([{}])

  const [cart, setCart] = useState({})
  const [totalPrice, setTotalPrice] = useState(0)
  
  const meuProduto = localStorage.setItem("stock", JSON.stringify(products));

  useEffect(() => {
    getAllProducts(setProducts)
    localStorage.getItem('productsCart')
  }, []);

  const productsList = products.map((product) => {
    return (
      <ProductCard>
        <br />
        <h6>{product.name}</h6>
        <p>R$ {product.price}</p>
        <ButtonSecondary onClick={() => AddToCart(product.id, product.name, product.price, setCart, cart, setTotalPrice, product.qty_stock)} buttonText={buttonTextAddCartPagProduct} /> 
        <ButtonSecondary onClick={() => Subtract(product.id, cart, setTotalPrice, setCart)} buttonText={'-1'} /> 
        <br />
      </ProductCard>
    )
  })

  const myProducts = Object.keys(cart).map((key) => {
    return(
      <div>
        <h3>{cart[key].name}</h3>
        <p>QTD({cart[key].qty})</p>
        <br/>
        <h4 onClick={() => deleteProductToCart(key, cart, setCart, setTotalPrice)}>Remove (X)</h4>
        <p>-----------------------</p>
      </div>
    ) 
  })

  return (
    <>
      <Header />
      <Cart onClick={() => goToCheckout(history, products)} text={totalPrice.toFixed(2)} product={myProducts} />
      {productsList.length > 40 ?
        <SectionProducts>
          {productsList}
        </SectionProducts> :
        <Loading />
      }
    </>
  )
}
export default Products;
