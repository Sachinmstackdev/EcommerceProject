'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from "../../lib/utils"

export default function ProductCarousel() {
  const products = [
    {
      id: 1,
      image: "/assets/tshirts/tshirt1.png",
      title: "Winter Collection",
      subtitle: "Starting at ₹999",
      price: 999,
      originalPrice: 1499,
      discount: "33% off",
      rating: 4.5,
    },
    {
      id: 2,
      image: "/assets/tshirts/tshirt2.png",
      title: "Formal Wear",
      subtitle: "Premium Collection",
      price: 1299,
      originalPrice: 1999,
      discount: "35% off",
      rating: 4.2,
    },
    {
      id: 3,
      image: "/assets/tshirts/tshirt3.png",
      title: "Casual Wear",
      subtitle: "Trending Now",
      price: 1099,
      originalPrice: 1599,
      discount: "30% off",
      rating: 4.0,
    },
    {
      id: 4,
      image: "/assets/tshirts/tshirt4.png",
      title: "Sports Collection",
      subtitle: "Up to 40% Off",
      price: 1199,
      originalPrice: 1999,
      discount: "40% off",
      rating: 4.7,
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  // Manual navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full max-w-8xl mx-auto">
      {/* Main carousel container */}
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        {/* Slides */}
        {products.map((product, index) => (
          <div
            key={product.id}
            className={cn(
              "absolute w-full h-full transition-transform duration-500 ease-in-out",
              {
                "translate-x-0 opacity-100": index === currentIndex,
                "translate-x-full opacity-0": index > currentIndex,
                "-translate-x-full opacity-0": index < currentIndex,
              }
            )}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-lg">{product.subtitle}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-bold">₹{product.price}</span>
                    <span className="text-sm line-through text-gray-300">₹{product.originalPrice}</span>
                    <span className="text-sm text-green-400">{product.discount}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400">★</span>
                    <span>{product.rating}</span>
                  </div>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </div>
  )
}
