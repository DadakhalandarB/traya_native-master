import React from "react";

const ProductsFilter = ({
  singleOrKit,
  currentCategory,
  filterSingleCombo,
  filterHairProducts,
  showSingleKitButton,
}) => {
  return (
    <div className="py-2 px-5 mt-[64px] flex justify-between">
      <div className="flex overflow-x-auto">
        <button
          className={`py-2 px-5 mx-2  ${
            currentCategory == "Hair"
              ? "bg-custom-black text-white"
              : "bg-white text-black"
          }  rounded-lg font-bold border-black border-2`}
          onClick={() => filterHairProducts("Hair")}
        >
          Hair
        </button>
        <button
          className={`py-2 px-5 mx-2  ${
            currentCategory == "Dandruff"
              ? "bg-custom-black text-white"
              : "bg-white text-black"
          }  rounded-lg font-bold border-black border-2`}
          onClick={() => filterHairProducts("Dandruff")}
        >
          Dandruff
        </button>
        <button
          className={`py-2 px-5 mx-2  ${
            currentCategory == "Gut"
              ? "bg-custom-black text-white"
              : "bg-white text-black"
          }  rounded-lg font-bold border-black border-2`}
          onClick={() => filterHairProducts("Gut")}
        >
          Gut
        </button>
        <button
          className={`py-2 px-5 mx-2  ${
            currentCategory == "Stress"
              ? "bg-custom-black text-white"
              : "bg-white text-black"
          }  rounded-lg font-bold border-black border-2`}
          onClick={() => filterHairProducts("Stress")}
        >
          Stress
        </button>
        <button
          className={`py-2 px-5 mx-2  ${
            currentCategory == "PCOS"
              ? "bg-custom-black text-white"
              : "bg-white text-black"
          }  rounded-lg font-bold border-black border-2`}
          onClick={() => filterHairProducts("PCOS")}
        >
          PCOS
        </button>
        <button
          className={`py-2 px-5 mx-2  ${
            currentCategory == "Hormone"
              ? "bg-custom-black text-white"
              : "bg-white text-black"
          }  rounded-lg font-bold border-black border-2`}
          onClick={() => filterHairProducts("Hormone")}
        >
          Hormone
        </button>
        <button
          className={`py-2 px-5 mx-2  ${
            currentCategory == "Thyroid"
              ? "bg-custom-black text-white"
              : "bg-white text-black"
          }  rounded-lg font-bold border-black border-2`}
          onClick={() => filterHairProducts("Thyroid")}
        >
          Thyroid
        </button>
      </div>
      <div className="hidden xl:block lg:block md:block">
        <div
          className={`${showSingleKitButton ? "block" : "hidden"} rounded-full`}
          style={{ backgroundColor: "#EEF1EF" }}
        >
          <button
            className={`py-2 px-5  ${
              singleOrKit == "single"
                ? "bg-custom-black text-white"
                : "text-black"
            } rounded-full font-bold`}
            onClick={() => filterSingleCombo("single")}
          >
            Single
          </button>
          <button
            className={`py-2 px-5  ${
              singleOrKit == "kit" ? "bg-custom-black text-white" : "text-black"
            } rounded-full font-bold`}
            onClick={() => filterSingleCombo("kit")}
          >
            Kit
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductsFilter;
