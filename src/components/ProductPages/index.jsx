import { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

import ProductsContext from "../../utils/ProductsContext.js"

import NavBar from "../NavBar"
import Footer from "../Footer"
import EditCart from "./EditCart"
import ProductPageLoad from "./ProductPageLoad"

function ProductPages() {
  const { id } = useParams()
  const currentId = parseInt(id)

  const { cart } = useContext(ProductsContext)
  const [currentProduct, setCurrentProduct] = useState({})
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAndProcessProduct = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products`)
      const data = await response.json()
      setProducts(data)

      const product = data.find((product) => product.id === currentId)

      const cartItem = cart.find((item) => item.id === product.id)

      let updatedProduct = product
      if (cartItem) {
        updatedProduct = { ...product, count: cartItem.count, isCarted: true }
      } else {
        updatedProduct = { ...product, count: 0, isCarted: false }
      }

      console.log(updatedProduct)

      setCurrentProduct(updatedProduct)
      setLoading(false)
    }

    fetchAndProcessProduct()
  }, [cart, currentId])

  return (
    <div className="bg-system-bg">
      <NavBar />
      <div className="ml-4 mt-6 lg:ml-16">
        <Link to="/products" className="">
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
            className="h-10 w-14 rounded-lg border-2 border-soft-black bg-soft-white"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
      </div>
      {loading && <ProductPageLoad />}
      {!loading && (
        <div className="px-4 py-6 font-libre lg:px-52">
          <div className="flex flex-col gap-6 lg:flex-row">
            <img src={currentProduct.image} className="h-60 w-fit"></img>
            <div className="">
              <div className="flex flex-col gap-y-2">
                <p className="text-xl font-bold lg:w-5/6 lg:text-2xl">{currentProduct.title}</p>
                <p className="text-base font-medium lg:text-lg">{currentProduct.description}</p>
              </div>
              <div className="mt-2 flex items-center">
                <svg
                  className="me-1 h-4 w-4 text-golden"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                  {currentProduct.rating.rate}
                </p>
                <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  {currentProduct.rating.count} reviews
                </a>
              </div>
              <hr className="my-3 h-1 border-0 bg-soft-ruby"></hr>
              <div className="mb-2 flex gap-x-3">
                <p className="mb-1 lg:mb-0 lg:text-base">
                  {currentProduct.count === 0
                    ? currentProduct.price.toFixed(2)
                    : (currentProduct.price * currentProduct.count).toFixed(2)}{" "}
                  &pound;
                </p>
                <EditCart id={currentProduct.id} count={currentProduct.count} products={products} />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default ProductPages
