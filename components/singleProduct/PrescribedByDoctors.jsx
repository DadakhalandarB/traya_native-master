import Image from "next/image";
import React from "react";

const PrescribedByDoctors = ({ currentProduct }) => {
  return (
    <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
      {console.log(currentProduct.details.ingredients)}
      <div className="bg-white  flex items-center flex-wrap">
        <Image
          height={473}
          width={1143}
          loading="lazy"
          src={
            currentProduct?.details.banner_media.find(
              (item) => item.context == "sub"
            )?.url
          }
          alt=""
          className="py-4"
        />
      </div>
      <hr
        className="border-4 xl:w-1/12 xs:w-4/12 rounded-full mx-auto"
        style={{ borderColor: "#3e3e3e" }}
      />
    </div>
  );
};

export default PrescribedByDoctors;
