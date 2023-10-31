"use client";

import { useEffect, useState } from "react";
import { fetchRequest } from "../../helpers/fetchRequest";
import { GET_PRODUCTS } from "../../constants/urls";
import dynamic from "next/dynamic";
const DynamicSingleProductMainComponent = dynamic(() =>
  import("@components/singleProduct/SingleProductMainComponent")
);
import Header from "../productsComponents/headerBlackBG";

export async function getServerSideProps(ctx) {
  let _currentProduct;
  const fetchResult = await fetchRequest(`${GET_PRODUCTS}`);
  const filtered = [
    ...fetchResult?.data?.singleProducts,
    ...fetchResult?.data?.comboProducts,
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
    val.Url = `${ctx.req.headers.host}/products/${ctx.query.key}`;
    tempItemData.push(tempObj);
  });

  _currentProduct = filtered.find(
    (product) => product.routeName == ctx.params.key
  );

  _alsoLike = tempItemData.filter(
    (product) => (product.routeName = ctx.params.key)
  );
  if (_currentProduct && _currentProduct !== "undefined") {
    return {
      props: { _currentProduct: _currentProduct || null },
    };
  } else {
    return {
      notFound: true,
    };
  }
}

function SingleSopifyProductComponent(_currentProduct) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [discountHandle, setDiscountHandle] = useState("");
  const [productData, setProductData] = useState([]);
  const [allProductsData, setAllProductsData] = useState({});

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    const fetchResult = await fetchRequest(GET_PRODUCTS);
    if (fetchResult.hasError) {
      console.log("error occurred");
      return;
    }
    const _allProducts = fetchResult.data;
    const allProducts = [
      ..._allProducts["singleProducts"],
      ..._allProducts["comboProducts"],
    ];
    setAllProductsData(allProducts);
    let tempItemData = [];
    allProducts.forEach((val) => {
      let tempObj = {};
      tempObj.title = val.short_title;
      tempObj.onlineStoreUrl = val.onlineStoreUrl;
      tempObj.description = val.short_sub_title;
      tempObj.price = val.price.amount;
      tempObj.totalPrice = val.price.amount;
      tempObj.itemCount = 1;
      tempObj.id = val.variant_id;
      tempObj.img = val.product_media[0].url;
      tempObj.routeName = val.routeName;
      tempObj.breadCrumbName = val.breadCrumbName;
      tempItemData.push(tempObj);
    });
    let findInd = tempItemData.findIndex(
      (valInd) => valInd.id == "gid://shopify/ProductVariant/37547358453938"
    );
    let finalTempItemData = [];
    if (findInd > -1) {
      finalTempItemData = tempItemData.splice(findInd, 1);
    }

    setProductData(tempItemData);
  };
  const formatProductData = (products) => {
    return products.map((val) => {
      let tempObj = {};
      tempObj.title = val.short_title;
      tempObj.onlineStoreUrl = val.onlineStoreUrl;
      tempObj.description = val.short_sub_title;
      tempObj.price = val.price.amount;
      tempObj.totalPrice = val.price.amount;
      tempObj.itemCount = 1;
      tempObj.id = val.variant_id;
      tempObj.img = val.product_media[0].url;
      tempObj.routeName = val.routeName;
      tempObj.breadCrumbName = val.breadCrumbName;
      return tempObj;
    });
  };
  const formatter = (val) => {
    let formatValue = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    });
    return formatValue.format(val);
  };

  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      <Header
        showSidebar={showSidebar}
        setShowSidebar={(val) => setShowSidebar(val)}
        loader={loaderProp}
        cartData={cartData}
        setCartData={(val) => setCartData(val)}
        setDiscountHandle={(val) => setDiscountHandle(val)}
        discountHandle={discountHandle}
        formatter={(val) => formatter(val)}
        addToCart={(event, val) => addToCart(event, val)}
      />
      <DynamicSingleProductMainComponent
        showSidebar={showSidebar}
        setShowSidebar={(val) => setShowSidebar(val)}
        loader={loaderProp}
        cartData={cartData}
        setDiscountHandle={(val) => setDiscountHandle(val)}
        discountHandle={discountHandle}
        formatter={(val) => formatter(val)}
        productData={productData}
        allProductsData={allProductsData}
        formatProductData={formatProductData}
        serverSideCurrProd={_currentProduct}
      />
    </>
  );
}

export default SingleSopifyProductComponent;
