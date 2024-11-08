"use client";

import React, { useEffect, useState } from 'react';

const ProductCarousel = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  const products = [
    {
      id: 1,
      title: "Oversized T-Shirts",
      price: "₹999",
      image: "/assets/tshirts/tshirt1.png",
      tag: "MAD DIWALI SALE"
    },
    {
      id: 2,
      title: "Winter Sweater",
      price: "₹1499",
      image: "/assets/tshirts/tshirt2.png",
      tag: "WINTERWEAR"
    },
    {
      id: 3,
      title: "Puffer Jacket",
      price: "₹2499",
      image: "/assets/tshirts/tshirt3.png",
      tag: "BEST SERVED HOT"
    },
    {
      id: 4,
      title: "Street Style",
      price: "₹1999",
      image: "/assets/tshirts/tshirt4.png",
      tag: "SAVINGS ZONE"
    },
    {
      id: 5,
      title: "Urban Collection",
      price: "₹1799",
      image: "/assets/tshirts/tshirt5.png",
      tag: "NEW ARRIVAL"
    },
    {
      id: 6,
      title: "Urban Collection",
      price: "₹1799",
      image: "/assets/tshirts/tshirt3.png",
      tag: "NEW ARRIVAL"
    },
    {
      id: 7,
      title: "Urban Collection",
      price: "₹1799",
      image: "/assets/tshirts/tshirt1.png",
      tag: "NEW ARRIVAL"
    }
  ];

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      if (activeIndex === products.length - 3) {
        // When reaching the last set of images (5,6,7)
        // Pause for 3 seconds to show the last set completely
        setTimeout(() => {
          setIsResetting(true);
          // Reset to first position with no animation
          setTimeout(() => {
            setActiveIndex(0);
            setIsResetting(false);
          }, 50);
        }, 3000);
      } else if (!isResetting) {
        setActiveIndex(prev => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, isResetting, products.length]);

  const initialProducts = products.slice(0, 3);
  const displayProducts = isClient ? products : initialProducts;
  
  return (
    <div className="w-full overflow-hidden bg-gray-100 p-6">
      <div className="relative flex flex-nowrap">
        {displayProducts.map((product, index) => (
          <div
            key={product.id}
            className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
            style={{
              transform: isClient 
                ? `translateX(-${activeIndex * 100}%)`
                : 'none',
              transition: isResetting 
                ? 'none' 
                : 'transform 0.5s ease-in-out'
            }}
          >
            <div className="rounded-lg overflow-hidden h-full">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-6 right-6 bg-black text-white px-4 py-2 rounded-full text-base">
                  {product.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-white drop-shadow-lg">{product.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white drop-shadow-lg">{product.price}</span>
                    <button 
                      className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors text-lg"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;