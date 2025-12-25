"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import cardSliderContent from "./card.json";
import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";

interface CardSlider {
  id: number;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  btnLink: string;
  btnText: string;
  frameDescription: string;
  priceText: number;
  cartButton: string;
  cartBtnClass: string;
  cartBtnLink: string;
}

const FrameCard: React.FC = () => {

  const addToCart = useCartStore((state) => state.addToCart);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    img: HTMLImageElement | null
  ) => {
    if (!img) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
    e.currentTarget.style.cursor = "zoom-in";
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement>,
    img: HTMLImageElement | null
  ) => {
    if (!img) return;

    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
    e.currentTarget.style.cursor = "default";
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 25 },
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      className="mySwiper pb-11!"
    >
      {cardSliderContent.cardSliderData.map((item: CardSlider, index: number) => {
        const imgRef = useRef<HTMLImageElement | null>(null);
        return (
          <SwiperSlide key={`${item.id}-${index}`} className=" h-auto!">
            <div className="card-swiper shadow border border-primary/20 relative rounded-md bg-white pb-3 flex justify-between flex-col  h-full">
              <div className="image-container overflow-hidden px-4 pt-3 flex justify-center"
                onMouseMove={(e) =>
                  handleMouseMove(e, imgRef.current)
                }
                onMouseLeave={(e) =>
                  handleMouseLeave(e, imgRef.current)
                }>

                <Image
                  src={item.imgSrc}
                  width={item.imgWidth}
                  height={item.imgHeight}
                  alt={item.imgAlt}
                  loading="lazy"
                  className="img transition-transform duration-200 w-[80%] object-cover h-auto"
                  ref={(el) => {
                    if (el) imgRef.current = el;
                  }}
                />
              </div>
              <div className="[&_h2]:text-green [&_h2]:font-lato! pt-5 px-4">
                <ul className="py-3 flex gap-2 text-md text-gold">
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <i className="fa fa-star" />
                    </li>
                  ))}
                </ul>
                <div dangerouslySetInnerHTML={{ __html: item.frameDescription }} />
                <div className="pt-4 flex justify-between items-center">
                  <span className="text-pink font-semibold">Rs.{item.priceText}</span>
                  <button
                    onClick={() =>
                      addToCart({
                        id: item.id,
                      })
                    }
                    className={item.cartBtnClass}>{item.cartButton}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      }
      )}
    </Swiper>
  );
};

export default FrameCard;

