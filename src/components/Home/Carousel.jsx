import { Carousel } from "@material-tailwind/react"
import PropTypes from "prop-types"

function CarouselDefault({ images }) {
  const arrImageItems = images.map((image, index) => {
    return (
      <img key={index} src={image} alt={`Image ${index}`} className="h-full w-full object-cover" />
    )
  })

  return (
    <div className="flex items-center justify-center px-5 py-3 lg:py-8">
      <div className="h-full w-full lg:h-[33rem] lg:px-36">
        <Carousel
          autoplay={true}
          autoplayDelay={3500}
          loop={true}
          className="size-3 rounded-xl"
          transition={{
            type: "tween",
            duration: 2,
          }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {arrImageItems}
        </Carousel>
      </div>
    </div>
  )
}

CarouselDefault.propTypes = {
  images: PropTypes.array,
}

export default CarouselDefault
