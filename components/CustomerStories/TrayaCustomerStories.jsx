import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";
import React from "react";
import Slider from "react-slick";

const TrayaCustomerStories = () => {
  const trayaStories = [
    {
      images: (
        <div className="mr-4 ml-4 mb-5 flex flex-col items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-2xl">
          <div className="flex flex-col item-center">
            <div className="d-flex align-items-center justify-content-center card-header social_logo_review google cusGoogleRevHead rounded-tr-md rounded-tl-md py-4">
              <img
                src="//cdn.shopify.com/s/files/1/0100/1622/7394/files/google-icon_120x_07853d00-d84b-44cc-8580-012b629fa752_120x.png?v=1663836968"
                alt="files/google-icon_120x_07853d00-d84b-44cc-8580-012b629fa752.png"
                className="mx-auto py-5 w-10 "
              />
            </div>
            <div className="flex justify-between p-5 pb-0">
              <h1
                className="font-nunito text-md font-semibold"
                style={{ color: "#3f89d4" }}
              >
                Google Reviews
              </h1>
              <h1
                className="font-nunito text-md font-semibold"
                style={{ color: "#3f89d4" }}
              >
                2 months ago
              </h1>
            </div>
            <div className="p-5">
              <div className="text-yellow-400 text-xl justify-start">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
              <div>
                <p className="text-lg">
                  <strong style={{ color: "#414042" }}>
                    &quot;I&apos;m Bharat Tulyani Asst.{" "}
                  </strong>
                  Manager in Excitel Broadband. Mein karib 1 year se hair
                  treatment le raha hoon. Half hair jaa chuke the treatment bhi
                  liye kafi
                </p>
              </div>
              <div className="flex flex-row justify-between  items-center mt-7">
                <div className="flex  items-center">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/gautham_120x_868c2a5f-d5fd-456a-a5a9-6569e3921a1b_35x.png?v=1663831831"
                    alt="google image"
                    className="w-10 h-10"
                  />
                  <h1
                    className="font-bold text-md ml-2"
                    style={{ color: "#3f89d4" }}
                  >
                    {" "}
                    Devashi Desai
                  </h1>
                </div>
                <div className=" flex">
                  <h1
                    className="underline font-nonito"
                    style={{ color: "#414042" }}
                  >
                    Read more
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      images: (
        <div className="mr-4 ml-4 mb-5 flex flex-col items-center shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-2xl">
          <div className="flex flex-col item-center">
            <div className="d-flex align-items-center justify-content-center card-header social_logo_review google cusQuaraRevHead rounded-tr-md rounded-tl-md py-4">
              <img
                src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/quora-logo-new_120x_728c85fe-5462-4b28-bbbb-6d5045760705_120x.png?v=1663832113"
                alt="files/google-icon_120x_07853d00-d84b-44cc-8580-012b629fa752.png"
                className="mx-auto py-5 w-15 "
              />
            </div>
            <div className="flex justify-between p-5 pb-0">
              <h1
                className="font-nunito text-md font-semibold"
                style={{ color: "#3f89d4" }}
              >
                Google Reviews
              </h1>
              <h1
                className="font-nunito text-md font-semibold"
                style={{ color: "#3f89d4" }}
              >
                2 months ago
              </h1>
            </div>
            <div className="p-5">
              <div className="text-yellow-400 text-xl justify-start">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
              <div>
                <p className="text-lg">
                  <strong style={{ color: "#414042" }}>
                    &quot;I&apos;m Bharat Tulyani Asst.{" "}
                  </strong>
                  Manager in Excitel Broadband. Mein karib 1 year se hair
                  treatment le raha hoon. Half hair jaa chuke the treatment bhi
                  liye kafi
                </p>
              </div>
              <div className="flex flex-row justify-between  items-center mt-7">
                <div className="flex  items-center">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/gautham_120x_868c2a5f-d5fd-456a-a5a9-6569e3921a1b_35x.png?v=1663831831"
                    alt="google image"
                    className="w-10 h-10"
                  />
                  <h1
                    className="font-bold text-md ml-2"
                    style={{ color: "#3f89d4" }}
                  >
                    {" "}
                    Devashi Desai
                  </h1>
                </div>
                <div className=" flex">
                  <h1
                    className="underline font-nonito"
                    style={{ color: "#414042" }}
                  >
                    Read more
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      images: (
        <div className="mr-4 ml-4 mb-5 flex flex-col items-center  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-2xl">
          <div className="flex flex-col item-center">
            <div className="d-flex align-items-center justify-content-center card-header social_logo_review google cusInstaRevHead rounded-tr-md rounded-tl-md py-4">
              <img
                src="//cdn.shopify.com/s/files/1/0100/1622/7394/files/insta-icon_120x_eec945b2-a9e1-479f-99a2-b534b6f12065_120x.png?v=1663831933"
                alt="files/google-icon_120x_07853d00-d84b-44cc-8580-012b629fa752.png"
                className="mx-auto py-5 w-10 "
              />
            </div>
            <div className="flex justify-between p-5 pb-0">
              <h1
                className="font-nunito text-md font-semibold"
                style={{ color: "#3f89d4" }}
              >
                Google Reviews
              </h1>
              <h1
                className="font-nunito text-md font-semibold"
                style={{ color: "#3f89d4" }}
              >
                2 months ago
              </h1>
            </div>
            <div className="p-5">
              <div className="text-yellow-400 text-xl justify-start">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
              <div>
                <p className="text-lg">
                  <strong style={{ color: "#414042" }}>
                    &quot;I&apos;m Bharat Tulyani Asst.{" "}
                  </strong>
                  Manager in Excitel Broadband. Mein karib 1 year se hair
                  treatment le raha hoon. Half hair jaa chuke the treatment bhi
                  liye kafi
                </p>
              </div>
              <div className="flex flex-row justify-between  items-center mt-7">
                <div className="flex  items-center">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/gautham_120x_868c2a5f-d5fd-456a-a5a9-6569e3921a1b_35x.png?v=1663831831"
                    alt="google image"
                    className="w-10 h-10"
                  />
                  <h1
                    className="font-bold text-md ml-2"
                    style={{ color: "#3f89d4" }}
                  >
                    {" "}
                    Devashi Desai
                  </h1>
                </div>
                <div className=" flex">
                  <h1
                    className="underline font-nonito"
                    style={{ color: "#414042" }}
                  >
                    Read more
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      images: (
        <div className="mr-4 ml-4 mb-5 flex flex-col items-center  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-2xl">
          <div className="flex flex-col item-center">
            <div className="d-flex align-items-center justify-content-center card-header social_logo_review google cusGoogleRevHead rounded-tr-md rounded-tl-md py-4">
              <img
                src="//cdn.shopify.com/s/files/1/0100/1622/7394/files/google-icon_120x_07853d00-d84b-44cc-8580-012b629fa752_120x.png?v=1663836968"
                alt="files/google-icon_120x_07853d00-d84b-44cc-8580-012b629fa752.png"
                className="mx-auto py-5 w-10 "
              />
            </div>
            <div className="flex justify-between p-5 pb-0">
              <h1
                className="font-nunito text-md font-semibold"
                style={{ color: "#3f89d4" }}
              >
                Google Reviews
              </h1>
              <h1
                className="font-nunito text-md font-semibold"
                style={{ color: "#3f89d4" }}
              >
                2 months ago
              </h1>
            </div>
            <div className="p-5">
              <div className="text-yellow-400 text-xl justify-start">
                &#9733; &#9733; &#9733; &#9733; &#9733;
              </div>
              <div>
                <p className="text-lg">
                  <strong style={{ color: "#414042" }}>
                    &quot;I&apos;m Bharat Tulyani Asst.{" "}
                  </strong>
                  Manager in Excitel Broadband. Mein karib 1 year se hair
                  treatment le raha hoon. Half hair jaa chuke the treatment bhi
                  liye kafi
                </p>
              </div>
              <div className="flex flex-row justify-between  items-center mt-7">
                <div className="flex  items-center">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/gautham_120x_868c2a5f-d5fd-456a-a5a9-6569e3921a1b_35x.png?v=1663831831"
                    alt="google image"
                    className="w-10 h-10"
                  />
                  <h1
                    className="font-bold text-md ml-2"
                    style={{ color: "#3f89d4" }}
                  >
                    {" "}
                    Devashi Desai
                  </h1>
                </div>
                <div className=" flex">
                  <h1
                    className="underline font-nonito"
                    style={{ color: "#414042" }}
                  >
                    Read more
                  </h1>
                </div>
              </div>
            </div>
          </div>
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
    nextArrow: <SampleNextArrow variant={"light"} />,
    prevArrow: <SamplePrevArrow variant={"light"} />,
  };
  return (
    <div className="custom-stories xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 mx-auto relative  ">
      <h1
        className="text-center xl:text-5xl font-bold lg:text-2xl font-Nunito py-6 font-bold text-2xl"
        style={{ color: "#303032" }}
      >
        Traya Customer Stories
      </h1>
      <Slider {...settings} className="border-2 rounded-md py-10">
        {trayaStories.map((value, index) => {
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

export default TrayaCustomerStories;
