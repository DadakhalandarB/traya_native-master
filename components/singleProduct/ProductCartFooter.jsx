import { CDN_BASE_URL } from "@/constants/config";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const ProductCartFooter = ({ props, currentProduct }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap justify-between items-center sticky bottom-0">
      <div className="cursor-pointer cartProduct flex  w-[50%] h-12 items-center justify-center text-[14px] font-bold bg-[#b7d340]">
        <a
          href={
            pathname == "/pages/female"
              ? "/female?cohort=1&lcn=sticky&page=product"
              : "/questions?cohort=1&lcn=sticky&page=product"
          }
          onClick={() =>
            Cookies.set(
              "__TRAYA_UTM__",
              pathname == "/female" ? "&page=female" : "&page=home"
            )
          }
          className=" cursor-pointer items-center justify-center  font-bold  uppercase"
        >
          TAKE THE HAIR TEST<sup>(TM)</sup>
        </a>
      </div>
      <div
        className="cursor-pointer cartProduct flex  w-[50%] text-[14px] h-12 items-center justify-center font-bold  uppercase"
        onClick={() => {
          handleAddToCart(currentProduct.variant_id);
          props.setShowSidebar(true);
        }}
      >
        <div className="cart_icon_img mr-4">
          <Image
            height={25}
            width={27}
            loading="lazy"
            className="cart_icon_img mr-4"
            src={`${CDN_BASE_URL}website_images/all_products/productPageLogos/cartLogo.png`}
            alt="result-page-02"
            style={{ width: 27, height: 25 }}
          />
        </div>
        ADD TO CART
      </div>
    </div>
  );
};

export default ProductCartFooter;
