import CloseSvg from "@/assets/icons/CloseSvg";
import ArrowLeft from "@/assets/svgs/ArrowLeft";
import ArrowRight from "@/assets/svgs/ArrowRight";
import FacebookSvg from "@/assets/svgs/FacebookSvg";
import InstagramSvg from "@/assets/svgs/InstagramSvg";
import WhatsAppSvg from "@/assets/svgs/WhatsAppSvg";
import { trayaLogoDark } from "@/constants/constants";
import Image from "next/image";
import React from "react";

const DesktopNavHeader = ({
  props,
  hasToken,
  showMyRecc,
  setShowModal,
  product,
  setProduct,
  scalpOil,
  closeNav,
  setscalpOil,
}) => {
  return (
    <ul className="xl:flex lg:flex md:flex hidden">
      <div className="flex flex-col xl:w-full">
        <a href="/">
          <div className="xl:w-48 md:w-48 xs:w-24  xl:px-11 xs:ml-3 py-6">
            <Image
              src={trayaLogoDark}
              alt="trayalogo"
              loader={props.loader}
              unoptimized={true}
              height={75}
              width={240}
              loading="lazy"
            />
          </div>
        </a>
        <div className="flex flex-wrap w-full xl:justify-end md:justify-end lg:justify-end xs:justify-start">
          <div className=" flex flex-col xl:p-12 xs:px-4 xs:py-6 text-white xs:-mt-20 xl:mr-1  text-left">
            <h3 className="uppercase text-custom-black font-semibold xl:text-lg xl:mt-5 md:mt-12 xs:mt-12 text-left">
              {" "}
              what we do
            </h3>
            <p className="text-gray-600 mt-5 text-left xl:text-lg w-8/12">
              {" "}
              We help you take control of your hairloss in a personalised, and
              scientific way.
            </p>
            {showMyRecc && (
              <a
                href={
                  props.router == "/pages/female" || props.router == "/femaleV2"
                    ? `https://traya.health/pages/female-result?id=${props.syntheticId}&page=female_native`
                    : `/result?id=${props.syntheticId}&page=homev2`
                }
                onClick={() =>
                  Cookies.set(
                    "__TRAYA_UTM__",
                    props.router == "/pages/female" ||
                      props.router == "/femaleV2"
                      ? "&page=female_native"
                      : "&page=homev2"
                  )
                }
              >
                <button className="font-semibold text-custom-black mt-5 border border-black   xs:p-1 text-center rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                  My Result
                </button>
              </a>
            )}
            <a href="https://trayahealth.clickpost.ai/">
              <button className="font-semibold text-custom-black mt-5 border border-black   xs:p-1 text-center rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                TRACK ORDER
              </button>
            </a>
            <a href="https://myrecords.traya.health/">
              <button className=" font-semibold text-custom-black mt-5 border border-black   xs:p-1 text-center rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                {" "}
                MY PLAN
              </button>
            </a>
            <a
              href={
                props.router == "/pages/female" || props.router == "/femaleV2"
                  ? "/female?cohort=1&lcn=TopBar&page=female_native"
                  : "/home/question?cohort=1&lcn=TopBar&page=homev2"
              }
              onClick={() =>
                Cookies.set(
                  "__TRAYA_UTM__",
                  props.router == "/pages/female" || props.router == "/femaleV2"
                    ? "&page=female_native"
                    : "&page=homev2"
                )
              }
            >
              <button className="mt-5 border border-black  xs:p-1 text-center font-semibold  text-custom-black rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                {" "}
                HAIR TEST <sup> TM</sup>
              </button>
            </a>
            <a
              className=""
              href="https://traya.health/collections/all-products"
            >
              <button className="mt-5 border border-black  xs:p-1 text-center font-semibold  text-custom-black rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                TRAYA COMBOS
              </button>
            </a>
            <a href="https://traya.health/pages/refund-policy">
              <button className="mt-5 border border-black  xs:p-1 xs:px-2 text-center font-semibold text-custom-black  rounded-lg w-fit hover:bg-custom-black hover:text-white">
                5 MONTH MONEY BACK GUARANTEE
              </button>
            </a>{" "}
            <a
              onClick={() => {
                if (!hasToken) {
                  setShowModal(true);
                } else if (hasToken) {
                  deleteCookie();
                }
              }}
            >
              <button className="mt-5 border border-black  xs:p-1 text-center font-semibold text-custom-black  rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                {!hasToken ? "LOG IN" : "LOG OUT"}
              </button>
            </a>
            <a href="https://traya.health/pages/referral">
              <button className="mt-5 border border-black  xs:p-1 text-center font-semibold text-custom-black  rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                {" "}
                REFERRAL
              </button>
            </a>
            <div className="">
              <button
                onClick={() => setProduct(!product)}
                className="mt-5 border border-black  xs:p-1 text-center font-semibold  text-custom-black rounded-lg w-fit hover:bg-custom-black hover:text-white flex items-center justify-center"
              >
                PRODUCTS
                {product ? <ArrowLeft /> : <ArrowRight />}
              </button>
              <div
                className={
                  product
                    ? "flex xl:flex-row md:flex-col xs:flex-col transition delay-700 duration-300 ease-in xl:items-start xl:ml-32"
                    : "hidden"
                }
              >
                <div className="flex flex-col justify-center xl:mr-12">
                  <a
                    href="https://traya.health/products/hair-growth-herbs"
                    className="text-black mt-4 xl:text-sm"
                  >
                    Hair Ras
                    <span>
                      <hr className="w-16 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/hair-vitamins"
                    className="text-black mt-4 xl:text-sm"
                  >
                    Hair Vitamin
                    <span>
                      <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/traya-minoxidil-5"
                    className="text-black mt-4 xl:text-sm"
                  >
                    Minoxidil 5%
                    <span>
                      <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/minoxidil-2"
                    className="text-black mt-4 xl:text-sm"
                  >
                    Minoxidil 2%
                    <span>
                      <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700 xl:text-sm"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/herbal-tablets"
                    className="text-black mt-4 xl:text-sm"
                  >
                    Health Tatva
                    <span>
                      <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/shampoo"
                    className="text-black mt-4 xl:text-sm"
                  >
                    Defence Shampoo
                    <span>
                      <hr className="w-36 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/ketoconazole-2-night-lotion"
                    className="text-black mt-4 xl:text-sm"
                  >
                    Anti Dandruff Lotion
                    <span>
                      <hr className="w-36 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/consti-clear-for-improved-bowel-movement"
                    className="text-black mt-4 xl:text-sm"
                  >
                    Consti clear
                    <span>
                      <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/cholest-vati-natural-metabolic-booster-that-lowers-cholesterol"
                    className="text-black mt-4 "
                  >
                    Cholest vati
                    <span>
                      <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                </div>
                <div className="flex flex-col justify-center ">
                  <a
                    href="https://traya.health/products/avipattikar-digestion-tablets"
                    className="text-black mt-4 "
                  >
                    {" "}
                    Gut Shuddhi
                    <span>
                      <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/shatavari-ghrita"
                    className="text-black mt-4 "
                  >
                    Nasal Drops
                    <span>
                      <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/recap-serum-for-hair-fall-control"
                    className="text-black mt-4 "
                  >
                    Re Cap Serum
                    <span>
                      <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/anti-dandruff-shampoo"
                    className="text-black mt-4 "
                  >
                    Anti-Dandruff Shampoo
                    <span>
                      <hr className="w-44 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/digest-boost-for-improved-digestive-ability-traya-health"
                    className="text-black mt-4 "
                  >
                    Digest Boost
                    <span>
                      <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/meno-santulan-tablets-for-menopause-support-and-menopausal-hair-fall"
                    className="text-black mt-4 "
                  >
                    Meno Santulan
                    <span>
                      <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/mom-santulan-tablets-for-hair-fall-in-post-pregnancy-or-post-childbirth-period"
                    className="text-black mt-4 "
                  >
                    Mom Santulan
                    <span>
                      <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/pcos-santulan-for-pcos-and-hormone-related-hair-loss"
                    className="text-black mt-4 "
                  >
                    PCOS Santulan
                    <span>
                      <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    href="https://traya.health/products/thyro-santulan-tablets-for-supporting-thyroid-health"
                    className="text-black mt-4 "
                  >
                    Thyro Santulan
                    <span>
                      <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>{" "}
                  </a>
                  <a
                    onClick={() => setscalpOil(!scalpOil)}
                    className="text-black mt-4 cursor-pointer "
                  >
                    <div className="flex flex-row items-center">
                      <p> Scalp Oil &nbsp; | &nbsp;</p>
                      {scalpOil ? <ArrowLeft /> : <ArrowRight />}
                    </div>
                    <span>
                      <hr className="w-16 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                    </span>
                    {scalpOil && (
                      <div className="flex flex-col xl:ml-16 ">
                        <a
                          href="https://traya.health/products/scalp-oil-with-growth-therapy-booster-shots"
                          className="text-black mt-4 "
                        >
                          Growth therapy + scalp oil
                          <span>
                            <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                          </span>{" "}
                        </a>
                        <a
                          href="https://traya.health/products/scalp-oil-with-calm-therapy-booster-shots"
                          className="text-black mt-4 "
                        >
                          Calm therapy + scalp oil
                          <span>
                            <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                          </span>{" "}
                        </a>
                        <a
                          href="https://traya.health/products/scalp-oil-with-dandruff-therapy-booster-shots"
                          className="text-black mt-4 "
                        >
                          Dandruff therapy + scalp oil
                          <span>
                            <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                          </span>{" "}
                        </a>
                        <a
                          href="https://traya.health/products/scalp-oil-with-scalp-therapy-booster-shots"
                          className="text-black mt-4 "
                        >
                          Scalp therapy + scalp oil
                          <span>
                            <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                          </span>
                        </a>
                      </div>
                    )}
                  </a>
                </div>
              </div>
              {/* )} */}
            </div>
          </div>
          <div className="text-gray-600 xl:-mt-16 xl:p-12 xs:px-4 xl:ml-12  xs:-mr-1 xs:-mt-2 pb-20">
            <h3 className="uppercase text-custom-black text-lg font-bold mt-5 mb-2">
              how we do it
            </h3>
            <a
              href="https://traya.health/pages/the-science"
              className="  hover:underline"
            >
              <p className="hover:underline text-left text-black">
                Traya Science
              </p>
            </a>
            <a href="https://traya.health/pages/traya-ingredients">
              <p className="mt-2 hover:underline text-left text-black">
                {" "}
                Ingredient
              </p>
            </a>
            <a href="https://traya.health/pages/reviews">
              {" "}
              <p className="mt-2 hover:underline text-left text-black">
                {" "}
                Reviews
              </p>
            </a>
            <a href="https://traya.health/pages/customer-stories">
              <p className="mt-2 mb-10 hover:underline text-left text-black">
                Hero&apos;s page
              </p>
            </a>
            <h3 className="uppercase text-custom-black text-lg  text-left font-bold mt-5 mb-2">
              WHO WE ARE
            </h3>
            <a href="https://traya.health/pages/about-us ">
              <p className="mt-2 hover:underline text-left text-black">
                {" "}
                About Us
              </p>
            </a>
            <a href="https://traya.health/pages/our-experts">
              <p className="mt-2 hover:underline text-left text-black">
                {" "}
                Our Experts
              </p>
            </a>
            <a href="https://traya.health/blogs/hair-care">
              <p className="mt-2 hover:underline text-left text-black">Blog</p>
            </a>
            <h3 className="uppercase text-custom-black text-lg font-bold mt-5 mb-2 text-left ">
              get in touch
            </h3>
            <div className="flex flex-wrap flex-row justify-between items-center ">
              <a href="https://www.instagram.com/traya.health/">
                <InstagramSvg theme={"dark"}/>
              </a>
              <a href="https://www.facebook.com/traya.health/">
                <FacebookSvg theme={"dark"}/>
              </a>
              <a href="https://api.whatsapp.com/send?phone=918828006272&utm_source=chatwas&utm_medium=chat&utm_campaign=chatbot">
                <WhatsAppSvg theme={"dark"}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => closeNav()}
        style={{ padding: 10, cursor: "pointer" }}
      >
       <CloseSvg />
      </div>
    </ul>
  );
};

export default DesktopNavHeader;
