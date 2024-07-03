import { useState, useEffect, useContext } from "react"

import ProductsContext from "../../utils/ProductsContext.js"
import { sortData } from "../../utils/helpers.js"

import NavBar from "../NavBar"
import Footer from "../Footer"
import ItemCard from "./ItemCard"
import ItemsLoad from "./ItemsLoad"

function Products() {
  const { cart } = useContext(ProductsContext)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState("all")
  const [sort, setSort] = useState("popularity")

  useEffect(() => {
    setLoading(true)
    let currentFilter = filter === "all" ? "" : `/category/${filter}`
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products${currentFilter}`)
      const data = await response.json()

      let updatedData = data.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id)
        if (cartItem) {
          return { ...product, count: cartItem.count, isCarted: true }
        } else {
          return { ...product, count: 0, isCarted: false }
        }
      })

      updatedData = sortData(updatedData, sort)
      setProducts(updatedData)
      setLoading(false)
    }

    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  useEffect(() => {
    const filterProducts = async () => {
      let currentProducts = [...products]
      const updatedProducts = sortData(currentProducts, sort)
      setProducts(updatedProducts)
    }
    filterProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://fakestoreapi.com/products/categories")
      const data = await response.json()
      setCategories(data)
    }

    fetchCategories()
  }, [])

  const arrProducts = products.map((product) => (
    <ItemCard
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
      count={product.count}
      products={products}
      setProducts={setProducts}
    />
  ))

  console.log(products)

  return (
    <div className="bg-system-bg">
      <NavBar />
      <div className="align-center my-4 ml-4 flex flex-col justify-end gap-y-2 lg:mr-16 lg:flex-row lg:gap-x-6">
        <div>
          <form className="flex items-center gap-x-2">
            <label htmlFor="categories" className="text-sm font-medium text-soft-black">
              Filter:
            </label>
            <select
              defaultValue="all"
              id="categories"
              className="bg-soft-ruby w-40 cursor-pointer rounded-lg border border-gray-300 p-1.5 text-sm text-soft-black focus:border-ruby focus:ring-ruby"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Default</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div>
          <form className="flex items-center gap-x-2">
            <label htmlFor="sorters" className="text-sm font-medium text-soft-black">
              Sort by:
            </label>
            <select
              defaultValue="popularity"
              id="sorters"
              className="bg-soft-ruby w-40 cursor-pointer rounded-lg border border-gray-300 p-1.5 text-sm text-soft-black focus:border-ruby focus:ring-ruby"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="popularity">Most Popular</option>
              <option value="price-asc">Price: Low - High &darr;</option>
              <option value="price-dsc">Price: High - Low &uarr;</option>
              <option value="alpha-asc">Alphabetical: A - Z &darr;</option>
              <option value="alpha-dsc">Alphabetical: Z - A &uarr;</option>
            </select>
          </form>
        </div>
      </div>
      {loading && <ItemsLoad />}
      <div className="item-center mx-4 mb-8 grid grid-cols-2 justify-center gap-4 lg:mx-16 lg:grid-cols-4 lg:gap-8">
        {arrProducts}
      </div>
      <Footer />
    </div>
  )
}

export default Products
