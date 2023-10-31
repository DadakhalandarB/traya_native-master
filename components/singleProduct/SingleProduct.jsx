import Script from "next/script";
import MaleReview from "../generic/MaleReview";
import ProductSlider from "./ProductSlider";
import HairTestAndResultBanner from "./HairTestAndResultBanner";
import HairTablet from "./HairTablet";
import Benefits from "./Benefits";
import BhringrajWorks from "./BhringrajWorks";
import Ingredients from "./Ingredients";
import FaqSingleProduct from "./FaqSingleProduct";
import PrescribedByDoctors from "./PrescribedByDoctors";
import FrequentlyBoughtProduct from "./FrequentlyBoughtProduct";
import AlsoLike from "./AlsoLike";

const SingleProduct = ({
  alsoLike,
  frequentlyBrought,
  props,
  currentProduct,
  cartCount,
  toggleClass,
  incItem,
  decItem,
  buyNow,
}) => {
  return (
    <div className="xl:container lg:container md:container px-[16px] mx-auto">
      <ProductSlider
        props={props}
        buyNow={buyNow}
        incItem={incItem}
        decItem={decItem}
        cartCount={cartCount}
        toggleClass={toggleClass}
        currentProduct={currentProduct}
      />
      <HairTestAndResultBanner />
      <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16">
        <HairTablet currentProduct={currentProduct} />
        <Benefits props={props} currentProduct={currentProduct} />
        <hr
          className="border-4 xl:w-1/12 xs:w-4/12 rounded-full mx-auto"
          style={{ borderColor: "#3e3e3e" }}
        />
      </div>
      <BhringrajWorks currentProduct={currentProduct} />
      <Ingredients currentProduct={currentProduct} />
      <FaqSingleProduct currentProduct={currentProduct} />
      <PrescribedByDoctors currentProduct={currentProduct} />
      <FrequentlyBoughtProduct
        frequentlyBrought={frequentlyBrought}
        props={props}
      />

      <div className="block mx-auto  ">
        <div className="flex flex-col justify-center items-center mt-12 mb-10">
          <h5 className="xl:text-[44px] xs:text-3xl font-bold font-sans text-custom-black">
            The Result
          </h5>
        </div>
        <MaleReview />
      </div>

      <AlsoLike alsoLike={alsoLike} props={props} />
    </div>
  );
};

export default SingleProduct;
