"use client";

import { useEffect, useState, useContext } from "react";
import Loader from "@/components/Loader";
import FooterPage from "@/components/landingPage/landingFooter";
import { useRouter } from "next/navigation";
import { CartContext } from "@context/cart-store";
import { CDN_BASE_URL } from "@constants/config";
import Cookies from "js-cookie";
import encryptMD5 from "@constants/encryptMD5";
import AllProductsContent from "@/components/productsComponents/AllProductsContent";
import ChooseRightProduct from "@/components/productsComponents/ChooseRightProduct";
import ProductsFilter from "@/components/productsComponents/ProductsFilter";
import useScreenSize from "@/hooks/useScreenSize";
export default function AllProductsMainComponent(props) {
  const router = useRouter();
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Hair");
  const [showSingleKitButton, setSingleKitButton] = useState(true);
  const [rawProductsData, setRawProductsData] = useState({});
  const [allProducts, setAllproducts] = useState([]);
  const [singleOrKit, setSingleOrKit] = useState("kit");

  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const handleAddToCart = (itemId) => {
    const currentProduct = allProducts.find((product) => {
      return product.variant_id === itemId;
    });
    let _isCombo;
    let itemsList = [];
    if (currentProduct) {
      _isCombo = currentProduct.isCombo;
      itemsList = allProducts
        .filter((_product) => {
          return _isCombo
            ? currentProduct.combo_items.includes(_product.variant_id)
            : _product.variant_id == itemId;
        })
        .map((_product) => {
          return {
            id: _product.variant_id,
            image_url: _product.product_media.find(
              (item) => item.context == "main"
            )?.url,
            name: _product.long_title,
            price: _product.price.amount,
          };
        });
    }
    addItemToCart(itemsList);
  };

  const handleRemoveFromCart = (item) => {
    removeItemFromCart(item);
  };

  useEffect(() => {
    const _productData = props?.productData;
    const _rawProductsData = props?.rawProductsData;
    const _allProducts = [];

    let filtered = _productData?.filter((product) => {
      const productCategory = product.category?.toLowerCase();
      const _singleOrKit = product.isCombo ? "kit" : "single";
      return _singleOrKit === singleOrKit;
    });
    setVisibleProducts(filtered);
    setRawProductsData(_rawProductsData);
    if (_rawProductsData) {
      if (_rawProductsData["singleProducts"]) {
        _allProducts.push(..._rawProductsData["singleProducts"]);
      }
      if (_rawProductsData["comboProducts"]) {
        _allProducts.push(..._rawProductsData["comboProducts"]);
      }
      setAllproducts(_allProducts);
    }
  }, [props]);

  const filterHairProducts = (category) => {
    const selectedCategory = category.toLowerCase();
    Cookies.set("selectedCategory", selectedCategory);

    if (selectedCategory == "hair") {
      setSingleKitButton(true);
    } else setSingleKitButton(false);

    let filtered = allProducts.filter((product) => {
      const productSubCategory = product.sub_category?.toLowerCase();
      const productCategory = product.category?.toLowerCase();
      const _singleOrKit = product.isCombo ? "kit" : "single";
      return category == "Hair"
        ? productCategory.includes(selectedCategory) &&
            singleOrKit == _singleOrKit
        : productSubCategory.includes(selectedCategory);
    });
    filtered = props.formatProductData(filtered);
    setCurrentCategory(category);
    setVisibleProducts(filtered);
  };

  const filterSingleCombo = (category) => {
    let _filtered;
    if (category == "single") {
      _filtered = props.formatProductData(rawProductsData["singleProducts"]);
    } else if (category == "kit") {
      _filtered = props.formatProductData(rawProductsData["comboProducts"]);
    }
    setSingleOrKit(category);
    setVisibleProducts(_filtered);
  };

  useEffect(() => {
    if (visibleProducts?.length > 0) {
      let tempItem = [];
      visibleProducts.forEach((val) => {
        let tempObj = {};
        tempObj.item_name = val.title;
        tempObj.item_id = val.id;
        tempObj.price = val.price;
        tempObj.quantity = 1;
        tempObj.item_brand = "Traya Health";
        tempObj.item_category = "Hair Care";
        tempItem.push(tempObj);
      });

      window.dataLayer = window.dataLayer || [];
      dataLayer.push({ ecommerce: null });
      let user_email = window.localStorage.getItem("user_email");
      let user_phone = window.localStorage.getItem("user_phone");
      let user_synthetic_id = window.localStorage.getItem("user_syn");

      const encryptedEmail = user_email
        ? encryptMD5(user_email.trim()).toString()
        : "";
      const encryptedPhone = user_phone
        ? encryptMD5(user_phone.trim()).toString()
        : "";
      window.dataLayer.push({
        ecommerce: {
          currencyCode: "INR",
          items: tempItem,
          cartTotal: tempItem.length,
        },
        EID: encryptedEmail,
        MID: encryptedPhone,
        NAEID: user_email ? user_email.trim() : "",
        NAMID: user_phone ? user_phone.trim() : "",
        user_id: user_synthetic_id ? user_synthetic_id : "",
        event: "nt_view_item_list",
      });
    }
  }, [visibleProducts]);

  const selectItem = (val) => {
    let item_list_name = Cookies.get("selectedCategory")
      ? Cookies.get("selectedCategory")
      : "hair";

    //START --->
    // GTM data layer
    let tempItem = [];
    let tempObj = {};
    tempObj.item_name = val.title;
    tempObj.item_id = val.id;
    tempObj.quantity = val.itemCount;
    tempObj.price = val.price;
    tempObj.item_brand = "Traya Health";
    tempObj.item_category = "Hair Care";
    tempObj.item_list_name = item_list_name ? item_list_name : "";
    tempItem.push(tempObj);
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({ ecommerce: null });
    let user_email = window.localStorage.getItem("user_email");
    let user_phone = window.localStorage.getItem("user_phone");
    let user_synthetic_id = window.localStorage.getItem("user_syn");

    const encryptedEmail = user_email
      ? encryptMD5(user_email.trim()).toString()
      : "";
    const encryptedPhone = user_phone
      ? encryptMD5(user_phone.trim()).toString()
      : "";
    // Add the `view_item_list` event and associated data to the dataLayer
    window.dataLayer.push({
      ecommerce: {
        currencyCode: "INR",
        items: tempItem,
      },
      EID: encryptedEmail,
      MID: encryptedPhone,
      NAEID: user_email ? user_email.trim() : "",
      NAMID: user_phone ? user_phone.trim() : "",
      user_id: user_synthetic_id ? user_synthetic_id : "",
      event: "nt_select_item",
    });
    //END --->

    window.location.href = `/products/${val.routeName}`;
  };

  const screenSize = useScreenSize();
  return props?.productData?.length < 0 ? (
    <Loader />
  ) : (
    <>
      <ProductsFilter
        singleOrKit={singleOrKit}
        currentCategory={currentCategory}
        filterSingleCombo={filterSingleCombo}
        filterHairProducts={filterHairProducts}
        showSingleKitButton={showSingleKitButton}
      />
      <div className="collection-hero ">
        <a
          href="https://form.traya.health/questions?cohort=1&amp;location=Product-Banner"
          aria-describedby="a11y-external-message"
        >
          <img
            className="collection-banner-image w-full"
            src={`${CDN_BASE_URL}website_images/all_products/bannerImages/hairTestBanner.png`}
            alt="traya"
          />
        </a>
      </div>

      <div className="block mx-auto w-12/12 xl:w-10/12 md:w-10/12 lg:w-10/12 mt-5 xl:mt-12 lg:mt-12 md:mt-12">
        {!["xl", "lg", "md"].includes(screenSize) && (
          <div className="block xl:hidden lg:hidden md:hidden w-fit mx-auto">
            <div
              className={`${
                showSingleKitButton ? "block" : "hidden"
              } rounded-full`}
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
                  singleOrKit == "kit"
                    ? "bg-custom-black text-white"
                    : "text-black"
                } rounded-full font-bold`}
                onClick={() => filterSingleCombo("kit")}
              >
                Kit
              </button>
            </div>
          </div>
        )}

        <div className="w-full mt-5 xl:mt-12 lg:mt-12 md:mt-12">
          <h1 className="text-center justify-center font-nunito xl:text-xx4l xs:text-2xl  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-custom-black xs:px-10">
            Our Treatment Plans
          </h1>
          <div className="flex flex-row mx-auto flex-wrap justify-between xl:justify-center lg:justify-center md:justify-center w-full xl:w-10/12 lg:w-10/12 md:w-11/12 py-9">
            {singleOrKit === "kit" && currentCategory == "Hair" ? (
              <div className="py-2 xl:py-9 lg:py-9 md:py-9 xl:w-[30%] lg:w-[30%] md:w-[45%] w-[45%] mx-2">
                <div className="relative h-full p-1 xl:p-5 lg:p-5 md:p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <a href="/products/customized-hair-fall-plans">
                    <div className="rating-strip ">
                      4.5{" "}
                      <span className="stars-container stars-container-84">
                        ★★★★★
                      </span>
                    </div>
                    <img
                      src={`${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment1.png`}
                      className="mx-auto"
                      alt="treatmentPlan"
                    />
                    <h1 className="text-[14px] md:text-lg lg:text-lg xl:text-lg font-bold text-custom-black my-5 text-center">
                      Customized Hair Fall Plans
                    </h1>
                    <h1 className="text-center font-bold my-1 xl:my-5 md:my-5 lg:my-5 text-[14px] md:text-3xl lg:text-3xl xl:text-3xl">
                      Plan Starts @{" "}
                      <span className="text-[#ff0000]">₹1,699* /-</span>
                    </h1>
                    <h1 className="text-left mb-11 text-[14px] md:text-lg lg:text-lg xl:text-lg">
                      For regrowth in 5 months With Traya 3x Formula
                      <sup>TM</sup>
                    </h1>
                  </a>
                  <a
                    className="bg-custom-black text-white hover:bg-custom-green hover:text-black py-2  w-[97%] text-center font-bold rounded-lg uppercase absolute bottom-1 left-1 "
                    href={
                      router.pathname == "/femaleV2"
                        ? "/femaleV2/question?cohort=1&location=AllProducts&page=AllProducts"
                        : "/home/question?cohort=1&location=AllProducts&page=AllProducts"
                    }
                    onClick={() =>
                      Cookies.set(
                        "__TRAYA_UTM__",
                        router.pathname == "/femaleV2"
                          ? "&page=femalev2"
                          : "&page=homev2"
                      )
                    }
                  >
                    TAKE THE HAIR TEST<sup>TM</sup>
                  </a>
                </div>
              </div>
            ) : null}

            {visibleProducts?.map((value, index) => (
              <div
                key={index}
                className="py-2 xl:py-9 lg:py-9 md:py-9 xl:w-[30%] lg:w-[30%] md:w-[45%] w-[45%] mx-2"
              >
                <div className="relative h-full p-1 xl:p-5 lg:p-5 md:p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <a
                    onClick={() => selectItem(value)}
                    className="cursor-pointer"
                  >
                    <div className="rating-strip ">
                      4.5{" "}
                      <span className="stars-container stars-container-84">
                        ★★★★★
                      </span>
                    </div>
                    <img
                      src={value.img}
                      className={
                        value.id ===
                        "gid://shopify/ProductVariant/37789279551666"
                          ? "mx-auto xl:w-32 md:w-32 lg:w-32 w-28"
                          : "mx-auto"
                      }
                      alt={value.img}
                    />
                    <h1 className="text-[14px] md:text-lg lg:text-lg xl:text-lg font-bold text-custom-black my-5 text-center">
                      {value.title}
                    </h1>
                    <h1 className="text-center font-bold text-[#ff0000] my-1 xl:my-5 md:my-5 lg:my-5 text-[14px] md:text-3xl lg:text-3xl xl:text-3xl">
                      {props.formatter(value.price)} /-
                    </h1>
                    <h1 className="text-left mb-11 text-[14px] md:text-lg lg:text-lg xl:text-lg">
                      {value.description}
                    </h1>
                  </a>
                  <button
                    className="bg-custom-black text-white hover:bg-custom-green hover:text-black py-2  w-[97%] text-center font-bold rounded-lg uppercase absolute bottom-1 left-1 "
                    onClick={(event) => {
                      event.stopPropagation();
                      handleAddToCart(value.id);
                      props.setShowSidebar(true);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}

            <noscript>
              <div className="flex flex-row mx-auto flex-wrap justify-between xl:justify-center lg:justify-center md:justify-center w-full xl:w-10/12 lg:w-10/12 md:w-11/12 py-9">
                {props?.noScriptData?.data?.map((value, index) => (
                  <div
                    key={index}
                    className="py-2 xl:py-9 lg:py-9 md:py-9 xl:w-[30%] lg:w-[30%] md:w-[45%] w-[45%] mx-2"
                  >
                    <div className="relative h-full p-1 xl:p-5 lg:p-5 md:p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                      <a
                        href={`/products/${value.routeName}`}
                        className="cursor-pointer"
                      >
                        <div className="rating-strip ">
                          4.5{" "}
                          <span className="stars-container stars-container-84">
                            ★★★★★
                          </span>
                        </div>
                        <img
                          src={value.img}
                          className={
                            value.id ===
                            "gid://shopify/ProductVariant/37789279551666"
                              ? "mx-auto xl:w-32 md:w-32 lg:w-32 w-28"
                              : "mx-auto"
                          }
                          alt={value.img}
                        />
                        <h1 className="text-[14px] md:text-lg lg:text-lg xl:text-lg font-bold text-custom-black my-5 text-center">
                          {value.title}
                        </h1>
                        <h1 className="text-center font-bold text-[#ff0000] my-1 xl:my-5 md:my-5 lg:my-5 text-[14px] md:text-3xl lg:text-3xl xl:text-3xl">
                          {props.formatter(value.price)} /-
                        </h1>
                        <h1 className="text-left mb-11 text-[14px] md:text-lg lg:text-lg xl:text-lg">
                          {value.description}
                        </h1>
                      </a>
                      <button
                        className="bg-custom-black text-white hover:bg-custom-green hover:text-black py-2  w-[97%] text-center font-bold rounded-lg uppercase absolute bottom-1 left-1 "
                        onClick={(event) => {
                          event.stopPropagation();
                          handleAddToCart(value.id);
                          props.setShowSidebar(true);
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </noscript>
          </div>
        </div>
        <AllProductsContent />
        <ChooseRightProduct />
      </div>
      <FooterPage />
    </>
  );
}
