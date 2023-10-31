"use client"

import {
  TRAYA_HOME_URL,
  TRAYA_BOOK_CALL_PAGE,
  TRAYA_HINDI_HOME_URL,
} from "../constants/config";
import { TRAYA_MINI_HOME_URL } from "../constants/constants";
import {
  CITATION,
  DOCTOR_APPOINTMENT_FORM,
  FEMALE,
  GUEST_FORM,
  HINDI_FORM,
  MINI_FORM,
} from "../constants/routes";
import { TRAYA_GUEST_HOME_URL } from "./../constants/config";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { lazy } from "react";
const DynamicClarity = lazy(() => import("../constants/windowClarity"));

const Header = ({ showExit }) => {
  const [isGenericHeader, setIsGenericHeader] = useState(false);

  const router = useRouter();
  const logoURL = () => {
    if (router.pathname == "/femaleV2/question") {
      router.push({
        pathname: "/femaleV2",
      });
    } else if (router.pathname == "/female") {
      router.push({
        pathname: "/pages/female",
      });
    } else if (router.pathname == "/home/question") {
      router.push({
        pathname: "/home",
      });
    } else if (router.pathname == "/questions") {
      router.push({
        pathname: TRAYA_HOME_URL,
      });
    } else if (router.pathname == "/doctor-appointment") {
      router.push({
        pathname: TRAYA_HOME_URL,
      });
    } else if (router.pathname == "/home/partners/questions") {
      router.push({
        pathname: `/home/partners?utm_source=${router.query.utm_source ? router.query.utm_source : ""
          }&utm_medium=${router.query.utm_medium ? router.query.utm_medium : ""
          }&utm_campaign=${router.query.utm_campaign ? router.query.utm_campaign : ""
          }&page=partners`,
      });
    } else if (router.pathname == "/home/partners/thankyou") {
      router.push({
        pathname: `/home/partners?utm_source=${router.query.utm_source ? router.query.utm_source : ""
          }&utm_medium=${router.query.utm_medium ? router.query.utm_medium : ""
          }&utm_campaign=${router.query.utm_campaign ? router.query.utm_campaign : ""
          }&page=partners`,
      });
    }

    switch (typeof window !== "undefined" ? window.location.pathname : "") {
      case DOCTOR_APPOINTMENT_FORM:
        router.push({
          pathname: TRAYA_BOOK_CALL_PAGE,
        });
      case GUEST_FORM:
        router.push({
          pathname: TRAYA_GUEST_HOME_URL,
        });
      case HINDI_FORM:
        router.push({
          pathname: TRAYA_HINDI_HOME_URL,
        });
      case MINI_FORM:
        router.push({
          pathname: TRAYA_MINI_HOME_URL,
        });
      default:
        if (router.pathname == "/femaleV2/question") {
          router.push({
            pathname: `${TRAYA_HOME_URL}femaleV2`,
          });
        } else if (router.pathname == "/female") {
          router.push({
            pathname: `${TRAYA_HOME_URL}pages/female`,
          });
        } else if (router.pathname == "/home/question") {
          router.push({
            pathname: "/home",
          });
        } else if (router.pathname == "/questions") {
          router.push({
            pathname: TRAYA_HOME_URL,
          });
        } else if (router.pathname == "/doctor-appointment/thankyou") {
          router.push({
            pathname: TRAYA_HOME_URL,
          });
        } else if (router.pathname == "/v2/book-appointment") {
          router.push({
            pathname: TRAYA_HOME_URL,
          });
        } else if (router.pathname == "/reschedule/doctor-appointment") {
          router.push({
            pathname: TRAYA_HOME_URL,
          });
        } else if (router.pathname == "/pages/reschedule-slot/[id]") {
          router.push({
            pathname: TRAYA_HOME_URL,
          });
        } else {
          router.push({
            pathname: TRAYA_HOME_URL,
          });
        }
    }
  };

  useEffect(() => {
    if (
      (window.location &&
        (window.location.pathname.includes("book-appointment") ||
          window.location.pathname.includes("reschedule-slot") ||
          window.location.pathname.includes("doctor-appointment") ||
          window.location.pathname.includes("payu-success") ||
          window.location.pathname.includes("payu-failure"))) ||
      window.location.pathname.includes("thank-you/slot-booking") ||
      window.location.pathname.includes("thank-you/final") ||
      window.location.pathname.includes("thank-you/cart") ||
      window.location.pathname.includes("nextcart") ||
      window.location.pathname.includes("feedback") ||
      window.location.pathname.includes("csat") ||
      window.location.pathname.includes("dietplan") ||
      window.location.pathname.includes("affiliates/thankyou")
    ) {
      setIsGenericHeader(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Traya Dx Hair Diagnosis</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DynamicClarity />

      <section
        className={`${isGenericHeader ? "h-20 bg-neutral-700" : "h-24 bg-[#414042]"
          }`}
      >
        {router.pathname == FEMALE ? (
          <div className="relative h-full px-4 pt-4 mx-auto overflow-hidden sm:px-8 lg:px-12 max-w-screen-2xl">
            <a
              onClick={() => logoURL()}
              id="traya_logo_1"
              className="inline-flex items-center cursor-pointer"
            >
              <Image
                src={require("../assets/images/traya.png").default}
                alt="traya"
                height={30}
                width={96}
              />
            </a>
            {!isGenericHeader && (
              <div className="h-4 mt-2">
                <p className="text-[14px] font-sans font-[400] text-white">
                  This hair test is co-created with doctors
                </p>
              </div>
            )}
          </div>
        ) : (
          <div
            className={`h-full px-4 mx-auto overflow-hidden sm:px-8 lg:px-12 ${isGenericHeader ? "relative" : ""
              }`}
          >
            {router.pathname !== CITATION && (
              <>
                <div className="h-[4.5rem] flex items-center justify-between">
                  <a
                    onClick={() => logoURL()}
                    id="traya_logo_1"
                    className="inline-flex items-center cursor-pointer"
                  >
                    <Image
                      src={require("../assets/images/traya.png").default}
                      alt="traya"
                      height={30}
                      width={96}
                    />
                  </a>
                  {showExit && (
                    <a
                      onClick={() => logoURL()}
                      id="exit"
                      className="text-2xl tracking-wide text-gray-50 cursor-pointer"
                    >
                      Exit
                    </a>
                  )}
                </div>
                {!isGenericHeader && (
                  <div className="h-4 -mt-2">
                    <p className="text-[14px] font-sans font-[400] text-white">
                      This hair test is co-created with doctors
                    </p>
                  </div>
                )}
              </>
            )}
            {router.pathname === CITATION && (
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
      </section>
    </>
  );
};
export default Header;
