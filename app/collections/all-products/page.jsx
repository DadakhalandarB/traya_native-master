import CartContextProvider from "@/context/cart-store";
import { fetchRequest } from "@/helpers/fetchRequest";
import AllProductsComponents from "../../../components/productsComponents/AllProductComponent";
import { GET_PRODUCTS } from "@/constants/urls";

const page = async () => {
    const fetchResult = await fetchRequest(`${GET_PRODUCTS}`);
    if (fetchResult.hasError) {
        console.log("error occurred");
        return;
    }
    const rawProductsData = fetchResult.data;

    let productData = [];
    const allProducts = [
        ...rawProductsData["singleProducts"],
        ...rawProductsData["comboProducts"],
    ];
    allProducts.forEach((val) => {
        const url = val.product_media[0].url;
        let tempObj = {};
        tempObj.title = val.short_title;
        tempObj.onlineStoreUrl = val.onlineStoreUrl;
        tempObj.description = val.short_sub_title;
        tempObj.price = val.price.amount;
        tempObj.totalPrice = val.price.amount;
        tempObj.itemCount = 1;
        tempObj.id = val.variant_id;
        tempObj.img = url;
        tempObj.isCombo = val.isCombo;
        tempObj.routeName = val.routeName;
        tempObj.breadCrumbName = val.breadCrumbName;
        productData.push(tempObj);
    });

    return (
        <div>
            <CartContextProvider>
                <AllProductsComponents
                    productData={productData}
                    rawProductsData={rawProductsData}
                />
            </CartContextProvider>
        </div>
    );
};
export default page;
