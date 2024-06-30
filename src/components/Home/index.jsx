import NavBar from "../NavBar"
import CarouselDefault from "./Carousel"

import retroLaptop from "../../assets/carousel/retro-laptop.png"
import retroDesktop from "../../assets/carousel/retro-desktop.jpg"
import retroGame from "../../assets/carousel/retro-game-console.png"
import retroKeyb from "../../assets/carousel/retro-keyb.png"
import walkman from "../../assets/carousel/walkman.png"

function Home() {
  const images = [retroLaptop, retroDesktop, retroGame, retroKeyb, walkman]

  return (
    <div className="bg-system-bg">
      <NavBar />
      <div className="mt-4 flex flex-col items-center justify-center font-libre text-3xl font-black text-soft-black lg:mt-6 lg:text-6xl">
        <p>fashion you&apos;ll never</p>
        <p className="gradient-y-gdn-to-rby">Mainstream</p>
      </div>
      <CarouselDefault images={images} />
    </div>
  )
}

export default Home
