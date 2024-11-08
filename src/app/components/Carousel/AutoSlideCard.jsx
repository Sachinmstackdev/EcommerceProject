'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from "../../lib/utils"

export default function Component() {
  const cards = [
    {
      id: 1,
      image: "/assets/AutoSlider/mshirt1.jpeg",
      title: "Statement Shirts",
      subtitle: "Starts At ₹449"
    },
    {
      id: 2,
      image: "/assets/AutoSlider/mshirt2.jpeg",
      title: "Summer Collection",
      subtitle: "Under ₹599"
    },
    {
      id: 3,
      image: "/assets/AutoSlider/mshirt3.jpeg",
      title: "Venom Merchandise",
      subtitle: "Official Collection"
    },
    {
      id: 4,
      image: "/assets/AutoSlider/mshirt4.jpeg",
      title: "Marvel T-Shirts",
      subtitle: "Starting ₹499"
    },
    {
      id: 5,
      image: "/assets/AutoSlider/mshirt5.jpeg",
      title: "DC Collection",
      subtitle: "Premium Range"
    },
    {
      id: 6,
      image: "/assets/AutoSlider/mshirt6.jpeg",
      title: "Anime Series",
      subtitle: "New Arrivals"
    },
    {
      id: 7,
      image: "/assets/AutoSlider/mshirt1.jpeg",
      title: "Graphic Tees",
      subtitle: "Best Sellers"
    },
    {
      id: 8,
      image: "/assets/AutoSlider/mshirt1.jpeg",
      title: "Limited Edition",
      subtitle: "Exclusive Designs"
    }
  ]

  const [visibleCards, setVisibleCards] = useState([0, 1])
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true)
      
      setTimeout(() => {
        setVisibleCards(prev => {
          const nextStartIndex = (prev[0] + 2) % cards.length
          return [nextStartIndex, (nextStartIndex + 1) % cards.length]
        })
        setTransitioning(false)
      }, 1000)
    }, 10000)

    return () => clearInterval(timer)
  }, [cards.length])

  const getCardStyle = (index) => {
    if (transitioning) {
      return 'translate-x-[-100%] opacity-100 transition-all duration-1000 ease-in-out'
    }
    return 'translate-x-0 opacity-100 transition-all duration-1000 ease-in-out'
  }

  return (
    <div className="w-full overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative h-[600px] overflow-hidden rounded-xl">
          <div className="flex gap-4 absolute inset-0">
            {visibleCards.map((cardIndex, index) => (
              <div
                key={cards[cardIndex].id}
                className={cn(
                  "w-2/3 relative overflow-hidden rounded-lg bg-white shadow-lg",
                  getCardStyle(index)
                )}
              >
                <div className="relative h-full">
                  <Image
                    src={cards[cardIndex].image}
                    alt={cards[cardIndex].title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-3xl font-bold mb-2">{cards[cardIndex].title}</h2>
                    <p className="text-xl text-white/90">{cards[cardIndex].subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {transitioning && (
              <>
                <div className={cn(
                  "w-2/3 relative overflow-hidden rounded-lg bg-white shadow-lg left-full",
                  "translate-x-0 transition-all duration-1000 ease-in-out"
                )}>
                  <Image
                    src={cards[(visibleCards[1] + 1) % cards.length].image}
                    alt={cards[(visibleCards[1] + 1) % cards.length].title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      {cards[(visibleCards[1] + 1) % cards.length].title}
                    </h2>
                    <p className="text-xl text-white/90">
                      {cards[(visibleCards[1] + 1) % cards.length].subtitle}
                    </p>
                  </div>
                </div>
                <div className={cn(
                  "w-2/3 relative overflow-hidden rounded-lg bg-white shadow-lg left-[150%]",
                  "translate-x-0 transition-all duration-1000 ease-in-out"
                )}>
                  <Image
                    src={cards[(visibleCards[1] + 2) % cards.length].image}
                    alt={cards[(visibleCards[1] + 2) % cards.length].title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      {cards[(visibleCards[1] + 2) % cards.length].title}
                    </h2>
                    <p className="text-xl text-white/90">
                      {cards[(visibleCards[1] + 2) % cards.length].subtitle}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: cards.length / 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!transitioning) {
                  setTransitioning(true)
                  setTimeout(() => {
                    const startIndex = index * 2
                    setVisibleCards([startIndex, (startIndex + 1) % cards.length])
                    setTransitioning(false)
                  }, 1000)
                }
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                visibleCards[0] === index * 2
                  ? "w-8 bg-gray-900" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to cards ${index * 2 + 1} and ${index * 2 + 2}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}