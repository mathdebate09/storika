import { NavLink } from "react-router-dom"

import Heading from "./Heading"

function NavBar() {
  return (
    <>
      <Heading />
      <nav className="">
        <ul className="peer flex h-12 items-center justify-center gap-x-10 bg-nav-bg font-libre text-lg font-semibold text-soft-white decoration-4 underline-offset-4">
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
        </ul>
      </nav>
    </>
  )
}

export default NavBar
