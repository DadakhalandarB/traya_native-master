import { CDN_BASE_URL } from "@/constants/config";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const FrequentlyBoughtProduct = ({ frequentlyBrought, props }) => {
  let settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: frequentlyBrought?.length > 3,
    lazyload: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
    ],
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow variant={"light"} />,
    prevArrow: <SamplePrevArrow variant={"light"} />,
  };
  let settingsNoArrow = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: frequentlyBrought?.length > 3,
    lazyload: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
    ],
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div>
      {frequentlyBrought?.length >= 1 && (
        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
          <div className="flex flex-col justify-center items-center mt-5 mb-0 xl:mb-5 lg:mb-5 md:mb-5">
            <h2 className="xl:text-[44px] xs:text-2xl font-bold font-sans text-custom-black">
              Frequently Bought Together
            </h2>
          </div>
          <div className="bg-gray py-4 xl:flex md:hidden lg:flex xs:hidden items-center flex-wrap justify-center">
            <Slider
              {...settings}
              className="xl:w-12/12 lg:w-11/12 md:w-11/12  mx-auto"
            >
              {frequentlyBrought?.map((item, index) => {
                const id = `fbi${index}`;
                return (
                  <div
                    key={id}
                    className="productItem p-2 rounded-lg border w-72 mx-auto h-full"
                  >
                    <div>
                      <a href={`${item.routeName}`} className="">
                        <div className="relative group">
                          <div className="xl:w-[360px] lg:w-[300px] md:w-[300px] mx-auto mt-6 transform group-hover:scale-110 transition-transform duration-300">
                            <Image
                              height={360}
                              width={360}
                              loading="lazy"
                              src={item.img}
                              className="xl:w-[360px] lg:w-[300px] md:w-[300px] mx-auto mt-6 transform group-hover:scale-110 transition-transform duration-300"
                              alt={id}
                            />
                          </div>
                          <div className="w-full h-20 mb-2">
                            <h3 className="text-lg font-bold text-black mt-5 mb-3 text-center hover:border-b-2 border-black">
                              {item.title}
                            </h3>
                          </div>
                          <h3
                            className="text-center font-bold text-custom-black md:my-4 text-3xl"
                            style={{ color: "#62A61E" }}
                          >
                            {props.formatter(item.price)} /-
                          </h3>
                          <div className="w-full h-10 mb-2">
                            <h3 className="text-center">{item.description}</h3>
                          </div>
                        </div>
                      </a>

                      <div className="flex flex-wrap justify-center my-5">
                        <div className="xl:w-11/12 lg:w-6/12 md:w-[-webkit-fill-available] w-[-webkit-fill-available]">
                          <button
                            className="cartProduct flex w-[-webkit-fill-available]  items-center justify-center text-lg md:text-sm font-bold rounded-xl uppercase px-4 mx-2 py-3 mt-3"
                            onClick={(event) => {
                              event.stopPropagation();
                              event.preventDefault();
                              handleAddToCart(item.id);
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
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="bg-gray py-4  xl:hidden md:block lg:hidden xs:block items-center flex-wrap justify-center">
            <Slider
              {...settingsNoArrow}
              className="xl:w-12/12 lg:w-11/12 md:w-11/12  mx-auto"
            >
              {frequentlyBrought?.map((item, index) => {
                const id = `fbi${index}`;
                return (
                  <div
                    key={id}
                    className="productItem p-2 rounded-lg border w-72 mx-auto h-full"
                  >
                    <div>
                      <a href={`${item.routeName}`} className="">
                        <div className="relative group">
                          <Image
                            height={360}
                            width={360}
                            loading="lazy"
                            src={item.img}
                            className="xl:w-[360px] lg:w-[300px] md:w-[300px] mx-auto mt-6 transform group-hover:scale-110 transition-transform duration-300"
                            alt={id}
                          />
                          <div className="w-full h-20 mb-2">
                            <h5 className="text-lg font-bold text-black mt-5 mb-3 text-center hover:border-b-2 border-black">
                              {item.title}
                            </h5>
                          </div>
                          <h3
                            className="text-center font-bold text-custom-black md:my-4 text-3xl"
                            style={{ color: "#62A61E" }}
                          >
                            {props.formatter(item.price)} /-
                          </h3>
                          <div className="w-full h-10 mb-2">
                            <h3 className="text-center">{item.description}</h3>
                          </div>
                        </div>
                      </a>

                      <div className="flex flex-wrap justify-center my-5">
                        <div className="xl:w-11/12 lg:w-6/12 md:w-[-webkit-fill-available] w-[-webkit-fill-available]">
                          <button
                            className="cartProduct flex w-[-webkit-fill-available]  items-center justify-center text-lg md:text-sm font-bold rounded-xl uppercase px-4 mx-2 py-3 mt-3"
                            onClick={(event) => {
                              event.stopPropagation();
                              event.preventDefault();
                              handleAddToCart(item.id);
                              props.setShowSidebar(true);
                            }}
                          >
                            <div className="cart_icon_img mr-4">
                              <Image
                                height={25}
                                width={27}
                                loading="lazy"
                                className="cart_icon_img mr-4"
                                src={`${CDN_BASE_URL}website_images/all_products/productPageLogos/cartLogo.png`}
                                alt="result-page-02"
                                style={{ width: 27, height: 25 }}
                              />{" "}
                            </div>
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrequentlyBoughtProduct;
