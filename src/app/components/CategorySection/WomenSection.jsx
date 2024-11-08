import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * @typedef {Object} Category
 * @property {string} name
 * @property {string} slug
 * @property {string} image
 */

const categories = [
  { name: "Kurtis", slug: "kurtis", image: "/assets/Women/kurti1.png" },
  { name: "Dresses", slug: "dresses", image: "/assets/Women/dress1.png" },
  { name: "Tops", slug: "tops", image: "/assets/Women/top1.png" },
  { name: "Sarees", slug: "sarees", image: "/assets/Women/saree1.png" },
  { name: "Leggings", slug: "leggings", image: "/assets/Women/legging1.png" },
  { name: "Palazzo", slug: "palazzo", image: "/assets/Women/palazzo1.png" },
  { name: "Skirts", slug: "skirts", image: "/assets/Women/skirt1.png" },
  { name: "Jumpsuits", slug: "jumpsuits", image: "/assets/Women/jumpsuit1.png" },
  { name: "Co-ords", slug: "coords", image: "/assets/Women/coord1.png" },
  { name: "Pants", slug: "pants", image: "/assets/Women/pant1.png" },
  { name: "Nightwear", slug: "nightwear", image: "/assets/Women/nightwear1.png" },
  { name: "Jackets", slug: "jackets", image: "/assets/Women/jacket1.png" },
]

export default function Component() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category - Women</h2>
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
