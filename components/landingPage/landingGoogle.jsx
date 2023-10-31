import Image from "next/image";
import { useState } from "react";
import { CDN_BASE_URL } from "../../constants/config";
import dynamic from "next/dynamic";

const Google = `${CDN_BASE_URL}website_images/localImages/google-icon.webp`;
const left = `${CDN_BASE_URL}website_images/localImages/left.webp`;
const right = `${CDN_BASE_URL}website_images/localImages/right.webp`;
const DynamicSlider = dynamic(() => import("../SliderComponent"));

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

let settings1 = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
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
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
      },
    },
  ],
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
let settings2 = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
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
        slidesToShow: 1,
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
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
      },
    },
  ],
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function GoogleReview(props) {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(showFullContent);
  };

  const element = [
    {
      id: 1,
      images: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent ? (
                <p className="xs:text-xs mt-5 xl:text-base">
                  {" "}
                  I have been following Traya regime since last 9 months now and
                  the results are all to speak for. I had issues regarding hair
                  density and patches. Now I am very much happy and satisfied
                  with the results. In short, Quality & Quantity both have
                  improved for me. Infact, it has been helpful for my body
                  balance as well. Thanks to Sneha for all the help and Cheers
                  to the Traya team👍 👍 👍
                </p>
              ) : (
                <p className="xs:text-xs   mt-5 xl:text-base">
                  I have been following Traya regime since last 9 months now and
                  the results are all to speak ...{" "}
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
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p className="font-bold text-lg mt-5"> Devashi Desai</p>
              </div>
              <div className="mt-5 flex">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={25}
                    height={25}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-5">
                  {" "}
                  <p>
                    {" "}
                    Posted On <br />
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      images: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {" "}
              {showFullContent ? (
                <p className="xs:text-xs  mt-5 xl:text-base">
                  {" "}
                  Before trying traya i had used a lot of other meditation
                  too... Traya was the only one which gave me the best positive
                  results for my hair... Grateful to them
                </p>
              ) : (
                <p className="xs:text-xs mt-5 xl:text-base">
                  Before trying traya i had used a lot of other meditation
                  too... Traya was the only one...{" "}
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
              <p className="xs:text-xs xs:w-80 xl:96 mt-5 xl:text-base"></p>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p className="font-bold text-lg mt-5"> LOKJEET RANAA..</p>
              </div>
              <div className="mt-5 flex">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={25}
                    height={25}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-5">
                  {" "}
                  <p>
                    {" "}
                    Posted On <br />
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      images: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {" "}
              {showFullContent ? (
                <p className="xs:text-xs mt-5 xl:text-base">
                  {" "}
                  I am 25 years old. I have androgenic alopecia. couple of
                  months back I found traya and started its medication. now I am
                  happy with its result. most important thing is patience and
                  consistency. diet is also a key factor. I recommend traya
                  100%. good customer service.the sooner the better
                </p>
              ) : (
                <p className="xs:text-xs mt-5 xl:text-base">
                  I am 25 years old. I have androgenic alopecia. couple of
                  months back I found traya ...
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
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p className="font-bold text-lg mt-5"> jithu thomas</p>
              </div>
              <div className="mt-5 flex">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={25}
                    height={25}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-5">
                  {" "}
                  <p>
                    {" "}
                    Posted On <br />
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      images: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent ? (
                <p className="xs:text-xs mt-5 xl:text-base">
                  {" "}
                  As a mother,I was extremely worried about my teenage
                  daughter&apos;s hair condition. I chanced upon Traya and
                  approached you.A very helpful team always making sure that a
                  regular follow up is done.The hair health has improved a lot
                  since I started and I am very pleased with the results. Thank
                  you Traya..Thank you Mallika for being just a call away.
                </p>
              ) : (
                <p className="xs:text-xs  mt-5 xl:text-base">
                  As a mother,I was extremely worried about my teenage
                  daughter&apos;s hair condition.
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
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p className="font-bold text-lg mt-5"> SANJUKTHA SANYAL</p>
              </div>
              <div className="mt-5 flex">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={25}
                    height={25}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-5">
                  {" "}
                  <p>
                    {" "}
                    Posted On <br />
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      images: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent ? (
                <p className="xs:text-xs  mt-5 xl:text-base">
                  {" "}
                  I feel much better after taking up the treatment. The
                  treatment does not just include tablets and
                  minoxidil.Treatment includes ensuring proper sleep cycle and
                  proper diet. Surely there is notable changes after 9 months of
                  treatment.
                </p>
              ) : (
                <p className="xs:text-xs  mt-5 xl:text-base">
                  I feel much better after taking up the treatment. The
                  treatment does not just include
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
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p className="font-bold text-lg mt-5"> TheCmayil</p>
              </div>
              <div className="mt-5 flex">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={25}
                    height={25}
                    unoptimized={true}
                    loader={props.loader}
                  />
                </div>
                <div className="ml-5">
                  {" "}
                  <p>
                    {" "}
                    Posted On <br />
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      images: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent ? (
                <p className="xs:text-xs  mt-5 xl:text-base">
                  {" "}
                  IT WORKS! I&apos;m not someone who falls for a trap easily so
                  I researched well before taking this treatment! My research,
                  their treatments and efforts have truly shown results. I like
                  their concept of 3 sciences, it was new to me but they proved
                  it by giving me my desired results! Thanks Tatva
                </p>
              ) : (
                <p className="xs:text-xs  mt-5 xl:text-base">
                  IT WORKS! I&apos;m not someone who falls for a trap easily so
                  I researched well before ...
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
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p className="font-bold text-lg mt-5"> Kiran Rajpooth</p>
              </div>
              <div className="mt-5 flex">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={25}
                    height={25}
                    unoptimized={true}
                    loader={props.loader}
                  />
                </div>
                <div className="ml-5">
                  {" "}
                  <p>
                    {" "}
                    Posted On <br />
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      images: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent ? (
                <p className="xs:text-xs mt-5 xl:text-base">
                  {" "}
                  The product is very good The results were visible after 15
                  itself Must try essential hair food
                </p>
              ) : (
                <p className="xs:text-xs  mt-5 xl:text-base">
                  The product is very good The results were visible after 15
                  itself Must try ...
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
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p className="font-bold text-lg mt-5"> Sonia Hair Studio </p>
              </div>
              <div className="mt-5 flex">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={25}
                    height={25}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-5">
                  {" "}
                  <p>
                    {" "}
                    Posted On <br />
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      images: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent ? (
                <p className="xs:text-xs  mt-5 xl:text-base">
                  {" "}
                  Since i have started using Traya hair care regime, my hair
                  have really improved a lot. This regime is also helping me in
                  stress management and to get better sleep. I would highly
                  recommend Traya.
                </p>
              ) : (
                <p className="xs:text-xs mt-5 xl:text-base">
                  Since i have started using Traya hair care regime, my hair
                  have really improved a lot. This ...
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
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p className="font-bold text-lg mt-5"> Bhavana Singh</p>
              </div>
              <div className="mt-5 flex">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={25}
                    height={25}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-5">
                  {" "}
                  <p>
                    {" "}
                    Posted On <br />
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      images: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {" "}
              {showFullContent ? (
                <p className="xs:text-xs  mt-5 xl:text-base">
                  {" "}
                  TRAYA&apos;S hairfall treatment has been of great help in
                  reducing my hairfall issue and also regrowing new hair. Also
                  the support staff Poornima who was assigned to me has been
                  very helpful as she checked on my progress, provided diet
                  plans and answering any questions regarding the medication. A
                  great experience overall.
                </p>
              ) : (
                <p className="xs:text-xs  mt-5 xl:text-base">
                  TRAYA&apos;S hairfall treatment has been of great help in
                  reducing my hairfall issue and ...
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
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p className="font-bold text-lg mt-5"> Rohit Daz</p>
              </div>
              <div className="mt-5 flex">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={25}
                    height={25}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-5">
                  {" "}
                  <p>
                    {" "}
                    Posted On <br />
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 10,
      images: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent ? (
                <p className="xs:text-xs mt-5 xl:text-base">
                  {" "}
                  It&apos;s all about patience and consistency. Traya helped me
                  to grow my hair back, as well as to live a healthy lifestyle
                  with the customized diet. Before Traya I lost all my hopes. If
                  a person like me can grow my hairs back., I&apos;m 100℅ sure
                  with the help of Traya everyone who is facing hair fall issues
                  can grow back their hair. Trust me it&apos;s worth it.
                </p>
              ) : (
                <p className="xs:text-xs mt-5 xl:text-base">
                  It&apos;s all about patience and consistency. Traya helped me
                  to grow my hair back, as well as ...
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
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p className="font-bold text-lg mt-5"> Shubham Nikam</p>
              </div>
              <div className="mt-5 flex">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={25}
                    height={25}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-5">
                  {" "}
                  <p>
                    {" "}
                    Posted On <br />
                    Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div>
        <p className="font-sans font-bold xl:text-xx4l xs:text-[30px] text-center  lg:text-xx4l text-center text-custom-black  mb-2">
          Google Review
        </p>
      </div>
      <div className="xs:flex md:flex xl:hidden justify-center px-3">
        <DynamicSlider
          className="w-11/12  items-center justify-center"
          sliderData={element}
          {...{ settings: settings1 }}
        />
      </div>
      <div className="xl:flex md:hidden xs:hidden justify-center px-5">
        <DynamicSlider
          className="xl:w-9/12 xs:w-10/12 flex items-center justify-center"
          sliderData={element}
          {...{ settings: settings2 }}
        />
      </div>
    </div>
  );
}