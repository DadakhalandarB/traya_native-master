import { CDN_BASE_URL } from "@/constants/config";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";
import Image from "next/image";
import Slider from "react-slick";

const HeroOfTheMonth = () => {
  const heroData = [
    {
      images: (
        <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
          <div>
            <Image
              src={`${CDN_BASE_URL}website_images/other_pages/customerStories/myhero4.png`}
              className="rounded-full border border-green-600"
              alt="dr Jaspreet"
              width={250}
              height={250}
            />{" "}
          </div>
          <div className="w-full">
            <h1
              className="text-center font-bold text-xl mt-2"
              style={{ color: "#414042" }}
            >
              Sharon, 29
            </h1>
          </div>
          <p
            className="text-center mb-6 mt-2 text-md w-full"
            style={{ color: "#414042" }}
          >
            Tamil Nadu
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="mr-4 ml-4 mb-5  flex flex-col items-center p-2">
          <div>
            <Image
              src={`${CDN_BASE_URL}website_images/other_pages/customerStories/myhero5.png`}
              className="rounded-full border border-green-600"
              alt="dr Jaspreet"
              width={250}
              height={250}
            />{" "}
          </div>
          <div className="w-full">
            <h1
              className="text-center font-bold text-xl mt-2"
              style={{ color: "#414042" }}
            >
              Dhruv Prasad, 28
            </h1>
          </div>
          <p
            className="text-center mb-6 mt-2 text-md w-full"
            style={{ color: "#414042" }}
          >
            Bangalore
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="mr-4 ml-4 mb-5  flex flex-col items-center p-2">
          <div>
            <Image
              src={`${CDN_BASE_URL}website_images/other_pages/customerStories/myhero6.png`}
              className="rounded-full border border-green-600"
              alt="dr Jaspreet"
              width={250}
              height={250}
            />{" "}
          </div>
          <div className="w-full">
            <h1
              className="text-center font-bold text-xl mt-2"
              style={{ color: "#414042" }}
            >
              Dinesh Bisht, 30
            </h1>
          </div>
          <p
            className="text-center mb-6 mt-2 text-md w-full"
            style={{ color: "#414042" }}
          >
            Lucknow
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="mr-4 ml-4 mb-5  flex flex-col items-center p-2">
          <div>
            <Image
              src={`${CDN_BASE_URL}website_images/other_pages/customerStories/myhero7.png`}
              className="rounded-full border border-green-600"
              alt="dr Jaspreet"
              width={250}
              height={250}
            />{" "}
          </div>
          <div className="w-full">
            <h1
              className="text-center font-bold text-xl mt-2"
              style={{ color: "#414042" }}
            >
              Jayna, 27
            </h1>
          </div>
          <p
            className="text-center mb-6 mt-2 text-md w-full"
            style={{ color: "#414042" }}
          >
            Hyderabad
          </p>
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
    <div>
      <div className="flex flex-wrap xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 lg:px-8 md:px-8 mx-auto relative xl:py-5 lg:py-4 mt-5 top-20">
        <div
          className="hotm_hero xl:w-7/12 lg:w-7/12 md:w-7/12 w-full mx-auto"
          // style={{backgroundImage: `url(${CDN_BASE_URL}website_images/other_pages/customerStories/myhero1.png)`}}
        >
          <p
            className="text-center text-4xl xl:text-9xl lg:text-9xl -mt-5 mb-4 md:text-9xl font-bold font-fredoka"
            style={{ color: "#58595B" }}
          >
            Hero
          </p>
          <p
            className="text-4xl xl:text-7xl lg:text-7xl md:text-7xl font-nunito text-center"
            style={{ color: "#58595B" }}
          >
            of the month
          </p>
        </div>
      </div>
      <div className="custom-stories xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 mx-auto relative mt-20">
        <p className="p-10 text-center w-11/12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
          iste error placeat autem fuga quia porro totam dolor laudantium quas
          perspiciatis sit est asperiores voluptatum voluptatem labore tenetur
          molestias voluptas repellat ut maxime nam recusandae. Sed accusamus
          numquam id minus veritatis vero, odio saepe pariatur enim voluptates
          praesentium maiores autem odit doloremque omnis. Doloremque iure nam
          eaque animi laborum. Enim ullam quae rerum quidem sed consectetur,
        </p>
      </div>
      <div className="custom-stories xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 mx-auto relative mt-20">
        <Slider {...settings}>
          {heroData.map((value, index) => {
            return (
              <div key={index} className="">
                {value.images}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HeroOfTheMonth;
