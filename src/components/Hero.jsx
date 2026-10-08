
import { useState } from "react"

import {
  IoArrowBackOutline,
  IoArrowForwardOutline
} from "react-icons/io5"

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Discover Your Style",
      description:
        "Find the latest fashion and everyday essentials designed to make you look and feel your best.",
      button: "Shop Now",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "New Collection",
      description:
        "Explore our newest collection with modern designs, quality products, and great prices.",
      button: "Explore Collection",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Upgrade Your Lifestyle",
      description:
        "Everything you need in one place. Shop your favorite products with simple and fast delivery.",
      button: "Shop Products",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
    },
       {
      title: "New Collection",
      description:
        "Explore our newest collection with modern designs, quality products, and great prices.",
      button: "Explore Collection",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=80"
    },

  ]

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  const slide = slides[currentSlide]

  return (
    <section className="bg-slate-100">

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">

        {/* Hero */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">

          <div className="grid md:grid-cols-2 min-h-105 md:min-h-130">

            {/* Left - Content */}
            <div className="flex items-center px-6 py-10 sm:px-10 md:px-14 lg:px-20">

              <div className="max-w-lg">

                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500/70">
                  Featured Collection
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                  {slide.title}
                </h1>

                <p className="mt-5 text-base sm:text-lg leading-7 text-slate-600">
                  {slide.description}
                </p>

                <button
                  className="mt-7 rounded-lg bg-red-500/70 px-6 py-3
                  font-semibold text-white
                  transition-all duration-200
                  hover:bg-red-500/80 cursor-pointer"
                >
                  {slide.button}
                </button>

              </div>

            </div>

            {/* Right - Image */}
            <div className="relative min-h-70 md:min-h-130">

              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-white/10 to-black/10" />

            </div>

          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2
            flex h-10 w-10 items-center justify-center
            rounded-full bg-white/90 text-slate-700 shadow
            transition-all duration-200
            hover:bg-red-500/70 hover:text-white
            cursor-pointer"
          >
            <IoArrowBackOutline className="text-xl" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2
            flex h-10 w-10 items-center justify-center
            rounded-full bg-white/90 text-slate-700 shadow
            transition-all duration-200
            hover:bg-red-500/70 hover:text-white
            cursor-pointer"
          >
            <IoArrowForwardOutline className="text-xl" />
          </button>

          {/* Indicators */}
          <div
            className="absolute bottom-5 left-1/2
            flex -translate-x-1/2 gap-x-2"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer
                  ${
                    currentSlide === index
                      ? "w-7 bg-red-500/70"
                      : "w-2.5 bg-slate-400"
                  }`}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero

