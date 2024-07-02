import { Link } from "react-router-dom"

import Footer from "../Footer"
import NavBar from "../NavBar"
import CarouselDefault from "./Carousel"

import retroLaptop from "../../assets/carousel/retro-laptop.png"
import retroDesktop from "../../assets/carousel/retro-desktop.jpg"
import retroGame from "../../assets/carousel/retro-game-console.png"
import retroKeyb from "../../assets/carousel/retro-keyb.png"
import walkman from "../../assets/carousel/walkman.png"
import painting from "../../assets/painting.png"

function Home() {
  const images = [retroLaptop, retroDesktop, retroGame, retroKeyb, walkman]

  return (
    <>
      <div className="bg-system-bg font-libre text-soft-black">
        <NavBar />
        <div className="mt-4 flex cursor-default flex-col items-center justify-center text-3xl font-black lg:mt-6 lg:text-6xl">
          <p>fashion you&apos;ll never</p>
          <p className="gradient-y-gdn-to-rby">Mainstream</p>
        </div>
        <CarouselDefault images={images} />
        <p className="text-libre mx-5 flex h-8 cursor-default items-center justify-center rounded-full bg-golden text-sm font-bold lg:mx-40 lg:text-xl">
          Site-wide Sale! 31% off on all Products!!
        </p>
        <div className="mx-5 mt-5 flex items-center justify-center gap-x-4 text-lg font-semibold lg:mx-40 lg:gap-x-10 lg:text-2xl">
          <Link
            to="/products"
            className="flex h-10 w-full items-center justify-center rounded-full bg-header-bg"
          >
            her<span className="font-playwrite text-ruby">storika</span>🌷
          </Link>
          <Link
            to="/products"
            className="flex h-10 w-full items-center justify-center rounded-full bg-header-bg"
          >
            his<span className="font-playwrite text-ruby">storika</span>🍺
          </Link>
        </div>
        <div className="img-overlay-container mx-5 my-5 flex items-center justify-center lg:mx-40 lg:h-[30rem]">
          <img
            className="h-full w-full object-cover"
            src={painting}
            alt="horse and carriage inside cave painting"
          ></img>
          <Link
            to="/products"
            className="overlay-text text-5xl font-semibold text-header-bg lg:text-8xl lg:font-bold"
          >
            Painting. Collection.
          </Link>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
