import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Card, CardContent } from "./ui/card"
import Image from 'next/image'

export default function CategorySelector() {
  return (
    <div className="w-full bg-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shop for Her */}
          <Link href="/shop/women" className="block group">
            <Card className="overflow-hidden transition-shadow hover:shadow-lg relative">
              <Image 
                src="/assets/girl.png"
                alt="Women's Fashion"
                width={600}
                height={192}
                className="object-cover absolute inset-0 w-full h-full"
                priority
              />
              <CardContent className="p-6 flex items-center justify-between bg-gradient-to-r from-pink-500/80 to-pink-300/80 h-48 relative z-10">
                <h2 className="text-3xl font-bold text-white">SHOP FOR HER</h2>
                <div className="bg-white text-pink-500 p-2 rounded-full group-hover:bg-pink-100 transition-colors duration-200">
                  <ArrowRight size={24} />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Shop for Him */}
          <Link href="/shop/men" className="block group">
            <Card className="overflow-hidden transition-shadow hover:shadow-lg relative">
              <Image 
                src="/assets/boy.png"
                alt="Men's Fashion"
                width={600}
                height={192}
                className="object-cover absolute inset-0 w-full h-full"
                priority
              />
              <CardContent className="p-6 flex items-center justify-between bg-gradient-to-l from-blue-500/80 to-blue-300/80 h-48 relative z-10">
                <div className="bg-white text-blue-500 p-2 rounded-full group-hover:bg-blue-100 transition-colors duration-200">
                  <ArrowLeft size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">SHOP FOR HIM</h2>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}