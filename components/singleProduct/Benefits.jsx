import Image from "next/image";
import Accordian from "../generic/Accordian";

const Benefits = ({ props, currentProduct }) => {
  return (
    <div>
      <div className="bg-white mt-10 flex-col items-center flex-wrap">
        <h3 className="text-2xl font-nunito font-bold text-custom-black mb-5">
          Benefits
        </h3>
        <h5 className="text-lg py-2 font-nunito  text-custom-black">
          {
            props?.serverSideCurrProd?._currentProduct?.details?.benefits
              ?.description
          }
        </h5>
      </div>

      <div className="bg-white py-4 flex flex-row flex-wrap items-center md:justify-center  lg:justify-between">
        <div className="w-12/12 xl:w-7/12 md:6/12 lg:w-6/12 flex flex-wrap flex-col">
          <div className="bg-white text-gray-800 font-light text-lg w-full">
            {currentProduct?.details?.benefits?.benefits_list?.map(
              (item, index) => {
                const id = `benefits${index}`;
                return (
                  <div key={id}>
                    <Accordian
                      title={item.title}
                      id={id}
                      description={item.description}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5 flex flex-col">
          {currentProduct?.details.benefits.media[0].media_type == "video" ? (
            <video width="750" height="500" controls>
              <source
                src={currentProduct?.details.benefits.media[0].url}
                type="video/mp4"
              />
            </video>
          ) : (
            <div className="flex content-center items-center">
              <Image
                height={443}
                width={443}
                loading="lazy"
                src={currentProduct?.details.benefits.media[0].url}
                alt="how_it_works"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
