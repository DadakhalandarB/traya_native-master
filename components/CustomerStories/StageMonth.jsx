import React from "react";
import Slider from "react-slick";

const StageMonth = () => {
  let settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    lazyload: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const stageMonths = [
    {
      images: (
        <div className="border-2 rounded-lg py-10">
          <div className="flex justify-center">
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Artboard_1-2_7394a31a-e4fa-4292-a7b8-1fbd7746e524_300x.png?v=1663598624"
                  alt="dr Jaspreet"
                />{" "}
              </div>
              <div className="w-full">
                <h1
                  className="text-center font-bold text-2xl mt-2 font-fredoka"
                  style={{ color: "#A9B699" }}
                >
                  Month 1
                </h1>
              </div>
            </div>
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Artboard_2_0d226608-70c2-496b-8e67-fa2f8dab7ce7_300x.png?v=1663598624"
                  alt="dr Jaspreet"
                />{" "}
              </div>
              <div className="w-full">
                <h1
                  className="text-center font-bold text-2xl mt-2 font-fredoka"
                  style={{ color: "#A9B699" }}
                >
                  Month 2
                </h1>
              </div>
            </div>
          </div>
          <p
            className="text-xl text-center p-5 pb-10 font-semibold px-10"
            style={{ color: "#414042" }}
          >
            Since I started taking the treatment from Traya & I can see a
            phenomenal change in my crown area and on the centre part of my
            scalp. One can see tiny new hair sprouting out.
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="border-2 rounded-lg  py-10">
          <div className="flex justify-center">
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Artboard_5_b13e005e-0f90-4f55-b835-2562026eb738_300x.png?v=1663599123"
                  alt="dr Jaspreet"
                />{" "}
              </div>
              <div className="w-full">
                <h1
                  className="text-center font-bold text-2xl mt-2 font-fredoka"
                  style={{ color: "#A9B699" }}
                >
                  Month 1
                </h1>
              </div>
            </div>
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/jayna_after_73205d6a-bdcb-402d-bd4f-af831d5604cd_300x.png?v=1663599123"
                  alt="dr Jaspreet"
                />{" "}
              </div>
              <div className="w-full">
                <h1
                  className="text-center font-bold text-2xl mt-2 font-fredoka"
                  style={{ color: "#A9B699" }}
                >
                  Month 2
                </h1>
              </div>
            </div>
          </div>
          <p
            className="text-xl text-center p-5 pb-10 font-semibold px-10"
            style={{ color: "#414042" }}
          >
            It works !! 100% I am using their products from last 5 months and
            seeing the results, Everything is time taking, that we have to
            accept.
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="border-2 rounded-lg py-10">
          <div className="flex justify-center">
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Artboard_3_d9f6c471-8f44-4219-800c-4d164bd304f3_300x.png?v=1663599353"
                  alt="dr Jaspreet"
                />{" "}
              </div>
              <div className="w-full">
                <h1
                  className="text-center font-bold text-2xl mt-2 font-fredoka"
                  style={{ color: "#A9B699" }}
                >
                  Month 1
                </h1>
              </div>
            </div>
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Artboard_4_f3959dea-28c3-4e1e-81a1-5cf05052d13a_300x.png?v=1663599353"
                  alt="dr Jaspreet"
                />{" "}
              </div>
              <div className="w-full">
                <h1
                  className="text-center font-bold text-2xl mt-2 font-fredoka"
                  style={{ color: "#A9B699" }}
                >
                  Month 2
                </h1>
              </div>
            </div>
          </div>
          <p
            className="text-xl text-center p-5 pb-10 font-semibold px-10"
            style={{ color: "#414042" }}
          >
            I have been on the treatment after I delivered my baby. Traya has
            been really helpful to my hair loss problem. I can see drastic
            change in my hair growth and Hair fall is completely gone.
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="border-2 rounded-lg  py-10">
          <div className="flex justify-center">
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <div>
                <img src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/hero_page_before_a4a955f1-b500-4f1c-8f25-d78e12e0ec17_300x.png?v=1663598446" />{" "}
              </div>
              <div className="w-full">
                <h1
                  className="text-center font-bold text-2xl mt-2 font-fredoka"
                  style={{ color: "#A9B699" }}
                >
                  Month 1
                </h1>
              </div>
            </div>
            <div className="mr-4 ml-4 mb-5 flex flex-col items-center p-2">
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/hero_page_after_6259d069-93ff-4278-ad8f-d0be9bd77675_300x.png?v=1663598446"
                  alt="dr Jaspreet"
                />{" "}
              </div>
              <div className="w-full">
                <h1
                  className="text-center font-bold text-2xl mt-2 font-fredoka"
                  style={{ color: "#A9B699" }}
                >
                  Month 2
                </h1>
              </div>
            </div>
          </div>
          <p
            className="text-xl text-center p-5 pb-10 font-semibold px-10"
            style={{ color: "#414042" }}
          >
            My hair fall stopped completely after using Traya. Today I feel much
            much more confident than before. I had lost all my hope of regrowing
            my hair but Traya has truly turned out to be a game-changer.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="custom-stories xl:w-6/12 lg:w-6/12 md:w-6/12 w-11/12 mx-auto relative">
      <Slider {...settings}>
        {stageMonths.map((value, index) => {
          return (
            <div key={index} className="">
              {value.images}
            </div>
          );
        })}
      </Slider>
      <a
        href="/pages/reviews"
        className="w-fit flex bg-white text-custom-black text-xl hover:text-black py-3 px-5 rounded-md mx-auto mt-5"
        id="female-hair-test-button2-native"
        style={{ borderWidth: 1, borderColor: "#000" }}
      >
        View more
      </a>
    </div>
  );
};

export default StageMonth;
