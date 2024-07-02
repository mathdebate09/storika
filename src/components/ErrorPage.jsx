import { Link } from "react-router-dom"

import NavBar from "./NavBar"
import Footer from "./Footer"

import spaceship from "../assets/spaceship.png"

const ErrorPage = () => {
  return (
    <div className="bg-system-bg font-libre font-medium text-soft-black">
      <NavBar />
      <p className="font-garamond text-center text-7xl font-black italic lg:text-8xl">BEBOP.</p>
      <div className="mx-4 flex flex-col items-center py-8 text-lg lg:mx-32 lg:flex-row lg:text-2xl">
        <img src={spaceship}></img>
        <div>
          <p>
            Hey, looks like your swordfish crashed onto a{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404"
              className="underline"
            >
              4&theta;4
            </a>
          </p>
          <p>
            Until it gets repaired, you can checkout various{" "}
            <Link
              to="/products"
              className="font-bold text-ruby decoration-ruby decoration-wavy hover:underline"
            >
              Products
            </Link>{" "}
            we offer
          </p>
          <p>
            ...or maybe just wait for{" "}
            <a
              href="https://i.pinimg.com/originals/63/da/4d/63da4d86da32dbe1d8968ca08bf85e49.gif"
              className="font-garamond font-4xl font-semibold italic hover:underline"
            >
              spike
            </a>{" "}
            to arrive
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage
