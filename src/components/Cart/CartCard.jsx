import { useContext } from "react"
import PropTypes from "prop-types"

import ProductsContext from "../../utils/ProductsContext.js"

import ChangeCart from "./ChangeCart"

function CartCard({ id, price, title, image, count }) {
  const { cart, setCart } = useContext(ProductsContext)

  function deleteItem(id) {
    const copiedCart = [...cart]
    const updatedCart = copiedCart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }

  return (
    <>
      <div className="grid w-full grid-cols-3 flex-col items-center justify-center p-2 text-center font-libre shadow-soft-ruby lg:w-[30rem]">
        <img className="mb-2 h-20 justify-self-center" src={image} alt={title}></img>
        <div className="w-36 lg:w-64">
          <h3 className="text-xs font-semibold lg:text-base">{title}</h3>
          <div className="mt-2 flex flex-col items-center justify-center lg:flex-row lg:gap-x-2">
            <p className="text-xs lg:mb-0 lg:text-base">
              {count === 0 ? price.toFixed(2) : (price * count).toFixed(2)} &pound;
            </p>
            <ChangeCart id={id} count={count} />
          </div>
        </div>
        <button onClick={() => deleteItem(id)} className="justify-self-end hover:text-ruby">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-4 h-16"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </div>
    </>
  )
}

CartCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  count: PropTypes.number,
}

export default CartCard
