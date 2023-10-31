import { CDN_BASE_URL } from "@/constants/config";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const AlsoLike = ({ alsoLike, props }) => {
  let productSettings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: alsoLike?.length > 3,
    lazyload: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          slidesToScroll: 2,
          initialSlide: 2,
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow variant={"light"} />,
    prevArrow: <SamplePrevArrow variant={"light"} />,
  };
  return (
    <div>
      {alsoLike?.length > 0 && (
        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
          <div className="flex flex-col justify-center items-center mt-12 mb-0 xl:mb-10 lg:mb-10 md:mb-10">
            <h5 className="xl:text-5xl xs:text-2xl font-bold font-sans text-custom-black">
              You may also like
            </h5>
          </div>
          <div className="bg-white py-4 items-center xl:flex md:flex xs:block flex-wrap justify-center mb-10">
            <Slider
              {...productSettings}
              className="xl:w-10/12 lg:w-11/12 md:w-11/12 mx-auto"
            >
              {alsoLike?.map((item, index) => (
                <div
                  key={`fbi${index}`}
                  className="productItem p-2 rounded-lg border w-72 mx-auto h-full"
                  style={{ width: "300px", height: "400px" }} // Set width and height
                >
                  <a href={`${item.routeName}`}>
                    <Image
                      height={224}
                      width={334}
                      loading="lazy"
                      src={item.img}
                      alt={`fbi${index}`}
                      className="w-full h-56 object-contain"
                    />
                    <h3 className="xl:text-lg lg:text-lg md:text-[14px] text-[16px] font-bold text-custom-black my-5 py-1 text-center xl:h-20 lg:h-20 md:h-20 h-auto overflow-hidden">
                      {item.title}
                    </h3>
                    <h3
                      className="text-center font-bold text-custom-black text-3xl py-1  mb-5"
                      style={{ color: "#62A61E" }}
                    >
                      {props.formatter(item.price)} /-
                    </h3>
                    <div className="h-20">
                      <h6 className="text-center text-[16px] xl:h-[70px] md:text-[12px] xl:text-[16px] my-5 font-light overflow-hidden">
                        {item.description}
                      </h6>
                    </div>
                  </a>
                  <div className="m-1 pt-0">
                    <div className="w-full my-6">
                      <button
                        className="cartProduct flex w-full items-center justify-center text-lg md:text-sm font-bold rounded-xl uppercase px-4 mx-2 py-3 mt-3"
                        onClick={(event) => {
                          event.stopPropagation();
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
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlsoLike;
