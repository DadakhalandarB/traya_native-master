"use client";

import {
  TRAYA_BOOK_CALL_PAGE,
  TRAYA_GUEST_HOME_URL,
  TRAYA_HINDI_HOME_URL,
  TRAYA_HOME_URL,
} from "@/constants/config";
import { TRAYA_MINI_HOME_URL } from "@/constants/constants";
import {
  CITATION,
  DOCTOR_APPOINTMENT_FORM,
  FEMALE,
  GUEST_FORM,
  HINDI_FORM,
  MINI_FORM,
} from "@/constants/routes";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const traya = require("@assets/images/traya.png");
const traya2x = require("@assets/images/traya@2x.png");
const traya3x = require("@assets/images/traya@3x.png");

const Header = () => {
  const genericHeaderUrl = [
    "/book-appointment",
    "/reschedule-slot",
    "/doctor-appointment",
    "/payu-success",
    "/payu-failure",
    "/thank-you/slot-booking",
    "/thank-you/final",
    "/thank-you/cart",
    "/nextcart",
    "/feedback",
    "/csat",
    "/dietplan",
    "/affiliates/thankyou",
    "doctor-landingV1/appointment",
    "doctor-landingV2/appointment",
  ];
  const pathnameIn = usePathname();
  const [isGenericHeader, setIsGenericHeader] = useState(true);
  useEffect(() => {
    console.log("pathnameIn", pathnameIn);
    console.log(
      "window.location.pathname.split(/)[0]",
      window.location.pathname
    );
    if (
      window.location &&
      genericHeaderUrl.some((path) => window.location.pathname.includes(path))
    ) {
      setIsGenericHeader(true);
    } else {
      setIsGenericHeader(false);
    }
  }, []);

  const pathname = usePathname();
  const router = useRouter();
  const logoURL = () => {
    if (pathname == "/femaleV2/question") {
      router.push({
        pathname: "/femaleV2",
      });
    } else if (pathname == "/female") {
      router.push({
        pathname: "/pages/female",
      });
    } else if (pathname == "/home/question") {
      router.push({
        pathname: "/home",
      });
    } else if (pathname == "/questions") {
      router.push({
        pathname: TRAYA_HOME_URL,
      });
    } else if (pathname == "/doctor-appointment") {
      router.push({
        pathname: TRAYA_HOME_URL,
      });
    } else if (pathname == "/home/partners/questions") {
      router.push({
        pathname: `/home/partners?utm_source=${
          router.query.utm_source ? router.query.utm_source : ""
        }&utm_medium=${
          router.query.utm_medium ? router.query.utm_medium : ""
        }&utm_campaign=${
          router.query.utm_campaign ? router.query.utm_campaign : ""
        }&page=partners`,
      });
    } else if (pathname == "/home/partners/thankyou") {
      router.push({
        pathname: `/home/partners?utm_source=${
          router.query.utm_source ? router.query.utm_source : ""
        }&utm_medium=${
          router.query.utm_medium ? router.query.utm_medium : ""
        }&utm_campaign=${
          router.query.utm_campaign ? router.query.utm_campaign : ""
        }&page=partners`,
      });
    }

    switch (typeof window !== "undefined" ? window.location.pathname : "") {
      case DOCTOR_APPOINTMENT_FORM:
        router.push(TRAYA_BOOK_CALL_PAGE);
      case GUEST_FORM:
        router.push(TRAYA_GUEST_HOME_URL);
      case HINDI_FORM:
        router.push(TRAYA_HINDI_HOME_URL);
      case MINI_FORM:
        router.push(TRAYA_MINI_HOME_URL);
      default:
        switch (pathname) {
          case "/femaleV2/question":
            router.push(`${TRAYA_HOME_URL}femaleV2`);
            break;
          case "/female":
            router.push(`${TRAYA_HOME_URL}pages/female`);
            break;
          case "/home/question":
            router.push({
              pathname: "/home",
            });
            break;
          //   case "/questions":
          //   case "/doctor-appointment/thankyou":
          //   case "/v2/book-appointment":
          //   case "/reschedule/doctor-appointment":
          //   case "/pages/reschedule-slot/[id]":
          //     router.push(TRAYA_HOME_URL);
          //     break;
          default:
            router.push(TRAYA_HOME_URL);
        }
    }
  };
  return (
    <div
      className={`${
        isGenericHeader ? "h-20 bg-neutral-700" : "h-24 bg-[#414042]"
      }`}
    >
      {pathname == FEMALE ? (
        <div className="relative h-full px-4 pt-4 mx-auto overflow-hidden sm:px-8 lg:px-12 max-w-screen-2xl">
          <a
            onClick={() => logoURL()}
            id="traya_logo_1"
            className="inline-flex items-center cursor-pointer"
          >
            <picture>
              <source srcSet={traya.default} />
              <source media="(min-width: 768px)" srcSet={traya2x.default} />
              <source media="(min-width: 1024px)" srcSet={traya3x.default} />
              <Image src={traya.default} alt="traya" height={30} width={96} />
            </picture>
          </a>
          {!isGenericHeader && (
            <div className="h-4 mt-2">
              {/* <p className="pt-0 text-lg font-bold text-white text-left xl:pl-0 md:text-left xl:text-left">
                93% saw results*
              </p>
              <p className="text-[7.5px] text-white">
                *As per an internal study conducted by Traya in December 2022
              </p> */}
              <p className="text-[14px] font-sans font-[400] text-white">
                This hair test is co-created with doctors
              </p>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`h-full px-4 mx-auto overflow-hidden sm:px-8 lg:px-12 ${
            isGenericHeader ? "relative" : ""
          }`}
        >
          {pathname !== CITATION && (
            <>
              <div className="h-[4.5rem] flex items-center justify-between">
                <a
                  onClick={() => logoURL()}
                  id="traya_logo_1"
                  className="inline-flex items-center cursor-pointer"
                >
                  <picture>
                    <source srcSet={traya.default} />
                    <source
                      media="(min-width: 768px)"
                      srcSet={traya2x.default}
                    />
                    <source
                      media="(min-width: 1024px)"
                      srcSet={traya3x.default}
                    />
                    <Image
                      src={traya.default}
                      alt="traya"
                      height={40}
                      width={96}
                    />
                  </picture>
                </a>

                <a
                  onClick={() => logoURL()}
                  id="exit"
                  className="text-2xl tracking-wide text-gray-50 cursor-pointer"
                >
                  Exit
                </a>
              </div>
              {!isGenericHeader && (
                <div className="h-4 -mt-2">
                  {/* <p className="pt-0 text-lg font-bold text-white text-left xl:pl-0 md:text-left xl:text-left">
                    93% saw results*
                  </p>
                  <p className="text-[7.5px] text-white">
                    *As per an internal study conducted by Traya in December
                    2022
                  </p> */}
                  <p className="text-[14px] font-sans font-[400] text-white">
                    This hair test is co-created with doctors
                  </p>
                </div>
              )}
            </>
          )}
          {pathname === CITATION && (
            <>
              <div className="mt-[8%] md:mt-[4%] xl:mt-[2%]">
                <p className="pt-0 text-3xl font-bold text-white text-left xl:pl-0 md:text-left xl:text-left">
                  References Cited
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
