import Image from "next/image";
import React, { useEffect, useState } from "react";
import Accordian from "../generic/Accordian";

const BhringrajWorks = ({ currentProduct }) => {
  const [howItWorksAcc, setHowItWorksAcc] = useState("");

  useEffect(() => {
    if (currentProduct) {
      if (currentProduct?.details?.how_it_works?.list?.length > 0) {
        const firstAccordionId = `howitWorks0`;
        setHowItWorksAcc(firstAccordionId);
      }
    }
  }, [currentProduct]);

  const handleOpenHowItWorks = (id) => {
    setHowItWorksAcc((prevId) => (prevId === id ? "" : id));
  };
  return (
    <div style={{ backgroundColor: "#e0eff8" }}>
      <div className="block mx-auto w-9/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
        <div className="py-10 flex items-center flex-wrap justify-between">
          <div className=" w-12/12 xl:w-7/12 md:6/12 lg:w-6/12 pl-0 xl:pr-1 md:pl-0 lg:pl-0 xs:hidden xl:flex md:flex lg:flex">
            {currentProduct?.details.how_it_works.media[0].media_type ==
            "video" ? (
              <video width="750" height="500" controls>
                <source
                  src={currentProduct?.details.how_it_works.media[0].url}
                  type="video/mp4"
                />
              </video>
            ) : (
              <Image
                height={443}
                width={443}
                loading="lazy"
                src={currentProduct?.details.how_it_works.media[0].url}
                alt="how_it_works"
              />
            )}
          </div>
          <div className="w-12/12 xl:w-4/12 md:5/12 lg:w-5/12 mb-6">
            <div className=" text-gray-800 font-light text-lg w-full">
              <h2 className="text-[25px] font-nunito font-bold text-custom-black">
                {currentProduct?.details.how_it_works.title}
              </h2>
              <h3 className="text-[18px] py-2 font-nunito  text-custom-black">
                {currentProduct?.details.how_it_works.description}
              </h3>
              {currentProduct?.details.how_it_works.list.map((item, index) => {
                const id = `howitWorks${index}`;
                const isOpen = howItWorksAcc === id;
                return (
                  <div key={id}>
                    <Accordian
                      title={item.title}
                      id={id}
                      description={item.description}
                    />
                  </div>
                  // <Accordion
                  //   open={isOpen}
                  //   key={id}
                  //   className="border-b-[2px] border-black"
                  //   icon={isOpen ? "-" : "+"}
                  // >
                  //   <AccordionHeader
                  //     className="font-normal text-[17px] text-left font-nunito text-custom-black border-b-0"
                  //     onClick={() => handleOpenHowItWorks(id)}
                  //   >
                  //     {item.title}
                  //   </AccordionHeader>
                  //   <AccordionBody>
                  //     <p className="leading-6 font-light text-justify text-[16px]">
                  //       {item.description}
                  //     </p>
                  //   </AccordionBody>
                  // </Accordion>
                );
              })}
            </div>
          </div>
          <div className=" w-12/12 xl:w-6/12 md:6/12 lg:w-6/12 pl-0 xl:pl-0 md:pl-0 lg:pl-0 xs:block xl:hidden md:hidden lg:hidden ">
            {currentProduct?.details.how_it_works.media[0].media_type ==
            "video" ? (
              <video width="750" height="500" controls>
                <source
                  src={currentProduct?.details.how_it_works.media[0].url}
                  type="video/mp4"
                />
              </video>
            ) : (
              <Image
                height={443}
                width={443}
                loading="lazy"
                src={currentProduct?.details.how_it_works.media[0].url}
                alt="how_it_works"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhringrajWorks;
