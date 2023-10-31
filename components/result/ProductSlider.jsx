import Image from "next/image";
import { useState, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CDN_BASE_URL } from "../../constants/config";

// images comes here

const left = `${CDN_BASE_URL}website_images/localImages/left.webp`;
const right = `${CDN_BASE_URL}website_images/localImages/right.webp`;

export default function ProductSlider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = useMemo(() => {
    if (props.SliderData == undefined) return [];
    return props.SliderData;
  }, [props.SliderData]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className}>
        <Image
          src={right}
          alt="left arrow"
          onClick={onClick}
          loader={props.loader}
          fill
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
          loader={props.loader}
          // unoptimized={true}
          fill
        />
      </div>
    );
  }

  let settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // lazyload: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
          dots: true,
          className: "center",
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let settingsMobile = {
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    lazyload: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
  };

  return (
    <>
      <div className="hidden md:flex justify-center">
        <Slider
          {...settings}
          className="xl:w-7/12 xs:w-10/12 hidden items-center justify-center"
          customPaging={(i) => {
            return (
              <div className=" xl:text-xl md:text-xl xs:text-xs rounded-full font-bold">
                {" "}
                {i + 1}
              </div>
            );
          }}
          dotsClass="slick-dots custom-indicator"
        >
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image.image_url.productUrl}
                objectFit="contain"
                className="animate-fadeIn"
                width={1100}
                height={740}
                alt=""
                loader={props.loader}
                // unoptimized={true}
              />
            );
          })}
        </Slider>
      </div>
      <div className="flex md:hidden justify-center w-full">
        <Slider
          {...settingsMobile}
          className="w-10/12 flex items-center justify-center"
          customPaging={(i) => {
            return (
              <div className=" xl:text-xl md:text-xl xs:text-xs rounded-full font-bold">
                {i + 1}
              </div>
            );
          }}
          dotsClass="slick-dots custom-indicator"
        >
          {images.map((image, index) => {
            return (
              <Image
                key={index}
                src={image.image_url.mobileImgUrl}
                objectFit="contain"
                // responsive
                className="animate-fadeIn"
                width={600}
                height={1000}
                responsive
                alt=""
                loader={props.loader}
                priority={true}
                // unoptimized={true}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}
