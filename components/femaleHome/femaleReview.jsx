import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useMemo } from "react";

import { CDN_BASE_URL } from "../../constants/config";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";


let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow variant="light" />,
  prevArrow: <SamplePrevArrow variant="light" />,
};
export default function FemaleReview() {
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
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/anonymous1.png`}
                alt="customer stage 1"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />{" "}
              <h2 className="text-center mt-2 font-bold"> Month 1</h2>
            </div>
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/anonymous2.png`}
                alt="customer stage 2"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />
              <h2 className="text-center mt-2 font-bold"> Month 3</h2>
            </div>
            <div className="mx-4 mt-4 xl:w-[180px]  xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/anonymous3.png`}
                alt="customer stage 3"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />
              <h2 className="text-center mt-2 font-bold"> Month 5</h2>
            </div>
          </div>
          <div className="text-center w-full">
            <div>
              {" "}
              <h2 className="xl:mt-20 xs:mt-4 xl:text-3xl md:text-3xl xs:text-2xl font-bold">
                {" "}
                Anonymous{" "}
              </h2>
            </div>
            <div className="mb-2">
              <p className="text-3xl text-yellow-400">
                &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
              </p>
            </div>
            <div className="xs:text-md xl:text-base text-custom-black">
              {" "}
              <h2> Reviewed on 15th August 2021 </h2>{" "}
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
              <div className="xs:w-[70px] xl:w-auto">
                {" "}
                <p className="xl:text-base">
                  {" "}
                  <span className="font-bold  text-base text-custom-black">
                    {" "}
                    Used for{" "}
                  </span>{" "}
                  9 months
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
        <div className=" flex flex-col items-center  m-auto">
          <div className="flex flex-wrap w-full xl:justify-around xs:justify-center xl:mt-6">
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              {" "}
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/shwetadivecha1.png`}
                alt="customer stage 1"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />{" "}
              <h2 className="text-center mt-2 font-bold"> Month 1</h2>
            </div>
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/shwetadivecha2.png`}
                alt="customer stage 2"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />
              <h2 className="text-center mt-2 font-bold"> Month 2</h2>
            </div>
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/shwetadivecha3.png`}
                alt="customer stage 3"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />
              <h2 className="text-center mt-2 font-bold"> Month 4</h2>
            </div>
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/shwetadivecha4.png`}
                alt="customer stage 3"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />
              <h2 className="text-center mt-2 font-bold"> Month 5</h2>
            </div>
          </div>
          <div className="text-center  w-full">
            <div>
              {" "}
              <h2 className="xl:mt-20 xs:mt-4 xl:text-3xl md:text-3xl xs:text-2xl font-bold">
                {" "}
                Shweta Divecha{" "}
              </h2>
            </div>
            <div className="mb-2">
              <p className="text-3xl text-yellow-400">
                &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
              </p>
            </div>
            <div className="text-md">
              {" "}
              <h2> Reviewed on 15th Nov 2021 </h2>{" "}
            </div>
            <div className=" m-3 text-center ">
              {showFullContent2 ? (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “My hair loss started in 2016 after I was diagnosed with
                  tuberculosis. I had consulted a dermatologist and tried many
                  treatments before nearly giving up hope. I liked Traya{"'"}s
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
              <div className="xs:w-[70px] xl:w-auto">
                {" "}
                <p className="xl:text-base">
                  {" "}
                  <span className="font-bold  text-base text-custom-black">
                    {" "}
                    Used for{" "}
                  </span>{" "}
                  3 months
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
        <div className=" flex flex-col  xs:w-full m-auto ">
          <div className="flex w-full xl:justify-around  flex-wrap xs:justify-center xl:mt-6 items-center">
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              {" "}
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/swati1.png`}
                alt="customer stage 1"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />{" "}
              <h2 className="text-center mt-2 font-bold"> Month 1</h2>
            </div>
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/swati2.png`}
                alt="customer stage 2"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />
              <h2 className="text-center mt-2 font-bold"> Month 3</h2>
            </div>
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/swati3.png`}
                alt="customer stage 3"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />
              <h2 className="text-center mt-2 font-bold"> Month 5</h2>
            </div>
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/swati4.png`}
                alt="customer stage 3"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />
              <h2 className="text-center mt-2 font-bold"> Month 6</h2>
            </div>
          </div>
          <div className="text-center  w-full">
            <div>
              <h2 className="xl:mt-20 xs:mt-4 xl:text-3xl md:text-3xl xs:text-2xl font-bold">
                Swati
              </h2>
            </div>
            <div className="mb-2">
              <p className="text-3xl text-yellow-400">
                &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
              </p>
            </div>
            <div className="text-md">
              {" "}
              <h2> Reviewed on 21st Feb 2022 </h2>{" "}
            </div>
            <div className=" m-3 text-center ">
              {" "}
              <p className="text-base text-custom-black xl:text-xl"> </p>
              {showFullContent3 ? (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “I didn{"'"}t want to resort to surgery or any other invasive
                  treatment for my hair loss and I found Traya. They have helped
                  me grow back a full head of hair in just eight months. I{"'"}m
                  so happy with the results, thank you so much!”
                </p>
              ) : (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “I didn{"'"}t want to resort to surgery or any other invasive
                  treatment for my hair ..{" "}
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
              <div className="xs:w-[70px] xl:w-auto">
                {" "}
                <h2 className="xl:text-base">
                  {" "}
                  <span className="font-bold  text-base text-custom-black">
                    {" "}
                    Used for{" "}
                  </span>{" "}
                  6 months
                </h2>
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
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              {" "}
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/arundhati1.png`}
                alt="customer stage 1"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />{" "}
              <h2 className="text-center mt-2 font-bold"> Month 1</h2>
            </div>
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/arundhati2.png`}
                alt="customer stage 2"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />
              <h2 className="text-center mt-2 font-bold"> Month 3</h2>
            </div>
            <div className="mx-4 mt-4 xl:w-[180px] xs:w-[115px] xs:h-[130px]">
              <Image
                src={`${CDN_BASE_URL}website_images/other_pages/femaleScalpReviews/arundhati3.png`}
                alt="customer stage 3"
                height={110}
                width={125}
                responsive
                objectFit="cover"
                loading="lazy"
              />
              <h2 className="text-center mt-2 font-bold"> Month 5</h2>
            </div>
          </div>
          <div className="text-center  w-full">
            <div>
              <h2 className=" xl:mt-20 xs:mt-4 xl:text-3xl md:text-3xl xs:text-2xl font-bold">
                Arundhati Munje
              </h2>
            </div>
            <div className="mb-2">
              <p className="text-3xl text-yellow-400">
                &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
              </p>
            </div>
            <div className="text-md">
              {" "}
              <h2> Reviewed on 9th Apr 2022 </h2>{" "}
            </div>
            <div className=" m-3 text-center ">
              {" "}
              <p className="text-base xl:text-xl"></p>
              {showFullContent4 ? (
                <p className="xs:text-base xl:text-xl xl:px-12 md:px-12 xs:px-2 text-custom-black">
                  “I read about Traya on Quora. I had read reviews on it and
                  they seemed positive so I thought that I would give it a go.
                  It{"'"}s helped me so much and I can tell the difference in
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
              <div className="xs:w-[70px] xl:w-auto">
                {" "}
                <h2 className="xl:text-base">
                  {" "}
                  <span className="font-bold  text-base text-custom-black">
                    {" "}
                    Used for{" "}
                  </span>{" "}
                  5 months
                </h2>
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
  ];

  return (
    <div className="flex justify-center">
      <Slider
        {...settings}
        className="2xl:w-[1110px] xl:w-9/12 xs:w-10/12 flex items-center justify-center rounded-2xl  shadow-xl "
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
  );
}
