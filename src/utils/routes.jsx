import Home from "../components/Home";
import Products from "../components/Products";
import Cart from "../components/Cart";

import ErrorPage from "../components/ErrorPage";

const routes = [
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
];

export default routes;