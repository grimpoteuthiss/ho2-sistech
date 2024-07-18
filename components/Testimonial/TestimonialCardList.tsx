import { TestimonialCard } from "./TestimonialCard";
import type { TestimonialCardProps } from "./TestimonialCard";

type TestimonialCardListProps = {
    cards: TestimonialCardProps[];
};

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function TestimonialCardList({
    cards
}: TestimonialCardListProps) {
        return (
            <Swiper
                height={400}
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                breakpoints={{
                    1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                    },
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className=""
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard {...card} />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
}

export { TestimonialCardList };
