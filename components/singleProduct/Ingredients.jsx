import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";
import { useEffect, useState } from "react";
import Accordian from "../generic/Accordian";

const Ingredients = ({ currentProduct }) => {
  const [ingredientAcc, setIngredientAcc] = useState("");
  useEffect(() => {
    if (currentProduct) {
      if (currentProduct?.details?.ingredients?.ingredient_list?.length > 0) {
        const firstAccordionId = `ingredients0`;
        setIngredientAcc(firstAccordionId);
      }
    }
  }, [currentProduct]);

  const screenSize = useScreenSize();
  return (
    <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
      <div className="bg-white flex flex-col items-left flex-wrap">
        <h3 className="text-2xl font-nunito font-bold text-custom-black mb-4">
          Ingredients
        </h3>
        <h2 className="text-2xl font-nunito font-bold text-custom-black">
          {currentProduct?.details.ingredients.title}
        </h2>
        <h3 className="text-lg py-2 font-nunito  text-custom-black">
          {currentProduct?.details.ingredients.description}
        </h3>
      </div>
      <div className="bg-white py-4 flex flex-wrap md:justify-center  lg:justify-between">
        {!["xs", "sm"].includes(screenSize) && (
          <div className="w-12/12 xl:w-4/12 md:5/12 lg:w-5/12 pl-0 xl:pl-0 lg:pl-5 md:pl-5 xs:hidden xl:flex md:flex lg:flex">
            {currentProduct?.details.ingredients.media[0].media_type ==
            "video" ? (
              <video width="750" height="500" controls>
                <source
                  src={currentProduct?.details.ingredients.media[0].url}
                  type="video/mp4"
                />
              </video>
            ) : (
              <div className="flex content-center items-center">
                {console.log(
                  "url",
                  currentProduct?.details.ingredients.media[0].url
                )}
                <Image
                  width={443}
                  height={443}
                  loading="lazy"
                  src={currentProduct?.details.ingredients.media[0].url}
                  alt="how_it_works"
                />
              </div>
            )}
          </div>
        )}
        <div className="w-12/12 xl:w-7/12 md:6/12 lg:w-6/12">
          <div className="bg-white text-gray-800 font-light text-lg w-full">
            {currentProduct?.details?.ingredients?.ingredient_list?.map(
              (item, index) => {
                const id = `ingredients${index}`;
                const isOpen = ingredientAcc === id;
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

        {["sm", "xs"].includes() && (
          <div className="w-12/12 xl:w-5/12 md:5/12 lg:w-5/12 pl-0 xl:pl-5 lg:pl-5 md:pl-5 xs:block xl:hidden md:hidden lg:hidden">
            {currentProduct?.details.ingredients.media[0].media_type ==
            "video" ? (
              <video width="750" height="500" controls>
                <source
                  src={currentProduct?.details.ingredients.media[0].url}
                  type="video/mp4"
                />
              </video>
            ) : (
              <Image
                height={456}
                width={456}
                loading="lazy"
                src={currentProduct?.details.ingredients.media[0].url}
                alt="how_it_works"
              />
            )}
          </div>
        )}
      </div>

      <hr
        className="border-4 xl:w-1/12 xs:w-4/12 rounded-full mx-auto"
        style={{ borderColor: "#3e3e3e" }}
      />
    </div>
  );
};

export default Ingredients;
