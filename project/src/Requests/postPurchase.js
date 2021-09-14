import { BASE_URL } from '../Assets/constants/Url';
import axios from 'axios';

export function postAndPut(input) {

  const body = {
    "name": input.name,
    "date": input.date,
    "list": input.list.slice(1, -1)
  }

  axios.post(`${BASE_URL}/purchase/post-purchase`, body)
    .then((res) => {
      alert('Compra finalizada')
      putStock()
    })
    .catch((err) => {
      alert('Nome ou data inválidos')
    })


  const putStock = () => {
    const cartProducts = JSON.parse(localStorage.getItem('carrinho de Produtos'))
    const productsDB = JSON.parse(localStorage.getItem('stock'))
    var qtyProducts = {}


    for (let key in productsDB) {
      var id = productsDB[key].id
      var stock = productsDB[key].qty_stock
      qtyProducts[id] = { id: id, stock: stock }
    }

    for (let key in cartProducts) {
      var boughtQty = cartProducts[key].qty
      var availableQty = qtyProducts[key].stock
      var idProduct = qtyProducts[key].id
      var StockUpdate = availableQty - boughtQty

      const body = {
        "id": idProduct,
        "qty_stock": StockUpdate
      }

      axios.put(`${BASE_URL}/stock/update`, body)
        .then((res) => {
          alert('Banco de estoque alterado com sucesso!')
        })
        .catch((err) => {
          alert('Nome ou data inválidos')
        })
    }
  }
}

