import Image from 'next/image'

export default function Component() {
  return (
    <div className="w-full h-[196px] bg-gray-200 relative overflow-hidden pt-12">
      <Image
        src="/assets/offerImages/coverz.png"
        alt="Cover image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  )
}