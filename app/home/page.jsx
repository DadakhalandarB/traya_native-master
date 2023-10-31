import FormShopifyComponent from "@/components/home/FormShopifyComponent";
import { GET_PRODUCTS } from "@/constants/urls";
import CartContextProvider from "@/context/cart-store";
import { fetchRequest } from "@/helpers/fetchRequest";
import { getProductList } from "@/utils/utility";

const page = async () => {
  let productsData;
  const fetchResult = await fetchRequest(`${GET_PRODUCTS}`);
  if (fetchResult.hasError) {
    console.error("error occurred");
    return;
  } else {
    productsData = getProductList(fetchResult);
  }
  return (
    <div>
      <CartContextProvider>
        <FormShopifyComponent productsData={productsData} />
      </CartContextProvider>
    </div>
  );
};

export default page;
