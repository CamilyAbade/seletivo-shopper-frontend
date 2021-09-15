
export function AddToCart(id, name, price, setCart, cart, setTotalPrice, stock) {
  let tempCart = cart

  if (!(id in tempCart)) {
    tempCart[id] = { "qty": 1, "price": price, "name": name }

  } else {
    tempCart[id]["qty"] += 1
  }

    for (let key in cart) {
      if(cart[key].qty <= stock){
      }

      else{
          alert('Aquantidade solicitada está em')
          cart[key].qty = stock
        }
        localStorage.setItem("productsCart", JSON.stringify(cart));
    }
    setCart(tempCart)
    SumPrice(cart, setTotalPrice)
    formatCart(cart)
}

const SumPrice = function (cart, setTotalPrice) {
  let sum = 0

  for (let key in cart) {
    let qty = cart[key].qty
    let price = cart[key].price
    sum += price * qty
  }
  setTotalPrice(sum)
}


export function Subtract(id, cart, setTotalPrice, setCart) {
  let tempCart = cart
  if (id in tempCart) {
    tempCart[id]["qty"] -= 1
  }

  for (let key in cart) {
    if (cart[key].qty === 0){
      delete cart[key]
    }
  }

  setCart(tempCart)
  SumPrice(cart, setTotalPrice)
  formatCart(cart)
}


export function deleteProductToCart (id, cart, setCart, setTotalPrice) {
  let tempCart = cart

  for (let key in cart) {
    if (key === id){
      delete cart[key]
    }
  }

  setCart(tempCart)
  SumPrice(cart, setTotalPrice)
  formatCart(cart)
}


const formatCart = (cart) => {
  let query = ""

  for (const key in cart) {
    let string = `'${key}', '${cart[key].qty}',`
    query += string
  }
  query = query.slice(0, -1)
  localStorage.setItem("FormatCart", JSON.stringify(query));
  return query
}

