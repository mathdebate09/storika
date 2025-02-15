import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import AddToCart from "./AddToCart"

function ItemCard({ id, title, price, image, count, products, setProducts }) {
  return (
    <>
      <div className="flex h-72 w-full flex-col items-center justify-center rounded-md border-2 border-ruby bg-white p-2 text-center font-libre shadow-md shadow-soft-ruby">
        <Link
          to={`${title.toLowerCase().replace(/\s+/g, "-")}-${id}`}
          className="flex w-full justify-center"
        >
          <img className="mb-2 h-20" src={image} alt={title}></img>
        </Link>
        <Link to={`${title.toLowerCase().replace(/\s+/g, "-")}-${id}`} className="w-full">
          <h3 className="text-xs font-semibold lg:text-base">{title}</h3>
        </Link>
        <hr className="my-2 h-1 w-full rounded-full border-0 bg-soft-ruby"></hr>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-x-2">
          <p className="mb-1 text-xs lg:mb-0 lg:text-base">
            {count === 0 ? price.toFixed(2) : (price * count).toFixed(2)} &pound;
          </p>
          <AddToCart id={id} count={count} products={products} setProducts={setProducts} />
        </div>
      </div>
    </>
  )
}

ItemCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  count: PropTypes.number,
  products: PropTypes.array,
  setProducts: PropTypes.func,
}

export default ItemCard
