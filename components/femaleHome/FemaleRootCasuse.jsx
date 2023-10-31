import Image from "next/image";
import React from "react";
import Slider from "react-slick";
const DynamicSlider = dynamic(() => import("../SliderComponent"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";

const FemaleRootCasuse = () => {
  const productListImgData = [
    {
      url: "https://traya.health/pages/pcos",
      img: `${CDN_BASE_URL}website_images/female_landing_page/pcos.png`,
    },
    {
      url: "https://traya.health/pages/post-pregnancy",
      img: `${CDN_BASE_URL}website_images/female_landing_page/mom.png`,
    },
    {
      url: "https://traya.health/pages/menopause",
      img: `${CDN_BASE_URL}website_images/female_landing_page/meno.png`,
    },
    {
      url: "https://traya.health/pages/thyroid",
      img: `${CDN_BASE_URL}website_images/female_landing_page/thyro.png`,
    },
  ];
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const rootCauses = [
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/postparrtumc.webp`}
            style={{ width: 100 }}
            className="mx-auto"
            alt="Nutrition"
            height={100}
            width={100}
            loading="lazy"
          />
          <h2 className="text-center my-2 text-2xl font-sans text-custom-black">
            {" "}
            Postpartum
          </h2>
          <h5 className="text-center xl:mt-2  font-sans">
            Excessive Hair fall 4 to 6 months after delivery. Get natural,
            breastfeeding safe treatment
          </h5>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/nutritionc.webp`}
            style={{ width: 100 }}
            className="mx-auto"
            alt="Nutrition"
            height={100}
            width={100}
            loading="lazy"
          />
          <h2 className="text-center my-2 text-2xl font-sans text-custom-black">
            {" "}
            Nutrition
          </h2>
          <h5 className="text-center xl:mt-2  font-sans">
            Eating foods which are not rich in protein, vitamins and minerals
            blocks hair growth.
          </h5>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/stree.webp`}
            style={{ width: 100 }}
            className="mx-auto"
            alt="Stress"
            height={100}
            width={100}
            loading="lazy"
          />
          <h2 className="text-center my-2 text-2xl font-sans text-custom-black">
            {" "}
            Stress & Sleep
          </h2>
          <h5 className="text-center xl:mt-2  font-sans">
            Stress shifts hair root to rest phase leading to excessive hair
            fall.
          </h5>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/pcos.webp`}
            style={{ width: 100 }}
            className="mx-auto"
            alt="Stress"
            height={100}
            width={100}
            loading="lazy"
          />
          <h2 className="text-center my-2 text-2xl font-sans text-custom-black">
            {" "}
            Hormone Imbalance & PCOS
          </h2>
          <h5 className="text-center xl:mt-2  font-sans">
            Excessive androgen hormones lead to hair fall that is slow but makes
            the scalp visible
          </h5>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/menopause.webp`}
            style={{ width: 100 }}
            className="mx-auto"
            alt="Stress"
            height={100}
            width={100}
            loading="lazy"
          />
          <h2 className="text-center my-2 text-2xl font-sans text-custom-black">
            {" "}
            Menopause
          </h2>
          <h5 className="text-center xl:mt-2  font-sans">
            The shift in hormones accelerates hair fall leading to
            widening-partition of hair (Female pattern hair fall)
          </h5>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/genetics.webp`}
            style={{ width: 100 }}
            className="mx-auto"
            alt="Stress"
            height={100}
            width={100}
            loading="lazy"
          />
          <h2 className="text-center my-2 text-2xl font-sans text-custom-black">
            {" "}
            Genetics
          </h2>
          <h5 className="text-center xl:mt-2  font-sans">
            DHT(androgenic alopecia) causes hair roots to shrink and hair to
            thin and fall out.
          </h5>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/weight.webp`}
            style={{ width: 100 }}
            className="mx-auto"
            alt="Stress"
            height={100}
            width={100}
            loading="lazy"
          />
          <h2 className="text-center my-2 text-2xl font-sans text-custom-black">
            {" "}
            Weight
          </h2>
          <h5 className="text-center xl:mt-2  font-sans">
            Poor energy levels is a sign that your weight or metabolism could be
            the real cause of hair fall.
          </h5>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/environmentc.webp`}
            style={{ width: 100 }}
            className="mx-auto"
            alt="Metabolism"
            height={100}
            width={100}
            loading="lazy"
          />
          <h2 className="text-center my-2 text-2xl font-sans text-custom-black">
            {" "}
            Environment
          </h2>
          <h5 className="text-center xl:mt-2  font-sans">
            Pollution, sun, chemical exposure to hair especially keratin and
            straightening treatments trigger hair fall.
          </h5>
        </div>
      ),
    },
  ];
  let productItemImgSettings = {
    dots: true,
    autoplay: true,
    infinite: true,
    lazyload: true,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 0,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
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
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow variant={"dark"}/>,
    prevArrow: <SamplePrevArrow variant={"dark"}/>,
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col items-center text-center">
        <div>
          <h2
            className={`${nunito.variable} xl:text-xx3l xs:text-[30px] lg:text-4xl mt-4 tracking-wide font-bold xl:mt-10 text-[#3f3f3f] xs:px-4 xs:leading-[31px]`}
          >
            Find The Root Cause Of Your Hair Fall
          </h2>
          <h2
            className={`${nunito.variable} xl:text-3xl  lg:text-3xl md:text-3xl text-[14px] text-center mt-2 tracking-wide xl:mt-5 text-black xs:px-10`}
          >
            We Use Nature To Target The Root Causes Of Your Hair Fall
          </h2>
        </div>

        <div className="xl:w-9/12 2xl:w-[1110px] 2xl:mx-auto md:w-10/12 px-6 xl:block lg:block md:block hidden relative">
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/banner.webp`}
            width={2660}
            height={966}
            alt="root cause"
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            unoptimized={true}
            loading="lazy"
          />
        </div>
        <div className="w-full mx-auto pb-8 flex justify-center xl:hidden lg:hidden md:hidden">
          <DynamicSlider
            className="xl:w-8/12 xs:w-10/12 flex items-center justify-center pt-5 pb-6"
            sliderData={rootCauses}
            {...{ settings }}
          />
        </div>

        <div className="xl:py-6 lg:py-6 md:py-6 py-2">
          <a
            href="/female?cohort=1&lcn=RootCauses&page=female_native"
            onClick={() => Cookies.set("__TRAYA_UTM__", "&page=female_native")}
            className="flex bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl text-[13px] font-bold rounded-md uppercase"
            id="female-hair-test-button2-native"
          >
            Take The Hair Test{" "}
            <sup
              style={{
                fontSize: 9,
                fontWeight: "bolder",
                position: "relative",
                top: 5,
                left: 5,
              }}
            >
              TM
            </sup>
          </a>
        </div>
      </div>
      <div className="block mb-10">
        <div>
          <Slider
            {...productItemImgSettings}
            className="2xl:w-[1100px] xl:w-[72%] lg:w-10/12 md:w-10/12 w-11/12 pt-9 pb-4 mx-auto"
          >
            {productListImgData.map((value, index) => (
              <a
                href={value.url}
                className="productItem p-0 rounded-lg  w-60"
                key={index}
              >
                <Image
                  src={value.img}
                  className="mx-auto"
                  alt="products"
                  height={407}
                  width={232}
                  responsive
                  unoptimized={true}
                  loading="lazy"
                />
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FemaleRootCasuse;
