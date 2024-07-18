import { ProfileAvatar } from "../Profile/ProfileAvatar";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

type TestimonialCardProps = {
    imageUrl: string;
    name: string;
    job: string;
    description: string;
}

function TestimonialCard({
    imageUrl,
    name,
    job,
    description,
    }: TestimonialCardProps) {

        return (
            <article className="bg-yellow rounded-lg p-5 flex flex-col sm:flex-row gap-5 border-2 border-black">
                <div className="gap-1 w-full sm:w-1/3 flex flex-col items-center text-center">
                    <ProfileAvatar height={86} width={86} imageUrl={imageUrl} className="h-24 w-24"></ProfileAvatar>
                    <h3>{name}</h3>
                    <p>{job}</p>
                    <h3 className="text-maroon">★★★★★</h3>
                </div>
                <div className="w-full sm:w-2/3 flex items-center sm:border-l-2 border-black sm:pl-5">
                    <p className="italic">{description}</p>
                </div>
            </article>
        )
}

export { TestimonialCard };
export type { TestimonialCardProps };