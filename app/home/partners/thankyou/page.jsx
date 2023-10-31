"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FooterPage from "@/components/landingPage/landingFooter";
import MaleReview from "@/components/generic/MaleReview";
import OurDoctors from "@/components/generic/OurDoctors";
import { fetchRequest } from "@helpers/fetchRequest";
import { NEW_RESULT_API } from "@constants/urls";
import { fredoka, nunito } from "@/constants/fontConfig";
import { trayalogo } from "@/constants/constants";


const CalendlyThankYouPage = () => {
  const router = useRouter();
  const [finalReport, setFinalReport] = useState([]);
  const [gender, setGender] = useState("");
  const [defaultRootCause, setDefaultRootCause] = useState([]);
  const [maleHairRootCauses, setMaleRootCauses] = useState([]);

  const logoURL = () => {
    if (router.pathname == "/home/partners/thankyou") {
      return (
        typeof window !== "undefined" &&
        window.location.assign(
          `/home/partners?utm_source=${
            router.query.utm_source ? router.query.utm_source : ""
          }&utm_medium=${
            router.query.utm_medium ? router.query.utm_medium : ""
          }&utm_campaign=${
            router.query.utm_campaign ? router.query.utm_campaign : ""
          }&page=partners`
        )
      );
    }
  };

  useEffect(() => {
    userDetail();
  }, []);

  const userDetail = async () => {
    try {
      let syntheticId = window.localStorage.getItem("syntheticId");
      const _res = await fetchRequest(NEW_RESULT_API(syntheticId));
      console.log(_res);
      if (_res.hasError) setFinalReport(null);
      else {
        window.localStorage.setItem(
          "caseId",
          _res?.data?.User_Analysis?.case_id
        );
        setFinalReport(_res.data);
        setGender(_res.data.User_Analysis.gender);
        setDefaultRootCause(_res.data.root_causes.defaultRootCause);
        setMaleRootCauses(_res.data.root_causes.defaultRootCause);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <nav
        className={"bg-custom-black w-full fixed top-0 z-50 pt-[0.3rem] pb-2"}
      >
        <div className="flex flex-wrap justify-between items-center px-4 md:px-6 xl:px-12">
          <div className="w-full flex flex-row justify-between">
            <div>
              <a
                // href="/home"
                href={`/home/partners`}
                className="flex items-center mt-2 ml-7 xs:ml-2 xl:w-auto lg:w-auto md:w-auto w-24"
              >
                <Image
                  src={trayalogo}
                  alt="Traya Logo"
                  className="cursor-pointer"
                  unoptimized={true}
                  width={128}
                  height={41}
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
                <a
                  onClick={() => logoURL()}
                  className="flex cursor-pointer text-[24px] text-[#fff] hover:bg-[#3e3e3e] hover:text-white p-2 font-bold rounded-lg uppercase"
                >
                  Exit
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-between w-screen max-w-screen-md min-h-screen gap-4 px-4 mx-auto">
        <div className="flex flex-col justify-center flex-1 gap-4">
          <div className="mt-">
            <h2 className={`${fredoka.variable} text-[30px] xl:text-[55px] lf:text-[55px] md:text-[40px] font-bold text-center text-brand-dark"`}>
              Thank you,{" "}
              {finalReport?.User_Analysis?.first_name
                ? finalReport?.User_Analysis?.first_name
                : ""}
              !
            </h2>
            <p className={`text-[20px] xl:text-[24px] lg:text-[24px] md:text-[24px] ${nunito.variable} font-bold text-center text-brand-dark`}>
              We have recorded your response.
            </p>
          </div>

          <div className="w-16 h-2 mx-auto rounded-full bg-brand-dark"></div>
          <p className="mt-6 text-[20px]  text-center  text-brand-accent">
            We have sent your hair test result over watsapp
          </p>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center mt-24 mb-10">
        <h5 className="xl:text-[40px] xs:text-[24px] font-bold font-sans text-custom-black">
          Our Customers
        </h5>
      </div>
      <MaleReview />
      <div className="mb-5">
        <OurDoctors />
      </div>
      <FooterPage />
    </>
  );
};

export default CalendlyThankYouPage;
