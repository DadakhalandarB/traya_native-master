import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CDN_BASE_URL } from "../../constants/config";

const left = `${CDN_BASE_URL}website_images/localImages/left.webp`;
const right = `${CDN_BASE_URL}website_images/localImages/right.webp`;

function OurDoctors(props) {
  let productItemImgSettings = {
    dots: false,
    // dotsClass: 'slick-dots',
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyload: true,
    slideMargin: 50,
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
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
          dots: true,
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
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // variableWidth: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
          dots: true,
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
    const { className, style, onClick } = props;
    return (
      <div className={className}>
        <Image
          src={right}
          alt="left arrow"
          onClick={onClick}
          fill
          loading="lazy"
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className}>
        <Image
          src={left}
          alt="left arrow"
          onClick={onClick}
          className="xs:hidden"
          fill
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <>
      <div className="2xl:w-[1110px] w-11/12 xl:w-9/12 lg:w-11/12 md:w-11/12 mx-auto mt-12">
        <div>
          <p className="font-sans font-bold xl:text-[35px] xs:text-[24px] text-center lg:text-[35px] md:text-[35px] text-[#3f3f3f] mt-5">
            Experts Behind The Science
          </p>
          <p className="font-sans xl:text-[30px] lg:text-[30px] md:text-[30px] xs:text-[15px] text-center text-[#3f3f3f] mt-5">
            Once you buy the plan, a dermatologist and ayurveda doctor will
            build your prescription.
          </p>
        </div>
        {["xl", "lg", "md"].includes() ? (
          <div className="hidden xl:block lg:block md:block">
            <Slider
              {...productItemImgSettings}
              className="female-landing-doctor"
            >
              <div className="px-5 py-4">
                <div className="flex flex-col items-center justify-around shadow-xl">
                  <div
                    className=" border-4 h-28 md:h-40 w-28 md:w-40 border-custom-green rounded-full flex flex-col items-center relative"
                    // style={{ height: 150, width: 150 }}
                  >
                    <a href="https://traya.health/pages/doctor-dhwani">
                      <Image
                        src={`${CDN_BASE_URL}website_images/female_result_page/doctors/Dr._dhwani_160x.png`}
                        className="rounded-lg border border-green-600"
                        alt="dr Dhwani Saxena"
                        width="100"
                        height="100"
                        // unoptimized={true}
                        loader={props.loader}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="gap-2 md:gap-0 rounded-2xl flex flex-col items-center md:h-40 h-60 justify-center  ">
                    <p
                      className="font-bold text-center text-lg xl:text-[20px] lg:text-[20px] md:text-xl  "
                      style={{ color: "#414042" }}
                    >
                      Dr. Dhwani Saxena
                    </p>
                    <p
                      className="text-center xl:text-[20px] text-sm md:text-base  pb-2 "
                      style={{ color: "#414042" }}
                    >
                      Dermatologist | Hair Specialist{" "}
                    </p>
                    <p>
                      <a
                        href="https://traya.health/pages/doctor-dhwani"
                        style={{ color: "#00000080" }}
                      >
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="flex flex-col items-center shadow-xl">
                  <div
                    className="border-4 h-28 md:h-40 w-28 md:w-40 border-custom-green rounded-full flex flex-col items-center relative"
                    // style={{ height: 150, width: 150 }}
                  >
                    <a href="https://traya.health/pages/shefali-saini">
                      <Image
                        src={`${CDN_BASE_URL}website_images/female_result_page/doctors/dr_Shefali.png`}
                        className="rounded-full border border-green-600"
                        alt="dr Shefali Saini"
                        width="100"
                        height="100"
                        // unoptimized={true}
                        loader={props.loader}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="gap-2 md:gap-0 rounded-2xl flex flex-col items-center px-5 md:h-40 h-60 justify-center  ">
                    <p
                      className="font-bold text-center text-lg xl:text-[20px] lg:text-[20px] md:text-xl  "
                      style={{ color: "#414042" }}
                    >
                      Dr. Shefali Saini
                    </p>
                    <p
                      className="text-center text-sm md:text-base xl:text-[20px]  pb-2 "
                      style={{ color: "#414042" }}
                    >
                      Dermatologist l Hair Specialist
                    </p>
                    <p>
                      <a
                        href="https://traya.health/pages/shefali-saini"
                        style={{ color: "#00000080" }}
                      >
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="flex flex-col  items-center shadow-xl">
                  <div
                    className="border-4 h-28 md:h-40 w-28 md:w-40 border-custom-green rounded-full flex flex-col items-center relative"
                    // style={{ height: 150, width: 150 }}
                  >
                    <a href="https://traya.health/pages/shailendra-chaubey">
                      <Image
                        src={`${CDN_BASE_URL}website_images/other_pages/our_experts/experts2.png`}
                        className="rounded-lg border border-green-600"
                        alt="dr Shailendra Chaubey"
                        width="100"
                        height="100"
                        // unoptimized={true}
                        loader={props.loader}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className=" gap-2 md:gap-0 rounded-2xl flex flex-col items-center px-5 md:h-40 h-60 justify-center  ">
                    <p
                      className="font-bold text-center text-lg xl:text-[20px] lg:text-[20px] md:text-xl  "
                      style={{ color: "#414042" }}
                    >
                      Dr. Shailendra Chaubey
                    </p>
                    <p
                      className="text-center text-sm md:text-base xl:text-[20px]  pb-2 "
                      style={{ color: "#414042" }}
                    >
                      Ayurveda Practitioner{" "}
                    </p>
                    <p>
                      <a
                        href="https://traya.health/pages/shailendra-chaubey"
                        style={{ color: "#00000080" }}
                      >
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="flex flex-col  items-center shadow-xl">
                  <div
                    className="border-4 h-28 md:h-40 w-28 md:w-40 border-custom-green rounded-full flex flex-col items-center relative"
                    // style={{ height: 150, width: 150 }}
                  >
                    <a href="https://traya.health/pages/doctor-harish">
                      <Image
                        src={`${CDN_BASE_URL}website_images/other_pages/our_experts/drharish.png`}
                        className="rounded-lg border border-green-600"
                        alt="dr Harish Balaji. R"
                        width="100"
                        height="100"
                        // unoptimized={true}
                        loader={props.loader}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className=" gap-2 md:gap-0 rounded-2xl flex flex-col items-center px-5 md:h-40 h-60 justify-center  ">
                    <p
                      className="font-bold text-center text-lg xl:text-[20px] lg:text-[20px] md:text-xl  "
                      style={{ color: "#414042" }}
                    >
                      Dr. Harish Balaji. R
                    </p>
                    <p
                      className="text-center text-sm md:text-base xl:text-[20px]  pb-2 "
                      style={{ color: "#414042" }}
                    >
                      {" "}
                      Dermatologist{" "}
                    </p>
                    <p>
                      <a
                        href="https://traya.health/pages/doctor-harish"
                        style={{ color: "#00000080" }}
                      >
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="flex  flex-col items-center justify-around  shadow-xl">
                  <div
                    className="border-4 h-28 md:h-40 w-28 md:w-40 border-custom-green rounded-full flex flex-col items-center relative  mx-auto"
                    // style={{ height: 150, width: 150 }}
                  >
                    <a href="https://traya.health/pages/sangeeta-menon">
                      <Image
                        src={`${CDN_BASE_URL}website_images/female_result_page/doctors/sangeetha.png`}
                        className="rounded-lg border border-green-600"
                        alt="dr Sangeeta Menon"
                        width="100"
                        height="100"
                        // unoptimized={true}
                        loader={props.loader}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className=" gap-2 md:gap-0 rounded-2xl flex flex-col items-center px-5 md:h-40 h-60 justify-center">
                    <p
                      className="font-bold text-center text-xl xl:text-[20px] lg:text-[20px] md:text-xl  "
                      style={{ color: "#414042" }}
                    >
                      Dr. Sangeeta Menon
                    </p>
                    <p
                      className="text-center pb-2  xl:text-[20px]"
                      style={{ color: "#414042" }}
                    >
                      {" "}
                      Nutritionist{" "}
                    </p>
                    <a
                      href="https://traya.health/pages/sangeeta-menon"
                      style={{ color: "#00000080" }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="flex flex-col items-center shadow-xl">
                  <div
                    className="border-4 h-28 md:h-40 w-28 md:w-40 border-custom-green rounded-full flex flex-col items-center relative"
                    // style={{ height: 150, width: 150 }}
                  >
                    <a href="https://traya.health/pages/kalyani-deshmukh">
                      <Image
                        src={`${CDN_BASE_URL}website_images/female_result_page/doctors/kalyani.png`}
                        className="rounded-full border border-green-600"
                        alt="dr Kalyani Deshmukh"
                        width="100"
                        height="100"
                        // unoptimized={true}
                        loader={props.loader}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="gap-2 md:gap-0 rounded-2xl flex flex-col items-center px-5 md:h-40 h-60 justify-center  ">
                    <p
                      className="font-bold text-center text-lg xl:text-[20px] lg:text-[20px] md:text-xl  "
                      style={{ color: "#414042" }}
                    >
                      Dr. Kalyani Deshmukh
                    </p>
                    <p
                      className="text-center text-sm md:text-base xl:text-[20px]  pb-2 "
                      style={{ color: "#414042" }}
                    >
                      {" "}
                      Dermatologist and Trichologist{" "}
                    </p>
                    <p>
                      <a
                        href="https://traya.health/pages/kalyani-deshmukh"
                        style={{ color: "#00000080" }}
                      >
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4">
                <div className="flex flex-col  items-center shadow-xl">
                  <div
                    className="border-4 h-28 md:h-40 w-28 md:w-40 border-custom-green rounded-full flex flex-col items-center relative"
                    // style={{ height: 150, width: 150 }}
                  >
                    <a href="https://traya.health/pages/siddhi-sonawane">
                      <Image
                        src={`${CDN_BASE_URL}website_images/other_pages/our_experts/experts1.png`}
                        className="rounded-full border border-green-600"
                        alt="dr Siddhi Sonawane"
                        width="100"
                        height="100"
                        // unoptimized={true}
                        loader={props.loader}
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className=" gap-2 md:gap-0 rounded-2xl flex flex-col items-center px-5 md:h-40 h-60 justify-center  ">
                    <p
                      className="font-bold text-center text-xl xl:text-[20px] lg:text-[20px] md:text-xl  "
                      style={{ color: "#414042" }}
                    >
                      Dr. Siddhi Sonawane
                    </p>
                    <p
                      className="text-center text-sm md:text-base xl:text-[20px] pb-2 "
                      style={{ color: "#414042" }}
                    >
                      {" "}
                      Dermatologist{" "}
                    </p>
                    <p>
                      <a
                        href="https://traya.health/pages/siddhi-sonawane"
                        style={{ color: "#00000080" }}
                      >
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        ) : (
          <div className="block xl:hidden lg:hidden md:hidden">
            <Slider {...productItemImgSettings}>
              <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5  shadow-md py-4 w-[48%] mt-5">
                <div
                  className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                  style={{ height: 150, width: 150 }}
                >
                  <a href="https://traya.health/pages/doctor-dhwani">
                    <Image
                      src={`${CDN_BASE_URL}website_images/female_result_page/doctors/Dr._dhwani_160x.png`}
                      className="rounded-lg border border-green-600"
                      alt="dr Jaspreet"
                      width={150}
                      height={150}
                      unoptimized={true}
                      loader={props.loader}
                      loading="lazy"
                    />
                  </a>
                </div>
                <p
                  className="font-bold text-center text-[15px] xl:text-[20px] lg:text-[20px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Dhwani Saxena
                </p>
                <p
                  className="text-center text-[15px] xl:text-[20px]  pb-2 "
                  style={{ color: "#414042" }}
                >
                  Dermatologist l Hair Specialist{" "}
                </p>
                <p className="text-center text-[#79787a]">
                  <a
                    href="https://traya.health/pages/doctor-dhwani"
                    style={{ color: "#00000080" }}
                  >
                    Learn more
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5  shadow-md py-4 w-[48%] mt-5">
                <div
                  className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                  style={{ height: 150, width: 150 }}
                >
                  <Image
                    src={`${CDN_BASE_URL}website_images/female_result_page/doctors/dr_Shefali.png`}
                    className="rounded-lg border border-green-600"
                    alt="dr Jaspreet"
                    width={150}
                    height={150}
                    unoptimized={true}
                    loader={props.loader}
                    loading="lazy"
                  />
                </div>
                <p
                  className="font-bold text-center xl:text-[20px] lg:text-[20px] text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Shefali Saini
                </p>
                <p
                  className="text-center  pb-2 xl:text-[20px]  text-[15px]"
                  style={{ color: "#414042" }}
                >
                  Dermatologist
                </p>
              </div>

              <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5  shadow-md py-4 w-[48%] mt-5">
                <div
                  className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                  style={{ height: 150, width: 150 }}
                >
                  <Image
                    src={`${CDN_BASE_URL}website_images/other_pages/our_experts/experts2.png`}
                    className="rounded-lg border border-green-600"
                    alt="dr Jaspreet"
                    width={150}
                    height={150}
                    unoptimized={true}
                    loader={props.loader}
                    loading="lazy"
                  />
                </div>
                <p
                  className="font-bold text-center xl:text-[20px] lg:text-[20px] text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr Shailendra Chaubey
                </p>
                <p
                  className="text-center text-[15px] xl:text-[20px] lg:text-[20px]  pb-2 "
                  style={{ color: "#414042" }}
                >
                  Ayurveda Practitioner
                </p>
              </div>
              <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5  shadow-md py-4 w-[48%] mt-5">
                <div
                  className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                  style={{ height: 150, width: 150 }}
                >
                  <Image
                    src={`${CDN_BASE_URL}website_images/other_pages/our_experts/drharish.png`}
                    className="rounded-lg border border-green-600"
                    alt="dr Jaspreet"
                    width={150}
                    height={150}
                    unoptimized={true}
                    loader={props.loader}
                    loading="lazy"
                  />
                </div>
                <p
                  className="font-bold text-center text-[15px] xl:text-[20px] lg:text-[20px] md:text-xl mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Harish Balaji. R
                </p>
                <p
                  className="text-center text-[15px] xl:text-[20px] lg:text-[20px] pb-2 "
                  style={{ color: "#414042" }}
                >
                  Dermatologist
                </p>
              </div>

              <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5  shadow-md py-4 w-[48%] mt-5">
                <div
                  className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative mx-auto"
                  style={{ height: 150, width: 150 }}
                >
                  <Image
                    src={`${CDN_BASE_URL}website_images/female_result_page/doctors/sangeetha.png`}
                    className="rounded-lg border border-green-600"
                    alt="dr Jaspreet"
                    width={150}
                    height={150}
                    unoptimized={true}
                    loader={props.loader}
                    loading="lazy"
                  />
                </div>
                <p
                  className="font-bold text-center xl:text-[20px] lg:text-[20px] text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Sangeeta Menon
                </p>
                <p
                  className="text-center text-[15px] xl:text-[20px] lg:text-[20px] pb-2 "
                  style={{ color: "#414042" }}
                >
                  Nutritionist
                </p>
              </div>
              <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 shadow-md py-4 w-[48%] mt-5">
                <div
                  className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                  style={{ height: 150, width: 150 }}
                >
                  <Image
                    src={`${CDN_BASE_URL}website_images/female_result_page/doctors/kalyani.png`}
                    className="rounded-lg border border-green-600"
                    alt="dr Jaspreet"
                    width={150}
                    height={150}
                    unoptimized={true}
                    loader={props.loader}
                    loading="lazy"
                  />
                </div>
                <p
                  className="font-bold text-center xl:text-[20px] lg:text-[20px] text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Kalyani Deshmukh
                </p>
                <p
                  className="text-center text-[15px] xl:text-[20px] lg:text-[20px] pb-2 "
                  style={{ color: "#414042" }}
                >
                  Dermatologist and Trichologist
                </p>
              </div>

              <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5  shadow-md py-4 w-[48%] mt-5">
                <div
                  className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                  style={{ height: 150, width: 150 }}
                >
                  <Image
                    src={`${CDN_BASE_URL}website_images/other_pages/our_experts/experts1.png`}
                    className="rounded-full border border-green-600"
                    alt="dr Jaspreet"
                    width={150}
                    height={150}
                    unoptimized={true}
                    loader={props.loader}
                    loading="lazy"
                  />
                </div>
                <p
                  className="font-bold text-center xl:text-[20px] lg:text-[20px] text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Siddhi S. Rane
                </p>
                <p
                  className="text-center text-[15px] xl:text-[20px] lg:text-[20px] pb-2 "
                  style={{ color: "#414042" }}
                >
                  Dermatologist
                </p>
              </div>
            </Slider>
          </div>
        )}
      </div>
    </>
  );
}
export default OurDoctors;
