import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CDN_BASE_URL } from "@/constants/config";
import { fredoka } from "@/constants/fontConfig";

const left = `${CDN_BASE_URL}website_images/localImages/left.webp`;
const right = `${CDN_BASE_URL}website_images/localImages/right.webp`;

function OurDoctors(props) {
  let productItemImgSettings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className}>
        <Image src={right} alt="left arrow" onClick={onClick} fill />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
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
      <div className="w-11/12 xl:w-9/12 lgl:w-9/12 md:w-9/12 mx-auto xl:mt-10 md:mt-10 lg:mt-10 mt-0">
        <div>
          <h5
            className={`xl:text-[36px] xs:text-[26px] font-semibold ${fredoka.variable} text-[#414042] mb-8 text-center`}
          >
            Our Doctors
          </h5>
          <p className="font-sans  xl:text-[30px] lg:text-[30px] md:text-[30px] xs:text-[15px] text-center text-custom-black mt-5">
            Once you place the order, a dermatologist and ayurveda doctor will
            look at your case and approve your plan. They will define the exact
            dosage and usage instructions.
          </p>
        </div>
       
        <div className="hidden xl:block lg:block md:block">
          <div className="flex justify-between">
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[30%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/female_result_page/doctors/Dr._dhwani_160x.png`}
                  className="rounded-lg "
                  alt="dr Jaspreet"
                  width={150}
                  height={150}
                  unoptimized={true}
                  loader={props.loader}
                />
              </div>
              <p
                className="font-bold text-center text-xl xl:text-2xl lg:text-2xl md:text-2xl mt-5 "
                style={{ color: "#414042" }}
              >
                Dr. Dhwani Saxena
              </p>
              <p
                className="text-center  pb-2 opacity-60"
                style={{ color: "#414042" }}
              >
                Dermatologist l Hair Specialist{" "}
              </p>
            </div>
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[30%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/female_result_page/doctors/dr_Shefali.png`}
                  className="rounded-lg  "
                  alt="dr Jaspreet"
                  width={150}
                  height={150}
                  unoptimized={true}
                  loader={props.loader}
                />
              </div>
              <p
                className="font-bold text-center text-xl xl:text-2xl lg:text-2xl md:text-2xl mt-5 "
                style={{ color: "#414042" }}
              >
                Dr. Shefali Saini
              </p>
              <p
                className="text-center  pb-2 opacity-60"
                style={{ color: "#414042" }}
              >
                Dermatologist
              </p>
            </div>
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[30%] mt-5">
              <div
                className=" border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/other_pages/our_experts/experts2.png`}
                  className="rounded-lg "
                  alt="dr Jaspreet"
                  width={150}
                  height={150}
                  unoptimized={true}
                  loader={props.loader}
                />
              </div>
              <p
                className="font-bold text-center text-xl xl:text-2xl lg:text-2xl md:text-2xl mt-5 "
                style={{ color: "#414042" }}
              >
                Dr Shailendra Chaubey
              </p>
              <p
                className="text-center  pb-2 opacity-60"
                style={{ color: "#414042" }}
              >
                Ayurveda Practitioner
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[30%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/other_pages/our_experts/drharish.png`}
                  className="rounded-lg  "
                  alt=" Dr. Harish Balaji. R"
                  width={150}
                  height={150}
                  unoptimized={true}
                  loader={props.loader}
                />
              </div>
              <p
                className="font-bold text-center text-xl xl:text-2xl lg:text-2xl md:text-2xl mt-5 "
                style={{ color: "#414042" }}
              >
                Dr. Harish Balaji. R
              </p>
              <p
                className="text-center  pb-2 opacity-60"
                style={{ color: "#414042" }}
              >
                Dermatologist
              </p>
            </div>
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[30%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/female_result_page/doctors/sangeetha.png`}
                  className="rounded-lg  "
                  alt="Dr. Sangeeta Menon"
                  width={150}
                  height={150}
                  unoptimized={true}
                  loader={props.loader}
                />
              </div>
              <p
                className="font-bold text-center text-xl xl:text-2xl lg:text-2xl md:text-2xl mt-5 "
                style={{ color: "#414042" }}
              >
                Dr. Sangeeta Menon
              </p>
              <p
                className="text-center  pb-2 opacity-60"
                style={{ color: "#414042" }}
              >
                Nutritionist
              </p>
            </div>
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[30%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/female_result_page/doctors/kalyani.png`}
                  className="rounded-lg  "
                  alt="dr Jaspreet"
                  width={150}
                  height={150}
                  unoptimized={true}
                  loader={props.loader}
                />
              </div>
              <p
                className="font-bold text-center text-xl xl:text-2xl lg:text-2xl md:text-2xl mt-5 "
                style={{ color: "#414042" }}
              >
                Dr. Kalyani Deshmukh
              </p>
              <p
                className="text-center  pb-2 opacity-60"
                style={{ color: "#414042" }}
              >
                Dermatologist and Trichologist
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[30%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/other_pages/our_experts/experts1.png`}
                  className="rounded-[100px] "
                  alt="Dr. Siddhi S. Rane"
                  width={150}
                  height={150}
                  unoptimized={true}
                  loader={props.loader}
                />
              </div>
              <p
                className="font-bold text-center text-xl xl:text-2xl lg:text-2xl md:text-2xl mt-5 "
                style={{ color: "#414042" }}
              >
                Dr. Siddhi S. Rane
              </p>
              <p
                className="text-center  pb-2 opacity-60"
                style={{ color: "#414042" }}
              >
                Dermatologist
              </p>
            </div>
          </div>
        </div>

        <div className="block xl:hidden lg:hidden md:hidden">
          <div className="flex justify-between">
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[48%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/female_result_page/doctors/Dr._dhwani_160x.png`}
                  className="rounded-lg  "
                  alt="Dr. Dhwani Saxena"
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
                Dr. Dhwani Saxena
              </p>
              <p
                className="text-center text-[15px]   pb-2 opacity-60"
                style={{ color: "#414042" }}
              >
                Dermatologist l Hair Specialist{" "}
              </p>
            </div>
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[48%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/female_result_page/doctors/dr_Shefali.png`}
                  className="rounded-lg  "
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
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[48%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/other_pages/our_experts/experts2.png`}
                  className="rounded-lg  "
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
            </div>
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[48%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/other_pages/our_experts/drharish.png`}
                  className="rounded-lg "
                  alt="dr Jaspreet"
                  width={150}
                  height={150}
                  unoptimized={true}
                  loader={props.loader}
                />
              </div>
              <p
                className="font-bold text-center text-[15px] xl:text-2xl lg:text-2xl md:text-2xl mt-5 "
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
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[48%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/female_result_page/doctors/sangeetha.png`}
                  className="rounded-lg "
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
            </div>
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[48%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/female_result_page/doctors/kalyani.png`}
                  className="rounded-lg  "
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
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col items-center px-0 xl:px-5 md:px-5 lg:px-5 rounded-[25px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] py-4 w-[48%] mt-5">
              <div
                className="border border-solid border-4 border-custom-green rounded-full flex flex-col items-center relative   mx-auto"
                style={{ height: 150, width: 150 }}
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/other_pages/our_experts/experts1.png`}
                  className="rounded-[100px]  "
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OurDoctors;
