import { CDN_BASE_URL } from '@/constants/config'
import Image from 'next/image'
import React from 'react'

const HairTestAndResultBanner = () => {
  return (
    <div className="block xl:hidden lg:hidden md:hidden">
        <Image
          height={31}
          width={425}
          priority={true}
          src={`${CDN_BASE_URL}website_images/all_products/mobileBannerImages/mobileBanner2.png`}
          alt="Traya"
        />
        <Image
          height={99}
          width={425}
          priority={true}
          src={`${CDN_BASE_URL}website_images/all_products/mobileBannerImages/mobileBanner1.png`}
          alt="Treatment plan"
        />

        <Image
          height={78}
          width={425}
          priority={true}
          alt="Traya"
          src={`${CDN_BASE_URL}website_images/all_products/mobileBannerImages/mobileBanner3.png`}
        />
      </div>
  )
}

export default HairTestAndResultBanner