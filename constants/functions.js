import Image from "next/image";
import darkLeft from "../assets/images/left.png";
import darkRight from "../assets/images/right.png";
import { CDN_BASE_URL } from "./config";

const left = `${CDN_BASE_URL}website_images/localImages/left.webp`;
const right = `${CDN_BASE_URL}website_images/localImages/right.webp`;

export function SampleNextArrow(props) {
  const { className, style, onClick, variant } = props;
  return variant === "light" ? (
    <div className={className} style={{ width: "20px", height: "20px" }}>
      <Image
        src={right}
        alt="right arrow"
        onClick={onClick}
        fill
        loading="lazy"
      />
    </div>
  ) : (
    <div className={className}>
      <Image
        src={darkRight}
        alt="right arrow"
        onClick={onClick}
        loader={props.loader}
        unoptimized={true}
      />
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick, variant } = props;
  return variant === "light" ? (
    <div className={className} style={{ width: "20px", height: "20px" }}>
      <Image
        src={left}
        alt="left arrow"
        onClick={onClick}
        fill
        loading="lazy"
      />
    </div>
  ) : (
    <div className={className}>
      <Image
        src={darkLeft}
        alt="left arrow"
        onClick={onClick}
        className="xs:hidden"
        loader={props.loader}
        unoptimized={true}
        fill={variant === "light"}
      />
    </div>
  );
}

export const toggleClass = (event) => {
  var elems = document.querySelectorAll(".border-2");
  [].forEach.call(elems, function (el) {
    el.classList.remove("border-2");
  });
  event.currentTarget.classList.add("border-2");
};

export const incItem = () => {
  setCartCount(cartCount + 1);
};

export const decItem = () => {
  if (cartCount > 1) {
    setCartCount(cartCount - 1);
  }
};

export const buyNow = (itemId) => {
  handleAddToCart(itemId);
  props.setShowSidebar(true);
  setBuyNowClicked(true);
};
