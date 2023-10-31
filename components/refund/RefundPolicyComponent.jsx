"use client";

import { useEffect, useState } from "react";
import FooterPage from "../landingPage/landingFooter";
import Header from "../productsComponents/headerBlackBG";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@context/cart-store";
import Head from "next/head";
function RefundPolicyComponent() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [discountHandle, setDiscountHandle] = useState("");
  const [syntheticId, setSyntheticId] = useState("");
  const pathname = usePathname;
  const { showMyRecc } = useContext(CartContext);
  useEffect(() => {
    let _syntheticId;
    if (typeof window !== "undefined") {
      _syntheticId = window.localStorage.getItem("syntheticId");
    }
    setSyntheticId(_syntheticId);
  }, [showMyRecc]);
  const loaderProp = ({ src }) => {
    return src;
  };
  return (
    <>
      <Head>
        <title>Refund policy – Traya</title>
        <meta
          name="title"
          content="Return Policy
          – Traya"
        />
        <meta
          name="description"
          content="Return and Replacement Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can help you out. We will need a photo of the damaged product after which we will initiate a replacement. You can always contact us for any replacemen"
        />
      </Head>
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
        page={"refund-policy"}
      />
      <div className="block mx-auto xl:w-9/12 md:w-11/12 lg:w-11/12 w-11/12 mt-16 ">
        <div className="flex flex-wrap w-11/12 xl:w-10/12 lg:w-11/12 md:w-11/12 mx-auto">
          <div className="w-full xl:w-9/12 md:w-9/12 lg:w-9/12 mx-auto ">
            <h1 className="text-3xl font-bold font-nunito text-custom-black mt-2 xl:mt-12 md:mt-12 lg:mt-12">
              100% Money Back Guarantee
            </h1>
            <h1 className="text-md py-2 font-nunito  text-custom-black">
              To receive a full refund of your treatment, you must fulfill the
              following requirements:
              <br />
              <br />
              <ol style={{ listStyle: "decimal" }} className="mx-8">
                <li>
                  Use the product for 5 months as per your prescription without
                  any break in between (consistency is key). We will see order
                  dates to ensure you are eligible for this refund.
                </li>
                <li className="mt-2">
                  Submit a refund request to the email below along with your
                  order number any time before 6 months after your first
                  shipment was delivered. You can contact us at email:
                  customercare@traya.health or drop us a Whatsapp at
                  +918828006272.
                </li>
              </ol>
              <br />
              Please note the money back guarantee won&apos;t be applicable
              under the following cases:
              <br />
              <br />
              <ul style={{ listStyle: "disc" }} className="mx-8">
                <li>
                  You have not used the treatment consistently. Order number and
                  date of all months will be used to know consistent usage.
                </li>
                <li className="mt-2">
                  Any severe/underlying health conditions that can delay or
                  decrease the efficacy of the treatment was diagnosed while on
                  treatment.
                </li>
                <li className="mt-2">
                  Your hair fall has been controlled but new hair growth is yet
                  to grow. In these cases, the treatment takes longer than usual
                  as managing the root cause of these specific cases requires
                  time. However, be rest assured that hair growth will still
                  happen and you have to continue staying consistent with the
                  treatment.
                </li>
              </ul>
              <br />
              Thank you for shopping at traya.health.
              <br />
              <br />
              The following terms are applicable for any products that you have
              purchased with us.
            </h1>
            <h1 className="text-md py-2 font-nunito text-custom-black">
              <span className="text-3xl font-bold font-nunito text-custom-black mt-12">
                Cancellation
              </span>
              <br />
              <br />
              How can I cancel my order?
              <br />
              <br />
              You can contact us at email: customercare@traya.health or drop us
              a Whatsapp at +918828006272 to cancel your order and our team will
              process the cancellation request. However, if the product has
              already been shipped you will be charged a fee of Rs. 300 for
              shipping, which will be deducted from your prepaid amount before
              refunding the entire amount.
            </h1>
            <br />
            <h1 className="text-md py-2 font-nunito text-custom-black">
              <span className="text-3xl font-bold font-nunito text-custom-black ">
                Return/Replacement
              </span>
              <br />
              <br />
              How can I return/replace my orders?
              <br />
              <br />
              Returns and Replacements can be requested within 7 days of
              delivery of the order, for the following reasons:
              <ol style={{ listStyle: "disc" }} className="mx-8 mt-2">
                <li>Wrong products delivered.</li>
                <li className="mt-2">Missing products in the order.</li>
                <li className="mt-2">Damaged products delivered.</li>
                <li className="mt-2">
                  (in rare cases) if products cause allergic reactions/do not
                  suit your body.
                </li>
              </ol>
              <br />
              <br />
              You can raise a request to return/replace your order by contacting
              our customer care team through the following channel (between 10
              AM - 7 PM).
              <br />
              <br />
              You can contact us at email: customercare@traya.health or drop us
              a Whatsapp at +918828006272
              <br />
              <br />
              We would request you to share the images of the products when you
              send us an email.
              <br />
              <br />
              How are returns/replacements processed?
              <br />
              <br />
              <ol style={{ listStyle: "disc" }} className="mx-8 mt-4">
                <li>
                  Once we receive a return/replacement request, we will send our
                  courier partner to pick up the product. This will be arranged
                  within 2 working days of raising the return/replacement
                  request.
                </li>
                <li className="mt-2">
                  In case our reverse pickup is not available at your pin code,
                  we will request you to self-ship the products through any
                  reliable courier partner. We will reimburse you the courier
                  charges.
                </li>
                <li className="mt-2">
                  We request you to please send the product along with all
                  accompanying material and original packaging.
                </li>
                <li className="mt-2">
                  Once we receive the products, we will quickly process the
                  refunds/replacements. Please note that if the replacement
                  product is unavailable, we will process a refund.
                </li>
              </ol>
            </h1>
            <br />
            <h1 className="text-md py-2 font-nunito text-custom-black">
              <span className="text-3xl font-bold font-nunito text-custom-black mt-12">
                Contact us
              </span>
              <br />
              <br />
              Please inspect your order upon reception and contact us
              immediately if the item is defective, damaged or if you receive
              the wrong item, so that we can help you out. We will need a photo
              of the damaged product after which we will initiate a replacement.
              You can always contact us for any replacement question at{" "}
              <span style={{ color: "#007bff" }}>
                customercare@traya.health
              </span>{" "}
              or drop us a Whatsapp at +918828006272. We do not take any
              returns.
            </h1>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#b7d340" }}
        className="xl:flex sticky bottom-0 z-40  py-4 mx-auto items-center justify-center items-center"
      >
        <h1 className="font-bold text-sm text-center mx-8">
          2,50,000+ Indians Trust & Use Traya
        </h1>

        <a
          href={
            pathname == "/femaleV2"
              ? "/femaleV2/question?cohort=1&location=sticky&page=refund-policy"
              : "/home/question?cohort=1&location=sticky&page=refund-policy"
          }
          className="w-[70%] xl:w-fit lg:w-fit md:w-fit justify-center mx-auto xl:mx-2 lg:mx-auto md:mx-auto mt-2 xl:mt-0 lg:mt-2 md:mt-2 flex bg-custom-black text-white hover:bg-white hover:text-black p-2 font-bold rounded-lg uppercase"
        >
          Take The Hair Test
          <sup
            style={{
              fontSize: 9,
              fontWeight: "bolder",
              position: "relative",
              top: 5,
            }}
          >
            TM
          </sup>
        </a>
        {showMyRecc && (
          <>
            <a
              href={`/result?id=${syntheticId}&page=refund-policy`}
              className="w-[70%] xl:w-fit lg:w-fit md:w-fit justify-center mx-auto xl:mx-2 lg:mx-auto md:mx-auto mt-2 xl:mt-0 lg:mt-2 md:mt-2 flex bg-custom-black text-white hover:bg-white hover:text-black p-2 font-bold rounded-lg  items-center uppercase"
            >
              MY RECOMMENDED PLAN
            </a>
          </>
        )}
      </div>
      <FooterPage />
    </>
  );
}
export default RefundPolicyComponent;
