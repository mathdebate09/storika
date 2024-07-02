import PropTypes from "prop-types"
import { useContext } from "react"

import ProductsContext from "../../utils/ProductsContext.js"

function AddToCart({ id, count, products, setProducts }) {
  const { cart, setCart } = useContext(ProductsContext)

  function handleCartAdd() {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, count: product.count + 1, isCarted: true }
      }
      return product
    })
    setProducts(updatedProducts)

    // Update the cart
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        // Update count for the existing product in the cart
        return { ...cartItem, count: cartItem.count + 1 }
      }
      return cartItem
    })

    // Check if the product was not already in the cart to add it
    const productInCart = cart.find((product) => product.id === id)
    if (!productInCart) {
      const addedProduct = updatedProducts.find((product) => product.id === id)
      setCart([...updatedCart, addedProduct]) // Add new product to the cart
    } else {
      setCart(updatedCart) // Update cart with the new counts
    }
  }

  function handleCartRemove() {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const newCount = product.count - 1
        return { ...product, count: newCount, isCarted: newCount > 0 }
      }
      return product
    })
    setProducts(updatedProducts)

    // Update the cart with the new count or remove the product if its count is 0
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
    return <button onClick={handleCartAdd}>Add Cart</button>
  }

  return (
    <div>
      <button onClick={handleCartRemove}>-</button>
      {count}
      <button onClick={handleCartAdd}>+</button>
    </div>
  )
}

AddToCart.propTypes = {
  id: PropTypes.number,
  count: PropTypes.number,
  products: PropTypes.array,
  setProducts: PropTypes.func,
}

export default AddToCart
