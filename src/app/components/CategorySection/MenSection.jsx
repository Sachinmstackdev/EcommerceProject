import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * @typedef {Object} Category
 * @property {string} name
 * @property {string} slug
 * @property {string} image
 */

// Add 300*300 images for each category
const categories = [
  { name: "Oversized T-shirts", slug: "oversized-tshirts", image: "/assets/Men/pant2.png" },
  { name: "Hoodies", slug: "hoodies", image: "/assets/Men/pant1.png" },
  { name: "Joggers", slug: "joggers", image: "/assets/Men/pant1.png" },
  { name: "Jeans", slug: "jeans", image: "/assets/Men/pant1.png" },
  { name: "Classic Fit T-shirts", slug: "classic-fit-tshirts", image: "/assets/Men/pant2.png" },
  { name: "Full Sleeve T-shirts", slug: "full-sleeve-tshirts", image: "/assets/Men/pant1.png" },
  { name: "Sweatshirts", slug: "sweatshirts", image: "/assets/Men/pant2.png" },
  { name: "Cargos", slug: "cargos", image: "/assets/Men/pant1.png" },
  { name: "Sweaters", slug: "sweaters", image: "/assets/Men/pant2.png" },
  { name: "Pants", slug: "pants", image: "/assets/Men/pant.png" },
  { name: "Pyjamas", slug: "pyjamas", image: "/assets/Men/pant2.png" },
  { name: "Jackets", slug: "jackets", image: "/assets/Men/pant1.png" },
]

export default function Component() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category - Men</h2>
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" 
          style={{ 
            rowGap: '20px',
            columnGap: '1px'
          }}
        >
          {categories.map((category) => (
            <Link 
              href={`/category/${category.slug}`} 
              key={category.slug}
              className="cursor-pointer"
            >
              <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-80">
                <div className="flex-grow p-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="h-20 flex items-center justify-center bg-white">
                  <h3 className="text-sm font-medium text-gray-900 text-center px-2">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}