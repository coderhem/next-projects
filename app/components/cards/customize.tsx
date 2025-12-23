"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import Image from "next/image";

import data from "./card.json";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

interface SliderItem {
  id: number;
  badge: string;
  frameImage: string;
  designImage: string;
  uploadPosition: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

let heic2any: any = null;

const CustomizeCard = () => {
  const items: SliderItem[] = data.customizeSliderData;

  const [uploadedImages, setUploadedImages] = useState<(string | null)[]>(
    Array(items.length).fill(null)
  );

  /* Fancybox */
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => Fancybox.destroy();
  }, []);

  /* Load HEIC converter */
  useEffect(() => {
    import("heic2any").then((mod) => (heic2any = mod.default));
  }, []);

  const handleUpload = useCallback(
    async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      let finalFile = file;

      if (
        (file.type === "image/heic" || file.type === "image/heif") &&
        heic2any
      ) {
        const blob = await heic2any({
          blob: file,
          toType: "image/jpeg",
          quality: 0.9,
        });

        finalFile = new File(
          [blob],
          file.name.replace(/\.(heic|heif)$/i, ".jpg"),
          { type: "image/jpeg" }
        );
      }

      const reader = new FileReader();
      reader.onload = () =>
        setUploadedImages((prev) => {
          const copy = [...prev];
          copy[index] = reader.result as string;
          return copy;
        });

      reader.readAsDataURL(finalFile);
    },
    []
  );

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}

      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      autoplay={false}
      loop
      className="card-swiper pb-11"
    >
      {items.map((item, index) => (
        <SwiperSlide key={item.id}>
          <div className="relative flex flex-col items-center bg-white border border-primary/20 rounded-md p-4 overflow-hidden">
            {/* Badge */}
            <span className="absolute top-2 -left-12 -rotate-45 z-30 text-xs font-bold text-white bg-green py-2 pr-2 w-40 text-center uppercase">
              {item.badge}
            </span>

            {/* Frame */}
            <div className="relative w-[200px] h-72">
              {uploadedImages[index] && (
                <img
                  src={uploadedImages[index]!}
                  alt="Uploaded"
                  style={{
                    top: item.uploadPosition.top,
                    left: item.uploadPosition.left,
                    width: item.uploadPosition.width,
                    height: item.uploadPosition.height,
                  }}
                  className="absolute object-cover z-30"
                />
              )}

              <Image
                src={item.frameImage}
                alt="Frame"
                fill
                priority
                className="object-contain pointer-events-none"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between w-full pt-5">
              <label className="w-8/12 text-xs text-primary cursor-pointer">
                <span className="border border-dashed border-primary p-2 hover:border-green transition duration-300 hover:text-green">
                  Upload Photo
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUpload(index, e)}
                  className="hidden"
                />
              </label>

              <a
                href={`#design-${item.id}`}
                data-fancybox
                className="btn btn-green"
              >
                Design
              </a>

              <div id={`design-${item.id}`} className="hidden max-w-[90%] lg:max-w-[40%]!">
                <Image
                  src={item.designImage}
                  width={600}
                  height={600}
                  alt="Frame Design"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default CustomizeCard;
