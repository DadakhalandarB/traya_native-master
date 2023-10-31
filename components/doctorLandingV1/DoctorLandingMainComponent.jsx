"use client";

import { useCallback, useEffect, useState, useContext } from "react";
const ReactPlayer = lazy(() => import("react-player"), { ssr: false });
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cookies from "js-cookie";
import { CartContext } from "@context/cart-store";
import { CDN_BASE_URL } from "@constants/config";
import { useRouter } from "next/navigation";
import { lazy } from "react";
import Image from "next/image";
import Loader from "@/components/Loader";
import FooterPage from "@/components/landingPage/landingFooter";
import { fredoka } from "@/constants/fontConfig";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";

const left = `${CDN_BASE_URL}website_images/localImages/left.webp`;
const right = `${CDN_BASE_URL}website_images/localImages/right.webp`;
const frame676 = `${CDN_BASE_URL}website_images/localImages/frame676.webp`;

const names = ["Ayurveda", "Dermatology", "Nutrition"];

function DoctorLandingMainComponent({ props }) {
  const [docType, setDocType] = useState("");
  const [itemList, setItemList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (itemList.length < 1) {
      let tempItem = [];
      props?.productData.forEach((val) => {
        let tempObj = {};
        tempObj.name = val.title;
        tempObj.id = val.id;
        tempObj.price = val.price;
        tempObj.quantity = 1;
        tempItem.push(tempObj);
      });
      setItemList(tempItem);
    }
  }, [itemList.length, props?.productData]);

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setDocType(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  let settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let productSettings1 = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyload: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          slidesToScroll: 1,
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
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow variant={"light"} />,
    prevArrow: <SamplePrevArrow variant={"light"} />,
  };

  let productSettings2 = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyload: true,
    adaptiveHeight: true,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          adaptiveHeight: true,
        },
      },
    ],
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  let productSettings3 = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyload: true,
    adaptiveHeight: true,
    // className: "center",
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          adaptiveHeight: true,
        },
      },
    ],
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  let productSettings4 = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyload: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          slidesToScroll: 1,
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
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          adaptiveHeight: true,
        },
      },
    ],
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  const cxArray = [
    `${CDN_BASE_URL}website_images/doctor_landing_page/Anuradha.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/Anuu.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/Jayna.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/Poonam.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/review_cx_1.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/review_cx_2.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/review_cx_3.png`,
  ];

  const docArray = [
    `${CDN_BASE_URL}website_images/doctor_landing_page/doc_1.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/doc_2.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/doc_3.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/doc_4.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/doc.5.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/doc.6.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/doc_7.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/doc_8.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/doc_9.png`,
    `${CDN_BASE_URL}website_images/doctor_landing_page/doc_10.png`,
  ];

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
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      ecommerce: {
        currencyCode: "INR",
        value: tempItem[0].price,
        items: tempItem,
      },
      event: "nt_select_item",
    });
    window.location.href = `/products/${val.routeName}`;
  };

  return props?.productData?.length < 0 ? (
    <Loader />
  ) : (
    <>
      <div
        className={`form-hero xl:mb-1 sm:mb-6 md:mb-6 lg:mb-2 xs:mb-4 relative`}
      >
        <div className={`block xl:hidden lg:hidden md:hidden sm:hidden`}>
          <Image
            src={`${CDN_BASE_URL}website_images/doctor_landing_page/doctor_landing_mobile.png`}
            alt="Traya banner mobile"
            objectFit="cover"
            layout="responsive"
            priority={true}
            height={800}
            width={390}
            loading="eager"
          />
        </div>

        <div className="hidden sm:block md:block lg:block xl:block">
          <Image
            src={`${CDN_BASE_URL}website_images/doctor_landing_page/doctor_landing_desktop.png`}
            alt="Traya banner desktop"
            height={685}
            objectFit="cover"
            layout="responsive"
            width={1500}
            priority={true}
            loading="eager"
          />
        </div>
        <div className="xl:px-16 lg:px-16 md:px-8 xs:px-[8%] absolute 2xl:top-[25%] xl:top-[20%] lg:top-[10%] md:top-1/5 top-[12%] hidden sm:block md:block lg:block xl:block">
          <p
            className={`xs:text-center xl:text-left lg:text-left md:text-left sm:text-left xs:leading-snug font-[400] xl:leading-tight lg:leading-tight md:leading-tight sm:leading-tight xl:text-[46px] lg:text-[46px] sm:text-[38px] md:text-[38px] text-[25px] ${fredoka.variable}`}
            style={{ color: "#414042" }}
          >
            Get Expert Solutions for
            <br />
            Your Hair Problems!
          </p>
          <p
            className="xs:text-center xl:text-left lg:text-left md:text-left font-sans xs:leading-snug xl:leading-tight lg:leading-tight md:leading-none font-[600] xl:text-[35px] lg:text-[35px] sm:text-[28px] md:text-[28px] text-[18px] xs:my-4 xs:py-1 xl:py-5 lg:py-5"
            style={{ color: "#414042" }}
          >
            Speak to India’s leading
            <br />
            Dermatologists for just ₹
            {router.pathname === "/doctor-landingV1"
              ? "499"
              : router.pathname === "/doctor-landingV2"
              ? "399"
              : "299"}
            !
          </p>

          <div className="flex flex-wrap flex-row mt-2 sm:mt-6 md:mt-6">
            <div className="xs:pb-2 pr-2 xs:mx-auto sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0">
              <a
                href={
                  router.pathname === "/doctor-landingV1"
                    ? `/doctor-landingV1/appointment`
                    : router.pathname === "/doctor-landingV2"
                    ? `/doctor-landingV2/appointment`
                    : `/doctor-landingV3/appointment`
                }
                onClick={() => {
                  router.pathname === "/doctor-landingV1"
                    ? Cookies.set("DOCTOR_LANDING", "landingV1")
                    : router.pathname === "/doctor-landingV2"
                    ? Cookies.set("DOCTOR_LANDING", "landingV2")
                    : Cookies.set("DOCTOR_LANDING", "landingV3");
                }}
                className="w-fit flex bg-[#B7D340] text-[#414042] hover:bg-[#414042] hover:text-white py-3 px-8 xl:px-12 text-[20px] md:text-[26px] lg:text-[26px] xl:text-[26px] font-sans font-[600] rounded-full shadow-lg"
                id={
                  router.pathname === "/doctor-landingV1"
                    ? `doc_499`
                    : router.pathname === "/doctor-landingV2"
                    ? `doc_399`
                    : `doc_299`
                }
              >
                Book An Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="absolute left-[9%] right-[9%] top-[12%] block sm:hidden md:hidden lg:hidden xl:hidden">
          <p
            className={`xs:text-center xl:text-left lg:text-left md:text-left sm:text-left xs:leading-snug font-[400] xl:leading-tight lg:leading-tight md:leading-tight sm:leading-tight xl:text-[46px] lg:text-[46px] sm:text-[38px] md:text-[38px] text-[25px] ${fredoka.variable}`}
            style={{ color: "#414042" }}
          >
            Get Expert Solutions for
            <br />
            Your Hair Problems!
          </p>
          <p
            className="xs:text-center xl:text-left lg:text-left md:text-left font-sans xs:leading-snug xl:leading-tight lg:leading-tight md:leading-none font-[600] xl:text-[35px] lg:text-[35px] sm:text-[28px] md:text-[28px] text-[18px] xs:my-4 xs:py-1 xl:py-5 lg:py-5"
            style={{ color: "#414042" }}
          >
            Speak to India’s leading
            <br />
            Dermatologists for just ₹
            {router.pathname === "/doctor-landingV1"
              ? "499"
              : router.pathname === "/doctor-landingV2"
              ? "399"
              : "299"}
            !
          </p>

          <div className="flex flex-wrap flex-row mt-2 sm:mt-6 md:mt-6">
            <div className="xs:pb-2 pr-2 xs:mx-auto sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0">
              <a
                href={
                  router.pathname === "/doctor-landingV1"
                    ? `/doctor-landingV1/appointment`
                    : router.pathname === "/doctor-landingV2"
                    ? `/doctor-landingV2/appointment`
                    : `/doctor-landingV3/appointment`
                }
                onClick={() => {
                  router.pathname === "/doctor-landingV1"
                    ? Cookies.set("DOCTOR_LANDING", "landingV1")
                    : router.pathname === "/doctor-landingV2"
                    ? Cookies.set("DOCTOR_LANDING", "landingV2")
                    : Cookies.set("DOCTOR_LANDING", "landingV3");
                }}
                className="w-fit flex bg-[#B7D340] text-[#414042] hover:bg-[#414042] hover:text-white py-3 px-8 xl:px-12 text-[20px] md:text-[26px] lg:text-[26px] xl:text-[26px] font-sans font-[600] rounded-full shadow-lg"
                // id="hairtestcta2-native"
                id={
                  router.pathname === "/doctor-landingV1"
                    ? `doc_499`
                    : router.pathname === "/doctor-landingV2"
                    ? `doc_399`
                    : `doc_299`
                }
              >
                Book An Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center xl:mb-0 lg:mb-14">
        <p
          className={`${fredoka.variable} xl:text-[44px] sm:text-[40px] md:text-[40px] xs:text-[24px] lg:text-[44px] mt-4 tracking-wide xl:mt-10 font-[400] text-custom-black xs:px-4 xs:leading-[31px]`}
        >
          Why Choose Us?
        </p>
        <div className="xl:w-8/12 px-6 py-5 xl:block lg:block md:hidden sm:hidden hidden xl:flex xl:justify-center xl:space-x-6">
          <div className="flex">
            <Image
              width={84}
              height={84}
              loading="lazy"
              src={`${CDN_BASE_URL}website_images/doctor_landing_page/Dermatologist_Icon.png`}
              alt="Dermatologist Icon"
            />
            <p className="flex items-center text-left pl-4 font-sans font-[600] text-[#414042] text-[18px]">
              Verified <br />
              dermatologist
            </p>
          </div>
          <div className="flex">
            <Image
              width={84}
              height={84}
              loading="lazy"
              src={`${CDN_BASE_URL}website_images/doctor_landing_page/Hair%20Analysis_Icon.png`}
              alt="Hair Analysis Icon"
            />
            <p className="flex items-center text-left pl-4 font-sans font-[600] text-[#414042] text-[18px]">
              In-depth
              <br />
              hair analysis
            </p>
          </div>
          <div className="flex">
            <Image
              width={84}
              height={84}
              loading="lazy"
              src={`${CDN_BASE_URL}website_images/doctor_landing_page/Treatment%20Plan_Icon.png`}
              alt="Treatment Icon"
            />
            <p className="flex items-center text-left pl-4 font-sans font-[600] text-[#414042] text-[18px]">
              Personalized
              <br />
              treatment plans
            </p>
          </div>
          <div className="flex">
            <Image
              width={84}
              height={84}
              loading="lazy"
              src={`${CDN_BASE_URL}website_images/doctor_landing_page/Prescription_Icon.png`}
              alt="Prescription Icon"
            />
            <p className="flex items-center text-left pl-4 font-sans font-[600] text-[#414042] text-[18px]">
              Digital <br /> prescription
            </p>
          </div>
        </div>
        <div className="xl:w-8/12 md:w-[70%] px-4 py-4 xl:hidden lg:hidden sm:hidden md:hidden block xl:flex xl:justify-center space-y-6 md:space-y-8">
          <div className="flex space-x-7">
            <div className="flex">
              <Image
                width={60}
                height={60}
                loading="lazy"
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Dermatologist_Icon.png`}
                alt="Dermatologist Icon"
              />
              <p className="flex items-center text-left pl-2 font-sans font-[600] text-[#414042] text-[13px]">
                Verified <br />
                dermatologist
              </p>
            </div>
            <div className="flex">
              <Image
                width={60}
                height={60}
                loading="lazy"
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Hair%20Analysis_Icon.png`}
                alt="Hair Analysis Icon"
              />
              <p className="flex items-center text-left pl-2 font-sans font-[600] text-[#414042] text-[13px]">
                In-depth
                <br />
                hair analysis
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex">
              <Image
                width={60}
                height={60}
                loading="lazy"
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Treatment%20Plan_Icon.png`}
                alt="Treatment Icon"
              />
              <p className="flex items-center text-left pl-2 font-sans font-[600] text-[#414042] text-[13px]">
                Personalized
                <br />
                treatment plans
              </p>
            </div>
            <div className="flex">
              <Image
                width={60}
                height={60}
                loading="lazy"
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Prescription_Icon.png`}
                alt="Prescription Icon"
              />
              <p className="flex items-center text-left pl-2 font-sans font-[600] text-[#414042] text-[13px]">
                Digital <br /> prescription
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-8/12 md:w-[70%] px-4 py-4 xl:hidden lg:hidden sm:block md:block hidden xl:flex xl:justify-center space-y-6 md:space-y-10 mt-6">
          <div className="flex space-x-24">
            <div className="flex">
              <Image
                width={80}
                height={80}
                loading="lazy"
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Dermatologist_Icon.png`}
                alt="Dermatologist Icon"
              />
              <p className="flex items-center text-left pl-2 font-sans font-[600] text-[#414042] text-[18px]">
                Verified <br />
                dermatologist
              </p>
            </div>
            <div className="flex">
              <Image
                width={80}
                height={80}
                loading="lazy"
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Hair%20Analysis_Icon.png`}
                alt="Hair Analysis Icon"
              />
              <p className="flex items-center text-left pl-2 font-sans font-[600] text-[#414042] text-[18px]">
                In-depth
                <br />
                hair analysis
              </p>
            </div>
          </div>
          <div className="flex space-x-20">
            <div className="flex">
              <Image
                width={80}
                height={80}
                loading="lazy"
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Treatment%20Plan_Icon.png`}
                alt="Treatment Icon"
              />
              <p className="flex items-center text-left pl-2 font-sans font-[600] text-[#414042] text-[18px]">
                Personalized
                <br />
                treatment plans
              </p>
            </div>
            <div className="flex">
              <Image
                width={80}
                height={80}
                loading="lazy"
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Prescription_Icon.png`}
                alt="Prescription Icon"
              />
              <p className="flex items-center text-left pl-2 font-sans font-[600] text-[#414042] text-[18px]">
                Digital <br /> prescription
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] lg:px-40 mx-auto block xl:hidden lg:hidden md:hidden rounded shadow-md">
          <ReactPlayer
            // url="https://www.youtube.com/watch?v=X2PZm_vp43M"
            url={
              router.pathname === "/doctor-landingV1"
                ? "https://www.youtube.com/watch?v=X2PZm_vp43M"
                : router.pathname === "/doctor-landingV2"
                ? "https://www.youtube.com/watch?v=sr32nxReB0M"
                : "https://www.youtube.com/watch?v=kaWX-WMm9Pk"
            }
            id="video"
            controls={true}
            playing={true}
            width="100%"
            className="relative"
            height="200px"
            light={
              <Image
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Doctor_video_banner.png`}
                width={396}
                height={199}
                alt="how to use kit thumbnail"
              />
            }
          />
        </div>
        <div className="w-[70%] mx-auto hidden xl:hidden lg:hidden md:block rounded shadow-md">
          <ReactPlayer
            url={
              router.pathname === "/doctor-landingV1"
                ? "https://www.youtube.com/watch?v=X2PZm_vp43M"
                : router.pathname === "/doctor-landingV2"
                ? "https://www.youtube.com/watch?v=sr32nxReB0M"
                : "https://www.youtube.com/watch?v=kaWX-WMm9Pk"
            }
            id="video"
            controls={true}
            playing={true}
            width="100%"
            className="relative"
            height="280px"
            light={
              <Image
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Doctor_video_banner.png`}
                width={1000}
                height={500}
                alt="how to use kit thumbnail"
              />
            }
          />
        </div>
        <div className="w-[61%] mx-auto hidden xl:block lg:block md:hidden rounded shadow-md">
          <ReactPlayer
            url={
              router.pathname === "/doctor-landingV1"
                ? "https://www.youtube.com/watch?v=X2PZm_vp43M"
                : router.pathname === "/doctor-landingV2"
                ? "https://www.youtube.com/watch?v=sr32nxReB0M"
                : "https://www.youtube.com/watch?v=kaWX-WMm9Pk"
            }
            id="video"
            controls={true}
            playing={true}
            width="100%"
            className="relative"
            height="500px"
            light={
              <Image
                src={`${CDN_BASE_URL}website_images/doctor_landing_page/Doctor_video_banner.png`}
                width={1000}
                height={500}
                alt="how to use kit thumbnail"
              />
            }
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-6 mb-4 sm:mt-10 md:mt-10 lg:mt-8 xl:mt-8 xl:mb-3 lg:mb-14">
        <p
          className={`${fredoka.variable} xl:text-[44px] xs:text-[24px] sm:text-[40px] md:text-[40px] lg:text-[44px] mt-4 tracking-wide xl:mt-10 font-[400] text-custom-black xs:px-4 xs:leading-[31px]"`}
        >
          Real people, Real stories
        </p>
      </div>

      <div className="xl:block lg:block md:block hidden mx-auto xl:w-full px-6 lg:w-full md:w-full w-11/12">
        <Slider
          {...productSettings1}
          className="xl:w-[63%] lg:w-11/12 md:w-11/12 xl:pt-9 md:pt-9 lg:pt-9 py-0 block mx-auto"
        >
          {cxArray.map((value, index) => (
            <div className="p-2 rounded-lg w-[100%]" key={index}>
              <div className="rounded-lg mx-auto ">
                <Image
                  height={457}
                  width={237}
                  loading="lazy"
                  src={value}
                  className={"mx-auto"}
                  alt="Traya Products"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="block xl:hidden lg:hidden md:hidden mx-auto w-[90%]">
        <Slider
          {...productSettings2}
          className="w-[100%] xl:pt-9 md:pt-9 lg:pt-9 py-0 block mx-auto"
        >
          {cxArray.map((value, index) => (
            <div className="p-2 rounded-lg w-[100%]" key={index}>
              <div className="rounded-lg mx-auto ">
                <Image
                  height={457}
                  width={237}
                  loading="lazy"
                  src={value}
                  className={"mx-auto"}
                  alt="Traya Products"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-col items-center text-center mt-6 mb-4 sm:mt-12 md:mt-12 lg:mt-8 xl:mt-8 sm:mb-3 md:mb-3 xl:mb-3 lg:mb-14">
        <p
          className={`${fredoka.variable} xl:text-[44px] xs:text-[24px] sm:text-[40px] md:text-[40px] lg:text-[44px] mt-4 tracking-wide xl:mt-10 font-[400] text-custom-black xs:px-4 xs:leading-[31px]`}
        >
          Our Expert Dermatologists
        </p>
      </div>

      <div className="xl:block lg:block md:block sm:block hidden mx-auto xl:w-full px-6 lg:w-full md:w-full w-11/12">
        <Slider
          {...productSettings4}
          className="xl:w-[63%] lg:w-11/12 md:w-11/12 xl:pt-9 md:pt-9 lg:pt-9 py-0 block mx-auto"
        >
          {docArray.map((value, index) => (
            <div className="p-2 rounded-lg w-[100%]" key={index}>
              <div className="flex justify-center">
                <Image
                  height={130}
                  width={300}
                  loading="lazy"
                  src={value}
                  alt="Traya Products"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="block xl:hidden lg:hidden md:hidden sm:hidden mx-auto w-[90%]">
        <Slider
          {...productSettings3}
          className="w-[100%] xl:pt-9 md:pt-9 lg:pt-9 py-0 block mx-auto"
        >
          {docArray.map((value, index) => (
            <div
              className="py-2 rounded-lg w-[100%]"
              key={index}
              // onClick={() => viewSingleProductPage(value.id)}
            >
              <div className="flex justify-center">
                <Image
                  height={150}
                  width={330}
                  loading="lazy"
                  src={value}
                  alt="Traya Products"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-wrap flex-row mt-16 mb-8 w-full">
        <div className="xs:pb-2 pr-2 mx-auto">
          <a
            href={
              router.pathname === "/doctor-landingV1"
                ? `/doctor-landingV1/appointment`
                : router.pathname === "/doctor-landingV2"
                ? `/doctor-landingV2/appointment`
                : `/doctor-landingV3/appointment`
            }
            onClick={() => {
              router.pathname === "/doctor-landingV1"
                ? Cookies.set("DOCTOR_LANDING", "landingV1")
                : router.pathname === "/doctor-landingV2"
                ? Cookies.set("DOCTOR_LANDING", "landingV2")
                : Cookies.set("DOCTOR_LANDING", "landingV3");
            }}
            className="w-fit flex bg-[#B7D340] text-[#414042] hover:bg-[#414042] hover:text-white py-3 px-12 xl:px-14 xs:uppercase xl:normal-case text-[16px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-sans font-[600] rounded-full shadow-lg"
            id={
              router.pathname === "/doctor-landingV1"
                ? `doc_499`
                : router.pathname === "/doctor-landingV2"
                ? `doc_399`
                : `doc_299`
            }
          >
            Book An Appointment
          </a>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default DoctorLandingMainComponent;
