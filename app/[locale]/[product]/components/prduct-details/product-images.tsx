"use client"
import { useState } from "react"
import Image from "next/image"

import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const images = [
    {
        id: 1,
        url: 'https://bizweb.dktcdn.net/thumb/large/100/408/530/products/1-f0d12278-2850-46a1-a233-7a2483d06b77.png?v=1685201315423'
    },
    {
        id: 2,
        url: 'https://bizweb.dktcdn.net/thumb/large/100/408/530/products/1-f0d12278-2850-46a1-a233-7a2483d06b77.png?v=1685201315423'
    },
    {
        id: 3,
        url: 'https://bizweb.dktcdn.net/thumb/large/100/408/530/products/1-f0d12278-2850-46a1-a233-7a2483d06b77.png?v=1685201315423'
    },
    {
        id: 4,
        url: 'https://bizweb.dktcdn.net/thumb/large/100/408/530/products/1-f0d12278-2850-46a1-a233-7a2483d06b77.png?v=1685201315423'
    },
    {
        id: 5,
        url: 'https://bizweb.dktcdn.net/thumb/large/100/408/530/products/1-f0d12278-2850-46a1-a233-7a2483d06b77.png?v=1685201315423'
    },
    {
        id: 6,
        url: 'https://bizweb.dktcdn.net/thumb/large/100/408/530/products/1-f0d12278-2850-46a1-a233-7a2483d06b77.png?v=1685201315423'
    }
]

export function ProductImages() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="col-span-2">
            <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className="!m-0 w-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center text-center">
                            <Image src={image?.url} alt="image" className="w-[366px] h-[366px] object-cover rounded-sm" width={366} height={366} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                slidesPerView={5}
                spaceBetween={10}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 3,
                    },
                    '@0.75': {
                        slidesPerView: 4,
                    },
                    '@1.00': {
                        slidesPerView: 5,
                    },
                    '@1.50': {
                        slidesPerView: 5,
                    },
                }}
                className="mySwiper w-full mt-5"
            >
                {images.map((image, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <div className={`flex items-center justify-center border p-1 rounded-sm ${activeIndex === index && 'border-black'}`} >
                            <Image src={image?.url} alt="image" className="w-[54px] h-[54px] object-cover rounded-sm" width={54} height={54} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >
        </div>
    )
}
