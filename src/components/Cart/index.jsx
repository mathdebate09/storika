import { useContext } from "react"

import NavBar from "../NavBar"
import Footer from "../Footer"
import EmptyCart from "./EmptyCart"
import CartCard from "./CartCard"

import ProductsContext from "../../utils/ProductsContext.js"

function Cart() {
  const { cart, setCart } = useContext(ProductsContext)

  const displayCart = cart.map((product) => {
    return (
      <>
        <CartCard
          key={product.id}
          id={product.id}
          price={product.price}
          title={product.title}
          image={product.image}
          count={product.count}
        />
        <hr className="mx-4 h-1 w-[calc(100%-2.5rem)] self-center rounded-full bg-[#AF7772] last:invisible"></hr>
      </>
    )
  })

  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-system-bg font-libre">
        {cart.length === 0 && <EmptyCart />}
        {cart.length > 0 && (
          <div className="w-[18rem] pb-6 lg:w-[30rem]">
            <div className="my-6 flex flex-col gap-y-4 rounded-md bg-[#F5E6BE] pt-2">
              {displayCart}
            </div>
            <button
              className="group relative h-8 w-full rounded-lg bg-ruby text-sm font-semibold text-system-bg lg:h-10"
              onClick={() => setCart([])}
            >
              <p className="absolute inset-0 flex items-center justify-center group-hover:invisible">
                Dummy Checkout
              </p>
              <p className="invisible absolute inset-0 flex items-center justify-center group-hover:visible">
                Doing this will reset Cart!
              </p>
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Cart
