import CloseSvg from "@/assets/icons/CloseSvg";
import ArrowLeft from "@/assets/svgs/ArrowLeft";
import ArrowRight from "@/assets/svgs/ArrowRight";
import FacebookSvg from "@/assets/svgs/FacebookSvg";
import InstagramSvg from "@/assets/svgs/InstagramSvg";
import WhatsAppSvg from "@/assets/svgs/WhatsAppSvg";
import { AppStoreIcon, GooglePlayIcon, trayaLogoDark } from "@/constants/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CDN_BASE_URL } from "@/constants/config";
import useScreenSize from "@/hooks/useScreenSize";
import { usePathname, useRouter } from "next/navigation";

const SideNav = ({ loader, hasToken, setShowModal,showMyRecc }) => {
  const [backgroundImage, setBackgroundImage] = useState();
  const [product, setProduct] = useState(false);
  const [scalpOil, setScalpOil] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const screenSize = useScreenSize();

  const mobileBannerImage = `${CDN_BASE_URL}website_images/commonImages/mega-menu-bg-m.webp`;
  const desktopBannerImage = `${CDN_BASE_URL}website_images/commonImages/mega-menu-bg-d.webp`;

  useEffect(() => {
    setBackgroundImage(
      ["sm", "xs"].includes(screenSize) ? mobileBannerImage : desktopBannerImage
    );
  }, [desktopBannerImage, mobileBannerImage, screenSize]);

  const closeNav = () => {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("mySidenav").style.width = "100%";
  };

  const loadCollectionsPage = () => {
    router.push("/collections/all-products");
    window.location.href = `/collections/all-products`;
  };

  const deleteCookie = () => {
    document.cookie =
      "ACCESS_TOKEN" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    closeModal();
    if (typeof window !== "undefined") {
      window.location.href = "/home";
    }
    window.localStorage.removeItem("login_customer_name");
  };

  return (
    <div>
      <div
        className="sidenav"
        id="mySidenav"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <ul className="xl:flex lg:flex md:flex hidden">
          <div className="flex flex-col xl:w-full">
            <a href="/">
              <div className="xl:w-48 md:w-48 xs:w-24  xl:px-11 xs:ml-3 py-6">
                <Image
                  src={trayaLogoDark}
                  alt="trayalogo"
                  loader={loader}
                  unoptimized={true}
                  height={75}
                  width={240}
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
                  We help you take control of your hairloss in a personalised,
                  and scientific way.
                </p>
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
                    pathname == "/pages/female" || pathname == "/femaleV2"
                      ? "/femaleV2/question?cohort=1&lcn=TopBar&page=female_native"
                      : "/home/question?cohort=1&lcn=TopBar&page=homev2"
                  }
                  onClick={() =>
                    Cookies.set(
                      "__TRAYA_UTM__",
                      pathname == "/pages/female" || pathname == "/femaleV2"
                        ? "&page=femalev2"
                        : "&page=homev2"
                    )
                  }
                >
                  <button className="mt-5 border border-black  xs:p-1 text-center font-semibold  text-custom-black rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                    {" "}
                    HAIR TEST <sup> TM</sup>
                  </button>
                </a>
                <a className="">
                  <button
                    className="mt-5 border border-black  xs:p-1 text-center font-semibold  text-custom-black rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white"
                    onClick={loadCollectionsPage}
                  >
                    TRAYA COMBOS
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
                        href="/products/hair-growth-herbs"
                        className="text-black mt-4 xl:text-sm"
                      >
                        Hair Ras
                        <span>
                          <hr className="w-16 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/hair-vitamins"
                        className="text-black mt-4 xl:text-sm"
                      >
                        Hair Vitamin
                        <span>
                          <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/traya-minoxidil-5"
                        className="text-black mt-4 xl:text-sm"
                      >
                        Minoxidil 5%
                        <span>
                          <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/minoxidil-2"
                        className="text-black mt-4 xl:text-sm"
                      >
                        Minoxidil 2%
                        <span>
                          <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700 xl:text-sm"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/herbal-tablets"
                        className="text-black mt-4 xl:text-sm"
                      >
                        Health Tatva
                        <span>
                          <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/shampoo"
                        className="text-black mt-4 xl:text-sm"
                      >
                        Defence Shampoo
                        <span>
                          <hr className="w-36 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/ketoconazole-2-night-lotion"
                        className="text-black mt-4 xl:text-sm"
                      >
                        Anti Dandruff Lotion
                        <span>
                          <hr className="w-36 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/consti-clear-for-improved-bowel-movement"
                        className="text-black mt-4 xl:text-sm"
                      >
                        Consti clear
                        <span>
                          <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/cholest-vati-natural-metabolic-booster-that-lowers-cholesterol"
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
                        href="/products/avipattikar-digestion-tablets"
                        className="text-black mt-4 "
                      >
                        {" "}
                        Gut Shuddhi
                        <span>
                          <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/shatavari-ghrita"
                        className="text-black mt-4 "
                      >
                        Nasal Drops
                        <span>
                          <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/recap-serum-for-hair-fall-control"
                        className="text-black mt-4 "
                      >
                        Re Cap Serum
                        <span>
                          <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/anti-dandruff-shampoo"
                        className="text-black mt-4 "
                      >
                        Anti-Dandruff Shampoo
                        <span>
                          <hr className="w-44 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/digest-boost-for-improved-digestive-ability-traya-health"
                        className="text-black mt-4 "
                      >
                        Digest Boost
                        <span>
                          <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/meno-santulan-tablets-for-menopause-support-and-menopausal-hair-fall"
                        className="text-black mt-4 "
                      >
                        Meno Santulan
                        <span>
                          <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/mom-santulan-tablets-for-hair-fall-in-post-pregnancy-or-post-childbirth-period"
                        className="text-black mt-4 "
                      >
                        Mom Santulan
                        <span>
                          <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/pcos-santulan-for-pcos-and-hormone-related-hair-loss"
                        className="text-black mt-4 "
                      >
                        PCOS Santulan
                        <span>
                          <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        href="/products/thyro-santulan-tablets-for-supporting-thyroid-health"
                        className="text-black mt-4 "
                      >
                        Thyro Santulan
                        <span>
                          <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                        </span>{" "}
                      </a>
                      <a
                        onClick={() => setScalpOil(!scalpOil)}
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
                              href="/products/scalp-oil-with-growth-therapy-booster-shots"
                              className="text-black mt-4 "
                            >
                              Growth therapy + scalp oil
                              <span>
                                <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                              </span>{" "}
                            </a>
                            <a
                              href="/products/scalp-oil-with-calm-therapy-booster-shots"
                              className="text-black mt-4 "
                            >
                              Calm therapy + scalp oil
                              <span>
                                <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                              </span>{" "}
                            </a>
                            <a
                              href="/products/scalp-oil-with-dandruff-therapy-booster-shots"
                              className="text-black mt-4 "
                            >
                              Dandruff therapy + scalp oil
                              <span>
                                <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                              </span>{" "}
                            </a>
                            <a
                              href="/products/scalp-oil-with-scalp-therapy-booster-shots"
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
                <a href="/pages/refund-policy">
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
                <a href="/pages/referral">
                  <button className="mt-5 border border-black  xs:p-1 text-center font-semibold text-custom-black  rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                    {" "}
                    REFERRAL
                  </button>
                </a>
              </div>
              <div className="text-gray-600 xl:-mt-16 xl:p-12 xs:px-4 xl:ml-12  xs:-mr-1 xs:-mt-2 pb-20">
                <h3 className="uppercase text-custom-black text-lg font-bold mt-5 mb-2">
                  how we do it
                </h3>
                <a href="/pages/the-science" className="  hover:underline">
                  <p className="hover:underline text-left text-black">
                    Traya Science
                  </p>
                </a>
                <a href="/pages/traya-ingredients">
                  <p className="mt-2 hover:underline text-left text-black">
                    {" "}
                    Ingredient
                  </p>
                </a>
                <a href="/pages/reviews">
                  {" "}
                  <p className="mt-2 hover:underline text-left text-black">
                    {" "}
                    Reviews
                  </p>
                </a>
                <a href="/pages/customer-stories">
                  <p className="mt-2 mb-10 hover:underline text-left text-black">
                    Hero&apos;s page
                  </p>
                </a>
                <h3 className="uppercase text-custom-black text-lg  text-left font-bold mt-5 mb-2">
                  WHO WE ARE
                </h3>
                <a href="/pages/about-us ">
                  <p className="mt-2 hover:underline text-left text-black">
                    {" "}
                    About Us
                  </p>
                </a>
                <a href="/pages/our-experts">
                  <p className="mt-2 hover:underline text-left text-black">
                    {" "}
                    Our Experts
                  </p>
                </a>
                <a href="https://traya.health/blogs/hair-care ">
                  <p className="mt-2 hover:underline text-left text-black">
                    Blog
                  </p>
                </a>
                <h3 className="uppercase text-custom-black text-lg font-bold mt-5 mb-2 text-left ">
                  get in touch
                </h3>
                <div className="flex flex-wrap flex-row justify-between items-center ">
                  <a href="https://www.instagram.com/traya.health/">
                    <InstagramSvg />
                  </a>
                  <a href="https://www.facebook.com/traya.health/">
                    <FacebookSvg />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=918828006272&utm_source=chatwas&utm_medium=chat&utm_campaign=chatbot">
                    <WhatsAppSvg theme={"dark"} />
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
        <ul className="xl:hidden lg:hidden md:hidden ">
          <div className="flex flex-col xl:w-full xs:px-2">
            <div className="flex justify-between">
              <a href="/">
                <div className="w-[125px] xl:px-11 xs:ml-3 py-6">
                  <Image
                    src={trayaLogoDark}
                    alt="trayalogo"
                    loader={loader}
                    unoptimized={true}
                    height={75}
                    width={240}
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
                <h3 className="uppercase text-[#414042] font-bold xl:mt-5 md:mt-12 xs:mt-12 text-left text-[15px] font-Nunito">
                  what we do
                </h3>
                <p className="text-[#414042] mt-1 text-left text-[14px] w-12/12">
                  We help you take control of your hairloss in a personalised,
                  and scientific way.
                </p>
                <div className="flex justify-between w-11/12 mt-5">
                  <div className="w-5/12">
                    {showMyRecc && (
                      <a
                        href={
                          pathname == "/pages/female" || pathname == "/femaleV2"
                            ? `/result?id=${props.syntheticId}&page=femalev2`
                            : `/result?id=${props.syntheticId}&page=homev2`
                        }
                        onClick={() =>
                          Cookies.set(
                            "__TRAYA_UTM__",
                            pathname == "/pages/female" ||
                              pathname == "/femaleV2"
                              ? "&page=femalev2"
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
                        pathname == "/pages/female" || pathname == "/femaleV2"
                          ? "&page=femalev2"
                          : "&page=homev2"
                      }
                      onClick={() =>
                        Cookies.set(
                          "__TRAYA_UTM__",
                          pathname == "/pages/female" || pathname == "/femaleV2"
                            ? "&page=femalev2"
                            : "&page=homev2"
                        )
                      }
                    >
                      <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                        {" "}
                        Hair Test <sup> Tm</sup>
                      </button>
                    </a>
                    <a href="/pages/refund-policy">
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
                    <a className="">
                      <button
                        className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]"
                        onClick={loadCollectionsPage}
                      >
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
                    <a href="/pages/referral">
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
                      <a href="/products/hair-growth-herbs">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Hair Ras
                        </button>
                      </a>
                      <a href="/products/consti-clear-for-improved-bowel-movement">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Consti clear
                        </button>
                      </a>
                      <a href="/products/traya-minoxidil-5">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Minoxidil 5%
                        </button>
                      </a>
                      <a href="/products/shampoo">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Defence Shampoo
                        </button>
                      </a>
                      <a href="/products/avipattikar-digestion-tablets">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Gut Shuddhi
                        </button>
                      </a>
                      <a href="/products/recap-serum-for-hair-fall-control">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Re Cap Serum
                        </button>
                      </a>
                      <a href="/products/ketoconazole-2-night-lotion">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Anti Dandruff lotion
                        </button>
                      </a>
                      <a href="/products/meno-santulan-tablets-for-menopause-support-and-menopausal-hair-fall">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Meno Santulan
                        </button>
                      </a>
                      <a href="/products/thyro-santulan-tablets-for-supporting-thyroid-health">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Thyro Santulan
                        </button>
                      </a>
                      <div className="">
                        <button
                          onClick={() => setScalpOil(!scalpOil)}
                          className="flex justify-between text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px]"
                        >
                          Scalp Oil
                          {scalpOil ? <ArrowLeft /> : <ArrowRight />}
                        </button>
                      </div>
                    </div>
                    <div className="w-5/12">
                      <a href="/products/consti-clear-for-improved-bowel-movement">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Cholest vati
                        </button>
                      </a>
                      <a href="/products/hair-vitamins">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Hair Vitamin
                        </button>
                      </a>
                      <a href="/products/minoxidil-2">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Minoxidil 2%
                        </button>
                      </a>
                      <a href="/products/herbal-tablets">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Health Tatva
                        </button>
                      </a>
                      <a href="/products/shatavari-ghrita">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Nasal Drops
                        </button>
                      </a>
                      <a href="/products/anti-dandruff-shampoo">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Anti-Dandruff Shampoo
                        </button>
                      </a>
                      <a href="/products/digest-boost-for-improved-digestive-ability-traya-health">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Digest Boost
                        </button>
                      </a>
                      <a href="/products/pcos-santulan-for-pcos-and-hormone-related-hair-loss">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          PCOS Santulan
                        </button>
                      </a>
                      <a href="/products/mom-santulan-tablets-for-hair-fall-in-post-pregnancy-or-post-childbirth-period">
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
                      <a href="/products/scalp-oil-with-growth-therapy-booster-shots">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Growth therapy + scalp oil
                        </button>
                      </a>
                      <a href="/products/scalp-oil-with-calm-therapy-booster-shots">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Calm therapy + scalp oil
                        </button>
                      </a>
                      <a href="/products/scalp-oil-with-dandruff-therapy-booster-shots">
                        <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                          Dandruff therapy + scalp oil
                        </button>
                      </a>
                      <a href="/products/scalp-oil-with-scalp-therapy-booster-shots">
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
                    <a href="/pages/the-science">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                        Traya Science
                      </button>
                    </a>
                    <a href="/pages/traya-ingredients">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                        Ingredients
                      </button>
                    </a>
                    <a href="/pages/reviews">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                        Reviews
                      </button>
                    </a>
                    <a href="/pages/customer-stories">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                        Hero&apos;s Page
                      </button>
                    </a>
                  </div>
                  <div className="w-5/12">
                    <h3 className="uppercase text-[#414042] text-[15px] font-bold mt-5 mb-2">
                      WHO WE ARE
                    </h3>
                    <a href="/pages/about-us ">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                        About Us
                      </button>
                    </a>
                    <a href="/pages/our-experts">
                      <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                        Our Experts
                      </button>
                    </a>
                    <a href="https://blog.traya.health/">
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
                    <InstagramSvg />
                  </a>
                  <a href="https://www.facebook.com/traya.health/">
                    <FacebookSvg />
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
    </div>
  );
};

export default SideNav;
