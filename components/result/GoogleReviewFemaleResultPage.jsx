import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { CDN_BASE_URL } from "@/constants/config";
import { fredoka } from "@/constants/fontConfig";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";

const Google = `${CDN_BASE_URL}website_images/localImages/google-icon.webp`;

let settings1 = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: false,
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
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
      },
    },
  ],
  autoplaySpeed: 2000,
  nextArrow: <SampleNextArrow variant={"light"}/>,
  prevArrow: <SamplePrevArrow variant={"light"}/>,
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
  nextArrow: <SampleNextArrow variant={"light"}/>,
  prevArrow: <SamplePrevArrow variant={"light"}/>,
};

export default function GoogleReviewFemaleResultPage(props) {
  const [showFullContent, setShowFullContent] = useState(false);
  const [showFullContent2, setShowFullContent2] = useState(false);
  const [showFullContent3, setShowFullContent3] = useState(false);
  const [showFullContent4, setShowFullContent4] = useState(false);
  const [showFullContent5, setShowFullContent5] = useState(false);
  const [showFullContent6, setShowFullContent6] = useState(false);
  const [showFullContent7, setShowFullContent7] = useState(false);
  const [showFullContent8, setShowFullContent8] = useState(false);
  const [showFullContent9, setShowFullContent9] = useState(false);
  const [showFullContent10, setShowFullContent10] = useState(false);

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
  const toggleContent6 = () => {
    setShowFullContent6(!showFullContent6);
  };
  const toggleContent7 = () => {
    setShowFullContent7(!showFullContent7);
  };
  const toggleContent8 = () => {
    setShowFullContent8(!showFullContent8);
  };
  const toggleContent9 = () => {
    setShowFullContent9(!showFullContent9);
  };
  const toggleContent10 = () => {
    setShowFullContent10(!showFullContent10);
  };

  const element = [
    {
      id: 1,
      image: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent ? (
                <p className="xs:text-[16px] mt-5 xl:text-base">
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
                <p className="xs:text-[16px]   mt-5 xl:text-base">
                  I have been following Traya regime since last 9 months now and
                  the results are all to speak ...{" "}
                  <button onClick={toggleContent} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
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
                <h5 className="font-bold text-md mt-5 text-[#414042]"> Devashi Desai</h5>
              </div>
              <div className="mt-5 flex items-center">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={30}
                    height={30}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-2">
                  {" "}
                  <h5 className="text-[#414042]">
                    {" "}
                    Posted On <br />
                    Google
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      image: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {" "}
              {showFullContent2 ? (
                <p className="xs:text-[16px]  mt-5 xl:text-base">
                  It&apos;s been a wonderful experience with you guys and I am
                  really happy with the results. Each and Every medicine,shampoo
                  and scalp oil are effective and easy to use.Their relationship
                  manager specially Sakshi Doshi is very friendly yet
                  professional.Thankyou so much because of you 70%of my hair
                  related problems are way gone and I am very sure that at the
                  end of my treatment it will be 💯 So thank you so much Traya
                  Health...you guys are doing great job.keep going❤️❤️❤️
                </p>
              ) : (
                <p className="xs:text-[16px] mt-5 xl:text-base">
                  It&apos;s been a wonderful experience with you guys and I am
                  really happy with the results. Each and Every medicine,shampoo
                  and scalp oil are effective and...
                  <button onClick={toggleContent2} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
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
              <p className="xs:text-xs xs:w-80 xl:96 mt-5 xl:text-base"></p>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <h5 className="font-bold text-md mt-5 text-[#414042]"> Zoya Afroz</h5>
              </div>
              <div className="mt-5 flex items-center">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={30}
                    height={30}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-2">
                  {" "}
                  <h5 className="text-[#414042]">
                    {" "}
                    Posted On <br />
                    Google
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      image: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {" "}
              {showFullContent3 ? (
                <p className="xs:text-[16px] mt-5 xl:text-base">
                  I was desperately looking for help to treat my hair concerns
                  and I&apos;m glad I found Traya. Cannot explain how much my
                  hair coach Uriah has been a support to me, she&apos;s always a text
                  away and has been very patient in listening to all my
                  chattering about hair problems, and give appropriate
                  treatment. Appreciate the unconditional support 🤗 Been
                  recommending Traya to most of my friends and patients. Thank
                  you heaps!!!
                </p>
              ) : (
                <p className="xs:text-[16px] mt-5 xl:text-base">
                  I was desperately looking for help to treat my hair concerns
                  and I&apos;m glad ...
                  <button onClick={toggleContent3} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
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
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <h5 className="font-bold text-md mt-5 text-[#414042]"> Monisha Battula</h5>
              </div>
              <div className="mt-5 flex items-center">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={30}
                    height={30}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-2">
                  {" "}
                  <h5 className="text-[#414042]">
                    {" "}
                    Posted On <br />
                    Google
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      image: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent4 ? (
                <p className="xs:text-[16px] mt-5 xl:text-base">
                  {" "}
                  As a mother,I was extremely worried about my teenage
                  daughter&apos;s hair condition. I chanced upon Traya and
                  approached you.A very helpful team always making sure that a
                  regular follow up is done.The hair health has improved a lot
                  since I started and I am very pleased with the results. Thank
                  you Traya..Thank you Mallika for being just a call away.
                </p>
              ) : (
                <p className="xs:text-[16px]  mt-5 xl:text-base">
                  As a mother,I was extremely worried about my teenage
                  daughter&apos;s hair condition.
                  <button onClick={toggleContent4} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                    Read More
                  </button>
                </p>
              )}
              {showFullContent4 && (
                <button onClick={toggleContent4} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <h5 className="font-bold text-md mt-5 text-[#414042]"> SANJUKTHA SANYAL</h5>
              </div>
              <div className="mt-5 flex items-center">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={30}
                    height={30}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-2">
                  {" "}
                  <h5 className="text-[#414042]">
                    {" "}
                    Posted On <br />
                    Google
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      image: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent5 ? (
                <p className="xs:text-[16px]  mt-5 xl:text-base">
                  {" "}
                  I feel much better after taking up the treatment. The
                  treatment does not just include tablets and
                  minoxidil.Treatment includes ensuring proper sleep cycle and
                  proper diet. Surely there is notable changes after 9 months of
                  treatment.
                </p>
              ) : (
                <p className="xs:text-[16px]  mt-5 xl:text-base">
                  I feel much better after taking up the treatment. The
                  treatment does not just include
                  <button onClick={toggleContent5} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                    Read More
                  </button>
                </p>
              )}
              {showFullContent5 && (
                <button onClick={toggleContent5} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <h5 className="font-bold text-md mt-5 text-[#414042]"> TheCmayil</h5>
              </div>
              <div className="mt-5 flex items-center">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={30}
                    height={30}
                    unoptimized={true}
                    loader={props.loader}
                  />
                </div>
                <div className="ml-2">
                  {" "}
                  <h5 className="text-[#414042]">
                    {" "}
                    Posted On <br />
                    Google
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      image: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent6 ? (
                <p className="xs:text-[16px]  mt-5 xl:text-base">
                  {" "}
                  IT WORKS! I&apos;m not someone who falls for a trap easily so
                  I researched well before taking this treatment! My research,
                  their treatments and efforts have truly shown results. I like
                  their concept of 3 sciences, it was new to me but they proved
                  it by giving me my desired results! Thanks Tatva
                </p>
              ) : (
                <p className="xs:text-[16px]  mt-5 xl:text-base">
                  IT WORKS! I&apos;m not someone who falls for a trap easily so
                  I researched well before ...
                  <button onClick={toggleContent6} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                    Read More
                  </button>
                </p>
              )}
              {showFullContent6 && (
                <button onClick={toggleContent6} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <h5 className="font-bold text-md mt-5 text-[#414042]"> Kiran Rajpooth</h5>
              </div>
              <div className="mt-5 flex items-center">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={30}
                    height={30}
                    unoptimized={true}
                    loader={props.loader}
                  />
                </div>
                <div className="ml-2">
                  {" "}
                  <h5 className="text-[#414042]">
                    {" "}
                    Posted On <br />
                    Google
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 7,
      image: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {" "}
              {showFullContent7 ? (
                <p className="xs:text-[16px] mt-5 xl:text-base">
                  {" "}
                  The product is very good The results were visible after 15
                  itself Must try essential hair food
                </p>
              ) : (
                <p className="xs:text-[16px]  mt-5 xl:text-base">
                  The product is very good The results were visible after 15
                  itself Must try ...
                  <button onClick={toggleContent7} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                    Read More
                  </button>
                </p>
              )}
              {showFullContent7 && (
                <button onClick={toggleContent7} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <h5 className="font-bold text-md mt-5 text-[#414042]"> Sonia Hair Studio </h5>
              </div>
              <div className="mt-5 flex items-center">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={30}
                    height={30}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-2">
                  {" "}
                  <h5 className="text-[#414042]">
                    {" "}
                    Posted On <br />
                    Google
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 8,
      image: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent8 ? (
                <p className="xs:text-[16px]  mt-5 xl:text-base">
                  {" "}
                  Since i have started using Traya hair care regime, my hair
                  have really improved a lot. This regime is also helping me in
                  stress management and to get better sleep. I would highly
                  recommend Traya.
                </p>
              ) : (
                <p className="xs:text-[16px] mt-5 xl:text-base">
                  Since i have started using Traya hair care regime, my hair
                  have really improved a lot. This ...
                  <button onClick={toggleContent8} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                    Read More
                  </button>
                </p>
              )}
              {showFullContent8 && (
                <button onClick={toggleContent8} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <h5 className="font-bold text-md mt-5 text-[#414042]"> Bhavana Singh</h5>
              </div>
              <div className="mt-5 flex items-center">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={30}
                    height={30}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-2">
                  {" "}
                  <h5 className="text-[#414042]">
                    {" "}
                    Posted On <br />
                    Google
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      image: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {" "}
              {showFullContent9 ? (
                <p className="xs:text-[16px]  mt-5 xl:text-base">
                  I am very satisfied with how they work, and how their plan is
                  curated according to my needs
                </p>
              ) : (
                <p className="xs:text-[16px]  mt-5 xl:text-base">
                  I am very satisfied with how they work, and how their plan is
                  curated according to my needs ...
                  <button onClick={toggleContent9} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                    Read More
                  </button>
                </p>
              )}
              {showFullContent9 && (
                <button onClick={toggleContent9} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <h5 className="font-bold text-md mt-5 text-[#414042]"> Poonam Beniwal</h5>
              </div>
              <div className="mt-5 flex items-center">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={30}
                    height={30}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-2">
                  {" "}
                  <h5 className="text-[#414042]">
                    {" "}
                    Posted On <br />
                    Google
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 10,
      image: (
        <div className="mx-3">
          <div className="flex flex-col mt-10 item-center">
            <div className="text-yellow-400 text-2xl justify-start">
              {" "}
              &#9733; &#9733; &#9733; &#9733; &#9733;
            </div>
            <div>
              {showFullContent10 ? (
                <p className="xs:text-[16px] mt-5 xl:text-base">
                  {" "}
                  It&apos;s all about patience and consistency. Traya helped me
                  to grow my hair back, as well as to live a healthy lifestyle
                  with the customized diet. Before Traya I lost all my hopes. If
                  a person like me can grow my hairs back., I&apos;m 100℅ sure
                  with the help of Traya everyone who is facing hair fall issues
                  can grow back their hair. Trust me it&apos;s worth it.
                </p>
              ) : (
                <p className="xs:text-[16px] mt-5 xl:text-base">
                  It&apos;s all about patience and consistency. Traya helped me
                  to grow my hair back, as well as ...
                  <button onClick={toggleContent10} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                    Read More
                  </button>
                </p>
              )}
              {showFullContent10 && (
                <button onClick={toggleContent10} className="xl:font-bold md:font-bold xs:font-bold xs:text-sm md:text-base xl:text-base">
                  Read Less
                </button>
              )}
            </div>
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <h5 className="font-bold text-md mt-5 text-[#414042]">
                  {" "}
                  Monika Venkateswaran
                </h5>
              </div>
              <div className="mt-5 flex items-center">
                <div>
                  {" "}
                  <Image
                    src={Google}
                    alt="google image"
                    width={30}
                    height={30}
                    loader={props.loader}
                    unoptimized={true}
                  />
                </div>
                <div className="ml-2">
                  {" "}
                  <h5 className="text-[#414042]">
                    {" "}
                    Posted On <br />
                    Google
                  </h5>
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
        <h5 className={`${fredoka.variable} xl:text-5xl md:text-4xl xs:text-2xl text-center text-custom-black mb-2 mt-10`}>
          Google Reviews
        </h5>
      </div>
      <div className="xs:flex md:flex xl:hidden justify-center px-3">
        <Slider {...settings1} className="w-11/12  items-center justify-center">
          {element.map((value, index) => {
            return (
              <div key={index} className="">
                {value.image}
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="xl:flex md:hidden xs:hidden justify-center">
        <Slider
          {...settings2}
          className="xl:w-4/6 xs:w-10/12 flex items-center justify-center"
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
    </div>
  );
}