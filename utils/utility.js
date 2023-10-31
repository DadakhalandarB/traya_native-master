export function getProductList(fetchResult) {
  const _allProducts = fetchResult.data;
  let tempItemData = [];
  const allProducts = [
    ..._allProducts["singleProducts"],
    ..._allProducts["comboProducts"],
  ];

  allProducts.forEach((val) => {
    let tempObj = {};
    tempObj.title = val.long_title;
    tempObj.onlineStoreUrl = val.onlineStoreUrl;
    tempObj.description = val.long_sub_title;
    tempObj.price = val.price.amount;
    tempObj.totalPrice = val.price.amount;
    tempObj.itemCount = 1;
    tempObj.id = val.variant_id;
    tempObj.img = val.product_media[0].url;
    tempObj.isCombo = val.isCombo;
    tempObj.routeName = val.routeName;
    tempObj.breadCrumbName = val.breadCrumbName;
    tempItemData.push(tempObj);
  });

  if (fetchResult.hasError) {
    console.error("error occurred");
    return;
  }
  return tempItemData;
}
