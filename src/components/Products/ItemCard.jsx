import PropTypes from "prop-types"

import AddToCart from "./AddToCart"

function ItemCard({ id, title, price, image, count, products, setProducts }) {
  return (
    <>
      <div className="">
        <img className="h-20" src={image} alt={title}></img>
        <p>{title}</p>
        <hr></hr>
        <div>
          <p>{count === 0 ? price : price * count} &pound;</p>
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
