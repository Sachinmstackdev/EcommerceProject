import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Define an array of image paths
const imagePaths = [
  '/assets/tshirts/tshirt1.png',
  '/assets/tshirts/tshirt2.png',
  '/assets/tshirts/tshirt3.png',
  '/assets/tshirts/tshirt4.png'
];

const categories = [
  { name: "Dresses", slug: "dresses", imageUrl: imagePaths[0] },
  { name: "Jackets", slug: "jackets", imageUrl: imagePaths[1] },
  { name: "Shirts", slug: "shirts", imageUrl: imagePaths[2] },
  { name: "Sliders", slug: "sliders", imageUrl: imagePaths[3] }
];

export default function Component() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <Link 
              href={`/category/${category.slug}`} 
              key={category.slug}
              className="relative block w-full aspect-square md:aspect-[3/4] overflow-hidden transition-transform duration-300 hover:scale-105"
              passHref
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Image for {category.name}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-1">
                <h2 className="text-sm font-bold text-white">{category.name}</h2>
              </div>
              <Image
                src={category.imageUrl}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}