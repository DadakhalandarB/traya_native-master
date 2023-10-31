import { CDN_BASE_URL } from "@/constants/config";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";
import React from "react";
import Slider from "react-slick";

const TrayaMagic = () => {
  const magicTraya = [
    {
      images: (
        <div className="border-2 rounded-lg py-10">
          <div className="flex justify-center">
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <video width="100%" height="auto" controls="">
                <source
                  src={`${CDN_BASE_URL}website_images/other_pages/customerStories/myhero.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <p className="text-md text-center px-10" style={{ color: "#414042" }}>
            Our hero Mayil has been killing it on the Traya treatment for the
            past 9 months. Watch him speak about what kept him going and attain
            steady growth!
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="border-2 rounded-lg py-10">
          <div className="flex justify-center">
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <video width="100%" height="auto" controls="">
                <source
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Shruti-video.mp4?v=1639052943"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <p className="text-md text-center px-10" style={{ color: "#414042" }}>
            Meet Shruthi, she could control her post pregnancy hair fall in just
            3- 4months with Traya.
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="border-2 rounded-lg py-10">
          <div className="flex justify-center">
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <video width="100%" height="auto" controls="">
                <source
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Y2Mate-video.mp4?v=1639053402"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <p className="text-md text-center px-10" style={{ color: "#414042" }}>
            Meet Uddeshya, he saw some exceptional results in 4 months. Hear how
            he could make it possible in such a short time.
          </p>
        </div>
      ),
    },
  ];

  let settings = {
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    lazyload: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow variant={"light"}/>,
    prevArrow: <SamplePrevArrow variant={"light"}/>,
  };
  return (
    <div className="custom-stories xl:w-6/12 lg:w-6/12 md:w-6/12 w-11/12 mx-auto relative my-0 mb-0">
      <h1
        className="text-center xl:text-5xl font-bold lg:text-2xl text-2xl font-Nunito py-6 mb-0"
        style={{ color: "#303032" }}
      >
        Watch Traya&apos;s Magic Unfold
      </h1>
      <Slider {...settings}>
        {magicTraya.map((value, index) => {
          return (
            <div key={index} className="">
              {value.images}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TrayaMagic;
