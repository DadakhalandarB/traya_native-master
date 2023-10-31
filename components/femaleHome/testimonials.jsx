import { nunito } from "@/constants/fontConfig";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CDN_BASE_URL } from "../../constants/config";

const left = `${CDN_BASE_URL}website_images/localImages/left.webp`;
const right = `${CDN_BASE_URL}website_images/localImages/right.webp`;

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

let settings2 = {
  dots: false,

  lazyload: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,

  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
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
};

export default function Testimonial(props) {
  const [showFullContent, setShowFullContent] = useState(false);
  const [showFullContent2, setShowFullContent2] = useState(false);
  const [showFullContent3, setShowFullContent3] = useState(false);
  const [showFullContent4, setShowFullContent4] = useState(false);
  const [showFullContent5, setShowFullContent5] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  const toggleContent2 = () => {
    setShowFullContent2(!showFullContent2);
  };
  const toggleContent3 = () => {
    setShowFullContent3(!showFullContent3);
  };
  const toggleContent4 = () => {
    setShowFullContent4(!showFullContent4);
  };
  const toggleContent5 = () => {
    setShowFullContent5(!showFullContent5);
  };

  const element = [
    {
      image: (
        <div className=" mx-2">
          <div>
            <Image
              src="https://d3twoz8hvcdm9h.cloudfront.net/website_images/female_landing_page/Ridhima_350x_55dbfb23-2e5a-4f1f-8702-8714fc90d554_350x.png"
              alt="traya testimonials"
              width={40}
              height={40}
              responsive
              loading="lazy"
            />
          </div>
          <div className=" flex flex-col items-center rounded-xl m-auto mt-2">
            <div className="flex flex-col ">
              <div className="text-yellow-400 text-2xl justify-start">
                <div className="flex px-1">
                  <span className="font-bold text-lg text-black items-baseline">
                    Ridhima
                  </span>
                  <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                </div>
              </div>
              <div>
                {showFullContent ? (
                  <p className="xs:text-xs px-1 xl:text-base">
                    {" "}
                    I had genetic hair loss but thanks to Traya for helping me
                    cover my widened middle partition in just 4 months. I also
                    followed the dietary guidelines and feel more energetic
                    after taking this treatment
                  </p>
                ) : (
                  <p className="xs:text-xs px-1 xl:text-base">
                    I had genetic hair loss but thanks to Traya for helping me
                    cover my widened midd...{" "}
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
              <div className="flex flex-row justify-between mt-4 px-1">
                <div>
                  <p className="font-bold text-custom-black">Kit Purchased</p>
                  <p className="text-[16px]">
                    On Traya&apos;s Recommended plan
                  </p>
                </div>
                <div>
                  <p className="font-bold text-custom-black">Used for</p>
                  <p className="text-[16px]">8 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      image: (
        <div className=" mx-2">
          <div>
            <Image
              src="https://d3twoz8hvcdm9h.cloudfront.net/website_images/female_landing_page/Meghasree_350x_6caf1ac3-2a81-4158-8bce-c6ee63886221_350x.png"
              alt="traya testimonials"
              width={40}
              height={40}
              responsive
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center rounded-xl m-auto mt-2">
            <div className="flex flex-col ">
              <div className="text-yellow-400 text-2xl justify-start">
                <div className="flex px-1">
                  <span className="font-bold text-lg text-black items-baseline">
                    Meghasree
                  </span>
                  <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                </div>
              </div>
              <div>
                {showFullContent2 ? (
                  <p className="xs:text-xs px-1 xl:text-base">
                    Amazing treatment with an amazing team. The amount of
                    attention I got for my hair loss treatment is insane. I’m so
                    happy with Traya
                  </p>
                ) : (
                  <p className="xs:text-xs px-1 xl:text-base">
                    Amazing treatment with an amazing team. The amount of
                    attention I got for my hai...{" "}
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
              <div className="flex flex-row justify-between mt-4 px-1">
                <div>
                  <p className="font-bold text-custom-black">Kit Purchased</p>
                  <p className="text-[14px] ">
                    On Traya&apos;s Recommended plan
                  </p>
                </div>
                <div>
                  <p className="font-bold text-custom-black">Used for</p>
                  <p className="text-[16px]">6 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      image: (
        <div className=" mx-2">
          <div>
            <Image
              src="https://d3twoz8hvcdm9h.cloudfront.net/website_images/female_landing_page/Carol_350x_ff71febc-1656-4fa4-8e82-185971aad482_350x.png"
              alt="traya testimonials"
              width={40}
              height={40}
              responsive
              loading="lazy"
            />
          </div>
          <div className=" flex flex-col items-center rounded-xl m-auto mt-2">
            <div className="flex flex-col ">
              <div className="text-yellow-400 text-2xl justify-start">
                <div className="flex px-1">
                  <span className="font-bold text-lg text-black items-baseline">
                    Carol
                  </span>
                  <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                </div>
              </div>
              <div>
                {showFullContent3 ? (
                  <p className="xs:text-xs px-1 xl:text-base">
                    Super happy with the results I have gotten using Traya’s
                    hair loss treatment. I used to shed more than 150 strands a
                    day but now it is just 5-10 strands falling in a day
                  </p>
                ) : (
                  <p className="xs:text-xs px-1 xl:text-base">
                    Super happy with the results I have gotten using Traya’s
                    hair loss treatment. I ...{" "}
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
              <div className="flex flex-row justify-between mt-4 px-1">
                <div>
                  <p className="font-bold text-custom-black">Kit Purchased</p>
                  <p className="text-[14px]">
                    On Traya&apos;s Recommended plan
                  </p>
                </div>
                <div>
                  <p className="font-bold text-custom-black">Used for</p>
                  <p className="text-[16px]">4 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      image: (
        <div className=" mx-2">
          <div>
            <Image
              src="https://d3twoz8hvcdm9h.cloudfront.net/website_images/female_landing_page/Bhaavika_350x_806f3628-0f4f-4804-ae3e-43410c8dc15c_350x.png"
              alt="traya testimonials"
              width={40}
              height={40}
              responsive
              loading="lazy"
            />
          </div>
          <div className=" flex flex-col items-center rounded-xl m-auto mt-2">
            <div className="flex flex-col ">
              <div className="text-yellow-400 text-2xl justify-start">
                <div className="flex px-1">
                  <span className="font-bold text-lg text-black items-baseline">
                    Bhaavika
                  </span>
                  <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                </div>
              </div>
              <div>
                {showFullContent4 ? (
                  <p className="xs:text-xs px-1 xl:text-base">
                    Being an Instagram model it’s very important for me to have
                    a good set of hair. I maintained my hair health and
                    controlled hair fall using Traya’s hair care regime.
                  </p>
                ) : (
                  <p className="xs:text-xs px-1 xl:text-base">
                    Being an Instagram model it’s very important for me to have
                    a good set of hair. ...{" "}
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
              <div className="flex flex-row justify-between mt-4 px-1">
                <div>
                  <p className="font-bold text-custom-black">Kit Purchased</p>
                  <p className="text-[14px]">
                    On Traya&apos;s Recommended plan
                  </p>
                </div>
                <div>
                  <p className="font-bold text-custom-black">Used for</p>
                  <p className="text-[16px]">5 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      image: (
        <div className=" mx-2">
          <div>
            <Image
              src="https://d3twoz8hvcdm9h.cloudfront.net/website_images/female_landing_page/Neelam_Upadhyay_350x_ff7659c8-bb3d-4fdd-bfe0-749afeed51a0_350x.png"
              alt="traya testimonials"
              width={40}
              height={40}
              responsive
              loading="lazy"
            />
          </div>
          <div className=" flex flex-col items-center rounded-xl m-auto mt-2">
            <div className="flex flex-col ">
              <div className="text-yellow-400 text-2xl justify-start">
                <div className="flex px-1">
                  <span className="font-bold text-lg text-black items-baseline">
                    Neelam
                  </span>
                  <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                </div>
              </div>
              <div>
                {showFullContent5 ? (
                  <p className="xs:text-xs px-1 xl:text-base">
                    {" "}
                    From losing so much hair while shampooing to losing 2-3
                    strands my journey with Traya has been amazing. Thanks team
                    Traya for making my hair so strong
                  </p>
                ) : (
                  <p className="xs:text-xs px-1 xl:text-base">
                    From losing so much hair while shampooing to losing 2-3
                    strands my journey with ...{" "}
                    <button
                      onClick={toggleContent5}
                      className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base"
                    >
                      Read More
                    </button>
                  </p>
                )}
                {showFullContent5 && (
                  <button
                    onClick={toggleContent5}
                    className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base"
                  >
                    Read Less
                  </button>
                )}
              </div>
              <div className="flex flex-row justify-between mt-4 px-1">
                <div>
                  <p className="font-bold text-custom-black">Kit Purchased</p>
                  <p className="text-[14px] ">
                    On Traya&apos;s Recommended plan
                  </p>
                </div>
                <div>
                  <p className="font-bold text-custom-black">Used for</p>
                  <p className="text-[16px]">8 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const screenSize = useScreenSize();
  return (
    <div>
      {["xl", "lg", "md"].includes(screenSize) ? (
        <h2
          className={`hidden xl:block lg:block md:block ${nunito.variable} xl:text-[34px] lg:text-[34px] md:text-[34px] xs:text-[30px] text-center mt-4 tracking-wide font-bold xl:mt-10 text-[#3f3f3f] xs:px-2`}
        >
          Healthy Inside. Happy Outside.
        </h2>
      ) : (
        <h2
          className={`block xl:hidden lg:hidden md:hidden ${nunito.variable} xl:text-[34px] lg:text-[34px] md:text-[34px] xs:text-[30px] text-center  mt-8 tracking-wide font-bold xl:mt-10 text-[#3f3f3f] xs:px-2 xs:leading-[31px]`}
        >
          Healthy Inside.
          <br /> Happy Outside.
        </h2>
      )}
      <h5
        className={`${nunito.variable} xl:text-xl xs:text-[18px] text-center mt-4 tracking-wide xl:mt-5 text-[#414042] xs:px-10`}
      >
        We are on a Mission to fix hair fall the right way.
      </h5>
      <div className="xs:flex md:flex  justify-center px-2">
        <Slider
          {...settings2}
          className="2xl:w-[1110px] mx-auto xl:w-7/12 xs:w-10/12 flex items-center justify-center mt-6"
        >
          {element.map((value, index) => {
            return (
              <div key={index} className="">
                {value.image}
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="xl:my-7 xs:mt-0 w-10/12 mx-auto">
        <div className="flex justify-center">
          <a
            href="https://traya.health/pages/reviews"
            className="flex bg-custom-black text-white hover:bg-custom-green hover:text-black py-2.5 px-8 text-md md:text-xl lg:text-xl xl:text-xl font-bold rounded-md uppercase"
          >
            TESTIMONIALS
          </a>
        </div>
      </div>
    </div>
  );
}
