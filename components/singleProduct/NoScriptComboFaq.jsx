import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const NoScriptComboFaq = ({ props }) => {
  return (
    <div className="block mx-auto 2xl:w-[60%] xl:w-9/12 md:w-11/12 lg:w-11/12 w-11/12 mt-5 xl:mt-16 md:mt-16 lg:mt-16">
      <div className="bg-white mt-5 flex items-center flex-wrap">
        <h3 className="text-2xl font-nunito font-bold text-custom-black">
          FAQ&apos;s
        </h3>
        <h3 className="text-2xl font-nunito font-bold text-custom-black">
          {props?.serverSideCurrProd?._currentProduct?.details?.faq?.title}
        </h3>
        <h3 className="text-lg py-2 font-nunito  text-custom-black">
          {
            props?.serverSideCurrProd?._currentProduct?.details?.faq
              ?.description
          }
        </h3>
      </div>
      <div className="bg-white py-4 flex items-center flex-wrap justify-between">
        <div className="w-12/12 xl:w-6/12 md:6/12 lg:w-6/12">
          <div className="bg-white text-gray-800 font-light text-lg w-full">
            {props?.serverSideCurrProd?._currentProduct?.details?.faq?.faq_list?.map(
              (item, index) => {
                const id = `faq${index}`;
                return (
                  <Accordion
                    open={open === id}
                    key={id}
                    className="border-b-[2px] border-black"
                    icon={open === id ? "-" : "+"}
                  >
                    <AccordionHeader
                      className="font-normal text-[17px] text-left font-nunito text-custom-black border-b-0"
                      onClick={() => handleOpen(id)}
                    >
                      {item.title}
                    </AccordionHeader>
                    <AccordionBody>
                      <p className="leading-6 font-light text-justify text-[16px]">
                        {item.description}
                      </p>
                      {props?.serverSideCurrProd?._currentProduct?.long_title ==
                        "Minoxidil 5% Hair Growth Serum for Hair Fall Control (60 ml)" &&
                      item.title == "How does this work?" ? (
                        <>
                          <div>
                            <h3 className="font-bold text-lg mt-10">
                              Minoxidil
                            </h3>
                            <p className="leading-6 font-light  text-justify text-[16px]">
                              Works by prolonging the growth phase of hair
                              follicles. It promotes blood flow to the scalp and
                              dilates vessels to absorb more nutrients from the
                              blood.
                            </p>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mt-10">
                              Procapil
                            </h3>
                            <p className="leading-6 font-light  text-justify text-[16px]">
                              Nourishes the scalp, thickens brittle and thin
                              hair while fighting hair loss. Improves cell
                              metabolism of your scalp to keep regrown hair
                              intact.{" "}
                            </p>
                          </div>
                        </>
                      ) : null}
                    </AccordionBody>
                  </Accordion>
                );
              }
            )}
          </div>
        </div>
        <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5">
          {props?.serverSideCurrProd?._currentProduct?.details?.faq?.media[0]
            ?.media_type == "video" ? (
            <video width="750" height="500" controls>
              <source
                src={
                  props?.serverSideCurrProd?._currentProduct?.details?.faq
                    ?.media[0]?.url
                }
                type="video/mp4"
              />
            </video>
          ) : (
            <Image
              height={100}
              width={100}
              src={
                props?.serverSideCurrProd?._currentProduct?.details?.faq
                  ?.media[0]?.url
              }
              alt="how_it_works"
            />
          )}
        </div>
      </div>
      <hr
        className="border-4 w-1/12 rounded-full mx-auto"
        style={{ borderColor: "#3e3e3e" }}
      />
    </div>
  );
};

export default NoScriptComboFaq;
