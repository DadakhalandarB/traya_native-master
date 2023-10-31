import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CDN_BASE_URL } from "@/constants/config";
import { fredoka } from "@/constants/fontConfig";

const left = `${CDN_BASE_URL}website_images/localImages/left.webp`;
const right = `${CDN_BASE_URL}website_images/localImages/right.webp`;

function ExpertFemaleResult(props) {
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
          // autoplay: true,
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
        <Image src={right} alt="left arrow" onClick={onClick} fill />
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
        />
      </div>
    );
  }
  return (
    <>
      <div className="2xl:w-[1110px] w-10/12 xl:w-9/12 lg:w-11/12 md:w-11/12 mx-auto mt-12">
        <div>
          <h5
            className={`${fredoka.variable} xl:text-[46px] md:text-5xl xs:text-[24px] text-center  text-custom-black pb-4`}
          >
            Meet The Experts Who Curate Your Plan
          </h5>
          <p className="font-sans  xl:text-[30px] lg:text-[30px] md:text-[30px] xs:text-[15px] text-center text-custom-black mt-5">
            Once you place the order, a dermatologist and ayurveda doctor will
            look at your case and approve your plan. They will define the exact
            dosage and usage instructions.
          </p>
        </div>
        <div className="hidden xl:block lg:block md:block">
          <Slider {...productItemImgSettings} className="female-landing-doctor">
            <div className="px-5 py-4">
              <div className="flex flex-col items-center justify-around shadow-xl">
                <div
                  className="border border-4 h-28 md:h-24 w-28 md:w-24 border-custom-green rounded-full flex flex-col items-center relative"
                  // style={{ height: 150, width: 150 }}
                >
                  {/* <a
                href="https://blog.traya.health/author/doctor-dhwani"> */}
                  <Image
                    src={`${CDN_BASE_URL}website_images/female_result_page/doctors/Dr._dhwani_160x.png`}
                    className="rounded-lg border border-green-600"
                    alt="dr Dhwani Saxena"
                    width="100%"
                    height="100%"
                    fill
                    // unoptimized={true}
                    loader={props.loader}
                  />
                  {/* </a> */}
                </div>
                <div className="gap-2 md:gap-1 rounded-2xl flex flex-col items-center px-5 md:h-32 h-60 justify-between  ">
                  <p
                    className="font-bold text-center text-lg xl:text-2xl lg:text-xl md:text-xl mt-10 md:mt-6 "
                    style={{ color: "#414042" }}
                  >
                    Dr. Dhwani Saxena
                  </p>
                  <p
                    className="text-center text-sm md:text-[20px]  pb-4 opacity-90 "
                    style={{ color: "#414042" }}
                  >
                    Dermatologist
                  </p>
                  <p>
                    {/* <a href="https://blog.traya.health/author/doctor-dhwani">
                Learn more
              </a> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              <div className="flex flex-col items-center shadow-xl">
                <div
                  className="border-4 h-28 md:h-24 w-28 md:w-24 border-custom-green rounded-full flex flex-col items-center relative"
                  // style={{ height: 150, width: 150 }}
                >
                  {/* <a href="https://blog.traya.health/author/shefali-saini"> */}
                  <Image
                    src={`${CDN_BASE_URL}website_images/female_result_page/doctors/dr_Shefali.png`}
                    className="rounded-full border border-green-600"
                    alt="dr Shefali Saini"
                    width="100%"
                    height="100%"
                    fill
                    // unoptimized={true}
                    loader={props.loader}
                  />
                  {/* </a> */}
                </div>
                <div className="gap-2 md:gap-1 rounded-2xl flex flex-col items-center md:h-32 h-60 justify-between  ">
                  <p
                    className="font-bold text-center text-lg xl:text-2xl lg:text-xl md:text-xl mt-10 md:mt-6"
                    style={{ color: "#414042" }}
                  >
                    Dr. Shefali Saini
                  </p>
                  <p
                    className="text-center text-sm md:text-[20px]  pb-4 opacity-90 "
                    style={{ color: "#414042" }}
                  >
                    Dermatologist
                  </p>
                  <p>
                    {/* <a href="https://blog.traya.health/author/shefali-saini">
                Learn more
              </a> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              <div className="flex flex-col  items-center shadow-xl">
                <div
                  className="border-4 h-28 md:h-24 w-28 md:w-24 border-custom-green rounded-full flex flex-col items-center relative"
                  // style={{ height: 150, width: 150 }}
                >
                  {/* <a href="https://blog.traya.health/author/shailendra-chaubey"> */}
                  <Image
                    src={`${CDN_BASE_URL}website_images/other_pages/our_experts/experts2.png`}
                    className="rounded-lg border border-green-600"
                    alt="dr Shailendra Chaubey"
                    width="100%"
                    height="100%"
                    fill
                    // unoptimized={true}
                    loader={props.loader}
                  />
                  {/* </a> */}
                </div>
                <div className=" gap-2 md:gap-1 rounded-2xl flex flex-col items-center px-5 md:h-32 h-60 justify-between  ">
                  <p
                    className="font-bold text-center text-lg xl:text-2xl lg:text-xl md:text-xl mt-10 md:mt-6"
                    style={{ color: "#414042" }}
                  >
                    Dr. Shailendra Chaubey
                  </p>
                  <p
                    className="text-center text-sm md:text-[20px]  pb-4 opacity-90 "
                    style={{ color: "#414042" }}
                  >
                    Ayurveda Practitioner{" "}
                  </p>
                  <p>
                    {/* <a href="https://blog.traya.health/author/shailendra-chaubey">
                Learn more
              </a> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              <div className="flex flex-col  items-center shadow-xl">
                <div
                  className="border-4 h-28 md:h-24 w-28 md:w-24 border-custom-green rounded-full flex flex-col items-center relative"
                  // style={{ height: 150, width: 150 }}
                >
                  {/* <a href="https://blog.traya.health/author/doctor-harish"> */}
                  <Image
                    src={`${CDN_BASE_URL}website_images/other_pages/our_experts/drharish.png`}
                    className="rounded-lg border border-green-600"
                    alt="dr Harish Balaji. R"
                    width="100%"
                    height="100%"
                    fill
                    // unoptimized={true}
                    loader={props.loader}
                  />
                  {/* </a> */}
                </div>
                <div className=" gap-2 md:gap-1 rounded-2xl flex flex-col items-center px-5 md:h-32 h-60 justify-between  ">
                  <p
                    className="font-bold text-center text-lg xl:text-2xl lg:text-xl md:text-xl mt-10 md:mt-6"
                    style={{ color: "#414042" }}
                  >
                    Dr. Harish Balaji. R
                  </p>
                  <p
                    className="text-center text-sm md:text-[20px]  pb-4 opacity-90 "
                    style={{ color: "#414042" }}
                  >
                    {" "}
                    Dermatologist{" "}
                  </p>
                  <p>
                    {/* <a href="https://blog.traya.health/author/doctor-harish">
                Learn more
              </a> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-5 py-4">
              <div className="flex flex-col  items-center shadow-xl">
                <div
                  className="border-4 h-28 md:h-24 w-28 md:w-24 border-custom-green rounded-full flex flex-col items-center relative"
                  // style={{ height: 150, width: 150 }}
                >
                  {/* <a href="https://blog.traya.health/author/sangeeta-menon"> */}
                  <Image
                    src={`${CDN_BASE_URL}website_images/female_result_page/doctors/sangeetha.png`}
                    className="rounded-lg border border-green-600"
                    alt="dr Sangeeta Menon"
                    width="100%"
                    height="100%"
                    fill
                    // unoptimized={true}
                    loader={props.loader}
                  />
                  {/* </a> */}
                </div>
                <div className=" gap-2 md:gap-1 rounded-2xl flex flex-col items-center px-5 md:h-32 h-60 justify-between  ">
                  <p
                    className="font-bold text-center text-lg xl:text-2xl lg:text-xl md:text-xl mt-10 md:mt-6"
                    style={{ color: "#414042" }}
                  >
                    Dr. Sangeeta Menon
                  </p>
                  <p
                    className="text-center text-sm md:text-[20px]  pb-4 opacity-90 "
                    style={{ color: "#414042" }}
                  >
                    {" "}
                    Nutritionist{" "}
                  </p>
                  <p>
                    {/* <a href="https://blog.traya.health/author/sangeeta-menon">
                Learn more
              </a> */}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-5 py-4">
              <div className="flex flex-col items-center shadow-xl">
                <div
                  className="border-4 h-28 md:h-24 w-28 md:w-24 border-custom-green rounded-full flex flex-col items-center relative"
                  // style={{ height: 150, width: 150 }}
                >
                  {/* <a href="https://blog.traya.health/author/kalyani-deshmukh"> */}
                  <Image
                    src={`${CDN_BASE_URL}website_images/female_result_page/doctors/kalyani.png`}
                    className="rounded-full border border-green-600"
                    alt="dr Kalyani Deshmukh"
                    width="100%"
                    height="100%"
                    fill
                    // unoptimized={true}
                    loader={props.loader}
                  />
                  {/* </a> */}
                </div>
                <div className="gap-2 md:gap-1 rounded-2xl flex flex-col items-center px-5 md:h-32 h-60 justify-between  ">
                  <p
                    className="font-bold text-center text-lg xl:text-2xl lg:text-xl md:text-xl mt-10 md:mt-6"
                    style={{ color: "#414042" }}
                  >
                    Dr. Kalyani Deshmukh
                  </p>
                  <p
                    className="text-center text-sm md:text-[20px]  pb-4 opacity-90 "
                    style={{ color: "#414042" }}
                  >
                    {" "}
                    Dermatologist and Trichologist{" "}
                  </p>
                  <p>
                    {/* <a href="https://blog.traya.health/author/kalyani-deshmukh">
                Learn more
              </a> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              <div className="flex flex-col  items-center shadow-xl">
                <div
                  className="border border-4 h-28 md:h-24 w-28 md:w-24 border-custom-green rounded-full flex flex-col items-center relative"
                  // style={{ height: 150, width: 150 }}
                >
                  {/* <a href="https://blog.traya.health/author/siddhi-sonawane"> */}
                  <Image
                    src={`${CDN_BASE_URL}website_images/other_pages/our_experts/experts1.png`}
                    className="rounded-full border border-green-600"
                    alt="dr Siddhi Sonawane"
                    width="100%"
                    height="100%"
                    fill
                    // unoptimized={true}
                    loader={props.loader}
                  />
                  {/* </a> */}
                </div>
                <div className=" gap-2 md:gap-1 rounded-2xl flex flex-col items-center px-5 md:h-32 h-60 justify-between  ">
                  <p
                    className="font-bold text-center text-lg xl:text-2xl lg:text-xl md:text-xl mt-10 md:mt-6 "
                    style={{ color: "#414042" }}
                  >
                    Dr. Siddhi Sonawane
                  </p>
                  <p
                    className="text-center text-sm md:text-[20px]  pb-4 opacity-90 "
                    style={{ color: "#414042" }}
                  >
                    {" "}
                    Dermatologist{" "}
                  </p>
                  <p>
                    {/* <a href="https://blog.traya.health/author/siddhi-sonawane">
                Learn more
              </a> */}
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="block xl:hidden lg:hidden md:hidden">
          <Slider {...productItemImgSettings}>
            <div className="px-3 py-4 w-[48%]">
              <div className="flex flex-col items-center shadow-md py-4 mt-5">
                <div
                  className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                  style={{ height: 150, width: 150 }}
                >
                  {/* <a href="https://blog.traya.health/author/doctor-dhwani"> */}
                  <Image
                    src={`${CDN_BASE_URL}website_images/female_result_page/doctors/Dr._dhwani_160x.png`}
                    className="rounded-lg border border-green-600"
                    alt="dr Jaspreet"
                    width={150}
                    height={150}
                    unoptimized={true}
                    loader={props.loader}
                  />
                  {/* </a> */}
                </div>
                <p
                  className="font-bold text-center text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Dhwani Saxena
                </p>
                <p
                  className="text-center text-[15px]   pb-2 opacity-60"
                  style={{ color: "#414042" }}
                >
                  Dermatologist
                </p>
                {/* <p className="text-center text-[#79787a]">
                <a href="https://blog.traya.health/author/doctor-dhwani">
                  Learn more
                </a>
              </p> */}
              </div>
            </div>
            <div className="px-3 py-4 w-[48%]">
              <div className="flex flex-col items-center shadow-md py-4 mt-5">
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
                  />
                </div>
                <p
                  className="font-bold text-center text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Shefali Saini
                </p>
                <p
                  className="text-center  pb-2 opacity-60 text-[15px]"
                  style={{ color: "#414042" }}
                >
                  Dermatologist
                </p>
                {/* <p className="text-center text-[#79787a]">
              <a href="https://blog.traya.health/author/shefali-saini">
                Learn more
              </a>
              </p> */}
              </div>
            </div>
            <div className="px-3 py-4 w-[48%]">
              <div className="flex flex-col items-center shadow-md py-4 mt-5">
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
                  />
                </div>
                <p
                  className="font-bold text-center text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr Shailendra Chaubey
                </p>
                <p
                  className="text-center text-[15px]  pb-2 opacity-60"
                  style={{ color: "#414042" }}
                >
                  Ayurveda Practitioner
                </p>
                {/* <p className="text-center text-[#79787a]">
              <a href="https://blog.traya.health/author/shailendra-chaubey">
                Learn more
              </a>
              </p> */}
              </div>
            </div>
            <div className="px-3 py-4 w-[48%]">
              <div className="flex flex-col items-center shadow-md py-4 mt-5">
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
                  />
                </div>
                <p
                  className="font-bold text-center text-[15px] xl:text-2xl lg:text-2xl md:text-xl mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Harish Balaji. R
                </p>
                <p
                  className="text-center text-[15px] pb-2 opacity-60"
                  style={{ color: "#414042" }}
                >
                  Dermatologist
                </p>
                {/* <p className="text-center text-[#79787a]">
              <a href="https://blog.traya.health/author/doctor-harish">
                Learn more
              </a>
              </p> */}
              </div>
            </div>
            <div className="px-3 py-4 w-[48%]">
              <div className="flex flex-col items-center shadow-md py-4 mt-5">
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
                  />
                </div>
                <p
                  className="font-bold text-center text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Sangeeta Menon
                </p>
                <p
                  className="text-center text-[15px] pb-2 opacity-60"
                  style={{ color: "#414042" }}
                >
                  Nutritionist
                </p>
                {/* <p className="text-center text-[#79787a]">
              <a
                href="https://blog.traya.health/author/sangeeta-menon"
              >
                Learn More
              </a>
              </p> */}
              </div>
            </div>
            <div className="px-5 py-4 w-[48%]">
              <div className="flex flex-col items-center shadow-lg py-4 mt-5">
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
                  />
                </div>
                <p
                  className="font-bold text-center text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Kalyani Deshmukh
                </p>
                <p
                  className="text-center text-[15px] pb-2 opacity-60"
                  style={{ color: "#414042" }}
                >
                  Dermatologist and Trichologist
                </p>
                {/* <p className="text-center text-[#79787a]">
              <a href="https://blog.traya.health/author/kalyani-deshmukh">
                Learn more
              </a>
              </p> */}
              </div>
            </div>
            <div className="px-3 py-4 w-[48%]">
              <div className="flex flex-col items-center shadow-xl py-4 mt-5">
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
                  />
                </div>
                <p
                  className="font-bold text-center text-[15px] mt-5 "
                  style={{ color: "#414042" }}
                >
                  Dr. Siddhi S. Rane
                </p>
                <p
                  className="text-center text-[15px] pb-2 opacity-60"
                  style={{ color: "#414042" }}
                >
                  Dermatologist
                </p>
                {/* <p className="text-center text-[#79787a]">
              <a href="https://blog.traya.health/author/siddhi-sonawane">
                Learn more
              </a>
              </p> */}
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
export default ExpertFemaleResult;
