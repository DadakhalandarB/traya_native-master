"use client";

import { useEffect, useState } from "react";
import { FiPhoneCall, FiClock, FiCalendar } from "react-icons/fi";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import { TRAYA_HOME_URL } from "@constants/config";
import encryptMD5 from "@constants/encryptMD5";
import { useRouter } from "next/navigation";
import { getCurrentTimeInReadableForm } from "@helpers/timeFormatter";
import { moengageTrackEvent } from "@helpers/handleMoengage";
import { traya, traya2x, traya3x } from "@/constants/constants";

const DoctorAppointmentThankYou = () => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [view, setView] = useState(false);
  const router = useRouter();

  useEffect(() => {
    var priceVal;
    if (router.pathname == "/doctor-landingV1/thankyou") {
      priceVal = "499";
      // freshTrackEventV2("landed_thank_you_page", {
      //   timestamps: getCurrentTimeInReadableForm(),
      //   url: `https://form.traya.health/doctor-landingV1/appointment`,
      // });
      moengageTrackEvent("landed_thank_you_page", {
        timestamps: getCurrentTimeInReadableForm(),
        url: `https://form.traya.health/doctor-landingV1/appointment`,
      });
    } else if (router.pathname == "/doctor-landingV2/thankyou") {
      priceVal = "399";
      // freshTrackEventV2("landed_thank_you_page", {
      //   timestamps: getCurrentTimeInReadableForm(),
      //   url: `https://form.traya.health/doctor-landingV2/appointment`,
      // });
      moengageTrackEvent("landed_thank_you_page", {
        timestamps: getCurrentTimeInReadableForm(),
        url: `https://form.traya.health/doctor-landingV2/appointment`,
      });
    } else if (router.pathname == "/doctor-landingV3/thankyou") {
      priceVal = "299";
      // freshTrackEventV2("landed_thank_you_page", {
      //   timestamps: getCurrentTimeInReadableForm(),
      //   url: `https://form.traya.health/doctor-landingV3/appointment`,
      // });
      moengageTrackEvent("landed_thank_you_page", {
        timestamps: getCurrentTimeInReadableForm(),
        url: `https://form.traya.health/doctor-landingV3/appointment`,
      });
    } else {
      priceVal = "499";
      // freshTrackEventV2("landed_thank_you_page", {
      //   timestamps: getCurrentTimeInReadableForm(),
      //   url: `https://form.traya.health/doctor-appointment`,
      // });
      moengageTrackEvent("landed_thank_you_page", {
        timestamps: getCurrentTimeInReadableForm(),
        url: `https://form.traya.health/doctor-appointment`,
      });
    }
    let _date = window.localStorage.getItem("doctor_app_date");
    setDate(_date);
    let _startTime = window.localStorage.getItem("doctor_app_startTime");
    setStartTime(_startTime);
    let _doctorName = window.localStorage.getItem("doctor_app_name");
    setDoctorName(_doctorName);

    if (_date) {
      let email = window.localStorage.getItem("email");
      let phone = window.localStorage.getItem("phone");
      let transaction_id = window.localStorage.getItem("tid");
      let caseId = window.localStorage.getItem("ca_id");
      let user_synthetic_id = window.localStorage.getItem("user_syn");
      const encryptedEmail = email ? encryptMD5(email.trim()).toString() : "";
      const encryptedPhone = phone ? encryptMD5(phone.trim()).toString() : "";
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({ ecommerce: null });
      // Add the `view_item_list` event and associated data to the dataLayer

      window.dataLayer.push({
        event: "Purchase",
        ecommerce: {
          transaction_id: transaction_id ? transaction_id : "",
          value: priceVal,
          currency: "INR",
          items: [
            {
              item_name: "Doctor Appointment",
              item_brand: "Traya Health",
              item_category: "Consultation",
              price: priceVal,
              quantity: 1,
            },
          ],
        },
        PageName: "Thank You",
        JourneyType: "Appointment",
        EID: encryptedEmail,
        MID: encryptedPhone,
        NAMID: phone ? phone.trim() : "",
        NAEID: email ? email.trim() : "",
        case_id: caseId ? caseId : "",
        user_id: user_synthetic_id ? user_synthetic_id : "",
        Section: "Transaction",
      });
      // freshTrackEventV2("landed_thank_you_page", {
      //   timestamps: getCurrentTimeInReadableForm(),
      //   case_id: caseId,
      // });
    }

    document.cookie =
      "ACCESS_TOKEN" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "LOGIN_PHONE_NO" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "DOCTOR_LANDING" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }, []);

  useEffect(() => {
    if (isMobile) {
      setView(true);
    }
  }, []);

  return (
    <>
      <section className={`bg-brand-dark`}>
        <div
          className={`h-full px-4 mx-auto overflow-hidden sm:px-8 lg:px-12 relative `}
        >
          <div className="h-20 flex items-center justify-between bg-brand-dark ">
            <a
              // onClick={() => window.location.assign(TRAYA_HOME_URL)}
              onClick={() => {
                if (router.pathname == "/doctor-landingV1/thankyou") {
                  router.replace("/doctor-landingV1");
                } else if (router.pathname == "/doctor-landingV2/thankyou") {
                  router.replace("/doctor-landingV2");
                } else if (router.pathname == "/doctor-landingV3/thankyou") {
                  router.replace("/doctor-landingV3");
                } else {
                  window.location.assign(TRAYA_HOME_URL);
                }
              }}
              id="traya_logo_1"
              className="inline-flex items-center cursor-pointer"
            >
              <picture>
                <source srcSet={traya.default} />
                <source media="(min-width: 768px)" srcSet={traya2x.default} />
                <source media="(min-width: 1024px)" srcSet={traya3x.default} />
                <Image
                  src={traya.default}
                  alt="traya"
                  priority={true}
                  height={40}
                  width={128}
                />
              </picture>
            </a>
            <a
              // onClick={() => window.location.assign(TRAYA_HOME_URL)}
              onClick={() => {
                if (router.pathname == "/doctor-landingV1/thankyou") {
                  router.replace("/doctor-landingV1");
                } else if (router.pathname == "/doctor-landingV2/thankyou") {
                  router.replace("/doctor-landingV2");
                } else if (router.pathname == "/doctor-landingV3/thankyou") {
                  router.replace("/doctor-landingV3");
                } else {
                  window.location.assign(TRAYA_HOME_URL);
                }
              }}
              id="exit"
              className="text-2xl tracking-wide text-gray-50 cursor-pointer"
            >
              Exit
            </a>
          </div>
        </div>
      </section>
      <div className="overflow-y-hidden w-full h-full flex items-center justify-center mt-[25%] xl:mt-[5%]">
        <div className="flex flex-col items-center justify-center w-full p-4 md:mt-4 overflow-y-hidden">
          <div className="flex flex-col w-11/12 md:w-9/12 lg:w-9/12 px-2 md:px-4 xl:px-4 py-6 bg-custom-lightgrey shadow-lg shadow-gray-500/50 rounded-2xl">
            {/* {view ? ( */}
            <p className="font-sans mx-2 text-[24px] md:text-4xl lg:text-4xl font-[900] text-brand-dark block xl:hidden lg:hidden md:block">
              Thank you for <br />
              choosing Traya!
            </p>
            {/* ) : ( */}
            <p className="font-sans mx-2 text-[24px] md:text-4xl lg:text-4xl font-[900] text-brand-dark hidden md:hidden lg:block xl:block">
              Thank you for choosing Traya!
            </p>
            {/* )} */}
            <p className="font-sans p-3 text-[16px] md:text-2xl lg:text-3xl font-[400] text-[#434343]">
              You are all set for your upcoming audio consultation session with{" "}
              {doctorName}
            </p>

            <div className="flex flex-col items-start justify-start mt-[4%] xl:mt-[2%]">
              <div className="flex ml-3 md:ml-4 xl:ml-6 flex text-[16px] font-[400] text-[#434343] mb-6">
                <FiPhoneCall color="#434343" size={17} /> &nbsp;
                <p className="ml-1">Audio Call</p>
              </div>
              <div className="flex ml-3 md:ml-4 xl:ml-6 flex text-[16px] font-[400] text-[#434343] mb-6">
                <FiCalendar color="#434343" size={18} />
                &nbsp; <p className="ml-1">{date}</p>
              </div>
              <div className="flex ml-3 md:ml-4 xl:ml-6 flex text-[16px] font-[400] text-[#434343] mb-6">
                <FiClock color="#434343" size={18} />
                &nbsp;
                <p className="ml-1">{startTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DoctorAppointmentThankYou;
