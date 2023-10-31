import Image from "next/image";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import Accordian from "../generic/Accordian";

const FaqSingleProduct = ({ currentProduct }) => {
  const [faqAcc, setFaqAcc] = useState("");
  useEffect(() => {
    if (currentProduct) {
      if (currentProduct?.details?.faq?.faq_list?.length) {
        const firstAccordionId = `faq0`;
        setFaqAcc(firstAccordionId);
      }
    }
  }, [currentProduct]);

  const handleFaqAcc = (id) => {
    setFaqAcc((prevId) => (prevId === id ? "" : id));
  };
  return (
    <div>
      <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
        <div className="bg-white mt-5 flex items-center flex-wrap">
          <h3 className="text-2xl font-nunito font-bold text-custom-black">
            FAQ&apos;s
          </h3>
          <h2 className="text-2xl font-nunito font-bold text-custom-black">
            {currentProduct?.details.faq.title}
          </h2>
          <h3 className="text-lg py-2 font-nunito  text-custom-black">
            {currentProduct?.details.faq.description}
          </h3>
        </div>
        <div className="bg-white py-4 flex items-center flex-wrap md:justify-center  lg:justify-between">
          <div className="w-12/12 xl:w-7/12 md:6/12 lg:w-6/12">
            <div className="bg-white text-gray-800 font-light text-lg w-full">
              {currentProduct?.details?.faq?.faq_list?.map((item, index) => {
                const id = `faq${index}`;
                const isMinox5 =
                  currentProduct.long_title ==
                    "Minoxidil 5% Hair Growth Serum for Hair Fall Control (60 ml)" &&
                  item.title == "";
                const isOpen = faqAcc === id;
                return (
                  <div key={id}>
                    <Accordian
                      title={item.title}
                      id={id}
                      description={item.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5 ">
            {currentProduct?.details.faq.media[0].media_type == "video" ? (
              <video width="750" height="500" controls>
                <source
                  src={currentProduct?.details.faq.media[0].url}
                  type="video/mp4"
                />
              </video>
            ) : (
              <div className="flex content-center items-center">
                <Image
                  height={456}
                  width={456}
                  loading="lazy"
                  src={currentProduct?.details.faq.media[0].url}
                  alt="how_it_works"
                />
              </div>
            )}
          </div>
        </div>
        <hr
          className="border-4 xl:w-1/12 xs:w-4/12 rounded-full mx-auto"
          style={{ borderColor: "#3e3e3e" }}
        />
      </div>
      <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></Script>
    </div>
  );
};

export default FaqSingleProduct;
