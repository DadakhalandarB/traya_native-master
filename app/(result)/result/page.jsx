'use client'
import ResultPageMainComponent from "../../../components/result/ResultPageMainComponent";
import CartContextProvider from "../../../context/cart-store";
export default function page() {
  return (
    <CartContextProvider>
      <ResultPageMainComponent />
    </CartContextProvider>
  );
}
