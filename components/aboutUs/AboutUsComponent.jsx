"use client";

import { useState, useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "@components/Loader";
import FooterPage from "../landingPage/landingFooter";
import Image from "next/image";
import Slider from "react-slick";
import Cookies from "js-cookie";
import Header from "../productsComponents/headerBlackBG";
import { CartContext } from "@context/cart-store";
import Head from "next/head";
import { CDN_BASE_URL } from "@constants/config";
import { fredoka, nunito } from "@/constants/fontConfig";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";

function AboutUsComponent(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [discountHandle, setDiscountHandle] = useState("");
  const [syntheticId, setSyntheticId] = useState();

  const { showMyRecc } = useContext(CartContext);
  useEffect(() => {
    let _syntheticId;
    if (typeof window !== "undefined") {
      _syntheticId = window.localStorage.getItem("syntheticId");
    }
    setSyntheticId(_syntheticId);
  }, [showMyRecc]);
  const loaderProp = ({ src }) => {
    return src;
  };

  const doctorData = [
    {
      images: (
        <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
          <div>
            <Image
              src={`${CDN_BASE_URL}website_images/female_result_page/doctors/shailendra.png`}
              className="rounded-full border border-green-600"
              alt="dr Jaspreet"
              width={250}
              height={250}
            />{" "}
          </div>
          <div className="w-full">
            <h1 className="font-bold text-xl mt-2" style={{ color: "#414042" }}>
              Dr. Shailendra Chaubey
            </h1>
          </div>
          <p className="mb-6 mt-2 text-md w-full" style={{ color: "#414042" }}>
            AYURVEDIC DOCTOR | HOLISTIC HEALER
          </p>
          <h1 className="mb-6 mt-2 text-lg" style={{ color: "#6d6e71" }}>
            A modern-day Vaidya with 11 years of experience, a BAMS graduate
            from Pune, Dr.Chaubey is also a panchakarma practitioner and a
            spiritual healer. He has spent years perfecting his preventive hair
            loss all-natural treatment.
          </h1>
        </div>
      ),
    },
    {
      images: (
        <div className="mr-4 ml-4 mb-5  flex flex-col items-center p-2">
          <div>
            <Image
              src={`${CDN_BASE_URL}website_images/female_result_page/doctors/sangeetha.png`}
              className="rounded-full border border-green-600"
              alt="dr Jaspreet"
              width={250}
              height={250}
            />{" "}
          </div>
          <div className="w-full">
            <h1 className="font-bold text-xl mt-2" style={{ color: "#414042" }}>
              Dr. Sangeeta Menon
            </h1>
          </div>
          <p className="mb-6 mt-2 text-md w-full" style={{ color: "#414042" }}>
            NUTRITIONIST
          </p>
          <h1 className="mb-6 mt-2 text-lg" style={{ color: "#6d6e71" }}>
            With a degree in Foods and Nutrition, Dr.Menon is our nutrition
            whisperer! She also believes &apos;motility(exercise) is
            magic&apos;. Her specialization is to help you heal with food.
          </h1>
        </div>
      ),
    },
    {
      images: (
        <div className="mr-4 ml-4 mb-5  flex flex-col items-center p-2">
          <div>
            <Image
              src={`${CDN_BASE_URL}website_images/female_result_page/doctors/dr_Shefali.png`}
              className="rounded-full border border-green-600"
              alt="dr Jaspreet"
              width={250}
              height={250}
            />{" "}
          </div>
          <div className="w-full">
            <h1 className="font-bold text-xl mt-2" style={{ color: "#414042" }}>
              Dr. Shefali Saini
            </h1>
          </div>
          <p className="mb-6 mt-2 text-md w-full" style={{ color: "#414042" }}>
            DERMATOLOGIST
          </p>
          <h1 className="mb-6 mt-2 text-lg" style={{ color: "#6d6e71" }}>
            An assistant professor at the Department of Dermatology, KEM
            Hospital, Dr. Saini is a merit holder and has an MD (Dermatology,
            Venereology and Leprosy). Apart from conducting excellent diagnosis
            and providing treatment, she is an avid marathon runner and enjoys
            theatre.
          </h1>
        </div>
      ),
    },
    {
      images: (
        <div className="mr-4 ml-4 mb-5  flex flex-col items-center p-2">
          <div>
            <Image
              src={`${CDN_BASE_URL}website_images/female_result_page/doctors/Dr._dhwani_160x.png`}
              className="rounded-full border border-green-600"
              alt="dr Jaspreet"
              width={250}
              height={250}
            />{" "}
          </div>
          <div className="w-full">
            <h1 className="font-bold text-xl mt-2" style={{ color: "#414042" }}>
              Dr. Dhwani Saxena
            </h1>
          </div>
          <p className="mb-6 mt-2 text-md w-full" style={{ color: "#414042" }}>
            DERMATOLOGIST
          </p>
          <h1 className="mb-6 mt-2 text-lg" style={{ color: "#6d6e71" }}>
            who primarily works as an Hair Specialist. Dr Saxena completed her
            M.D from Government Medical College and Worked as a senior resident
            at KEM College Mumbai. Dr Dhwani completed her hair hair
            transplantation training under Indian society of Hair Restoration
            and boasts the experience of having assisted or performed over 200+
            Hair surgeries
          </h1>
        </div>
      ),
    },
  ];
  let settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    lazyload: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow variant="dark" />,
    prevArrow: <SamplePrevArrow variant="dark" />,
  };

  return props?.productData?.length < 0 ? (
    <Loader />
  ) : (
    <>
      <Head>
        <title>About Us – Traya</title>
        <meta name="title" content="About Us"></meta>
        <meta
          name="description"
          content="Our approach combines the goodness of three sciences. With ingredients from the most authentic sources, we personalize your treatment delivering assured results."
        ></meta>
      </Head>
      <Header
        showSidebar={showSidebar}
        setShowSidebar={(val) => setShowSidebar(val)}
        loader={loaderProp}
        cartData={cartData}
        setCartData={(val) => setCartData(val)}
        setDiscountHandle={(val) => setDiscountHandle(val)}
        discountHandle={discountHandle}
        formatter={(val) => formatter(val)}
        addToCart={(event, val) => addToCart(event, val)}
        page={"about-us"}
      />
      {/* banner */}
      <div
        className="aboutus-hero h-screen relative"
        style={{
          backgroundImage: `url(${CDN_BASE_URL}website_images/other_pages/about_us/aboutus1.png)`,
        }}
      >
        <div className="xl:px-16 lg:px-8 lg:px-8 md:px-8 px-8 absolute top-1/4">
          <h1
            className={`xl:text-3xl lg:text-3xl md:text-3xl text-xl ${fredoka.variable}`}
            style={{ color: "#fff" }}
          >
            We Empathise
          </h1>
          <h1
            className={`text-3xl xl:text-6xl lg:text-3xl md:text-3xl ${nunito.variable} font-bold py-6 text-black`}
            style={{ opacity: 0.8 }}
          >
            Scientific solutions to
            <br /> stubborn problems
          </h1>
          <hr
            className="border-4 w-1/12 rounded-full"
            style={{ borderColor: "#3e3e3e" }}
          />
          <h1
            className={`xl:text-3xl lg:text-2xl ${nunito.variable} py-6 text-white w-10/12 xl:w-5/12 lg:w-5/12 md:w-5/12`}
          >
            Traya was born of a quest to find a scientific solution to a
            stubborn problem that many people face
          </h1>
          <div className="flex flex-wrap flex-row">
            <div className="xs:pb-5 pr-2">
              <a
                href="/home/question?cohort=1&location=About"
                onClick={() => Cookies.set("__TRAYA_UTM__", "&page=homev2")}
                className="w-fit flex bg-custom-black text-white hover:bg-white hover:text-black py-2.5 px-8 text-sm md:text-xl lg:text-xl xl:text-xl font-bold rounded-lg  uppercase"
                id="hairtestcta2-native"
              >
                Take The Hair Test{" "}
                <sup
                  style={{
                    fontSize: 9,
                    fontWeight: "bolder",
                    position: "relative",
                    top: 5,
                  }}
                >
                  TM
                </sup>
              </a>
            </div>
            <div>
              {showMyRecc && (
                <div className="xs:pb-5">
                  <a
                    href={`/result?id=${syntheticId}&page=about-us`}
                    onClick={() =>
                      Cookies.set("__TRAYA_UTM__", "&page=about-us")
                    }
                    className="w-fit flex bg-custom-black text-white hover:bg-white hover:text-black py-2.5 px-8 text-sm md:text-xl lg:text-xl xl:text-xl font-bold rounded-lg  uppercase"
                  >
                    MY RECOMMENDED PLAN
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12  lg:px-8 md:px-8  mx-auto relative xl:py-5 lg:py-4 mt-12">
        <img
          src={`${CDN_BASE_URL}website_images/other_pages/about_us/aboutus2.png`}
          className="rounded-2xl w-full object-cover about-34-sec"
          alt="aboutus"
        />

        <div className="safeSci absolute xl:w-6/12 lg:w-6/12 md:w-8/12 w-12/12 xl:left-24 lg:left-20 md:left-12 left-6 xl:top-20 lg:top-12 md:top-2 top-10 h-full ">
          <div className="w-11/12 bg-white py-1 px-3 xl:px-9 lg:px-9 md:px-9 xl:p-9 lg:p-9 md:p-9 h-[65%] lg:h-[430px] md:h-[370px]">
            <h1 className="text-custom-black text-6xl xl:text-8xl md:text-3xl lg:text-4xl mt-14 lg:mt-0 md:mt-0 font-bold">
              3/5
            </h1>
            <h1 className=" text-2xl xl:text-4xl md:text-2xl lg:text-2xl text-custom-black my-5 mx-auto   ">
              Indians above
              <br />
              the age of 25
            </h1>
            <h1 className=" text-md xl:text-xl md:text-lg lg:text-xl text-custom-black my-5 mx-auto">
              suffer some kind of hair loss/hair fall that needs a medical
              diagnosis most common of which is pattern balding or androgenic
              alopiecia.
            </h1>
            <a
              href="/home/question?cohort=1&location=About"
              onClick={() => Cookies.set("__TRAYA_UTM__", "&page=homev2")}
              className="w-fit flex bg-custom-black text-white hover:bg-white hover:text-black py-2.5 px-2  font-bold rounded-lg  uppercase lg:text-sm md:text-sm text-sm"
              id="hairtestcta2-native"
            >
              GET THE HAIR DIAGNOSIS
              <sup
                style={{
                  fontSize: 9,
                  fontWeight: "bolder",
                  position: "relative",
                  top: 5,
                }}
              >
                TM
              </sup>
            </a>
          </div>
        </div>
      </div>
      <hr
        className="border-4 w-1/12 rounded-full mx-auto mt-5"
        style={{ borderColor: "#3e3e3e" }}
      />

      <h1
        className={`text-center text-5xl font-bold ${nunito.variable} font-bold text-custom-black mt-12`}
      >
        Our Quest
      </h1>
      <div className="flex flex-wrap xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 lg:px-8 md:px-8 mx-auto relative xl:py-5 lg:py-4 mt-5">
        <div className="xl:w-5/12 lg:w-5/12 mf:w-5/12 w-full">
          <div className="block xl:hidden lg:hidden md:hidden xl:w-7/12 lg:w-7/12 md:w-7/12 w-full px-0 xl:px-10 lg:px-10 md:px-10 mt-5 xl:mt-0 lg:mt-0 md:mt-0">
            <h1
              className="text-lg xl:text-2xl lg:text-2xl md:text-2xl xl:font-semibold lg:font-semibold md:font-semibold"
              style={{ color: "#939598" }}
            >
              When Altaf and Saloni struggled with Altaf&apos;s hair loss and
              realised that hair loss is not just about exposure issues like
              water quality, pollution, and chemical treatments but also a
              result of underlying health conditions. They set out to create
              Traya.
            </h1>
          </div>
          <img
            src={`${CDN_BASE_URL}website_images/other_pages/about_us/aboutus3.png`}
            alt="our quest"
            className="rounded-md"
          />
        </div>
        <div className="hidden xl:block lg:block md:block xl:w-7/12 lg:w-7/12 md:w-7/12 w-full px-0 xl:px-10 lg:px-10 md:px-10 mt-5 xl:mt-0 lg:mt-0 md:mt-0">
          <h1
            className="text-lg xl:text-2xl lg:text-2xl md:text-2xl xl:font-semibold lg:font-semibold md:font-semibold"
            style={{ color: "#939598" }}
          >
            When Altaf and Saloni struggled with Altaf&apos;s hair loss and
            realised that hair loss is not just about exposure issues like water
            quality, pollution, and chemical treatments but also a result of
            underlying health conditions. They set out to create Traya.
          </h1>
        </div>
      </div>

      <div
        className="flex flex-col items-center text-center xl:bg-cover md:bg-cover lg:bg-cover bg-contain bg-no-repeat bg-center h-96"
        style={{
          backgroundImage: `url(${CDN_BASE_URL}website_images/other_pages/about_us/aboutus4.png)`,
        }}
      >
        <div>
          <h1
            className={`${nunito.variable} xl:text-xx4l xs:text-2xl  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-custom-black xs:px-10`}
          >
            The Threefold Way
          </h1>
          <h1
            className={`${nunito.variable} py-9 tracking-wide text-custom-black xl:text-base lg:text-base md:text-base text-sm `}
          >
            TRAYA&apos;S HOLISTIC PLAN FOR HAIR FALL
          </h1>
          <h1>
            <span className="font-bold font-sans text-custom-black xl:text-xl lg:text-xl md:text-xl text-sm">
              AYURVEDA
            </span>{" "}
            <span className="font-bold font-sans text-custom-green text-xl px-1">
              +
            </span>{" "}
            <span className="font-bold font-sans text-custom-black xl:text-xl lg:text-xl md:text-xl text-sm">
              DERMATOLOGY
            </span>{" "}
            <span className="font-bold font-sans text-custom-green text-xl px-1">
              +
            </span>{" "}
            <span className="font-bold font-sans text-custom-black xl:text-xl lg:text-xl md:text-xl text-sm">
              NUTRITION
            </span>{" "}
          </h1>
          <h1
            className={`${nunito.variable} py-5 text-custom-black xl:text-xl lg:text-xl md:text-xl text-lg  mx-auto opacity-90 xl:w-5/12 lg:w-5/12 md:w-5/12 w-10/12`}
            style={{ color: "#939598" }}
          >
            Our approach combines the goodness of three sciences. With
            ingredients from the most authentic sources, we personalize your
            treatment delivering assured results.
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12  lg:px-8 md:px-8 mx-auto relative xl:py-5 lg:py-4 mt-5">
        <div className="w-full xl:w-4/12 lg:w-4/12  md:w-4/12  px-2">
          <img
            src={`${CDN_BASE_URL}website_images/other_pages/about_us/aboutus7.png`}
            alt="Purity"
          />
          <h1 className="text-2xl font-bold my-2" style={{ color: "#f9af5f" }}>
            Purity
          </h1>
          <h1 className="text-xl" style={{ color: "#6d6e71" }}>
            Right guidance and a pure treatment can do wonders and hence we at
            Traya are pure when it comes to our services, employees and even our
            customers.
          </h1>
        </div>
        <div className="w-full xl:w-4/12 lg:w-4/12  md:w-4/12 px-2">
          <img
            src={`${CDN_BASE_URL}website_images/other_pages/about_us/aboutus6.png`}
            alt="Purity"
          />
          <h1 className="text-2xl font-bold my-2" style={{ color: "#f9af5f" }}>
            Transparency
          </h1>
          <h1 className="text-xl" style={{ color: "#6d6e71" }}>
            You deserve to know what is in these products and we do the same. We
            are completely transparent about what herbs go in our treatment and
            we share that up front. And we promise that what&apos;s printed on
            our labels is what is in our product.
          </h1>
        </div>
        <div className="w-full xl:w-4/12 lg:w-4/12  md:w-4/12 px-2">
          <img
            src={`${CDN_BASE_URL}website_images/other_pages/about_us/aboutus5.png`}
            alt="Purity"
          />
          <h1 className="text-2xl font-bold my-2" style={{ color: "#f9af5f" }}>
            Authenticity
          </h1>
          <h1 className="text-xl" style={{ color: "#6d6e71" }}>
            This winning value makes our treatment the best! We at Traya use the
            highest quality hand picked herbs and carefully formulate them
            according to your case.
          </h1>
        </div>
      </div>
      <hr
        className="border-4 w-1/12 rounded-full mx-auto"
        style={{ borderColor: "#3e3e3e" }}
      />
      <div className="xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 mx-auto relative">
        <h1
          className={`text-center ${nunito.variable} text-2xl xl:text-4xl md:text-4xl lg:text-4xl mt-4 font-bold  text-custom-black xs:px-10 py-4`}
        >
          Customised Treatment Recommended By Doctors
        </h1>
        <Slider {...settings}>
          {doctorData.map((value, index) => {
            return (
              <div key={index} className="">
                {value.images}
              </div>
            );
          })}
        </Slider>
      </div>

      <a
        href="/pages/our-experts"
        className="mx-auto w-fit flex bg-custom-black text-white hover:bg-white hover:text-black py-2.5 px-8 text-sm md:text-xl lg:text-xl xl:text-xl font-bold rounded-lg  uppercase"
      >
        OUR EXPERTS
      </a>

      <FooterPage />
    </>
  );
}

export default AboutUsComponent;
