"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import customizeSliderContent from "./card.json";
import Image from "next/image";

interface CardSlider {
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
}

const CustomizeCard: React.FC = () => {
  // store uploaded image per slide
  const [uploadedImages, setUploadedImages] = useState<(string | null)[]>(
    Array(customizeSliderContent.customizeSliderData.length).fill(null)
  );

  const handleUpload = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImages((prev) => {
        const updated = [...prev];
        updated[index] = reader.result as string;
        return updated;
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      pagination={{ clickable: true }}
      autoplay={false}
      loop
      className="card-swiper pb-11"
    >
      {customizeSliderContent.customizeSliderData.map(
        (item: CardSlider, index: number) => (
          <SwiperSlide key={index}>
            <div className="card-swiper border border-primary/20 rounded-md bg-white p-4 flex flex-col items-center">

              {/* Frame + Image */}
              <div className="relative w-[200px] h-72 overflow-hidden">
                {/* Uploaded Image */}
                {uploadedImages[index] && (
                  <img
                    src={uploadedImages[index]!}
                    alt="Uploaded"
                    className="absolute top-[20.6%] left-[20.6%] w-[118px] h-[170px] object-cover z-30"
                  />
                )}

                {/* Frame Image */}
                <Image
                  src="/images/frame-photo-3.png"
                  alt="Frame"
                  fill
                  className="object-contain z-20 pointer-events-none"
                  priority
                />
              </div>

              {/* Upload Button */}
              <label className="mt-4 text-xs text-primary cursor-pointer">
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUpload(index, e)}
                  className="hidden"
                />
              </label>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default CustomizeCard;
