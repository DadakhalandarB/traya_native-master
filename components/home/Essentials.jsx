import { CDN_BASE_URL } from "@/constants/config";
import { nunito } from "@/constants/fontConfig";
import { CartContext } from "@/context/cart-store";
import { gtmEcommerce } from "@/helpers/gtmHelpers";
import Image from "next/image";
import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Essentials = ({ props }) => {
  const selectItem = (val) => {
    let tempItem = [];
    let tempObj = {};
    tempObj.item_name = val.title;
    tempObj.item_id = val.id;
    tempObj.quantity = val.itemCount;
    tempObj.price = val.price;
    tempObj.discount = "";
    tempObj.coupon = "";
    tempObj.item_brand = "Traya Health";
    tempObj.item_category = "Hair Care";
    tempItem.push(tempObj);
    window.location.href = `/products/${val.routeName}`;
    let gtmObj = {
      totalPrice: tempItem[0].price,
      cartData: tempItem,
    };
    gtmEcommerce(gtmObj, "nt_select_item");
  };
  const { addItemToCart } = useContext(CartContext);
  const left = `${CDN_BASE_URL}website_images/localImages/left.webp`;
  const right = `${CDN_BASE_URL}website_images/localImages/right.webp`;
  let productSettings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    lazyload: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 2000,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: false,
          autoplaySpeed: 2000,
          infinite: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          infinite: true,
          adaptiveHeight: true,
        },
      },
    ],
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className}>
        <Image
          src={right}
          alt="left arrow"
          onClick={onClick}
          loader={props.loader}
          unoptimized={true}
          fill
          loading="lazy"
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className}>
        <Image
          src={left}
          alt="left arrow"
          onClick={onClick}
          className="xs:hidden"
          loader={props.loader}
          unoptimized={true}
          fill
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div>
      <div className="block mx-auto xl:w-full px-6 lg:w-full md:w-full w-11/12 xl:mt-4 ">
        <div>
          <h2
            className={`${nunito.variable} xl:text-[44px] xs:text-[30px]  lg:text-xx4l mt-10 tracking-wide font-bold text-custom-black xs:px-5 text-center xs:mb-5`}
          >
            The Essentials
          </h2>
        </div>
        <Slider
          {...productSettings}
          className="xl:w-[63%] lg:w-11/12 md:w-11/12 xl:pt-9 md:pt-9 lg:pt-9 py-0 block mx-auto"
        >
          {props.productData.map((value, index) => (
            <div className="slickItem p-2 rounded-lg " key={index}>
              <div className="border rounded-lg p-2">
                <a onClick={() => selectItem(value)} className="cursor-pointer">
                  <Image
                    height={350}
                    width={350}
                    loading="lazy"
                    src={value.img}
                    className={
                      value.id === "gid://shopify/ProductVariant/17789279551666"
                        ? "mx-auto xl:w-32 md:w-32 lg:w-32 w-20"
                        : "mx-auto 32"
                    }
                    alt="Traya Products"
                  />
                  <h3 className="xl:text-lg lg:text-lg md:text-[14px] text-[16px] font-bold text-custom-black my-5 py-1 text-center xl:h-20 lg:h-20 md:h-20 h-auto overflow-hidden">
                    {value.title}
                  </h3>
                  <div className="xl:h-20 lg:h-20 md:h-20 h-auto">
                    <h6 className="text-center text-[14px] xl:h-[70px] md:text-[12px] xl:text-[14px] my-5 font-light overflow-hidden">
                      {value.description}
                    </h6>
                  </div>
                  <h3 className="text-center font-bold text-custom-black  mb-5">
                    {props.formatter(value.price)} /-
                  </h3>
                </a>
                <button
                  className="bg-custom-black text-white hover:bg-custom-green hover:text-black py-2 px-2 w-full text-center font-bold rounded-lg uppercase mx-auto"
                  onClick={(event) => {
                    event.stopPropagation();
                    addItemToCart([
                      {
                        id: value.id,
                        name: value.title,
                        image_url: value.img,
                        price: value.price,
                      },
                    ]),
                      props.setShowSidebar(!props.showSidebar);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <a
          className="block mx-auto xl:w-fit lg:w-fit md:w-fit w-full text-center  bg-custom-black text-white hover:bg-custom-green hover:text-black py-2 px-8 font-bold rounded-lg  uppercase xl:mt-8 md:mt-8 lg:mt-8 mt-4"
          href="/collections/all-products"
        >
          View All
        </a>
      </div>
    </div>
  );
};

export default Essentials;
