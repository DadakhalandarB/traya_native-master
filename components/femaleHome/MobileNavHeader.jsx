import CloseSvg from "@/assets/icons/CloseSvg";
import ArrowLeft from "@/assets/svgs/ArrowLeft";
import ArrowRight from "@/assets/svgs/ArrowRight";
import FacebookSvg from "@/assets/svgs/FacebookSvg";
import InstagramSvg from "@/assets/svgs/InstagramSvg";
import WhatsAppSvg from "@/assets/svgs/WhatsAppSvg";
import {
  AppStoreIcon,
  GooglePlayIcon,
  trayaLogoDark,
} from "@/constants/constants";
import { nunito } from "@/constants/fontConfig";
import Image from "next/image";
import React from "react";

const MobileNavHeader = ({
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
    <div>
      <ul className="xl:hidden lg:hidden md:hidden border-red-500">
        <div className="flex flex-col xl:w-full xs:px-2">
          <div className="flex justify-between">
            <a href="/">
              <div className="w-[125px] xl:px-11 xs:ml-3 py-6">
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
            <div
              onClick={() => closeNav()}
              style={{ padding: 10, cursor: "pointer" }}
              className="absolute right-10 top-5 block xl:hidden lg:hidden md:hidden"
            >
              <CloseSvg />
            </div>
          </div>

          <div className="flex flex-wrap w-full xl:justify-end md:justify-end lg:justify-end xs:justify-start">
            <div className=" flex flex-col  xs:px-4 xs:py-3 text-white xs:-mt-20 xl:mr-1  text-left">
              <h3
                className={`uppercase text-[#414042] font-bold xl:mt-5 md:mt-12 xs:mt-12 text-left text-[15px] ${nunito.variable}o`}
              >
                what we do
              </h3>
              <p className="text-[#414042] mt-1 text-left text-[14px] w-12/12">
                We help you take control of your hairloss in a personalised, and
                scientific way.
              </p>
              <div className="flex justify-between w-11/12 mt-5">
                <div className="w-5/12">
                  {showMyRecc && (
                    <a
                      href={
                        props.router == "/pages/female" ||
                        props.router == "/femaleV2"
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
                      <button className="text-[#414042] w-full mt-2  xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                        My Result
                      </button>
                    </a>
                  )}
                  <a href="https://trayahealth.clickpost.ai/">
                    <button className="text-[#414042] w-full mt-2  xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      Track Order
                    </button>
                  </a>
                  <a
                    href={
                      props.router == "/pages/female" ||
                      props.router == "/femaleV2"
                        ? "/female?cohort=1&lcn=TopBar&page=female_native"
                        : "/home/question?cohort=1&lcn=TopBar&page=homev2"
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
                    <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      {" "}
                      Hair Test <sup> Tm</sup>
                    </button>
                  </a>
                  <a href="https://traya.health/pages/refund-policy">
                    <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042] capitalize leading-[25px]">
                      5 Month Money Back Guarantee
                    </button>
                  </a>
                </div>
                <div className="w-5/12">
                  <a href="https://myrecords.traya.health/">
                    <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      My Plan
                    </button>
                  </a>
                  <a
                    href="https://traya.health/collections/all-products"
                    className=""
                  >
                    <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      Traya Combos
                    </button>
                  </a>

                  <a
                    onClick={() => {
                      if (!hasToken) {
                        setShowModal(true);
                      } else if (hasToken) {
                        deleteCookie();
                      }
                    }}
                  >
                    <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      {!hasToken ? "Log In" : "Log Out"}
                    </button>
                  </a>
                  <a href="https://traya.health/pages/referral">
                    <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      Referral
                    </button>
                  </a>
                  <div className="">
                    <button
                      onClick={() => setProduct(!product)}
                      className="flex justify-between text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px]"
                    >
                      Products
                      {product ? <ArrowLeft /> : <ArrowRight />}
                    </button>
                  </div>
                </div>
              </div>
              {product && (
                <div className="flex justify-between w-11/12">
                  <div className="w-5/12">
                    <a href="https://traya.health/products/hair-growth-herbs">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Hair Ras
                      </button>
                    </a>
                    <a href="https://traya.health/products/consti-clear-for-improved-bowel-movement">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Consti clear
                      </button>
                    </a>
                    <a href="https://traya.health/products/traya-minoxidil-5">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Minoxidil 5%
                      </button>
                    </a>
                    <a href="https://traya.health/products/shampoo">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Defence Shampoo
                      </button>
                    </a>
                    <a href="https://traya.health/products/avipattikar-digestion-tablets">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Gut Shuddhi
                      </button>
                    </a>
                    <a href="https://traya.health/products/recap-serum-for-hair-fall-control">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Re Cap Serum
                      </button>
                    </a>
                    <a href="https://traya.health/products/ketoconazole-2-night-lotion">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Anti Dandruff lotion
                      </button>
                    </a>
                    <a href="https://traya.health/products/meno-santulan-tablets-for-menopause-support-and-menopausal-hair-fall">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Meno Santulan
                      </button>
                    </a>
                    <a href="https://traya.health/products/thyro-santulan-tablets-for-supporting-thyroid-health">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Thyro Santulan
                      </button>
                    </a>
                    <div className="">
                      <button
                        onClick={() => setscalpOil(!scalpOil)}
                        className="flex justify-between text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px]"
                      >
                        Scalp Oil
                        {scalpOil ? <ArrowLeft /> : <ArrowRight />}
                      </button>
                    </div>
                  </div>
                  <div className="w-5/12">
                    <a href="https://traya.health/products/consti-clear-for-improved-bowel-movement">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Cholest vati
                      </button>
                    </a>
                    <a href="https://traya.health/products/hair-vitamins">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Hair Vitamin
                      </button>
                    </a>
                    <a href="https://traya.health/products/minoxidil-2">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Minoxidil 2%
                      </button>
                    </a>
                    <a href="https://traya.health/products/herbal-tablets">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Health Tatva
                      </button>
                    </a>
                    <a href="https://traya.health/products/shatavari-ghrita">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Nasal Drops
                      </button>
                    </a>
                    <a href="https://traya.health/products/anti-dandruff-shampoo">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Anti-Dandruff Shampoo
                      </button>
                    </a>
                    <a href="https://traya.health/products/digest-boost-for-improved-digestive-ability-traya-health">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Digest Boost
                      </button>
                    </a>
                    <a href="https://traya.health/products/pcos-santulan-for-pcos-and-hormone-related-hair-loss">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        PCOS Santulan
                      </button>
                    </a>
                    <a href="https://traya.health/products/mom-santulan-tablets-for-hair-fall-in-post-pregnancy-or-post-childbirth-period">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Mom Santulan
                      </button>
                    </a>
                  </div>
                </div>
              )}
              {scalpOil && (
                <div className="flex justify-between w-11/12">
                  <div className="w-7/12">
                    <a href="https://traya.health/products/scalp-oil-with-growth-therapy-booster-shots">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Growth therapy + scalp oil
                      </button>
                    </a>
                    <a href="https://traya.health/products/scalp-oil-with-calm-therapy-booster-shots">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Calm therapy + scalp oil
                      </button>
                    </a>
                    <a href="https://traya.health/products/scalp-oil-with-dandruff-therapy-booster-shots">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Dandruff therapy + scalp oil
                      </button>
                    </a>
                    <a href="https://traya.health/products/scalp-oil-with-scalp-therapy-booster-shots">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                        Scalp therapy + scalp oil
                      </button>
                    </a>
                  </div>
                </div>
              )}
              <div className="flex justify-between w-11/12">
                <div className="w-5/12">
                  <h3 className="uppercase text-custom-black text-[15px] font-bold mt-5 mb-2">
                    how we do it
                  </h3>
                  <a href="https://traya.health/pages/the-science">
                    <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      Traya Science
                    </button>
                  </a>
                  <a href="https://traya.health/pages/traya-ingredients">
                    <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      Ingredients
                    </button>
                  </a>
                  <a href="https://traya.health/pages/reviews">
                    <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      Reviews
                    </button>
                  </a>
                  <a href="https://traya.health/pages/customer-stories">
                    <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      Hero&apos;s Page
                    </button>
                  </a>
                </div>
                <div className="w-5/12">
                  <h3 className="uppercase text-[#414042] text-[15px] font-bold mt-5 mb-2">
                    WHO WE ARE
                  </h3>
                  <a href="https://traya.health/pages/about-us ">
                    <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      About Us
                    </button>
                  </a>
                  <a href="https://traya.health/pages/our-experts">
                    <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      Our Experts
                    </button>
                  </a>
                  <a href="https://traya.health/blogs/hair-care">
                    <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                      Blog
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-gray-600 xl:-mt-16 xl:p-12 xs:px-4 xl:ml-12 ">
              <h3 className="uppercase text-[#414042] text-[15px] font-bold mt-5 mb-2 ">
                get in touch
              </h3>
              <div className="flex flex-wrap flex-row justify-between items-center ">
                <a href="https://www.instagram.com/traya.health/">
                  <InstagramSvg theme={"dark"} />
                </a>
                <a href="https://www.facebook.com/traya.health/">
                  <FacebookSvg theme={"dark"} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=918828006272&utm_source=chatwas&utm_medium=chat&utm_campaign=chatbot">
                  <WhatsAppSvg theme={"dark"} />
                </a>
              </div>
            </div>
            <div className="flex justify-between w-11/12 px-4 pb-5">
              <div className="w-6/12">
                <h3 className="uppercase text-[#414042] text-[15px] font-bold mt-5 mb-2 text-left">
                  EXPERIENCE THE <br />
                  TRAYA MOBILE APP
                </h3>
                <a
                  href="https://trayahealth.app.link/xT3UrtZDvyb"
                  className="xl:w-[158px] xl:h-[48px]"
                >
                  <Image
                    src={AppStoreIcon}
                    alt="App Store"
                    className="xl:w-[158px] xl:h-[48px]"
                    height={90}
                    width={300}
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://trayahealth.app.link/xT3UrtZDvyb"
                  className="xl:w-[158px] xl:h-[48px]"
                >
                  <Image
                    src={GooglePlayIcon}
                    alt="Google Play"
                    height={90}
                    width={300}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => closeNav()}
          style={{ padding: 10, cursor: "pointer" }}
          className="hidden xl:block lg:block md:block"
        >
          <CloseSvg />
        </div>
      </ul>
    </div>
  );
};

export default MobileNavHeader;
