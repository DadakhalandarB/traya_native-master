import Script from "next/script";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images comes here
import { CDN_BASE_URL } from "@/constants/config";
import { fredoka } from "@/constants/fontConfig";
import { SampleNextArrow, SamplePrevArrow } from "@/constants/functions";

function FemaleResultFaq() {
  const [faqContentHeader, setFaqContentHeader] = useState("");
  const [faqContentBody, setFaqContentBody] = useState("");
  const [showModal, setShowModal] = useState(false);

  const changeContent = (val) => {
    setShowModal(true);
    if (val == 1) {
      setFaqContentHeader(`How to buy a Traya kit?`);
      setFaqContentBody(`It is incredibly simple! You have been recommended a kit based on your stage of hair fall,
      the scalp image you uploaded and your response on our hair test.  
     You can now  buy your doctor-recommended treatment plan by pressing the buy now button. 
     Once the order is confirmed, Traya’s doctors will approve your treatment and create a digital prescription for you. 
     You will be able to access this prescription by scanning the QR code on your kit when the kit  is delivered and start the treatment!`);
    } else if (val == 2) {
      setFaqContentHeader(`How long will the treatment take?`);
      setFaqContentBody(`Hair growth doesn’t happen overnight, it takes a minimum of five months for you to grow healthy hair.
      Customers see results within 5-6 months of regularly using the complete treatment plan.
      However, the exact time to see these results may vary depending on factors like your age, stage, type of hair fall and
      the internal causes behind your hair loss like stress, hormonal imbalances, poor diet, etc. 
     Staying consistent with our treatment also ensures faster, more effective results, as over 2.5 lakh other Indians have already seen.`);
    } else if (val == 3) {
      setFaqContentHeader(`When will I get my prescription?`);
      setFaqContentBody(`When your kit is delivered, you can access your digital prescription by scanning the QR code which is  on 
      the inner cover of the opening flap of the box. You can scan the code using Google Lens or any online payment app
       that has a scanner (Phonepe, Gpay, etc). You can also view your prescription by logging into the Traya app or website.`);
    } else if (val == 4) {
      setFaqContentHeader(
        `Can women of all ages see results with  Traya’s treatment?`
      );
      setFaqContentBody(`Yes, Traya's treatment helps women of all age groups (16+). We work hard to ensure that your treatment plan is 
      customised and personalised to your age, hair fall type, your stage and internal root causes your hair fall. 
      Traya’s treatment is effective for everyone from teenagers, new moms, to even menopausal women suffering from hair loss. 
      However, since age is a big factor when it comes to seeing results the time for positive visible results might vary. 
      You will also have a hair coach assigned to you to ensure we are able to give you the support you personally require on your journey.`);
    } else if (val == 5) {
      setFaqContentHeader(`Can I use Traya with other medical treatments?`);
      setFaqContentBody(`In most cases, hair loss is a result of internal root causes like stress, bad gut health, genetics etc . 
      That is why Traya doctors go through each and every case before prescribing the treatment plan and then customise the dosage accordingly. However, please make sure you specify your condition to your hair coach before starting the treatment.`);
    } else if (val == 6) {
      setFaqContentHeader(
        `I was recommended minoxidil in my treatment, is it safe?`
      );
      setFaqContentBody(`YES! Minoxidil has been thoroughly researched and tested before being certified to be safe and effective for women.
      Minoxidil however should not be taken by women when they are pregnant or breastfeeding. 
     Do ask your hair coach if you have any doubts with the application of minoxidil as well.
     `);
    } else if (val == 7) {
      setFaqContentHeader(
        `Who is my hair coach? When will I get my hair coach?`
      );
      setFaqContentBody(`A Traya hair coach is going to be your point of contact throughout the treatment.
      They will be assigned to you once your order is placed, to help you stay on track,
      and  guide you throughout the treatment journey, take updates from doctors to monitor your progress and follow up with you to ensure better results.
      They will also be available for you to reach out too whenever you have doubts about your treatment.`);
    } else if (val == 8) {
      setFaqContentHeader(`Do I need to follow the diet?`);
      setFaqContentBody(`Diet is important because everything we eat affects our body and our hair. Certain foods we normally eat in our daily life like
      sugary sweets and dairy harm our internal health which leads to poor health for our hair and hair loss. 
     That's why Traya's nutritionists create a customised diet plan for you considering the root cause of your hair fall. 
     The diet plan will be given to you after you buy your kit and will also be available on the Traya app.`);
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
            src={`${CDN_BASE_URL}website_images/female_result_page/FAQs/female-result-page/Mask_group_(9).png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="buy traya kit"
            height={1264}
            width={1264}
            responsive
          />
          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%]  w-[70%] mx-7 left-[15%] mx-auto">
            How to buy a Traya kit?
          </p>
          <button className="absolute bottom-0 right-4" type="button">
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
            src={`${CDN_BASE_URL}website_images/female_result_page/FAQs/female-result-page/Mask_group_(10).png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="How long will the treatment take"
            height={1264}
            width={1264}
            responsive
          />
          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%]  w-[70%] mx-7 left-[15%] mx-auto">
            How long will the treatment take?
          </p>
          <button className="absolute bottom-0 right-4">
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
            src={`${CDN_BASE_URL}website_images/female_result_page/FAQs/female-result-page/Group_102353079.png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="When will I get my prescription"
            height={1264}
            width={1264}
            responsive
          />
          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%]  w-[70%] mx-7 left-[15%] mx-auto">
            When will I get my prescription?
          </p>
          <button className="absolute bottom-0 right-4">
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
            src={`${CDN_BASE_URL}website_images/female_result_page/FAQs/female-result-page/Mask_group_(11).png`}
            className="mx-auto"
            style={{ width: "90%" }}
            alt="Traya’s treatment"
            height={1264}
            width={1264}
            responsive
          />
          <p className="xl:mt-2 font-sans absolute faqBox top-[30%] w-[70%]  mx-7 left-[15%] mx-auto">
            Can women of all ages see results with Traya’s treatment?
          </p>

          <button className="absolute bottom-0 right-4">
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
            src={`${CDN_BASE_URL}website_images/female_result_page/FAQs/female-result-page/Mask_group_(12).png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="medical treatments"
            height={1264}
            width={1264}
            responsive
          />

          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%]  w-[70%] mx-7 left-[15%] mx-auto">
            Can I use Traya with other medical treatments?
          </p>
          <button className="absolute bottom-0 right-4">
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
            src={`${CDN_BASE_URL}website_images/female_result_page/FAQs/female-result-page/Group_102353082_(1).png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="minoxidil treatment"
            height={1264}
            width={1264}
            responsive
          />

          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%]  w-[70%] mx-7 left-[15%] mx-auto">
            I was recommended minoxidil in my treatment, is it safe?
          </p>
          <button
            data-modal-toggle="defaultModal"
            className="absolute bottom-0 right-4"
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
            src={`${CDN_BASE_URL}website_images/female_result_page/FAQs/female-result-page/Mask_group_(13).png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="traya hair coach"
            height={1264}
            width={1264}
            responsive
          />

          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%]  w-[70%] mx-7 left-[15%] mx-auto">
            Who is my hair coach? When will I get my hair coach?
          </p>
          <button className="absolute bottom-0 right-4">
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
            src={`${CDN_BASE_URL}website_images/female_result_page/FAQs/female-result-page/Group_102353080.png`}
            style={{ width: "90%" }}
            className="mx-auto"
            alt="traya diet plan"
            height={1264}
            width={1264}
            responsive
          />

          <p className="xl:mt-2  font-sans absolute faqBox xl:top-[30%] lg:top-[30%] md:top-[30%] top-[20%]  w-[70%] mx-7 left-[15%] mx-auto">
            Do I need to follow the diet?
          </p>
          <button className="absolute bottom-0 right-4">
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
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          centerMode: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          infinite: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
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
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
          centerMode: true,
        },
      },
    ],
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow variant={"light"}/>,
    prevArrow: <SamplePrevArrow variant={"light"}/>,
  };

  return (
    <>
      <div>
        <h2
          className={`${fredoka.variable} xl:text-xx4l xs:text-2xl text-center  lg:text-xx4l text-custom-black mt-5 mb-2`}
        >
          FAQ&apos;s
        </h2>
      </div>
      <div className="flex justify-center ">
        <Slider
          {...productItemImgSettings}
          className="2xl:w-[1100px] 2xl:mx-auto xl:w-9/12 w-11/12 sm:w-10/12 py-5"
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
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-full xl:h-auto lg:h-auto md:h-auto cursor-pointer">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
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
export default FemaleResultFaq;
