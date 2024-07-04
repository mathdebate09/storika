import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useMemo, useState } from "react"

import ProductsContext from "./ProductsContext.js"

import Home from "../components/Home"
import Products from "../components/Products"
import Cart from "../components/Cart"
import ProductPages from "../components/ProductPages"

import ErrorPage from "../components/ErrorPage"

function PageRouter() {
  const [cart, setCart] = useState([])
  const value = useMemo(() => ({ cart, setCart }), [cart, setCart])

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "products",
      element: <Products />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "products/:id",
      element: <ProductPages />,
    },
  ])

  return (
    <ProductsContext.Provider value={value}>
      <RouterProvider router={routes} />
    </ProductsContext.Provider>
  )
}

export default PageRouter
