import { CDN_BASE_URL } from "@/constants/config";
import Script from "next/script";
import React from "react";
import { usePathname } from "next/navigation";

const CustomizeHairFallRouteComponent = ({
  showProductImg,
  toggleClass,
}) => {
  const pathname = usePathname();
  return (
    <>
      {showProductImg && (
        <>
          <div className="xl:container mx-auto">
            <div className="block mx-auto xl:w-9/12 lg:w-9/12 md:w-9/12 w-12/12 mt-16 xl:mt-16 lg:mt-16 md:mt-16 ">
              <div className="bg-white p-4 flex items-center flex-wrap ">
                <ul className="flex items-center ">
                  <li className="inline-flex items-center ">
                    <a
                      className="border-0 text-[10px] xl:text-sm lg:text-sm md:text-sm text-gray-600 decoration-2 hover:underline cursor-pointer"
                      onClick={() => {
                        window.location.href = "/home";
                      }}
                      href="/home"
                    >
                      HOME
                    </a>

                    <svg
                      className="w-5 h-auto fill-current mx-2 text-gray-400 -mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                    </svg>
                  </li>

                  <li className="inline-flex items-center">
                    <a
                      className="border-0 text-gray-600 text-[10px] xl:text-sm lg:text-sm md:text-sm  decoration-2 hover:underline cursor-pointer"
                      onClick={() => {
                        window.location.href = "/collections/all-products";
                      }}
                      href="/collections/all-products"
                    >
                      PRODUCTS
                    </a>

                    <svg
                      className="w-5 h-auto fill-current mx-2 text-gray-400 -mt-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                    </svg>
                  </li>

                  <li className="inline-flex items-center">
                    <span className="text-gray-600 text-[10px] xl:text-sm lg:text-sm md:text-sm">
                      CUSTOMIZED HAIR FALL PLANS
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white xl:p-4 lg:p-4 md:p-4 px-0 py-4 flex flex-row items-center flex-wrap">
                <div className="w-[100%] xl:w-6/12 md:w-6/12 lg:w-5/12">
                  <img
                    className="collection-banner-image w-11/12 mx-auto xl:w-full lg:w-full md:w-full "
                    src={showProductImg}
                    alt="traya products collections"
                  />
                  <div
                    className="flex w-full h-16 overflow-x-scroll hidescroll mt-5 xl:mt-10 lg:mt-10 md:mt-10 inline"
                    style={{ display: "-webkit-inline-box" }}
                  >
                    <img
                      className={`collection-banner-image w-16 h-16 rounded-xl mr-2 ${
                        showProductImg ==
                        `${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment1.png`
                      }`}
                      src={`${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment1.png`}
                      onClick={(e) => {
                        setShowProductImg(
                          `${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment1.png`
                        ),
                          toggleClass(e);
                      }}
                      alt="traya treatment"
                    />
                    <img
                      className={`collection-banner-image w-16 h-16 rounded-xl mr-2 ${
                        showProductImg ==
                          `${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment2.png` &&
                        "border-black border-2"
                      }`}
                      src={`${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment2.png`}
                      onClick={(e) => {
                        setShowProductImg(
                          `${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment2.png`
                        ),
                          toggleClass(e);
                      }}
                    />
                    <img
                      className={`collection-banner-image w-16 h-16 rounded-xl mr-2 ${
                        showProductImg ==
                          `${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment3.png` &&
                        "border-black border-2 "
                      }`}
                      src={`${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment3.png`}
                      onClick={(e) => {
                        setShowProductImg(
                          `${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment3.png`
                        ),
                          toggleClass(e);
                      }}
                      alt="traya treatment"
                    />
                  </div>
                </div>
                <div className="w-12/12 xl:w-6/12 md:w-6/12 lg:w-7/12 self-start pl-0 xl:pl-5 md:pl-5 lg:pl-5 pt-5 xl:pl-0 md:pl-0 lg:pl-0">
                  <h2 className="font-fredoka text-xl xl:text-4xl lg:text-4xl md:text-2xl  font-bold text-custom-black">
                    Customized Hair Fall Plans
                  </h2>
                  <h2 className="font-nunito text-lg xl:text-3xl lg:text-3xl md:text-xl text-[#909090] py-4">
                    93% success over 2L+ Indians
                  </h2>
                  <img
                    src={`${CDN_BASE_URL}website_images/all_products/treatmentPlan/googleReview.png`}
                    alt="googleReview"
                    className="mt-4"
                  />
                  <img
                    src={`${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment4.png`}
                    alt="reviews"
                    className="mt-4"
                  />

                  <a
                    className="w-full  bg-[#b7d340] cursor-pointer flex w-60 h-12 items-center justify-center text-lg font-bold rounded-xl mt-5 uppercase"
                    href={
                      pathname == "/pages/female"
                        ? "/female?cohort=1&lcn=RootCauses&page="
                        : "/questions?cohort=1&lcn=RootCauses&page="
                    }
                    onClick={() =>
                      Cookies.set(
                        "__TRAYA_UTM__",
                        pathname == "/pages/female"
                          ? "&page=female"
                          : "&page=home"
                      )
                    }
                  >
                    TAKE THE HAIR TEST<sup>TM</sup>
                  </a>
                </div>
              </div>
            </div>
            <Script src="/accordion.js" strategy="beforeInteractive" />
          </div>
        </>
      )}
    </>
  );
};

export default CustomizeHairFallRouteComponent;
