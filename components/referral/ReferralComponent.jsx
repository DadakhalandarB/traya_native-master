"use client";

import { useState } from "react";
import FooterPage from "../landingPage/landingFooter";
import Header from "../productsComponents/headerBlackBG";
import Script from "next/script";
import Head from "next/head";
import { nunito } from "@/constants/fontConfig";
import Image from "next/image";

function ReferralComponent() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [discountHandle, setDiscountHandle] = useState("");

  const loaderProp = ({ src }) => {
    return src;
  };

  const HowItWorks = () => {
    document.getElementById("lovershare").style.display = "none";
    document.getElementById("how-works").style.display = "block";
  };
  const closeBox = () => {
    document.getElementById("lovershare").style.display = "block";
    document.getElementById("how-works").style.display = "none";
    document.getElementById("term-cond").style.display = "none";
  };

  const TermCon = () => {
    document.getElementById("lovershare").style.display = "none";
    document.getElementById("term-cond").style.display = "block";
  };
  return (
    <>
      <Head>
        <title>Referral – Traya</title>
        <meta name="title" content="Referral – Traya" />
        <meta name="description" content="" />
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
        page={"referral"}
      />
      <div className="  xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 lg:px-8 md:px-8 mx-auto relative xl:py-5 lg:py-4 mt-20 xl:mt-10 lg:mt-10 md:mt-10">
        <Image
          src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/referral_page_desktop_1600x_b12f0744-181d-41c3-9a13-1f1bababa17c.jpg?v=1663658426"
          className="w-full"
          width="100"
          height="100"
          alt="Tell them about us"
        />
        <h1
          className={`text-center text-2xl mx-auto ${nunito.variable} pt-6 pb-2 `}
          style={{ color: "#303032" }}
        >
          HOW DOES THIS WORK?
        </h1>
        <hr
          className="border-1 w-1/12 rounded-full mx-auto"
          style={{ borderColor: "#3e3e3e" }}
        />
      </div>
      <div className="flex flex-wrap xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 mx-auto relative ">
        <div className="w-full xl:w-4/12 md:w-4/12 lg:w-4/12">
          <Image
            src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Artboard_1_6739966e-5eaf-4f8a-85c3-388738c26ac2.jpg?v=1663658532"
            className="mx-auto w-full"
            width="100"
            height="100"
            alt="Get on the plan"
          />
        </div>
        <div className="w-full xl:w-4/12 md:w-4/12 lg:w-4/12">
          <Image
            src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Artboard_3_c71e9c7c-e0fa-4763-b63b-4356ab290956.jpg?v=1663658532"
            className="mx-auto w-full"
            width="100"
            height="100"
            alt="Invite Friends"
          />
        </div>
        <div className="w-full xl:w-4/12 md:w-4/12 lg:w-4/12">
          <Image
            src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Artboard_4_1b0675b8-1e67-4cf1-9925-936e08127c3f.jpg?v=1663658532"
            className="mx-auto w-full"
            width="100"
            height="100"
            alt="Get 20% off"
          />
        </div>
      </div>

      <div className="flex flex-wrap xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 lg:px-8 md:px-8 mx-auto relative bg-[#cadbe5] rounded-xl">
        <div className="bg-white w-11/12 xl:w-8/12 lg:w-8/12 md:w-8/12 my-10 mx-auto overflow-hidden loveshare-con">
          <div className="my-5 mb-0" id="lovershare">
            <h1
              className={`text-center  mx-auto ${nunito.variable} pb-2 text-2xl text-black font-semibold`}
              style={{ color: "#303032" }}
            >
              Love us ? Share with Friends
            </h1>
            <h1
              className={`text-center  mx-auto ${nunito.variable} pb-2  text-sm`}
              style={{ color: "#303032" }}
            >
              Share the love and get 20 % off on the next kit
            </h1>
            <input
              type="text"
              id="first_name"
              className="bg-[#f6f6f6] text-gray-900 text-sm rounded-lg block w-8/12 p-2.5 mx-auto"
              placeholder="Your Name*"
              required
            />
            <br />
            <input
              type="text"
              id="first_name"
              className="bg-[#f6f6f6] text-gray-900 text-sm rounded-lg block w-8/12 p-2.5 mx-auto"
              placeholder="Your Email*"
              required
            />
            <br />
            <input
              type="text"
              id="first_name"
              className="bg-[#f6f6f6] text-gray-900 text-sm rounded-lg block w-8/12 p-2.5 mx-auto"
              placeholder="Your Mobile Number*"
              required
            />
            <div className="flex items-start my-4 w-8/12 p-2.5 mx-auto">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-3 h-3 rounded referral-check"
                />
              </div>
              <label className="ml-2 text-sm font-medium text-[#6c757d]">
                Remember me!
              </label>
            </div>
            <button className="bg-[#cadae5] text-gray-900 text-sm font-bold rounded-lg block py-2 w-8/12 mx-auto">
              START
            </button>
            <div className="flex bg-[#f6f6f6] h-14 items-center text-center mx-auto justify-center how-it-works">
              <span
                className="text-sm border-r-[1px] border-black px-2 cursor-pointer"
                onClick={() => HowItWorks()}
              >
                How it works
              </span>
              <span
                className="text-sm px-2 cursor-pointer"
                onClick={() => TermCon()}
              >
                Terms & conditions
              </span>
            </div>
          </div>
          <div className="transform duration-500 inset-y-full" id="how-works">
            <div className="flex items-center bg-[#cadbe5]">
              <button
                type="button"
                data-dismiss="modal"
                aria-hidden="true"
                className={`${nunito.variable} text-2xl text-white font-semibold left-arrow-theme`}
                onClick={() => closeBox()}
              >
                ➜
              </button>
              <h1
                className={`text-center  mx-auto ${nunito.variable} pb-2 text-2xl text-black font-semibold`}
                style={{ color: "#303032" }}
              >
                How it works
              </h1>
            </div>

            <h1
              className={`  ${nunito.variable} pb-2  text-sm py-5 px-5`}
              style={{ color: "#303032" }}
            >
              1. Share this link or the code with your friends and family Anyone
              <br />
              <br />
              2. using your coupon code gets 20% off Every time someone uses
              your
              <br />
              <br />
              3. coupon code, you get a 20% discount coupon code You can redeem
              <br />
              <br />
              4. your 20% coupon code on any of your future purchases
              <br />
            </h1>
          </div>
          <div className="transform duration-500 inset-y-full" id="term-cond">
            <div className="flex items-center bg-[#cadbe5]">
              <button
                type="button"
                data-dismiss="modal"
                aria-hidden="true"
                className={`${nunito.variable} text-2xl text-white font-semibold left-arrow-theme`}
                onClick={() => closeBox()}
              >
                ➜
              </button>
              <h1
                className={`text-center  mx-auto ${nunito.variable} pb-2 text-2xl text-black font-semibold`}
                style={{ color: "#303032" }}
              >
                Terms & conditions
              </h1>
            </div>

            <h1
              className={`  ${nunito.variable} pb-2  text-sm py-5 px-5`}
              style={{ color: "#303032" }}
            >
              1. The guest (friend) should not be a Traya customer already to
              avail the referral discount.
              <br />
              <br />
              2. The referral discount will be given only on the successful
              purchase made by the guest (friend) for a min purchase value of
              ₹2,000.
              <br />
              <br />
              3. The guest (friend) must fill out the diagnosis form on the
              website and purchase a complete kit (above ₹2,000) to be eligible
              for the discount.
              <br />
              <br />
              4. The guest (friend) must shop for a minimum of ₹2,000 to avail
              the discount.
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 lg:px-8 md:px-8 mx-auto relative bg-[#f6f6f6] rounded-xl mt-10 ">
        <div className="my-10 mx-auto overflow-hidden referral-journey-con">
          <div className="my-5 mb-0">
            <h1
              className={`text-center  mx-auto ${nunito.variable} pb-2 text-2xl text-black font-semibold`}
              style={{ color: "#303032" }}
            >
              A journey becomes more fun with friends
            </h1>
            <hr
              className="border-4 w-2/12 rounded-full mx-auto"
              style={{ borderColor: "#000" }}
            />
            <div className="flex flex-wrap justify-between mt-9">
              <div className="flex w-72 lg:w-56 md:w-40 bg-[#cadbe5] rounded-lg py-11 lg:py-5 px-5 mx-5 items-center referral-journey">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/your-earn_40x_f90b94ca-0097-46f5-8226-14c5c95e9d2b.webp?v=1663658877"
                  width="55"
                  height="55"
                  alt="referral-journey Step1"
                />
                <h1 className="font-nunito text-lg md:text-sm text-[#414042]">
                  Step1: Enter your details below and generate your referral
                  link
                </h1>
              </div>

              <div className="flex w-72 lg:w-56 md:w-40 bg-[#cadbe5] rounded-lg py-11 lg:py-5 md:py-2 px-5 mx-5 items-center referral-journey">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Refer-your-friend_40x_9239c15c-6627-42c1-839a-501fcd372da7.webp?v=1663658876"
                  width="55"
                  height="55"
                  alt="referral-journey"
                />
                <h1 className="font-nunito text-lg md:text-sm text-[#414042]">
                  Step2: Copy the referral link and share it with your friends
                  using any of the given channels
                </h1>
              </div>

              <div className="flex w-72 lg:w-56 md:w-40 bg-[#cadbe5] rounded-lg py-11 lg:py-5 md:py-2 px-5 mx-5 items-center referral-journey">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/your-earn_40x_f90b94ca-0097-46f5-8226-14c5c95e9d2b.webp?v=1663658877"
                  width="55"
                  height="55"
                  alt="referral-journey Step2"
                />
                <h1 className="font-nunito text-lg md:text-sm text-[#414042]">
                  Step3: Voila! Now your friend can order using your link and
                  you get a 20% OFF once your friend places an order
                </h1>
              </div>
            </div>
            <hr
              className="border-4 w-1/12 rounded-full mx-auto mt-6"
              style={{ borderColor: "#000" }}
            />
            <h1
              className={`text-center  mx-auto ${nunito.variable} text-md text-black  `}
              style={{ color: "#303032" }}
            >
              Give your friend 20% off on their first order & get 20% off for
              yourself. The more friends you invite, the more you can save.
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 lg:px-8 md:px-8 mx-auto relative bg-[#f6f6f6] rounded-xl mt-12 ">
        <div className="my-10 mx-auto overflow-hidden referral-term ">
          <div className="my-5 mb-0">
            <h1
              className={` ${nunito.variable} pb-2 text-2xl text-black font-semibold`}
              style={{ color: "#303032" }}
            >
              Terms and conditions
            </h1>

            <div className="flex flex-wrap">
              <ol style={{ listStyle: "decimal" }} className="mx-8">
                <li className="text-lg ${nunito.variable} text-[#414042]">
                  The guest (friend) should not be a Traya customer already to
                  avail the referral discount.
                </li>
                <li className="text-lg font-nunito text-[#414042] mt-5">
                  The referral discount will be given only on the successful
                  purchase made by the guest (friend) for a min purchase value
                  of ₹2,000.
                </li>
                <li className="text-lg font-nunito text-[#414042] mt-5">
                  The guest (friend) must fill out the Traya hair test on the
                  website and purchase a complete kit (above ₹2,000) to be
                  eligible for the discount.
                </li>
                <li className="text-lg font-nunito text-[#414042] mt-5">
                  The guest (friend) must shop for a minimum of ₹2,000 to avail
                  the discount.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-9/12 lg:w-12/12 md:w-12/12 w-11/12 lg:px-8 md:px-8 mx-auto relative bg-[#cadbe5] rounded-xl py-10 mt-10">
        <div className="text-center mx-auto py-5">
          <h1 className="text-center mx-auto font-nunito pb-2 text-3xl text-custom-black font-semibold">
            FAQs
          </h1>
          <hr
            className="border-2 w-1/12 rounded-full mx-auto"
            style={{ borderColor: "#000" }}
          />
        </div>
        <div className="px-5">
          <div className="transition">
            <div className="flex  accordion-header cursor-pointer  space-x-5 items-center h-14 py-10">
              <i className="fas plus"></i>
              <h3 className="text-[20px] xl:text-2xl md:text-2xl lg:text-2xl font-bold leading-5 text-black">
                What is the validity of the referral code?
              </h3>
            </div>
            <div className="accordion-content  pt-0 overflow-hidden max-h-0  border-b-[1px] border-black">
              <p className="leading-6 font-light  text-justify text-[18px] py-5">
                It has an ongoing validity.
              </p>
            </div>
          </div>
          <div className="transition">
            <div className="flex  accordion-header cursor-pointer  space-x-5 items-center h-14 py-10">
              <i className="fas plus"></i>
              <h3 className="text-[20px] xl:text-2xl md:text-2xl lg:text-2xl font-bold leading-5 text-black">
                How many people can I refer to using my link?
              </h3>
            </div>
            <div className="accordion-content  pt-0 overflow-hidden max-h-0  border-b-[1px] border-black">
              <p className="leading-6 font-light  text-justify text-[18px] py-5">
                You can refer to as many people as you want using your link.
              </p>
            </div>
          </div>
          <div className="transition">
            <div className="flex  accordion-header cursor-pointer  space-x-5 items-center h-14 py-10">
              <i className="fas plus"></i>
              <h3 className="text-[20px] xl:text-2xl md:text-2xl lg:text-2xl font-bold leading-5 text-black">
                What benefits do I get for referring?
              </h3>
            </div>
            <div className="accordion-content  pt-0 overflow-hidden max-h-0  border-b-[1px] border-black">
              <p className="leading-6 font-light  text-justify text-[18px] py-5">
                Once your friend makes a successful purchase using your link you
                will get FLAT 20% off on the purchase of your next Traya
                Treatment Kit.
              </p>
            </div>
          </div>
          <div className="transition">
            <div className="flex  accordion-header cursor-pointer  space-x-5 items-center h-14 py-10">
              <i className="fas plus"></i>
              <h3 className="text-[20px] xl:text-2xl md:text-2xl lg:text-2xl font-bold leading-5 text-black">
                What benefits does the referee get?
              </h3>
            </div>
            <div className="accordion-content  pt-0 overflow-hidden max-h-0  border-b-[1px] border-black">
              <p className="leading-6 font-light  text-justify text-[18px] py-5">
                Once your friend makes a successful purchase using your link
                they get FLAT 20% off on a minimum purchase of ₹2000.
              </p>
            </div>
          </div>
          <div className="transition">
            <div className="flex  accordion-header cursor-pointer  space-x-5 items-center h-14 py-10">
              <i className="fas plus"></i>
              <h3 className="text-[20px] xl:text-2xl md:text-2xl lg:text-2xl font-bold leading-5 text-black">
                Can I transfer my referral coupon to someone else?
              </h3>
            </div>
            <div className="accordion-content  pt-0 overflow-hidden max-h-0  border-b-[1px] border-black">
              <p className="leading-6 font-light  text-justify text-[18px] py-5">
                No, the referral code is only valid on orders placed by you.
              </p>
            </div>
          </div>
          <div className="transition">
            <div className="flex  accordion-header cursor-pointer space-x-5 items-center h-14 py-10">
              <i className="fas plus"></i>
              <h3 className="text-[20px] xl:text-2xl md:text-2xl lg:text-2xl font-bold leading-5 text-black">
                On which products will the guest get a discount?
              </h3>
            </div>
            <div className="accordion-content  pt-0 overflow-hidden max-h-0  border-b-[1px] border-black">
              <p className="leading-6 font-light  text-justify text-[18px] py-5">
                The guest will get a 20% discount sitewide on a minimum purchase
                of ₹2000.
              </p>
            </div>
          </div>
        </div>
        <Script src="/accordion.js" strategy="beforeInteractive" />
      </div>

      <FooterPage />
    </>
  );
}

export default ReferralComponent;
