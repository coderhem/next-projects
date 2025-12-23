"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import customizeSliderContent from "./card.json";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import heic2any from "heic2any";



interface CardSlider {
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
}
Fancybox.bind("[data-fancybox]", {});

const CustomizeCard: React.FC = () => {

  // store uploaded image per slide
  const [uploadedImages, setUploadedImages] = useState<(string | null)[]>(
    Array(customizeSliderContent.customizeSliderData.length).fill(null)
  );

  const handleUpload = async (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputFile = e.target.files?.[0];
    if (!inputFile) return;

    let finalFile: File = inputFile;

    // Convert HEIC / HEIF → JPG
    if (
      inputFile.type === "image/heic" ||
      inputFile.type === "image/heif"
    ) {
      const convertedBlob = (await heic2any({
        blob: inputFile,
        toType: "image/jpeg",
        quality: 0.9,
      })) as Blob;

      // ✅ Convert Blob to File
      finalFile = new File(
        [convertedBlob],
        inputFile.name.replace(/\.(heic|heif)$/i, ".jpg"),
        { type: "image/jpeg" }
      );
    }

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImages((prev) => {
        const updated = [...prev];
        updated[index] = reader.result as string;
        return updated;
      });
    };

    reader.readAsDataURL(finalFile);
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
            <div className="card-swiper border border-primary/20 rounded-md bg-white p-4 flex flex-col items-center relative z-1 overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-10 before:bg-primary/10 before:rounded-full before:skew-12">

              <span className="absolute top-2 -left-12 -rotate-45 z-30 text-xs font-bold text-white bg-green py-2 pr-2 w-40 text-center uppercase">Best Deal</span>

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
                  // capture='environment'
                  fill
                  className="object-contain z-20 pointer-events-none"
                  priority
                />
              </div>

              {/* Upload Button */}
              <div className="flex items-center justify-between w-full pt-5">
                <label className="text-xs text-primary cursor-pointer w-8/12">
                  <span className="border border-dashed border-primary p-2 hover:border-green transition-all duration-300 hover:text-green">Upload Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleUpload(index, e)}
                    className="hidden"
                  />
                </label>
                <a href="#design" data-fancybox className="btn btn-green">Design</a>
                <div className="hidden" id="design">
                  <h5>Choose Design</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default CustomizeCard;
