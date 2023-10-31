"use client";

import { useEffect, useState, useContext, useRef } from "react";
import { isArray, isEmpty } from "lodash";
import { CartContext } from "../../context/cart-store";
import { fetchRequest } from "../../helpers/fetchRequest";
import { PUBLIC_API_URL_BASE, client } from "../../constants/config";
import { CDN_BASE_URL } from "../../constants/config";
import ErrorPage from "next/error";
import dynamic from "next/dynamic";
import NoScriptProductComponent from "./NoScriptProductComponent";
import HeadComponent from "./HeadComponent";
import SingleProduct from "./SingleProduct";
import ComboProduct from "./ComboProduct";
import CustomizeHairFallRouteComponent from "./CustomizeHairFallRouteComponent";
import ProductCartFooter from "./ProductCartFooter";
import useScreenSize from "@/hooks/useScreenSize";
const DynamicLoader = dynamic(() => import("@components/Loader"));
const DynamicFooterPage = dynamic(() =>
  import("@components/landingPage/landingFooter")
);

export async function getServerSideProps(ctx) {
  const fetchResult = await fetchRequest(`${GET_PRODUCTS}`);
  const filtered = [
    ...fetchResult.data.singleProducts,
    ...fetchResult.data.comboProducts,
  ];

  let tempItemData = [];

  filtered.forEach((val) => {
    let tempObj = {};
    tempObj.title = val.short_title;
    tempObj.description = val.short_sub_title;
    tempObj.price = val.price.amount;
    tempObj.totalPrice = val.price.amount;
    tempObj.itemCount = 1;
    tempObj.id = val.variant_id;
    tempObj.img = val.product_media[0].url;
    tempObj.isCombo = val.isCombo;
    tempObj.routeName = val.routeName;
    tempObj.breadCrumbName = val.breadCrumbName;
    tempObj.category = val.category;
    tempObj.sub_category = val.sub_category;
    tempItemData.push(tempObj);
  });

  return {
    props: { tempItemData },
  };
}

function AllProductsMainComponent(props) {
  const [currentProduct, setCurrentProduct] = useState();
  const [isCombo, setIsCombo] = useState(false);
  const [showProductImg, setShowProductImg] = useState(null);
  const [frequentlyBrought, setFrequentlyBrought] = useState();
  const [alsoLike, setAlsoLike] = useState();
  const [allProducts, setAllProducts] = useState();
  const [customize, setCustomize] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [buyNowClicked, setBuyNowClicked] = useState(false);
  const [showProductImgType, setShowProductImgType] = useState();
  const [notFoundPage, setNotFoundPage] = useState(false);
  const [open, setOpen] = useState("");
  const _allProductsData = props?.allProductsData || [];
  const { cartItems, addItemToCart } = useContext(CartContext);
  const handleAddToCart = (itemId) => {
    const currentProduct = allProducts.find((product) => {
      return product.variant_id === itemId;
    });
    let _isCombo;
    var itemsList = [];
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
            quantity: cartCount,
          };
        });
    }
    addItemToCart(itemsList);
  };

  useEffect(() => {
    let _currentProduct;
    let _frequentlyBrought;
    let _alsoLike;
    let routeName = window.location.pathname;
    routeName = routeName.split("/").pop();
    if (routeName == "customized-hair-fall-plans") {
      setCustomize(true);
    } else {
      setCustomize(false);
      if (isArray(_allProductsData)) {
        _currentProduct = _allProductsData.find(
          (product) => product.routeName == routeName
        );
        setAllProducts(_allProductsData);
      }
      if (_currentProduct) {
        _frequentlyBrought = _allProductsData.filter((product) =>
          _currentProduct.frequently_brought_products?.includes(
            product.variant_id
          )
        );
        if (_frequentlyBrought) {
          _frequentlyBrought = props?.formatProductData(_frequentlyBrought);
        }

        _alsoLike = _allProductsData.filter((product) =>
          _currentProduct.also_like_products?.includes(product.variant_id)
        );
        if (_alsoLike) {
          _alsoLike = props?.formatProductData(_alsoLike);
        }

        setAlsoLike(_alsoLike);
        setFrequentlyBrought(_frequentlyBrought);
        setCurrentProduct(_currentProduct);
        setIsCombo(_currentProduct.isCombo);
      }
      if (_allProductsData.length > 0 && !_currentProduct) {
        setNotFoundPage(true);
      }
    }
  }, [props]);

  useEffect(() => {
    if (currentProduct) {
      //START --->
      // GTM data layer
      let tempItem = [];
      let tempObj = {};
      tempObj.item_name = currentProduct.long_title;
      tempObj.item_id = currentProduct.variant_id;
      tempObj.quantity = 1;
      tempObj.price = currentProduct.price.amount;
      tempObj.item_brand = "Traya Health";
      tempObj.item_category = "Hair Care";
      tempObj.discount = "";
      tempObj.coupon = "";
      tempItem.push(tempObj);
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        ecommerce: {
          currencyCode: "INR",
          value: currentProduct.price.amount,
          items: tempItem,
          cartTotal: tempItem.length,
        },
        event: "nt_view_item",
      });
      //END --->
    }
  }, [currentProduct]);

  useEffect(() => {
    let _mainImage = {};
    if (!isEmpty(currentProduct)) {
      _mainImage = currentProduct.product_media?.find((media) => {
        return media.context == "main";
      });
      setShowProductImg(_mainImage.url);
      setShowProductImgType(_mainImage.media_type);
    } else {
      setShowProductImg(
        `${CDN_BASE_URL}website_images/all_products/treatmentPlan/treatment1.png`
      );
    }
  }, [currentProduct]);

  const toggleClass = (event) => {
    var elems = document.querySelectorAll(".border-2");
    [].forEach.call(elems, function (el) {
      el.classList.remove("border-2");
    });
    event.currentTarget.classList.add("border-2");
  };
  const incItem = () => {
    setCartCount(cartCount + 1);
  };
  const decItem = () => {
    if (cartCount > 1) {
      setCartCount(cartCount - 1);
    }
  };

  const buyNow = (itemId) => {
    handleAddToCart(itemId);
    props.setShowSidebar(true);
    setBuyNowClicked(true);
  };

  useEffect(() => {
    if (buyNowClicked) {
      placeOrder();
      setBuyNowClicked(false);
    }
  }, [cartItems]);

  const screenSize = useScreenSize();

  const placeOrder = async () => {
    // setPlaceOrderClicked(true);
    client.checkout.create().then(async (checkout) => {
      let productDescriptions = [];

      cartItems.forEach((val) => {
        let objVal = {
          product_id: val.id,
          name: val.name,
          itemCount: val.quantity,
          type: val.type,
          description: val.description,
          price: val.price,
          image_url: [null],
          quantity: val.quantity,
        };
        productDescriptions.push(objVal);
      });

      let caseId = window.localStorage.getItem("caseId");
      const sessionId = window.Shopflo.getSessionId();
      let url = `${PUBLIC_API_URL_BASE}v3/retrieve-cart?provider=shopflo${
        caseId ? `&caseId=${caseId}` : ""
      }`;
      const currenPathUrl = window.location.href;
      const _res = await fetchRequest(url, {
        method: "POST",
        body: JSON.stringify({
          productDescriptions: productDescriptions,
          tags: ["ORDER_SOURCE_WEB_V2"],
          backUrl: currenPathUrl,
          sessionId: sessionId,
        }),
      });

      if (_res.status === 200) {
        window.Shopflo.openFloCheckout(_res.data);

        //START --->
        // GTM data layer
        let tempItem = [];
        let totalPrice = 0;
        cartItems.forEach((val) => {
          let tempObj = {};
          totalPrice = totalPrice + val.totalPrice;
          tempObj.item_name = val.name;
          tempObj.item_id = val.id;
          tempObj.price = val.price;
          tempObj.quantity = val.quantity;
          tempObj.item_brand = "Traya Health";
          tempObj.item_category = "Hair Care";
          tempObj.discount = "";
          tempObj.coupon = "";
          tempItem.push(tempObj);
        });
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({ ecommerce: null });
        window.dataLayer.push({
          ecommerce: {
            currencyCode: "INR",
            value: totalPrice,
            items: tempItem,
            cartTotal: tempItem.length,
          },
          event: "nt_begin_checkout",
        });
        //END --->
        // setTimeout(() => setPlaceOrderClicked(false), 2000);
      }
    });
  };

  if (notFoundPage) {
    return (
      <ErrorPage statusCode={404} title="Page Not Found">
        <p>Sorry, the page you are looking for does not exist.</p>
      </ErrorPage>
    );
  }

  return (
    <>
      {!isEmpty(currentProduct) && (
        <HeadComponent currentProduct={currentProduct} />
      )}
      {!currentProduct && (
        <NoScriptProductComponent
          props={props}
          decItem={decItem}
          incItem={incItem}
          cartCount={cartCount}
          toggleClass={toggleClass}
          showProductImg={showProductImg}
          currentProduct={currentProduct}
          setShowProductImg={setShowProductImg}
          setShowProductImgType={setShowProductImgType}
        />
      )}

      {!customize && showProductImg ? (
        <>
          {!currentProduct ? (
            <DynamicLoader />
          ) : isCombo === false ? (
            <SingleProduct
              props={props}
              buyNow={buyNow}
              incItem={incItem}
              decItem={decItem}
              alsoLike={alsoLike}
              cartCount={cartCount}
              toggleClass={toggleClass}
              currentProduct={currentProduct}
              frequentlyBrought={frequentlyBrought}
            />
          ) : (
            <ComboProduct
              open={open}
              props={props}
              buyNow={buyNow}
              setOpen={setOpen}
              incItem={incItem}
              decItem={decItem}
              cartCount={cartCount}
              toggleClass={toggleClass}
              showProductImg={showProductImg}
              currentProduct={currentProduct}
              setShowProductImg={setShowProductImg}
              showProductImgType={showProductImgType}
              setShowProductImgType={setShowProductImgType}
              handleAddToCart={handleAddToCart}
            />
          )}
        </>
      ) : (
        <CustomizeHairFallRouteComponent
          showProductImg={showProductImg}
          toggleClass={toggleClass}
        />
      )}
      {["xs", "sm"].includes(screenSize) && (
        <ProductCartFooter props={props} currentProduct={currentProduct} />
      )}
      <DynamicFooterPage />
    </>
  );
}

export default AllProductsMainComponent;
