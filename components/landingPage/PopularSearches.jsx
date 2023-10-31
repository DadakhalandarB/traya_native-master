import { nunito } from "@/constants/fontConfig";
import Link from "next/link";

const PopularSearches = () => {
  return (
    <div>
      {" "}
      <div className="pSearch-Title mb-[12px]">POPULAR SEARCH</div>
      <div className="flex flex-wrap flex-col text-gray-300">
        <div className="">
          <span className={`  text-justify text-[14px] ${nunito.variable}`}>
            <Link
              href="https://traya.health/blogs/hair-care/top-10-reasons-for-losing-hair"
              className="mr-2"
            >
              Reason For Hair Fall |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/how-the-best-customised-hair-regrowth-oil-is-made"
              className="mr-2"
            >
              Hair Growth Oil |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/stop-hair-loss-and-reduce-pitta-dosha"
              className="mr-2"
            >
              How To Stop Hair Fall |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/dandruff-vs-dry-scalp"
              className="mr-2"
            >
              Dandruff Vs Dry Scalp |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/foods-for-hair-growth"
              className="mr-2"
            >
              Food For Hair Growth |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/a-hair-loss-treatment-that-also-fixes-your-health"
              className="mr-2"
            >
              Hair Loss Treatment |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/minoxidil-for-hair"
              className="mr-2"
            >
              What Is Minoxidil |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/nasya-treatment-for-better-health"
              className="mr-2"
            >
              Nasya Treatment |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/how-to-prevent-grey-hair-and-hair-loss-due-to-scalp-ageing"
              className="mr-2"
            >
              How To Stop White Hair |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/the-benefits-of-yashtimadhu-for-hair-growth"
              className="mr-2"
            >
              Yashtimadhu Uses |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/bhringraj-hair-oil"
              className="mr-2"
            >
              Bhringraj Hair Oil |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/how-can-i-thicken-my-hair-help-it-grow-long"
              className="mr-2"
            >
              How can I Thicken My Hair |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/rice-water-for-hair"
              className="mr-2"
            >
              Rice Water For Hair |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/how-to-strengthen-your-hair"
              className="mr-2"
            >
              How To Strengthen Hair |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/shatavari-for-hair"
              className="mr-2"
            >
              Shatavari For Hair |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/clove-benefits"
              className="mr-2"
            >
              Clove Benefits |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/12-ayurvedic-herbs-and-how-to-use-them-for-hair-loss"
              className="mr-2"
            >
              Ayurvedic Herbs For Hair Growth |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/how-to-reduce-hair-loss-with-ayurvedic-treatment-and-natural-homemade-remedies"
              className="mr-2"
            >
              Ayurvedic Treatment For Hair Fall |
            </Link>
            <Link href="/collections/all-products" className="mr-2">
              Herbal Hair Oil |
            </Link>
            <Link href="/products/anti-dandruff-shampoo" className="mr-2">
              Anti-dandruff Shampoo |
            </Link>
            <Link
              href="https://traya.health/blogs/hair-care/redensyl-vs-minoxidil-which-one-is-better"
              className="mr-2"
            >
              Redensyl vs Minoxidil
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularSearches;
