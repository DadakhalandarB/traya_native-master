import Image from "next/image";
import { useState } from "react";
import down from "@assets/images/down.png";
import up from "@assets/images/up.png";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center xs:px-5 cursor-pointer ">
      <div
        className="border-y py-2 border-gray-300  2xl:w-[1100px] 2xl:mx-auto xl:w-9/12 w-11/12 sm:w-10/12 xl:py-2 xs:mb-4 border-opacity-40"
        onClick={toggleAccordion}
      >
        <div className="xl:w-full flex justify-between   xs:px-3 items-center">
          <div>
            <button onClick={toggleAccordion}>
              <div className="font-light text-2xl text-[#414042]">{title} </div>
            </button>
          </div>
          <div>
            {isOpen ? (
              <div>
                {" "}
                <Image
                  src={up}
                  alt="sample"
                  onClick={toggleAccordion}
                  loading="lazy"
                />{" "}
              </div>
            ) : (
              <div className="">
                {" "}
                <Image
                  src={down}
                  alt="sample"
                  onClick={toggleAccordion}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="  transition delay-700 duration-300 ease-in">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
