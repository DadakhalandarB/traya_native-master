import BurgerMenuSvg from "@/assets/svgs/BurgerMenuSvg";
import CartSvg from "@/assets/svgs/CartSvg";
import ClickPostSvg from "@/assets/svgs/ClickPostSvg";
import CrossHoverSvg from "@/assets/svgs/CrossHoverSvg";
import ProfileSvg from "@/assets/svgs/ProfileSvg";
import WhatsAppSvg from "@/assets/svgs/WhatsAppSvg";
import { trayalogo } from "@/constants/constants";
import { nunito } from "@/constants/fontConfig";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DynamicLoader = dynamic(() => import("@components/Loader"));

const AccountTestCart = ({ hasToken, showMyRecc, props, openNav }) => {
  const showChartView = () => {
    window.dataLayer = [];
    props.setShowSidebar(!props.showSidebar);
    let tempItem = [];
    let totalPrice = 0;
    cartItems.forEach((val) => {
      let tempObj = {};
      totalPrice = totalPrice + val.totalPrice;
      tempObj.item_name = val.name;
      tempObj.item_id = val.id;
      tempObj.quantity = val.quantity;
      tempObj.price = val.price;
      tempObj.item_brand = "Traya Health";
      tempObj.item_category = "Hair Care";
      tempObj.discount = "";
      tempObj.coupon = "";
      tempItem.push(tempObj);
    });
    // GTM nt_view_cart function
    let gtmObj = {
      totalPrice: totalPrice,
      cartData: tempItem,
    };
    gtmEcommerce(gtmObj, "nt_view_cart");
  };
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-between items-center px-4 md:px-6 xl:px-12">
      {" "}
      <div className="w-full flex flex-row justify-between">
        <div>
          <a
            href={hasToken ? `/user-account` : `https://traya.health/`}
            className="flex items-center mt-2 ml-7 xs:ml-2 xl:w-auto lg:w-auto md:w-auto w-24"
          >
            <Image
              src={trayalogo}
              alt="Traya Logo"
              className="cursor-pointer"
              loader={props.loader}
              unoptimized={true}
              width={128}
              height={41}
              loading="lazy"
            />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gridArea: "icons",
            justifySelf: "end",
            alignItems: "center",
          }}
          className="mx-[38px] xs:mx-[10px]"
        >
          <div className="hidden xl:block md:block lg:block mr-3">
            {showMyRecc ? (
              <a
                href={
                  props.router == "/pages/female"
                    ? `https://traya.health/pages/female-result?id=${props.syntheticId}&page=female_native`
                    : `/result?id=${props.syntheticId}&page=homev2`
                }
                onClick={() =>
                  Cookies.set(
                    "__TRAYA_UTM__",
                    props.router == "/pages/female" ||
                      props.router == "/femaleV2"
                      ? "&page=female_native"
                      : "&page=homev2"
                  )
                }
                className={`flex text-[#fff] text-[19px] ${nunito.variable} font-bold rounded-lg uppercase`}
              >
                My Result
              </a>
            ) : (
              <a
                href={
                  props.router == "/pages/female" || props.router == "/femaleV2"
                    ? "/female?cohort=1&lcn=TopBar&page=female_native"
                    : "/home/question?cohort=1&lcn=TopBar&page=homev2"
                }
                onClick={() =>
                  Cookies.set(
                    "__TRAYA_UTM__",
                    props.router == "/pages/female" ||
                      props.router == "/femaleV2"
                      ? "&page=female_native"
                      : "&page=homev2"
                  )
                }
                id={
                  props.router == "/pages/female" || props.router == "/femaleV2"
                    ? "female-hair-test-button1-native"
                    : "hairtestcta-native"
                }
                className="flex bg-[#fff] text-black hover:bg-[#3e3e3e] hover:text-white p-2 font-bold rounded-lg uppercase"
              >
                Take The Hair Test
                <sup
                  style={{
                    fontSize: 9,
                    fontWeight: "bolder",
                    position: "relative",
                    top: 5,
                    left: 5,
                  }}
                >
                  TM
                </sup>
              </a>
            )}
          </div>

          <div className="ml-2">
            <a href="https://api.whatsapp.com/send/?phone=918828006272&text=Hey%21+I+would+like+to+know+more+about+Traya&type=phone_number&app_absent=0">
             <WhatsAppSvg theme={"light"} />
            </a>
          </div>
          <div className="p-[10px]">
            <a href="https://trayahealth.clickpost.ai/">
              <ClickPostSvg />
            </a>
          </div>
          <div className="">
            <a
              onClick={() => {
                router.push("/login");
                userGTM("myProfile_Selected");
              }}
              className="cursor-pointer"
            >
              <ProfileSvg />
            </a>
          </div>
          <div className="p-[10px]">
            <div className="relative" onClick={() => showChartView()}>
              <CartSvg />
              <span className="cusBedge absolute -right-[5px] -top-[5px] rounded-full bg-[#ff0000] w-4 h-4 top right p-0 m-0 text-white font-mono text-[10px] text-center items-center">
                {props.cartItemCount}
              </span>
            </div>
            <div
              className={`top-0 right-0 xl:w-[25vw] md:w-[25vw] xs:w-[97vw] bg-white p-3 text-white fixed h-full shadow-xl ease-in-out duration-300 z-50 ${
                props.showSidebar
                  ? "translate-x-0 sideBarScroll"
                  : "translate-x-full"
              }`}
            >
              <div className="ttlCart flex items-center">
                <CrossHoverSvg props={props} />
                <h3
                  className=" text-gray-800 text-center w-full text-lg underline"
                  style={{ color: "#6a6a6a" }}
                >
                  Your cart ({props.cartItemCount})
                </h3>
              </div>
              <div className="mt-8" style={{ overflow: "auto", height: "75%" }}>
                {props.cartData?.length > 0 &&
                  props.cartData?.map((cart, index) => (
                    <div key={cart.id}>
                      <div className="flex">
                        <a>
                          <Image
                            src={cart.image}
                            width={150}
                            height={150}
                            alt="Traya Logo"
                            className="cursor-pointer"
                            loader={props.loader}
                            unoptimized={true}
                            loading="lazy"
                          />
                        </a>
                        <div style={{ width: "80%" }}>
                          <span
                            className=" font-bold"
                            style={{ color: "#414042" }}
                          >
                            {cart.name}
                          </span>
                          <div>
                            <div className="quantity mt-2">
                              <button
                                className="border-grey border-2 rounded border-solid mr-1 align-top relative"
                                style={{ width: 25, height: 25 }}
                                onClick={() => props.decItem(cart, index)}
                              >
                                <span className="absolute -top-[13px] left-[5px] text-[#000] text-[22px] font-bold">
                                  _
                                </span>
                              </button>
                              <input
                                type="text"
                                className="border-grey border-2 border-solid mr-1 align-top"
                                style={{
                                  width: 45,
                                  height: 25,
                                  color: "#000",
                                  textAlign: "center",
                                }}
                                value={cart.itemCount}
                              />
                              <button
                                className="border-grey border-2 rounded border-solid align-top relative"
                                style={{ width: 25, height: 25 }}
                                onClick={() => props.incItem(cart, index)}
                              >
                                <span className="absolute -top-[7px] left-[5px] text-[#000] text-[22px] font-bold">
                                  +
                                </span>
                              </button>
                            </div>
                            <div className="flex justify-between p-1 py-5">
                              <div className="align-top">
                                <span
                                  className="text-md font-bold align-top"
                                  style={{ color: "#618e3d" }}
                                >
                                  {props.formatter(cart.totalPrice)} /-
                                </span>
                              </div>
                              <div>
                                <button
                                  className="align-top"
                                  style={{ width: 25, height: 25 }}
                                  onClick={() => props.deleteItem(cart, index)}
                                >
                                  <div className="icon-trash">
                                    <div
                                      className="trash-lid"
                                      style={{ backgroundColor: "#414042" }}
                                    ></div>
                                    <div
                                      className="trash-container"
                                      style={{ backgroundColor: "#414042" }}
                                    ></div>
                                    <div className="trash-line-1"></div>
                                    <div className="trash-line-2"></div>
                                    <div className="trash-line-3"></div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                {props.cartItemsData?.length < 1 && (
                  <>
                    <h3
                      className="font-bold text-center text-lg"
                      style={{ color: "#414042" }}
                    >
                      Your cart is currently empty
                    </h3>
                  </>
                )}
              </div>
              {props.cartData?.length > 0 && (
                <>
                  <div className="flex justify-between py-2">
                    <span
                      className="text-lg font-bold align-top"
                      style={{ color: "#000" }}
                    >
                      Total
                    </span>
                    <span
                      className="text-xl font-bold align-top"
                      style={{ color: "#618e3d" }}
                    >
                      {props.formatter(props.totalPrice)} /-
                    </span>
                  </div>

                  <button
                    className=" flex w-full py-2 px-5 rounded justify-center "
                    style={{ background: "#618e3d" }}
                    onClick={() => {
                      !props.placeOrderClicked && props.placeOrder();
                    }}
                  >
                    {props.placeOrderClicked && <DynamicLoader />}
                    <span className="pr-2">Place Order</span>
                    <span className="flex">
                      <img
                        className="pr-2"
                        src="https://cdn.gokwik.co/v4/images/upi-icons.svg"
                        alt="upi"
                      />
                      <img
                        src="https://cdn.gokwik.co/v4/images/right-arrow.svg"
                        alt="upi"
                      />
                    </span>
                  </button>
                  <span
                    style={{
                      color: "#618e3d",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    100% Purchase Protection
                  </span>
                </>
              )}
            </div>
          </div>
          <div
            style={{ cursor: "pointer", padding: "1px 6px" }}
            onClick={() => openNav()}
            className="self-center"
          >
            <BurgerMenuSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTestCart;
