import { useContext } from "react"

import NavBar from "../NavBar"
import ProductsContext from "../../utils/ProductsContext.js"

function Cart() {
  const { cart, setCart } = useContext(ProductsContext)

  const displayCart = cart.map((product) => {
    return (
      <p key={product.id}>
        {product.title} {product.count}
      </p>
    )
  })

  return (
    <div className="bg-system-bg">
      <NavBar />
      <p>Cart</p>
      {displayCart}
    </div>
  )
}

export default Cart
