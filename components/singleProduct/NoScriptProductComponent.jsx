import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { CDN_BASE_URL } from "@/constants/config";
import ArrowRight from "@/assets/svgs/ArrowRight";
import BottleSvg from "@/assets/svgs/BottleSvg";
import ServerSideProductSvg from "@/assets/svgs/ServerSideProductSvg";
import MinusDark from "@/assets/svgs/MinusDark";
import PlusDark from "@/assets/svgs/PlusDark";
import NoScriptHead from "./NoScriptHead";
import NoScriptComboProduct from "./NoScriptComboProduct";

const NoScriptProductComponent = ({
  props,
  decItem,
  incItem,
  cartCount,
  toggleClass,
  currentProduct,
  showProductImg,
  setShowProductImg,
  setShowProductImgType,
}) => {
  return (
    <noscript>
      <NoScriptHead props={props} currentProduct={currentProduct} />
      <>
        {props?.serverSideCurrProd?._currentProduct?.isCombo ? (
          <NoScriptComboProduct
            props={props}
            decItem={decItem}
            incItem={incItem}
            cartCount={cartCount}
            toggleClass={toggleClass}
            showProductImg={showProductImg}
            setShowProductImg={setShowProductImg}
            setShowProductImgType={setShowProductImgType}
          />
        ) : (
          <>
            <div className="2xl:container mx-auto">
              <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
                <div className="bg-white p-4 flex items-center flex-wrap ">
                  <ul className="flex items-center ">
                    <li className="inline-flex items-center ">
                      <a
                        className="border-0 text-[10px] xl:text-sm lg:text-sm md:text-sm text-gray-600 decoration-2 hover:underline cursor-pointer"
                        onClick={() => {
                          window.location.href = "/home";
                        }}
                        href="/home"
                      >
                        HOME
                      </a>

                      <ArrowRight />
                    </li>

                    <li className="inline-flex items-center">
                      <a
                        className="border-0 text-gray-600 text-[10px] xl:text-sm lg:text-sm md:text-sm  decoration-2 hover:underline cursor-pointer"
                        onClick={() => {
                          window.location.href = "/collections/all-products";
                        }}
                        href="/collections/all-products"
                      >
                        {typeof shortTitle === "string"
                          ? productArray.includes(shortTitle)
                            ? "PRODUCTS"
                            : "HAIR CARE PRODUCTS"
                          : null}
                      </a>

                      <svg
                        className="w-5 h-auto fill-current mx-2 text-gray-400 -mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                      </svg>
                    </li>

                    <li className="inline-flex items-center -mt-2">
                      <span className="text-gray-600 text-[10px] xl:text-sm lg:text-sm md:text-sm">
                        HAIR GROWTH TABLETS
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white py-4 px-0 xl:p-4 lg:p-4 md:p-4 flex flex-row items-center flex-wrap">
                  <div className="w-12/12 xl:w-6/12 md:w-6/12 lg:w-5/12">
                    <img
                      className="collection-banner-image w-[245px] mx-auto xl:w-full lg:w-full md:w-full "
                      src={
                        props?.serverSideCurrProd?._currentProduct
                          ?.product_media[0].url
                      }
                    />
                    <div
                      className=" w-full h-16 overflow-x-scroll hidescroll mt-2 xl:mt-10 lg:mt-10 md:mt-10 inline"
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
                                  setShowProductImg(_currImage), toggleClass(e);
                                  setShowProductImgType("video");
                                }}
                              >
                                <source src={_currImage} type="video/mp4" />
                              </video>
                              <i className="absolute top-[45%] left-[45%]">
                                &#9658;
                              </i>
                            </div>
                          ) : (
                            <img
                              key={index}
                              className={`collection-banner-image w-16 h-16 rounded-xl mx-3 ${
                                showProductImg == _currImage &&
                                "border-black border-2"
                              }`}
                              src={_currImage}
                              alt="image"
                              onClick={(e) => {
                                setShowProductImg(_currImage), toggleClass(e);
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
                      {
                        props?.serverSideCurrProd?._currentProduct
                          ?.long_sub_title
                      }
                    </h2>
                    <img
                      src={`${CDN_BASE_URL}website_images/all_products/treatmentPlan/googleReview.png`}
                      alt="reviews"
                    />
                    <div className="py-3 xl:py-5 lg:py-5 md:py-5">
                      <h3 className="font-nunito">
                        {currentProduct?.taxable
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
                          ₹{" "}
                          {
                            props?.serverSideCurrProd?._currentProduct?.price
                              .amount
                          }{" "}
                          /-
                        </span>
                      </h5>
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
                      <h5
                        className="font-bold font-nunito text-xl self-center font-nunito"
                        style={{ color: "#747474" }}
                      >
                        Price:{" "}
                        <span style={{ color: "#ea0606" }}>
                          ₹{" "}
                          {
                            props?.serverSideCurrProd?._currentProduct?.price
                              .amount
                          }{" "}
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            className="icon icon-plus"
                            fill="#737373"
                            viewBox="-1 -1 13 13"
                            width={22}
                          >
                            <path
                              d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z"
                              fill="#000"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="xl:flex lg:flex md:flex flex-wrap justify-between my-5">
                      <button
                        className="cursor-pointer cartProduct flex w-full xl:52 md:w-52 lg:w-52 h-12 items-center justify-center text-lg font-bold rounded-xl mt-5 uppercase"
                        onClick={() => {
                          handleAddToCart(
                            props?.serverSideCurrProd?._currentProduct
                              .variant_id
                          );
                          props.setShowSidebar(true);
                        }}
                      >
                        <img
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
                            props?.serverSideCurrProd?._currentProduct
                              .variant_id
                          )
                        }
                        className=" cursor-pointer buyNowProduct flex w-full xl:w-52 md:w-52 lg:w-52 h-12 items-center justify-center text-lg font-bold rounded-xl mt-5 uppercase"
                      >
                        BUY IT NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
                <div className="bg-white  flex items-center flex-wrap">
                  <h5 className="text-2xl font-nunito font-bold text-custom-black">
                    {
                      props?.serverSideCurrProd?._currentProduct
                        ?.long_description?.title
                    }
                  </h5>
                  <h5 className="text-lg py-2 font-nunito  text-custom-black">
                    {
                      props?.serverSideCurrProd?._currentProduct
                        ?.long_description?.content
                    }
                  </h5>
                </div>
              </div>
              <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 border-b-2 mb-2 py-4 ">
                <div>
                  <h3 className="text-2xl font-nunito font-bold text-custom-black">
                    What Do I Get?
                  </h3>
                </div>
                <div className="mt-4">
                  {props?.serverSideCurrProd?._currentProduct?.details?.included?.map(
                    (item, index) => {
                      return (
                        <div key={index}>
                          <h5 className="flex mb-2">
                            <ServerSideProductSvg />
                            <h2 className="text-[18px] font-bold font-nunito text-[#414042]">
                              {item.item_name}
                            </h2>
                          </h5>
                          <h5 className="font-nunito text-[18px]  mb-2 text-[#414042]">
                            {item.description}
                          </h5>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 ">
                <div>
                  <h5 className="text-2xl font-nunito font-bold text-custom-black">
                    Usage and Dosage
                  </h5>
                </div>
                <div>
                  {props?.serverSideCurrProd?._currentProduct?.details?.usage?.list?.map(
                    (item, index) => {
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
                    }
                  )}
                </div>
              </div>

              <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 ">
                <div className="bg-white py-4 flex flex-row flex-wrap items-center justify-between">
                  <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5 flex flex-col">
                    {props?.serverSideCurrProd?._currentProduct?.details
                      .benefits.media[0].media_type == "video" ? (
                      <video width="750" height="500" controls>
                        <source
                          src={
                            props?.serverSideCurrProd?._currentProduct?.details
                              .benefits.media[0].url
                          }
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={
                          props?.serverSideCurrProd?._currentProduct?.details
                            .benefits.media[0].url
                        }
                        alt="how_it_works"
                      />
                    )}
                  </div>
                  <div className="w-12/12 xl:w-6/12 md:6/12 lg:w-6/12 flex flex-wrap flex-col">
                    <div className="bg-white mt-5 flex items-center pb-0 flex-wrap">
                      <h2 className="text-2xl font-nunito font-bold text-custom-black">
                        {
                          props?.serverSideCurrProd?._currentProduct?.details
                            .benefits.title
                        }
                      </h2>
                      <h5 className="text-lg py-2 font-nunito  text-custom-black">
                        {
                          props?.serverSideCurrProd?._currentProduct?.details
                            .benefits.description
                        }
                      </h5>
                    </div>
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
                  <img
                    src={
                      props?.serverSideCurrProd?._currentProduct?.details.banner_media.find(
                        (item) => item.context == "main"
                      )?.url
                    }
                    alt="traya product image"
                    className="py-4"
                  />
                </div>
              </div>

              <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 ">
                <div className="bg-white py-4 flex items-center flex-wrap justify-between">
                  <div className="w-12/12 xl:w-6/12 md:6/12 lg:w-6/12">
                    <div className="bg-white mt-5 mb-6 flex items-center flex-wrap">
                      <h3 className="text-2xl font-nunito font-bold text-custom-black">
                        {
                          props?.serverSideCurrProd?._currentProduct?.details
                            .ingredients.title
                        }
                      </h3>
                      <h3 className="text-lg py-2 font-nunito  text-custom-black">
                        {
                          props?.serverSideCurrProd?._currentProduct?.details
                            .ingredients.description
                        }
                      </h3>
                    </div>
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
                  <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5">
                    {props?.serverSideCurrProd?._currentProduct?.details
                      .ingredients.media[0].media_type == "video" ? (
                      <video width="750" height="500" controls>
                        <source
                          src={
                            props?.serverSideCurrProd?._currentProduct?.details
                              .ingredients.media[0].url
                          }
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={
                          props?.serverSideCurrProd?._currentProduct?.details
                            .ingredients.media[0].url
                        }
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
                  <img
                    src={
                      props?.serverSideCurrProd?._currentProduct?.details.banner_media.find(
                        (item) => item.context == "sub"
                      )?.url
                    }
                    alt="traya product image"
                    className="py-4"
                  />
                </div>
              </div>

              <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
                <div className="bg-white py-4 flex items-center flex-wrap justify-between">
                  <div className="w-12/12 xl:w-6/12 md:6/12 lg:w-6/12">
                    <div className="bg-white mt-5 flex items-center flex-wrap">
                      <h2 className="text-2xl font-nunito font-bold text-custom-black">
                        {
                          props?.serverSideCurrProd?._currentProduct?.details
                            .faq.title
                        }
                      </h2>
                      <h3 className="text-lg py-2 font-nunito  text-custom-black">
                        {
                          props?.serverSideCurrProd?._currentProduct?.details
                            .faq.description
                        }
                      </h3>
                    </div>
                    <div className="bg-white text-gray-800 font-light text-lg w-full">
                      {props?.serverSideCurrProd?._currentProduct?.details?.faq?.faq_list?.map(
                        (item, index) => {
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
                        }
                      )}
                    </div>
                  </div>
                  <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5">
                    {props?.serverSideCurrProd?._currentProduct?.details.faq
                      .media[0].media_type == "video" ? (
                      <video width="750" height="500" controls>
                        <source
                          src={
                            props?.serverSideCurrProd?._currentProduct?.details
                              .faq.media[0].url
                          }
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={
                          props?.serverSideCurrProd?._currentProduct?.details
                            .faq.media[0].url
                        }
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
            </div>
          </>
        )}
      </>
    </noscript>
  );
};

export default NoScriptProductComponent;
