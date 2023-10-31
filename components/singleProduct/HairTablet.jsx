import Image from "next/image";
import React from "react";

const HairTablet = ({ currentProduct }) => {
  return (
    <div>
      <div className="bg-white  flex items-center flex-wrap">
        <h3 className="xl:text-2xl xs:text-[25px] font-nunito font-bold text-[#414042]">
          {currentProduct?.long_description?.title}
        </h3>
        <h5 className="xl:text-lg xs:text-[18px] py-2 font-nunito  text-custom-black">
          {currentProduct?.long_description?.content}
        </h5>
        <Image
          height={517}
          width={1111}
          src={
            currentProduct?.details.banner_media.find(
              (item) => item.context == "main"
            )?.url
          }
          alt="Traya ingredients"
          priority={true}
          className="center"
        />
      </div>
      <hr
        className="border-4 xl:w-1/12 xs:w-4/12 rounded-full mx-auto"
        style={{ borderColor: "#3e3e3e" }}
      />
    </div>
  );
};

export default HairTablet;
