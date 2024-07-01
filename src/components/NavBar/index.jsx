import { NavLink } from "react-router-dom"

import Heading from "./Heading"

function NavBar() {
  return (
    <>
      <Heading />
      <nav className="">
        <ul className="peer flex h-12 items-center justify-center gap-x-5 bg-nav-bg font-libre text-lg font-semibold text-soft-white decoration-4 underline-offset-4 lg:gap-x-10">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : undefined)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "underline" : undefined)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => (isActive ? "underline" : undefined)}>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/404" className={({ isActive }) => (isActive ? "underline" : undefined)}>
              4&theta;4
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
