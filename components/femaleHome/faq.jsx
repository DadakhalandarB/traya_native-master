import Script from "next/script";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CDN_BASE_URL } from "@/constants/config";
import { fredoka } from "@/constants/fontConfig";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";
// images comes here

const left = `${CDN_BASE_URL}website_images/localImages/left.webp`;
const right = `${CDN_BASE_URL}website_images/localImages/right.webp`;

function FAQ({ login }) {
  const [showFaq, setFaq] = useState(false);
  const [faqContentHeader, setFaqContentHeader] = useState("");
  const [faqContentBody, setFaqContentBody] = useState("");
  const [showModal, setShowModal] = useState(false);

  const changeContent = (val) => {
    setShowModal(true);
    if (val == 1) {
      setFaqContentHeader(`Will Traya treatment work for me?`);
      setFaqContentBody(`Yes! Traya will absolutely work for you if your hair loss is between Stages 1-4. (To find out your stage. Take the FREE hair test).
      Traya’s 3x formula uses the goodness of Dermatology Ayurveda and Nutrition to help with your hair loss. Our Women Santulan Technology
       works on specific women needs depending on her existing condition like Pregnancy, Menopause, problems like PCOS along with hair loss. 
      This technology compliments Traya’s 3x formula, along with our FDA-approved Growth Actives and your own personalised diet to ensure 
      you have the healthy hair you deserve.`);
    } else if (val == 2) {
      setFaqContentHeader(`Is Traya treatment safe for women?`);
      setFaqContentBody(`Absolutely! Traya’s hair growth treatment is not only safe and toxin-free but also doctor-prescribed. 
      Traya's treatment plans also have NO SIDE EFFECTS. Traya’s treatment uses Ayurvedic herbs and FDA-approved hair
       growth actives which are very safe and incredibly effective for your hair.`);
    } else if (val == 3) {
      setFaqContentHeader(`What will my Traya treatment contain?`);
      setFaqContentBody(`Traya's holistic & personalised treatment plan combines 3 Sciences of Dermatology, Ayurveda and Nutrition which includes 
      FDA-approved dermatology products, and natural Ayurvedic supplements. You also get a digital prescription signed by doctors, 
      a personal hair coach who guides you throughout the treatment and a healing diet plan which will support your internal health to 
      ensure you have the healthy hair you deserve.`);
    } else if (val == 5) {
      setFaqContentHeader(`How to start traya treatment`);
      setFaqContentBody(`It is incredibly easy! Take Traya’s free hair test from the button on the banner 
      (scroll up to the topmost section) . Once you've taken the hair test and have 
      uploaded your scalp picture, a customised kit will be recommended to you based on
       the root cause of your hair fall, type and stage of hair loss. You can then proceed to
       buy the doctor-recommended treatment plan. Once you place the order,
       Traya's doctors will prescribe your treatment and create a digital prescription for you.  
      You will be able to access this prescription by scanning the QR code on your kit when it is delivered and start the treatment!`);
    } else if (val == 6) {
      setFaqContentHeader(
        `When will I see results? / How long will the treatment take?`
      );
      setFaqContentBody(`Hair growth is a gradual process. Traya’s treatment takes care of your overall health therefore, you will start seeing small changes in your body within a 
      month. For your hair to grow back, it will take an average of about 5 months on  regularly using the complete treatment plan. However, the exact time to see 
      these results may vary depending on factors like your age, type, stage, and the causes behind your hair loss like stress, hormonal imbalances, poor diet, etc.
       Staying consistent with our treatment also ensures faster, more effective results, as over 2.5 lakh other Indians have already seen.`);
    } else if (val == 7) {
      setFaqContentHeader(`Will Traya’s treatment make my hair thicker?`);
      setFaqContentBody(`Yes, Traya’s treatment helps promote hair growth and thickness by using our 3X formula which combines the goodness of ayurveda, 
      dermatological  products and the right nutrition which helps improve the overall health of your hair, making it thicker and stronger.
      `);
    } else if (val == 8) {
      setFaqContentHeader(`Can Traya treatment reduce dandruff?`);
      setFaqContentBody(`Yes, Traya's antifungal treatment gets rid of both mild & heavy dandruff by preventing the growth of dandruff-causing fungus
      which helps improve your scalp health and soothes it. It also makes sure that the flakiness and itchiness you might be having
      is also reduced.`);
    } else if (val == 9) {
      setFaqContentHeader(`Can women of all ages see results with  Traya’s treatment?
      `);
      setFaqContentBody(`Yes, Traya's treatment helps women of all age groups (16+). We work hard to ensure that your treatment plan is 
      customised and personalised to your age, hair fall type, your stage and internal root causes of your hair fall. 
      Traya’s treatment is effective for everyone from teenagers and new moms, to even menopausal women suffering from hair loss. 
      However, since age is a big factor when it comes to seeing results the time for positive visible results might vary. 
      You will also have a  hair coach assigned to you to ensure that we are able to give you the support you personally require on your journey.`);
    } else if (val == 4) {
      setFaqContentHeader(`Who is Traya hair coach?`);
      setFaqContentBody(`The Traya hair coach will be your point of contact throughout the treatment. They will be assigned to you once your order is placed, 
      to help you stay on track, and  guide you throughout the treatment journey, take updates from doctors to monitor your progress and follow up
       with you to ensure better results. They will also be available for you to reach out too whenever you have doubts about your treatment.`);
    }
  };

  const rootCauses = [
    {
      images: (
        <div
          className="w-full mx-auto relative px-1"
          onClick={() => changeContent(1)}
        >
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_FAQ's/Mask_group_(12).png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="Mask_group"
            height={1264}
            width={1264}
            responsive
            loading="lazy"
          />
          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%]  w-[70%] mx-7 left-[15%] mx-auto">
            Will Traya treatment work for me?
          </p>
          <button
            className="absolute bottom-2 right-4 text-[14px]"
            type="button"
          >
            Read more &rarr;
          </button>
        </div>
      ),
    },
    {
      images: (
        <div
          className="w-full mx-auto relative px-1"
          onClick={() => changeContent(2)}
        >
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_FAQ's/Group_102353077.png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="Traya treatment safe for women"
            height={1264}
            width={1264}
            responsive
            loading="lazy"
          />
          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%] w-[70%] mx-7 left-[15%] mx-auto ">
            Is Traya treatment safe for women?
          </p>
          <button className="absolute bottom-2 right-4 text-[14px]">
            Read more &rarr;
          </button>
        </div>
      ),
    },
    {
      images: (
        <div
          className="w-full mx-auto relative px-1 "
          onClick={() => changeContent(3)}
        >
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_FAQ's/Mask_group_(11).png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="What will my Traya treatment contain"
            height={1264}
            width={1264}
            responsive
            loading="lazy"
          />
          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%] w-[70%] mx-7 left-[15%] mx-auto">
            What will my Traya treatment contain?
          </p>
          <button className="absolute bottom-2 right-4 text-[14px]">
            Read more &rarr;
          </button>
        </div>
      ),
    },
    {
      images: (
        <div
          className="w-full mx-auto relative px-1"
          onClick={() => changeContent(4)}
        >
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_FAQ's/Group_102353076.png`}
            className="mx-auto"
            style={{ width: "90%" }}
            alt="Who is Traya hair coach"
            height={1264}
            width={1264}
            responsive
            loading="lazy"
          />
          <p className="xl:mt-2 font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%] w-[70%]  mx-7 left-[15%] mx-auto">
            Who is Traya hair coach?
          </p>

          <button className="absolute bottom-2 right-4 text-[14px]">
            Read more &rarr;
          </button>
        </div>
      ),
    },
    {
      images: (
        <div
          className="w-full mx-auto relative px-1"
          onClick={() => changeContent(5)}
        >
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_FAQ's/Mask_group_(9).png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="How to start Traya Treatment"
            height={1264}
            width={1264}
            responsive
            loading="lazy"
          />

          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%] w-[70%] mx-7 left-[15%] mx-auto">
            How to start Traya Treatment?
          </p>
          <button className="absolute bottom-2 right-4 text-[14px]">
            Read more &rarr;
          </button>
        </div>
      ),
    },
    {
      images: (
        <div
          className="w-full mx-auto relative px-1"
          onClick={() => changeContent(6)}
        >
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_FAQ's/Mask_group_(10).png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="When will I see results"
            height={1264}
            width={1264}
            responsive
            loading="lazy"
          />

          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%] w-[70%] mx-7 left-[15%] mx-auto">
            When will I see results? / How long will the treatment take?
          </p>
          <button
            data-modal-toggle="defaultModal"
            className="absolute bottom-2 right-4 text-[14px]"
          >
            Read more &rarr;
          </button>
        </div>
      ),
    },
    {
      images: (
        <div
          className="w-full mx-auto relative px-1"
          onClick={() => changeContent(7)}
        >
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_FAQ's/Group_102353075.png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="will traya treatment make my hair thicker"
            height={1264}
            width={1264}
            responsive
            loading="lazy"
          />

          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%] w-[70%] mx-7 left-[15%] mx-auto">
            Will Traya&apos;s treatment make my hair thicker?
          </p>
          <button className="absolute bottom-2 right-4 text-[14px]">
            Read more &rarr;
          </button>
        </div>
      ),
    },
    {
      images: (
        <div
          className="w-full mx-auto relative px-1"
          onClick={() => changeContent(8)}
        >
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_FAQ's/Group_102353078.png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="Can Traya Treatment reduce dandruff"
            height={1264}
            width={1264}
            responsive
            loading="lazy"
          />

          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%] w-[70%] mx-7 left-[15%] mx-auto">
            Can Traya Treatment reduce dandruff?
          </p>
          <button className="absolute bottom-2 right-4 text-[14px]">
            Read more &rarr;
          </button>
        </div>
      ),
    },
    {
      images: (
        <div
          className="w-full mx-auto relative px-1"
          onClick={() => changeContent(9)}
        >
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_FAQ's/Group_102353081.png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="Can women of all ages see results with Traya's treatment"
            height={1264}
            width={1264}
            responsive
            loading="lazy"
          />

          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%] w-[70%] mx-7 left-[15%] mx-auto">
            Can women of all ages see results with Traya&apos;s treatment?
          </p>
          <button className="absolute bottom-2 right-4 text-[14px]">
            Read more &rarr;
          </button>
        </div>
      ),
    },
  ];
  let productItemImgSettings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyload: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
    speed: 500,
    slidesToShow: login ? 3 : 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow variant={"light"} />,
    prevArrow: <SamplePrevArrow variant={"light"} />,
  };

  return (
    <>
      <div>
        <h2
          // className="font-sans font-bold xl:text-xx4l xs:text-2xl text-center  lg:text-xx4l text-center text-custom-black mt-5 mb-2"
          className={`${
            login ? fredoka.variable : "font-sans"
          } font-bold xl:text-xx4l xs:text-2xl text-center  lg:text-xx4l text-center text-custom-black mt-5 mb-2`}
        >
          FAQ&apos;s
        </h2>
      </div>
      <div className="flex justify-center">
        <Slider
          {...productItemImgSettings}
          // className="xl:w-[65%] w-11/12 sm:w-10/12 py-2 xl:py-5 lg:py-5 md:py-5"
          className={`${
            login
              ? "xl:w-[65%] w-11/12 sm:w-10/12 py-2 xl:py-5 lg:py-5 md:py-5"
              : "2xl:w-[1100px] 2xl:mx-auto xl:w-9/12 w-11/12 sm:w-10/12 py-2 xl:py-5 lg:py-5 md:py-5"
          }`}
          // arrows={false}
        >
          {rootCauses.map((value, index) => {
            return (
              <div key={index} className="w-full">
                {value.images}
              </div>
            );
          })}
        </Slider>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-full xl:h-auto lg:h-auto md:h-auto">
              <div className="relative w-auto my-6 mx-auto max-w-3xl mt-32">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 py-3 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold">
                      {faqContentHeader}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="  h-6 w-6 text-2xl block ">
                        <svg
                          aria-hidden="true"
                          fill="#000"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4  mt-0 text-slate-500 text-lg leading-relaxed">
                      {faqContentBody}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
}
export default FAQ;
