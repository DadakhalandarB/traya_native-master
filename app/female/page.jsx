import CartContextProvider from "../../context/cart-store";
import FemaleShopifyComponent from "../../components/femaleHome/FemaleShopifyComponent";
import { fetchRequest } from "@/helpers/fetchRequest";
import { GET_PRODUCTS } from "@/constants/urls";
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
    <CartContextProvider>
      <FemaleShopifyComponent productsData={productsData} />
    </CartContextProvider>
  );
};

export default page;
