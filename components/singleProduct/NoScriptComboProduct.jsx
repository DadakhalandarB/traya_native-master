import ArrowLeft from "@/assets/svgs/ArrowLeft";
import ArrowRight from "@/assets/svgs/ArrowRight";
import MinusDark from "@/assets/svgs/MinusDark";
import PlusDark from "@/assets/svgs/PlusDark";
import StarSvg from "@/assets/svgs/StarSvg";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";
import NoScriptComboFaq from "./NoScriptComboFaq";
import Image from "next/image";
import { CDN_BASE_URL } from "@/constants/config";
import { productArray } from "@/constants/constants";

const NoScriptComboProduct = ({
  props,
  decItem,
  incItem,
  cartCount,
  toggleClass,
  showProductImg,
  setShowProductImg,
  setShowProductImgType,
}) => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
          <div className="bg-white p-4 flex items-center flex-wrap ">
            <ul className="flex items-center ">
              <li className="inline-flex items-center">
                <span
                  className="text-gray-600 text-[10px] xl:text-sm lg:text-sm md:text-sm  decoration-2 hover:underline cursor-pointer"
                  onClick={() => {
                    window.location.href = "/home";
                  }}
                >
                  HOME
                </span>
                <ArrowLeft />
              </li>
              <li className="inline-flex items-center">
                <span
                  className="text-gray-600 text-[10px] xl:text-sm lg:text-sm md:text-sm  decoration-2 hover:underline cursor-pointer"
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
                <span className="text-gray-600 text-[10px] xl:text-sm lg:text-sm md:text-sm">
                  {typeof props?.serverSideCurrProd?._currentProduct
                    ?.short_title === "string"
                    ? props?.serverSideCurrProd?._currentProduct?.short_title.toUpperCase()
                    : null}
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white xl:p-4 lg:p-4 md:p-4 px-0 py-4 flex flex-row items-center flex-wrap">
            <div className="w-12/12 xl:w-6/12 md:w-6/12 lg:w-5/12">
              <Image
                height={100}
                width={100}
                className="collection-banner-image w-[245px] mx-auto xl:w-full lg:w-full md:w-full "
                src={`${props?.serverSideCurrProd?._currentProduct?.product_media[0].url}`}
                alt="traya product image"
              />
              <div
                className=" w-full h-16 overflow-x-scroll hidescroll mt-0 xl:mt-10 lg:mt-10 md:mt-10 inline"
                style={{ display: "-webkit-inline-box" }}
              >
                {props?.serverSideCurrProd?._currentProduct?.product_media?.map(
                  (image, index) => {
                    const _currImage = image.url;
                    return image.media_type == "video" ? (
                      <div className="relative mx-3">
                        <video
                          controls={false}
                          className="video w-16 h-16 collection-banner-image rounded-xl"
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
                        key={index}
                        className={`collection-banner-image w-16 h-16 rounded-xl mx-3 ${
                          showProductImg == _currImage &&
                          "border-black border-2"
                        }`}
                        height={100}
                        width={100}
                        src={_currImage}
                        alt="image"
                        onClick={(e) => {
                          setShowProductImg(_currImage);
                          toggleClass(e);
                          setShowProductImgType("image");
                        }}
                      />
                    );
                  }
                )}
              </div>
            </div>
            <div className="w-12/12 xl:w-6/12 md:w-6/12 lg:w-7/12 self-start pl-0 xl:pl-5 md:pl-5 lg:pl-5 pt-5 xl:pl-0 md:pl-0 lg:pl-0">
              <h2 className="font-nunito text-xl xl:text-4xl lg:text-4xl md:text-2xl  font-bold text-custom-black">
                {props?.serverSideCurrProd?._currentProduct?.long_title}
              </h2>
              <h2 className="font-nunito text-lg xl:text-2xl lg:text-2xl md:text-xl text-custom-black py-4">
                {props?.serverSideCurrProd?._currentProduct?.long_sub_title}
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
              <div className="  flex-wrap flex-row justify-between py-5 hidden xl:flex lg:flex md:flex">
                {props?.serverSideCurrProd?._currentProduct?.supporting_icons?.map(
                  (icon, index) => {
                    return (
                      <div key={index}>
                        <Image
                          src={icon.icon_url}
                          className="mx-auto w-14 xl:w-14 lg:w-14 md:w-9"
                          alt=""
                          height={100}
                          width={100}
                        />
                        <h5 className="text-center font-sans text-[10px] w-14 xl:w-14 lg:w-14 md:w-9">
                          {icon.icon_title}
                        </h5>
                      </div>
                    );
                  }
                )}
              </div>

              <div className="py-3 xl:py-5 lg:py-5 md:py-5">
                <h3 className="font-nunito">
                  {props?.serverSideCurrProd?._currentProduct?.taxable
                    ? "Tax included"
                    : "Without tax"}
                  .
                </h3>
              </div>
              <hr
                className="block xl:hidden lg:hidden md:hidden border-1 rounded-full mx-auto"
                style={{ borderColor: "#3e3e3e" }}
              />

              <div className="hidden xl:flex lg:flex md:flex flex-wrap justify-between">
                <h5
                  className="font-bold font-nunito text-4xl font-nunito"
                  style={{ color: "#747474" }}
                >
                  Price:{" "}
                  <span style={{ color: "#ea0606" }}>
                    ₹ {props?.serverSideCurrProd?._currentProduct?.price.amount}{" "}
                    /-
                  </span>
                </h5>
                <div className="quantity mt-2 flex">
                  <button
                    className={
                      cartCount < 2
                        ? "cursor-no-drop border-grey border-2 px-3  border-solid align-top text-center"
                        : "border-grey border-2 px-3  rounded border-solid align-top"
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
                <h5
                  className="font-bold font-nunito text-xl self-center font-nunito"
                  style={{ color: "#747474" }}
                >
                  Price:{" "}
                  <span style={{ color: "#ea0606" }}>
                    ₹ {props?.serverSideCurrProd?._currentProduct?.price.amount}{" "}
                    /-
                  </span>
                </h5>
                <div className="quantity  flex self-center">
                  <button
                    className={
                      cartCount < 2
                        ? "cursor-no-drop border-grey border-2   border-solid align-top text-center"
                        : "border-grey border-2 px-3  roundedborder-solid align-top"
                    }
                    onClick={() => decItem()}
                    disabled={cartCount < 2 ? true : false}
                  >
                    <MinusDark />
                  </button>
                  <input
                    type="text"
                    className="border-grey border-2 border-l-0 border-r-0 w-9  h-7 border-solid align-top align-center bg-white font-bold"
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
                  className="cursor-pointer cartProduct flex w-full xl:w-[45%] md:w-60 lg:w-60 h-12 items-center justify-center text-lg font-bold rounded-xl mt-5 uppercase"
                  onClick={() => {
                    handleAddToCart(
                      props?.serverSideCurrProd?._currentProduct?.variant_id
                    );
                    props.setShowSidebar(true);
                  }}
                >
                  <Image
                    height={100}
                    width={100}
                    className="cart_icon_img mr-4"
                    src={`${CDN_BASE_URL}website_images/all_products/productPageLogos/cartLogo.png`}
                    alt="result-page-02"
                    style={{ width: 27, height: 25 }}
                  />{" "}
                  ADD TO CART
                </button>
                <button
                  // href="https://chat.whatsapp.com/EfWNm48o6Ul4FecOVelEYs"
                  onClick={() =>
                    buyNow(
                      props?.serverSideCurrProd?._currentProduct?.variant_id
                    )
                  }
                  className=" cursor-pointer buyNowProduct flex w-full xl:w-[45%] md:w-60 lg:w-60 h-12 items-center justify-center text-lg font-bold rounded-xl mt-5 uppercase"
                >
                  BUY IT NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="block xl:hidden lg:hidden md:hidden">
          <Image
            alt="image"
            height={100}
            width={100}
            src={`${CDN_BASE_URL}website_images/all_products/mobileBannerImages/mobileBanner2.png`}
          />
          <Image
            alt="image"
            height={100}
            width={100}
            src={`${CDN_BASE_URL}website_images/all_products/mobileBannerImages/mobileBanner1.png`}
          />
          <Image
            alt="image"
            height={100}
            width={100}
            src={`${CDN_BASE_URL}website_images/all_products/mobileBannerImages/mobileBanner3.png`}
          />
        </div>

        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 ">
          <div className="bg-white  flex items-center flex-wrap">
            <h5 className="text-2xl font-nunito font-bold text-custom-black">
              {
                props?.serverSideCurrProd?._currentProduct?.long_description
                  ?.title
              }
            </h5>
            <h5 className="text-lg py-2 font-nunito  text-custom-black">
              {
                props?.serverSideCurrProd?._currentProduct?.long_description
                  ?.content
              }
            </h5>
            <Image
              height={100}
              width={100}
              src={
                props?.serverSideCurrProd?._currentProduct?.details?.banner_media.find(
                  (item) => item.context == "main"
                )?.url
              }
              alt=""
              className="py-4"
            />
            <hr
              className="border-4 w-1/12 rounded-full mx-auto"
              style={{ borderColor: "#3e3e3e" }}
            />
          </div>
          <div className="bg-white mt-10 flex items-center flex-wrap">
            <h3 className="text-2xl font-nunito font-bold text-custom-black">
              Benefits
            </h3>
            <h5 className="text-lg py-2 font-nunito  text-custom-black">
              {
                props?.serverSideCurrProd?._currentProduct?.details?.benefits
                  ?.description
              }
            </h5>
          </div>

          <div className="bg-white py-4 flex flex-row flex-wrap items-center justify-between">
            <div className="w-12/12 xl:w-6/12 md:6/12 lg:w-6/12 flex flex-wrap flex-col">
              <div className="bg-white text-gray-800 font-light text-lg w-full">
                {props?.serverSideCurrProd?._currentProduct?.details?.benefits?.benefits_list?.map(
                  (item, index) => {
                    const id = `benefits${index}`;
                    return (
                      <Accordion
                        open={open === id}
                        key={id}
                        className="border-b-[2px] border-black"
                        icon={open === id ? "-" : "+"}
                      >
                        <AccordionHeader
                          className="font-normal text-[17px] text-left font-nunito text-custom-black border-b-0"
                          onClick={() => handleOpen(id)}
                        >
                          {item.title}
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="leading-6 font-light  text-justify text-[16px]">
                            {item.description}
                          </p>
                        </AccordionBody>
                      </Accordion>
                    );
                  }
                )}
              </div>
            </div>
            <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5 flex flex-col">
              <Image
                height={100}
                width={100}
                src={`${props?.serverSideCurrProd?._currentProduct?.details.benefits.media[0].url}`}
                alt="how_it_works"
              />
            </div>
          </div>
          <hr
            className="border-4 w-1/12 rounded-full mx-auto mt-5 xl:mt-12 lg:mt-12  md:mt-12"
            style={{ borderColor: "#3e3e3e" }}
          />
        </div>
        <div style={{ backgroundColor: "#e0eff8" }}>
          <div className="block mx-auto 2xl:w-[60%] xl:w-9/12 md:w-11/12 lg:w-11/12 w-11/12 mt-5">
            <div className="py-10 flex items-center flex-wrap justify-between">
              <div className=" w-12/12 xl:w-6/12 md:6/12 lg:w-6/12 pl-0 xl:pl-0 md:pl-0 lg:pl-0 ">
                <Image
                  height={100}
                  width={100}
                  src={
                    props?.serverSideCurrProd?._currentProduct?.details.benefits
                      .media[0].url
                  }
                  alt="how_it_works"
                />
              </div>
              <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12">
                <div className=" text-gray-800 font-light text-lg w-full">
                  <h2 className="text-2xl font-nunito font-bold text-custom-black">
                    {
                      props?.serverSideCurrProd?._currentProduct?.details
                        ?.how_it_works?.title
                    }
                  </h2>
                  <h5 className="text-lg py-2 font-nunito  text-custom-black">
                    {
                      props?.serverSideCurrProd?._currentProduct?.details
                        ?.how_it_works?.description
                    }
                  </h5>
                  {props?.serverSideCurrProd?._currentProduct?.details?.how_it_works?.list?.map(
                    (item, index) => {
                      const id = `howitWorks${index}`;
                      return (
                        <Accordion
                          open={open === id}
                          key={id}
                          className="border-b-[2px] border-black"
                          icon={open === id ? "-" : "+"}
                        >
                          <AccordionHeader
                            className="font-normal text-[17px] text-left font-nunito text-custom-black border-b-0"
                            onClick={() => handleOpen(id)}
                          >
                            {item.title}
                          </AccordionHeader>
                          <AccordionBody>
                            <p className="leading-6 font-light text-justify text-[16px]">
                              {item.description}
                            </p>
                          </AccordionBody>
                        </Accordion>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block mx-auto 2xl:w-[60%] xl:w-9/12 md:w-11/12 lg:w-11/12 w-11/12 mt-5 xl:mt-16 lg:mt-16 md:mt-16 ">
          <div className="bg-white flex items-center flex-wrap">
            <h3 className="text-2xl font-nunito font-bold text-custom-black">
              Ingredients
            </h3>
            <h5 className="text-2xl font-nunito font-bold text-custom-black">
              {
                props?.serverSideCurrProd?._currentProduct?.details?.ingredients
                  ?.title
              }
            </h5>
            <h5 className="text-lg py-2 font-nunito  text-custom-black">
              {
                props?.serverSideCurrProd?._currentProduct?.details?.ingredients
                  ?.description
              }
            </h5>
          </div>
          <div className="bg-white py-4 flex items-center flex-wrap justify-between">
            <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5">
              {props?.serverSideCurrProd?._currentProduct?.details?.ingredients
                ?.media[0]?.media_type == "video" ? (
                <video width="750" height="500" controls>
                  <source
                    src={
                      props?.serverSideCurrProd?._currentProduct?.details
                        ?.ingredients?.media[0]?.url
                    }
                    type="video/mp4"
                  />
                </video>
              ) : (
                <Image
                  height={100}
                  width={100}
                  src={
                    props?.serverSideCurrProd?._currentProduct?.details
                      ?.ingredients?.media[0]?.url
                  }
                  alt="how_it_works"
                />
              )}
            </div>
            <div className="w-12/12 xl:w-6/12 md:6/12 lg:w-6/12">
              <div className="bg-white text-gray-800 font-light text-lg w-full">
                {props?.serverSideCurrProd?._currentProduct?.details?.ingredients?.ingredient_list?.map(
                  (item, index) => {
                    const id = `ingredients${index}`;
                    return (
                      <Accordion
                        open={open === id}
                        key={id}
                        className="border-b-[2px] border-black"
                        icon={open === id ? "-" : "+"}
                      >
                        <AccordionHeader
                          className="font-normal text-[17px] text-left font-nunito text-custom-black border-b-0"
                          onClick={() => handleOpen(id)}
                        >
                          {item.title}
                        </AccordionHeader>
                        <AccordionBody>
                          <p className="leading-6 font-light  text-justify text-[16px]">
                            {item.description}
                          </p>
                        </AccordionBody>
                      </Accordion>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <hr
            className="border-4 xl:w-1/12 xs:w-4/12 rounded-full mx-auto"
            style={{ borderColor: "#3e3e3e" }}
          />
        </div>

        <NoScriptComboFaq props={props} />
        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 ">
          <div className="bg-white  flex items-center flex-wrap">
            <Image
              height={100}
              width={100}
              src={
                props?.serverSideCurrProd?._currentProduct?.details?.banner_media?.find(
                  (item) => item.context == "sub"
                )?.url
              }
              alt="traya product image"
              className="py-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoScriptComboProduct;
