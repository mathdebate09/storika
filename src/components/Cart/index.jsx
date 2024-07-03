import { useContext } from "react"

import NavBar from "../NavBar"
import Footer from "../Footer"
import EmptyCart from "./EmptyCart"

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
    <>
      <div className="bg-system-bg">
        <NavBar />
        {cart.length === 0 && <EmptyCart />}
        {!(cart.length === 0) && displayCart}
      </div>
      <Footer />
    </>
  )
}

export default Cart
