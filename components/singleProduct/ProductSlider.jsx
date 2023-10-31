import ArrowRight from "@/assets/svgs/ArrowRight";
import MinusDark from "@/assets/svgs/MinusDark";
import PlusDark from "@/assets/svgs/PlusDark";
import StarSvg from "@/assets/svgs/StarSvg";
import { CDN_BASE_URL } from "@/constants/config";
import { productArray } from "@/constants/constants";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

const ProductSlider = ({
  props,
  buyNow,
  decItem,
  incItem,
  cartCount,
  toggleClass,
  currentProduct,
}) => {
  const slider1 = useRef();
  const slider2 = useRef();
  const slider1Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveSlideIndex(index),
    asNavFor: slider2.current,
  };

  const slider2Settings = {
    dots: false,
    infinite: true,
    speed: 500,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          infinite: true,
        },
      },
    ],
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    asNavFor: slider1.current,
    beforeChange: (_, newIndex) => slider1.current.slickGoTo(newIndex),
  };
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const shortTitle = props?.serverSideCurrProd?._currentProduct?.short_title;

  return (
    <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
      <div className="bg-white xl:p-4 lg:p-4 md:p-4 px-0 py-4 flex flex-row items-center justify-between flex-wrap">
        <ul className="flex items-center xl:mt-8 xs:mt-2">
          <li className="inline-flex items-center">
            <span
              className="text-gray-600 text-[9px] xl:text-[16px] lg:text-sm md:text-sm  decoration-2 hover:underline cursor-pointer"
              onClick={() => {
                window.location.href = "/home";
              }}
            >
              HOME
            </span>
            <ArrowRight />
          </li>
          <li className="inline-flex items-center">
            <span
              className="text-gray-600 text-[9px] xl:text-[16px] lg:text-sm md:text-sm  decoration-2 hover:underline cursor-pointer"
              onClick={() => {
                window.location.href = "/collections/all-products";
              }}
            >
              {typeof shortTitle === "string"
                ? productArray.includes(shortTitle)
                  ? "PRODUCTS"
                  : "HAIR CARE PRODUCTS"
                : null}
            </span>
            <ArrowRight />
          </li>
          <li className="inline-flex items-center">
            <span className="text-gray-600 text-[9px] xl:text-[16px] lg:text-sm md:text-sm">
              {typeof currentProduct?.short_title === "string"
                ? currentProduct.short_title.toUpperCase()
                : null}
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-white xl:p-4 lg:p-4 md:p-4 px-0 py-4 flex flex-row items-center justify-between flex-wrap">
        <div className="w-full xl:w-5/12 md:w-6/12 lg:w-5/12">
          <Slider {...slider1Settings} className="slider1" ref={slider1}>
            {currentProduct?.product_media?.map((image, index) => {
              const _currImage = image.url;
              return image.media_type == "video" ? (
                <div className="relative mx-3">
                  <video
                    controls={false}
                    className="collection-banner-image w-[245px] mx-auto xl:w-full lg:w-full md:w-full"
                    onClick={(e) => {
                      setShowProductImg(_currImage);
                      toggleClass(e);
                      setShowProductImgType("video");
                    }}
                  >
                    <source src={_currImage} type="video/mp4" />
                  </video>
                  <i className="absolute top-[45%] left-[45%]">&#9658;</i>
                </div>
              ) : (
                <Image
                  className="collection-banner-image w-[350px] mx-auto xl:w-full lg:w-full md:w-full "
                  height={499}
                  width={499}
                  key={index}
                  priority={true}
                  src={_currImage}
                  alt="image"
                  onClick={(e) => {
                    setShowProductImg(_currImage);
                    toggleClass(e);
                    setShowProductImgType("image");
                  }}
                />
              );
            })}
          </Slider>

          <Slider {...slider2Settings} className="slider2 mt-2" ref={slider2}>
            {currentProduct?.product_media?.map((image, index) => {
              const _currImage = image.url;
              return image.media_type == "video" ? (
                <div className="relative mx-2 px-1">
                  <video
                    controls={false}
                    className="video w-18 h-18 collection-banner-image rounded-xl border-black border-[2px] p-[2px]"
                    onClick={(e) => {
                      setShowProductImg(_currImage), toggleClass(e);
                      setShowProductImgType("video");
                    }}
                  >
                    <source src={_currImage} type="video/mp4" />
                  </video>
                  <i className="absolute top-[35%] left-[35%]">&#9658;</i>
                </div>
              ) : (
                <div className="mx-2 px-1">
                  <div
                    className={`collection-banner-image w-18 h-18 rounded-lg ${
                      activeSlideIndex == index &&
                      "border-black border-[2px] p-[2px]"
                    }`}
                  >
                    <Image
                      height={499}
                      width={499}
                      key={index}
                      priority={true}
                      src={_currImage}
                      alt="image"
                      onClick={(e) => {
                        setShowProductImg(_currImage), toggleClass(e);
                        setShowProductImgType("image");
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="w-12/12 xl:w-6/12 md:w-6/12 lg:w-7/12 self-start pl-0 xl:pl-5 md:pl-5 lg:pl-5 pt-1 xl:pl-0 md:pl-0 lg:pl-0">
          <h2
            className="font-nunito text-xl xl:text-[40px] lg:text-4xl md:text-2xl  font-bold text-custom-black"
            style={{ lineHeight: "1.2" }}
          >
            {currentProduct?.long_title}
          </h2>
          <h2 className="font-nunito text-lg xl:text-[28px] lg:text-2xl md:text-xl xs:text-[15px] text-custom-black py-4">
            {currentProduct?.long_sub_title}
          </h2>
          <div>
            <div className="flex text-yellow-400">
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <StarSvg />
              <a
                className="text-lg ml-2 underline text-sm xl:text-lg lg:text-lg md:text-[16px]"
                style={{ color: "#62a61e" }}
              >
                (1507 customer reviews)
              </a>
            </div>
          </div>
          <div className="  flex-wrap flex-row justify-between py-4 hidden xl:flex lg:flex md:flex">
            {currentProduct?.supporting_icons?.map((icon, index) => {
              return (
                <div key={index}>
                  <Image
                    height={56}
                    width={56}
                    priority={true}
                    src={icon.icon_url}
                    className="mx-auto w-14 xl:w-14 lg:w-14 md:w-9"
                    alt={icon.icon_title}
                  />
                  <h3 className="text-center font-sans text-[10px] w-14 xl:w-14 lg:w-14 md:w-9">
                    {icon.icon_title}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="py-3 xl:py-2 lg:py-5 md:py-5">
            <h3 className="font-nunito">
              {currentProduct?.taxable ? "Tax included" : "Without tax"}.
            </h3>
          </div>
          <hr
            className="block xl:hidden lg:hidden md:hidden border-1 rounded-full mx-auto"
            style={{ borderColor: "#3e3e3e" }}
          />

          <div className="hidden xl:flex lg:flex md:flex flex-wrap justify-between">
            <h3
              className="font-bold font-nunito text-4xl font-nunito"
              style={{ color: "#747474" }}
            >
              Price:{" "}
              <span style={{ color: "#62a61e" }}>
                ₹ {currentProduct?.price.amount} /-
              </span>
            </h3>
            <div className="quantity mt-2 flex">
              <button
                className={
                  cartCount < 2
                    ? "cursor-no-drop border-grey border-2 px-3  border-solid align-top text-center"
                    : "border-grey border-2 px-3  roundedborder-solid align-top"
                }
                onClick={() => decItem()}
                disabled={cartCount < 2 ? true : false}
              >
                <MinusDark />
              </button>
              <input
                type="text"
                className="border-grey border-2 border-l-0 border-r-0 w-14  h-10 border-solid align-top align-center bg-white font-bold"
                disabled
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
                value={cartCount}
              />
              <button
                className="border-grey border-2  px-3  border-solid align-top"
                onClick={() => incItem()}
              >
                <PlusDark />
              </button>
            </div>
          </div>
          <div className="flex xl:hidden lg:hidden md:hidden flex-wrap justify-between mt-2">
            <h3
              className=" font-nunito xl:text-xl xs:text-[23px] self-center font-nunito"
              style={{ color: "#747474" }}
            >
              Price:{" "}
              <span style={{ color: "#62a61e", fontWeight: "700" }}>
                ₹ {currentProduct?.price.amount} /-
              </span>
            </h3>
            <div className="quantity  flex self-center">
              <button
                className={
                  cartCount < 2
                    ? "cursor-no-drop border-grey border-2   border-solid align-top text-center"
                    : "border-grey border-2 roundedborder-solid align-top"
                }
                onClick={() => decItem()}
                disabled={cartCount < 2 ? true : false}
              >
                <MinusDark />
              </button>
              <input
                type="text"
                className="border-grey border-2 border-l-0 border-r-0 w-10  h-7 border-solid align-top align-center bg-white font-bold"
                disabled
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
                value={cartCount}
              />
              <button
                className="border-grey border-2  border-solid align-top"
                onClick={() => incItem()}
              >
                <PlusDark />
              </button>
            </div>
          </div>
          <div className="xl:flex lg:flex md:flex flex-wrap justify-between my-5">
            <button
              className="cursor-pointer cartProduct flex w-full xl:w-[45%] md:w-60 lg:w-60 xs:hidden md:flex xl:flex h-12 items-center justify-center text-lg font-bold rounded-xl mt-5 uppercase"
              onClick={() => {
                handleAddToCart(currentProduct.variant_id);
                props.setShowSidebar(true);
              }}
            >
              <div className="cart_icon_img mr-4">
                <Image
                  height={25}
                  width={27}
                  priority={true}
                  className="cart_icon_img mr-4"
                  src={`${CDN_BASE_URL}website_images/all_products/productPageLogos/cartLogo.png`}
                  alt="result-page-02"
                  style={{ width: 27, height: 25 }}
                />{" "}
              </div>
              ADD TO CART
            </button>
            <button
              // href="https://chat.whatsapp.com/EfWNm48o6Ul4FecOVelEYs"
              onClick={() => buyNow(currentProduct.variant_id)}
              className=" cursor-pointer buyNowProduct flex w-full xl:w-[45%] md:w-60 lg:w-60 h-12 xs:hidden md:flex xl:flex items-center justify-center text-lg font-bold rounded-xl mt-5 uppercase"
            >
              BUY IT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
