import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useMemo } from "react";

import { CDN_BASE_URL } from "../../constants/config";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";

const anonymos1 = `${CDN_BASE_URL}website_images/localImages/maleresult/ananoymos1.webp`;
const anonymos2 = `${CDN_BASE_URL}website_images/localImages/maleresult/ananoymos2.webp`;
const anonymos3 = `${CDN_BASE_URL}website_images/localImages/maleresult/ananoymos3.webp`;
const rajath1 = `${CDN_BASE_URL}website_images/localImages/maleresult/rajath1.webp`;
const rajath2 = `${CDN_BASE_URL}website_images/localImages/maleresult/rajath2.webp`;
const rajath3 = `${CDN_BASE_URL}website_images/localImages/maleresult/rajath3.webp`;
const sunis1 = `${CDN_BASE_URL}website_images/localImages/maleresult/sunil1.webp`;
const sunis2 = `${CDN_BASE_URL}website_images/localImages/maleresult/sunil2.webp`;
const sunis3 = `${CDN_BASE_URL}website_images/localImages/maleresult/sunil3.webp`;
const uddesia1 = `${CDN_BASE_URL}website_images/localImages/maleresult/uddesia1.webp`;
const uddesia2 = `${CDN_BASE_URL}website_images/localImages/maleresult/uddesia2.webp`;
const uddesia3 = `${CDN_BASE_URL}website_images/localImages/maleresult/uddesia3.webp`;



let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow variant={"light"}/>,
  prevArrow: <SamplePrevArrow variant={"light"}/>,
};
let settingsNoArrow = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
export default function MaleReview() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [showFullContent2, setShowFullContent2] = useState(false);
  const [showFullContent3, setShowFullContent3] = useState(false);
  const [showFullContent4, setShowFullContent4] = useState(false);

  const toggleContent = () => setShowFullContent(!showFullContent);
  const toggleContent2 = () => setShowFullContent2(!showFullContent2);
  const toggleContent3 = () => setShowFullContent3(!showFullContent3);
  const toggleContent4 = () => setShowFullContent4(!showFullContent4);

  const maleReview = [
    {
      images: (
        <div className="flex flex-col items-center m-auto rounded-2xl">
          <div className="flex flex-wrap w-full xl:justify-around xs:justify-center xl:mt-8">
            <div className="mx-5 xl:w-40 xs:w-24">
              {" "}
              <Image
                src={anonymos1}
                alt="customer stage 1"
                responsive
                height={404}
                width={300}
                loading="lazy"
              />{" "}
              <p className="text-center xl:mt-2"> Month 1</p>
            </div>
            <div className="mx-5 xl:w-40 xs:w-24">
              <Image
                src={anonymos2}
                alt="customer stage 2"
                responsive
                height={404}
                width={300}
                loading="lazy"
              />
              <p className="text-center"> Month 3</p>
            </div>
            <div className="xl:w-40 xs:w-24">
              <Image
                src={anonymos3}
                alt="customer stage 3"
                responsive
                height={404}
                width={300}
                loading="lazy"
              />
              <p className="text-center"> Month 5</p>
            </div>
          </div>
          <div className="text-center w-full">
            <div>
              {" "}
              <h2 className=" xl:mt-7 xl:text-3xl md:text-3xl xs:text-2xl font-bold mb-2">
                {" "}
                Anonymous{" "}
              </h2>
            </div>
            <div className="mb-2">
              <p className="text-3xl text-yellow-400">
                &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
              </p>
            </div>
            <div className="xs:text-sm xl:text-base text-custom-black">
              {" "}
              <p> Review on 15th August 2021 </p>{" "}
            </div>
            <div className=" m-3 text-center ">
              {" "}
              {showFullContent ? (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “Results in just 5 months, couldn&apos;t believe my eyes when
                  I saw hair growth on my head. Anyone with hair problems should
                  get on their plan. It works like magic.”
                </p>
              ) : (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “Results in just 5 months, couldn&apos;t believe my eyes when
                  I saw hair growth on my ...{" "}
                  <button
                    onClick={toggleContent}
                    className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base"
                  >
                    Read More
                  </button>
                </p>
              )}
              {showFullContent && (
                <button
                  onClick={toggleContent}
                  className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base"
                >
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row  justify-between xl:py-7 xs:px-2 ">
              <div className="">
                {" "}
                <p className="xl:text-base">
                  {" "}
                  <span className="font-bold"> Used for </span> <br />5 months
                </p>
              </div>
              <div className="xs:w-1/2 xl:w-80">
                <p className="font-bold xl:text-base">
                  {" "}
                  On complete Traya recommended plan
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      images: (
        <div className=" flex flex-col items-center  m-auto">
          <div className="flex flex-wrap w-full xl:justify-around xs:justify-center xl:mt-6">
            <div className="mx-5 xl:w-40 xs:w-24">
              {" "}
              <Image
                src={uddesia1}
                alt="customer stage 1"
                responsive
                height={400}
                width={300}
                loading="lazy"
              />{" "}
              <p className="text-center"> Month 1</p>
            </div>
            <div className="mx-5 xl:w-40 xs:w-24">
              <Image
                src={uddesia2}
                alt="customer stage 2"
                responsive
                height={400}
                width={300}
                loading="lazy"
              />
              <p className="text-center"> Month 2</p>
            </div>
            <div className="mx-5 xl:w-40 xs:w-24">
              <Image
                src={uddesia3}
                alt="customer stage 3"
                responsive
                height={400}
                width={300}
                loading="lazy"
              />
              <p className="text-center"> Month 3</p>
            </div>
          </div>
          <div className="text-center  w-full">
            <div>
              {" "}
              <h2 className="xl:mt-7 xl:text-3xl md:text-3xl xs:text-2xl font-bold mb-2">
                {" "}
                Uddeshya{" "}
              </h2>
            </div>
            <div className="mb-2">
              <p className="text-3xl text-yellow-400">
                &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
              </p>
            </div>
            <div className="text-sm">
              {" "}
              <p> Review on 15th Nov 2021 </p>{" "}
            </div>
            <div className=" m-3 text-center ">
              {showFullContent2 ? (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “My hair loss started in 2016 after I was diagnosed with
                  tuberculosis. I had consulted a dermatologist and tried many
                  treatments before nearly giving up hope. I liked Traya&ampos;s
                  approach of combining three sciences. After I used the
                  recommended product kits, I have seen a lot of benefits like
                  thicker hair and negligible Hair fall.”
                </p>
              ) : (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “My hair loss started in 2016 after I was diagnosed with
                  tuberculosis. I had con ..{" "}
                  <button
                    onClick={toggleContent2}
                    className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base"
                  >
                    Read More
                  </button>
                </p>
              )}
              {showFullContent2 && (
                <button
                  onClick={toggleContent2}
                  className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base"
                >
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row  justify-between xl:p-7 xs:p-2 ">
              <div>
                {" "}
                <p className="xl:text-base">
                  {" "}
                  <span className="font-bold"> Used for </span> <br />4 months
                </p>
              </div>
              <div className="xs:w-1/2 xl:w-80">
                <p className="xl:text-base font-bold">
                  {" "}
                  On complete Traya recommended plan
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      images: (
        <div className=" flex flex-col items-center xs:w-full m-auto ">
          <div className="flex w-full xl:justify-around  flex-wrap xs:justify-center xl:mt-6 items-center">
            <div className="mx-5 xl:w-40 xs:w-24">
              {" "}
              <Image
                src={rajath1}
                alt="customer stage 1"
                responsive
                height={400}
                width={300}
                loading="lazy"
              />{" "}
              <p className="text-center"> Month 1</p>
            </div>
            <div className="mr-5 xl:w-44 xs:w-28 xs:h-36 xl:-mt-16">
              <Image
                src={rajath2}
                alt="customer stage 2"
                responsive
                height={328}
                width={300}
                loading="lazy"
              />
              <p className="text-center"> Month 4</p>
            </div>
            <div className="mr-5 xl:w-40 xs:w-24">
              <Image
                src={rajath3}
                alt="customer stage 3"
                responsive
                height={400}
                width={300}
                loading="lazy"
              />
              <p className="text-center"> Month 8</p>
            </div>
          </div>
          <div className="text-center  w-full">
            <div>
              {" "}
              <h2 className="xl:mt-7  xl:text-3xl md:text-3xl xs:text-2xl font-bold mb-2">
                {" "}
                Rajat Sadh{" "}
              </h2>
            </div>
            <div className="mb-2">
              <p className="text-3xl text-yellow-400">
                &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
              </p>
            </div>
            <div className="text-sm">
              {" "}
              <p> Review on 21st Feb 2022 </p>{" "}
            </div>
            <div className=" m-3 text-center ">
              {" "}
              <p className="text-base text-custom-black xl:text-xl"> </p>
              {showFullContent3 ? (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “I didn&ampos;t want to resort to surgery or any other
                  invasive treatment for my hair loss and I found Traya. They
                  have helped me grow back a full head of hair in just eight
                  months. I&ampos;m so happy with the results, thank you so
                  much!”
                </p>
              ) : (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “I didn&ampos;t want to resort to surgery or any other
                  invasive treatment for my hair ..{" "}
                  <button
                    onClick={toggleContent3}
                    className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base"
                  >
                    Read More
                  </button>
                </p>
              )}
              {showFullContent3 && (
                <button
                  onClick={toggleContent3}
                  className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base"
                >
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row  justify-between xl:p-7 xs:p-2 ">
              <div>
                {" "}
                <p>
                  {" "}
                  <span className="font-bold"> Used for </span>
                  <br /> 8 months
                </p>
              </div>
              <div className="xs:w-1/2 xl:w-80">
                <p className="text-custom-black font-bold">
                  {" "}
                  On complete Traya recommended plan
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      images: (
        <div className=" flex flex-col items-center  xs:w-full rounded-xl m-auto">
          <div className="flex w-full xl:justify-around flex-wrap xs:justify-center xl:mt-6">
            <div className="mx-5 xl:w-40 xs:w-24">
              {" "}
              <Image
                src={sunis1}
                alt="customer stage 1"
                responsive
                height={400}
                width={300}
                loading="lazy"
              />{" "}
              <p className="text-center"> Month 1</p>
            </div>
            <div className="mr-5 xl:w-40 xs:w-24">
              <Image
                src={sunis2}
                alt="customer stage 2"
                responsive
                height={398}
                width={300}
                loading="lazy"
              />
              <p className="text-center"> Month 5</p>
            </div>
            <div className="mr-5 xl:w-40 xs:w-24">
              <Image
                src={sunis3}
                alt="customer stage 3"
                responsive
                height={417}
                width={300}
                loading="lazy"
              />
              <p className="text-center"> Month 7</p>
            </div>
          </div>
          <div className="text-center  w-full">
            <div>
              {" "}
              <h2 className=" xl:mt-7  xl:text-3xl md:text-3xl xs:text-2xl font-bold mb-2">
                {" "}
                sunil{" "}
              </h2>
            </div>
            <div className="mb-2">
              <p className="text-3xl text-yellow-400">
                &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
              </p>
            </div>
            <div className="text-sm">
              {" "}
              <p> Review on 9th Apr 2022 </p>{" "}
            </div>
            <div className=" m-3 text-center ">
              {" "}
              <p className="text-base xl:text-xl"></p>
              {showFullContent4 ? (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “I read about Traya on Quora. I had read reviews on it and
                  they seemed positive so I thought that I would give it a go.
                  It&ampos;s helped me so much and I can tell the difference in
                  how much my hair has grown back.”
                </p>
              ) : (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “I read about Traya on Quora. I had read reviews on it and
                  they seemed positive{" "}
                  <button
                    onClick={toggleContent4}
                    className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base"
                  >
                    Read More
                  </button>
                </p>
              )}
              {showFullContent4 && (
                <button
                  onClick={toggleContent4}
                  className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base"
                >
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row  justify-between xl:p-7 xs:p-2  xs:p-2">
              <div>
                {" "}
                <p>
                  {" "}
                  <span className="font-bold"> Used for </span> <br /> 7 months
                </p>
              </div>
              <div className="xs:w-1/2 xl:w-80">
                <p className="font-bold"> On complete Traya recommended plan</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className=" justify-center xl:flex md:flex lg:flex xs:hidden">
        <Slider
          {...settings}
          className="xl:w-7/12 xs:w-11/12  flex items-center justify-center rounded-2xl  shadow-xl "
        >
          {maleReview.map((value, index) => {
            return (
              <div key={index} className="">
                {value.images}
              </div>
            );
          })}
        </Slider>
      </div>
      <div className=" justify-center  xl:hidden md:hidden lg:hidden xs:flex">
        <Slider
          {...settingsNoArrow}
          className="xl:w-7/12 xs:w-11/12 flex items-center justify-center rounded-2xl  shadow-xl "
        >
          {maleReview.map((value, index) => {
            return (
              <div key={index} className="">
                {value.images}
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
