import PropTypes from "prop-types"
import { useContext } from "react"

import ProductsContext from "../../utils/ProductsContext.js"

function ChangeCart({ id, count }) {
  const { cart, setCart } = useContext(ProductsContext)

  function handleCartAdd() {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, count: cartItem.count + 1 }
      }
      return cartItem
    })
    setCart(updatedCart)
  }

  function handleCartRemove() {
    const updatedCart = cart
      .map((cartItem) => {
        if (cartItem.id === id) {
          const newCount = cartItem.count - 1
          return { ...cartItem, count: newCount }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.count > 0)
    setCart(updatedCart)
  }

  if (count === 0) {
    return (
      <button
        className="w-20 rounded-xl border-4 border-golden bg-golden text-sm font-semibold text-black transition duration-150 ease-in-out hover:bg-system-bg lg:w-28"
        onClick={handleCartAdd}
      >
        Add Cart
      </button>
    )
  }

  return (
    <div className="mt-1 flex w-20 items-center justify-around lg:w-28">
      <button
        className="h-5 w-5 rounded-full border-4 border-golden bg-golden text-3xl font-medium text-black transition duration-150 ease-in-out hover:bg-system-bg lg:h-7 lg:w-7"
        onClick={handleCartRemove}
      >
        <p className="-mt-[14px] lg:-mt-[10px]">-</p>
      </button>
      {count}
      <button
        className="h-5 w-5 rounded-full border-4 border-golden bg-golden text-2xl font-medium text-black transition duration-150 ease-in-out hover:bg-system-bg lg:h-7 lg:w-7"
        onClick={handleCartAdd}
      >
        <p className="-ml-[1px] -mt-[10px] lg:-mt-[6px]">+</p>
      </button>
    </div>
  )
}

ChangeCart.propTypes = {
  id: PropTypes.number,
  count: PropTypes.number,
}

export default ChangeCart
