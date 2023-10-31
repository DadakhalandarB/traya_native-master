import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import MaleReview from "../generic/MaleReview";
import Script from "next/script";
import { CDN_BASE_URL } from "@/constants/config";
import ArrowRightDark from "@/assets/svgs/ArrowRightDark";
import MinusDark from "@/assets/svgs/MinusDark";
import PlusDark from "@/assets/svgs/PlusDark";
import ProductSvg from "@/assets/svgs/ProductSvg";
import BottleSvg from "@/assets/svgs/BottleSvg";

const ComboProduct = ({
  open,
  props,
  buyNow,
  setOpen,
  incItem,
  decItem,
  cartCount,
  toggleClass,
  showProductImg,
  currentProduct,
  handleAddToCart,
  setShowProductImg,
  showProductImgType,
  setShowProductImgType,
}) => {
  const handleOpen = (id) => {
    setOpen((prevId) => (prevId === id ? "" : id));
  };

  return (
    <>
      <div className="xl:container lg:container md:container px-[16px] mx-auto">
        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
          <div className="bg-white xl:p-4 lg:p-4 md:p-4 p-4 flex items-center flex-wrap mb-4">
            <ul className="flex items-center xl:mt-8 xs:mt-2">
              <li className="inline-flex items-center">
                <span
                  className="text-gray-600 text-[10px] xl:text-[16px] lg:text-sm md:text-sm  decoration-2 hover:underline cursor-pointer"
                  onClick={() => {
                    window.location.href = "/home";
                  }}
                  href="/home"
                >
                  HOME
                </span>
                <ArrowRightDark />
              </li>
              <li className="inline-flex items-center">
                <a
                  className="border-0 text-gray-600 text-[10px] xl:text-sm lg:text-sm md:text-sm  decoration-2 hover:underline cursor-pointer"
                  onClick={() => {
                    window.location.href = "/collections/all-products";
                  }}
                  href="/collections/all-products"
                >
                  OUR TREATMENT PLANS
                </a>
                <ArrowRightDark />
              </li>
              <li className="inline-flex items-center">
                <span className="text-gray-600 text-[10px] xl:text-[16px] lg:text-sm md:text-sm">
                  {typeof currentProduct?.long_title === "string"
                    ? currentProduct.long_title.toUpperCase()
                    : null}
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white py-4 px-0 xl:p-4 lg:p-4 md:p-4 flex flex-row items-center justify-between flex-wrap">
            <div className="w-full xl:w-5/12 md:w-6/12 lg:w-5/12">
              {showProductImgType == "image" ? (
                <Image
                  height={499}
                  width={499}
                  priority={true}
                  className="collection-banner-image w-[245px] mx-auto xl:w-full lg:w-full md:w-full "
                  src={showProductImg}
                  alt="traya product image"
                />
              ) : null}
              {showProductImgType == "video" ? (
                <video
                  controls
                  className="collection-banner-image w-[245px] mx-auto xl:w-full lg:w-full md:w-full "
                >
                  <source src={showProductImg} type="video/mp4" />
                </video>
              ) : null}
              <div
                className=" w-full h-16 overflow-x-scroll hidescroll mt-2 xl:mt-10 lg:mt-10 md:mt-10 inline"
                style={{ display: "-webkit-inline-box" }}
              >
                {currentProduct?.product_media?.map((image, index) => {
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
                    <div
                      className={`collection-banner-image w-16 h-16 rounded-xl mx-3 ${
                        showProductImg == _currImage && "border-black border-2"
                      }`}
                    >
                      <Image
                        height={64}
                        width={64}
                        key={index}
                        className={`collection-banner-image w-16 h-16 rounded-xl mx-3 ${
                          showProductImg == _currImage &&
                          "border-black border-2"
                        }`}
                        src={_currImage}
                        priority={true}
                        alt="image"
                        onClick={(e) => {
                          setShowProductImg(_currImage), toggleClass(e);
                          setShowProductImgType("image");
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-12/12 xl:w-6/12 md:w-6/12 lg:w-7/12 self-start pl-0 xl:pl-3 md:pl-5 lg:pl-5 pt-2 xl:pl-0 md:pl-0 lg:pl-0">
              <h2
                className="font-nunito text-xl xl:text-[46px] lg:text-4xl md:text-2xl  font-bold text-[#414042]"
                style={{ lineHeight: "1.2" }}
              >
                {currentProduct?.long_title}
              </h2>
              <h2 className="font-nunito text-lg xl:text-[18px] lg:text-2xl md:text-xl text-[#414042] py-4">
                {currentProduct?.long_sub_title}
              </h2>
              <Image
                height={72}
                width={225}
                priority={true}
                src={`${CDN_BASE_URL}website_images/all_products/treatmentPlan/googleReview.png`}
                alt="reviews"
              />
              <div className="py-3 xl:py-5 lg:py-5 md:py-5">
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
                  className="font-bold font-nunito text-[20px] font-nunito"
                  style={{ color: "#747474" }}
                >
                  Price:{" "}
                  <span style={{ color: "#ea0606" }}>
                    ₹ {currentProduct?.price.amount} /-
                  </span>
                </h3>
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
                <h3
                  className="font-bold font-nunito text-xl self-center font-nunito"
                  style={{ color: "#747474" }}
                >
                  Price:{" "}
                  <span style={{ color: "#ea0606" }}>
                    ₹ {currentProduct?.price.amount} /-
                  </span>
                </h3>
                <div className="quantity  flex self-center">
                  <button
                    className={
                      cartCount < 2
                        ? "cursor-no-drop border-grey border-2   border-solid align-top text-center"
                        : "border-grey border-2 px-3  rounded border-solid align-top"
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
                  className="cursor-pointer cartProduct flex w-full xl:52 md:w-52 lg:w-52 h-12 items-center justify-center text-lg font-bold rounded-xl mt-5 uppercase"
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
                  className=" cursor-pointer buyNowProduct flex w-full xl:w-52 md:w-52 lg:w-52 h-12 items-center justify-center text-lg font-bold rounded-xl mt-5 uppercase"
                >
                  BUY IT NOW
                </button>
              </div>
            </div>
            {/* <h1 className="font-nunito text-xl xl:text-[46px] lg:text-4xl md:text-2xl  font-bold text-custom-black">
              {currentProduct?.long_title}
            </h1> */}
          </div>
        </div>

        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
          <div className="bg-white  flex items-center flex-wrap">
            <h3 className="text-2xl font-nunito font-bold text-custom-black">
              {currentProduct?.long_description?.title}
            </h3>
            <h5 className="text-lg py-2 font-nunito  text-custom-black">
              {currentProduct?.long_description?.content}
            </h5>
          </div>
        </div>
        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 border-b-2 mb-2 py-4 ">
          <div>
            <h3 className="text-2xl font-nunito font-bold text-custom-black">
              What Do I Get?
            </h3>
          </div>

          {/* <div className="mt-4">
            {currentProduct?.details.included.map((item, index) => {
              return (
                <div key={index}>
                  <h5 className="flex mb-2">
                    <ProductSvg />
                    <h2 className="text-[18px] font-bold font-nunito text-[#414042]">
                      {item.item_name}
                    </h2>
                  </h5>
                  <h5 className="font-nunito text-[18px]  mb-2 text-[#414042]">
                    {item.description}
                  </h5>
                </div>
              );
            })}
          </div> */}
        </div>

        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 ">
          <div>
            <h3 className="text-2xl font-nunito font-bold text-custom-black">
              Usage and Dosage
            </h3>
          </div>
          <div>
            {currentProduct?.details.usage.list.map((item, index) => {
              return (
                <div key={index}>
                  <h5 className="flex mt-6">
                    <BottleSvg />
                    <h3 className="text-[18px] font-bold font-nunito text-[#414042]">
                      {item.title}
                    </h3>
                  </h5>
                  <h5 className="font-nunito text-[18px]  mb-2 text-[#414042]">
                    {item.description}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>

        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 ">
          <div className="bg-white py-4 flex flex-row flex-wrap items-center md:justify-center  lg:justify-between">
            <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5 flex flex-col">
              {currentProduct?.details.benefits.media[0].media_type ==
              "video" ? (
                <video width="750" height="500" controls>
                  <source
                    src={currentProduct?.details.benefits.media[0].url}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <Image
                  width={443}
                  height={443}
                  loading="lazy"
                  src={currentProduct?.details.benefits.media[0].url}
                  alt="how_it_works"
                />
              )}
            </div>
            <div className="w-12/12 xl:w-6/12 md:6/12 lg:w-6/12 flex flex-wrap flex-col">
              <div className="bg-white mt-5 flex items-center pb-0 flex-wrap">
                <h3 className="text-2xl font-nunito font-bold text-custom-black">
                  {currentProduct?.details.benefits.title}
                </h3>
                <h5 className="text-lg py-2 font-nunito  text-custom-black">
                  {currentProduct?.details.benefits.description}
                </h5>
              </div>
              <div className="bg-white text-gray-800 font-light text-lg w-full">
                {currentProduct?.details.benefits.benefits_list.map(
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
            <div className="py-5">
              <Image
                height={517}
                width={1111}
                src={
                  currentProduct?.details.banner_media.find(
                    (item) => item.context == "main"
                  )?.url
                }
                alt=""
                priority={true}
                className="py-4"
              />
            </div>
          </div>
        </div>

        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 ">
          <div className="bg-white py-4 flex items-center flex-wrap md:justify-center  lg:justify-between">
            <div className="w-12/12 xl:w-6/12 md:6/12 lg:w-6/12">
              <div className="bg-white mt-5 mb-6 flex items-center flex-wrap">
                <h3 className="text-2xl font-nunito font-bold text-custom-black">
                  {currentProduct?.details.ingredients.title}
                </h3>
                <h3 className="text-lg py-2 font-nunito  text-custom-black">
                  {currentProduct?.details.ingredients.description}
                </h3>
              </div>
              <div className="bg-white text-gray-800 font-light text-lg w-full">
                {currentProduct?.details.ingredients.ingredient_list.map(
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
            <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5">
              {currentProduct?.details.ingredients.media[0].media_type ==
              "video" ? (
                <video width="750" height="500" controls>
                  <source
                    src={currentProduct?.details.ingredients.media[0].url}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <Image
                  height={456}
                  width={456}
                  loading="lazy"
                  src={currentProduct?.details.ingredients.media[0].url}
                  alt="how_it_works"
                />
              )}
            </div>
          </div>
          <hr
            className="border-4 w-1/12 rounded-full mx-auto mt-5 xl:mt-12 lg:mt-12  md:mt-12"
            style={{ borderColor: "#3e3e3e" }}
          />
        </div>
        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 ">
          <div className="bg-white  flex items-center flex-wrap">
            <Image
              height={473}
              width={1143}
              loading="lazy"
              src={
                currentProduct?.details.banner_media.find(
                  (item) => item.context == "sub"
                )?.url
              }
              alt=""
              className="py-4"
            />
          </div>
        </div>

        <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
          <div className="bg-white py-4 flex items-center flex-wrap justify-between">
            <div className="w-12/12 xl:w-6/12 md:6/12 lg:w-6/12">
              <div className="bg-white mt-5 flex items-center flex-wrap">
                <h3 className="text-2xl font-nunito font-bold text-custom-black">
                  {currentProduct?.details.faq.title}
                </h3>
                <h5 className="text-lg py-2 font-nunito  text-custom-black">
                  {currentProduct?.details.faq.description}
                </h5>
              </div>
              <div className="bg-white text-gray-800 font-light text-lg w-full">
                {currentProduct?.details.faq.faq_list.map((item, index) => {
                  const id = `faq${index}`;
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
                })}
              </div>
            </div>
            <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5">
              {currentProduct?.details.faq.media[0].media_type == "video" ? (
                <video width="750" height="500" controls>
                  <source
                    src={currentProduct?.details.faq.media[0].url}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  src={currentProduct?.details.faq.media[0].url}
                  alt="how_it_works"
                />
              )}
            </div>
          </div>
          <hr
            className="border-4 w-1/12 rounded-full mx-auto"
            style={{ borderColor: "#3e3e3e" }}
          />
        </div>

        <div className="block mx-auto mt-5 mb-8">
          <div className="flex flex-col justify-center items-center mt-5 xl:mt-10 lg:mt-10 md:mt-10 mb-10">
            <h5 className="xl:text-5xl xs:text-3xl font-bold font-sans text-custom-black">
              The Results
            </h5>
          </div>
          <MaleReview />
        </div>

        <Script src="/accordion.js" strategy="beforeInteractive" />
      </div>
    </>
  );
};

export default ComboProduct;
