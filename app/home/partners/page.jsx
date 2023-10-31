"use client";

import { useEffect, useState } from "react";
import { CDN_BASE_URL } from "@constants/config";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/navigation";
import Image from "next/image";
import FooterPage from "@/components/landingPage/landingFooter";
import Head from "next/head";
import { trayalogo } from "@/constants/constants";
import { fredoka } from "@/constants/fontConfig";

function FemaleComponent() {
  const [formStatus, setFormStatus] = useState("");
  const [tabClosed, setTabClosed] = useState("");
  const [isReload, setIsReload] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const frame676 = `${CDN_BASE_URL}website_images/localImages/frame676.webp`;
  const [colorChange, setColorchange] = useState(false);
  const router = useRouter();
  const changeNavbarColor = () => {
    if (window.scrollY >= 70) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }
  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type == 1) {
        setIsReload(true);
      }
    }
    const val = window.localStorage.getItem("form_status");
    const tabStatus = window.localStorage.getItem("tabclosed");
    if (tabStatus && val) {
      setTabClosed(tabStatus);
      setFormStatus(val);
      window.addEventListener(
        "beforeunload",
        window.localStorage.setItem("tabclosed", "true")
      );
    }
    window.addEventListener(
      "beforeunload",
      window.localStorage.setItem("tabclosed", "true")
    );

    const storedShowLandingPage = localStorage.getItem("showLandingPage");
    if (storedShowLandingPage === "false" && !isReload) {
      setShowLandingPage(false);
    } else {
      setShowLandingPage(true);
    }
    setIsLoading(false);
  }, []);

  const handleStartHairTest = () => {
    localStorage.setItem("showLandingPage", "false");
    setShowLandingPage(false);
  };
  const reDirectFunction = async (val) => {
    Cookies.set(
      "affiliate_name",
      Router.router.state.query.utm_campaign
        ? Router.router.state.query.utm_campaign
        : ""
    );
    const UTM = Cookies.get("__TRAYA_UTM__");
    const tempUTM = UTM?.split("&")
      ?.find((val) => val.includes("page"))
      ?.replace("page=", "");

    if (val === "refill") {
      Cookies.remove("_fw_crm_v");
      Cookies.remove("__TRAYA_UTM__");
      window.sessionStorage.clear();
      window.localStorage.clear();
      await fetch("/api/clearCookies", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: "_fw_crm_v" }),
      });
      window.location.assign(
        `/home/partners/questions?utm_source=${
          Router.router.state.query.utm_source
            ? Router.router.state.query.utm_source
            : ""
        }&utm_medium=${
          Router.router.state.query.utm_medium
            ? Router.router.state.query.utm_medium
            : ""
        }&utm_campaign=${
          Router.router.state.query.utm_campaign
            ? Router.router.state.query.utm_campaign
            : ""
        }&page=partners`
      );
    }
    if (val === "editAgain") {
      window.localStorage.setItem("tabclosed", false);
      Router.push(
        `/home/partners/questions?utm_source=${
          Router.router.state.query.utm_source
            ? Router.router.state.query.utm_source
            : ""
        }&utm_medium=${
          Router.router.state.query.utm_medium
            ? Router.router.state.query.utm_medium
            : ""
        }&utm_campaign=${
          Router.router.state.query.utm_campaign
            ? Router.router.state.query.utm_campaign
            : ""
        }&page=partners"`
      );
    }
  };
  if (isLoading) {
    return null;
  }
  const logoURL = () => {
    if (router.pathname == "/home/partners/questions") {
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
    } else if (router.pathname == "/home/partners/thankyou") {
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
  return (
    <>
      <Head>
        <title>Traya customized hair test - salon partner.</title>
        <meta
          name="title"
          content="Traya customized hair test - salon partner."
        />
        <meta property="og:site_name" content="Traya Health" />
        <meta
          property="og:title"
          content="Traya customized hair test - salon partner."
        />
        <meta
          name="twitter:title"
          content="Traya customized hair test - salon partner."
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:image:secure_url"
          content={`${CDN_BASE_URL}website_images/localImages/traya_logo.webp`}
        />
        <meta property="og:image:width" content="603" />
        <meta property="og:image:height" content="189" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:image"
          content={`${CDN_BASE_URL}website_images/localImages/traya_logo.webp`}
        ></meta>
      </Head>
      {/* <div className=" w-full h-screen  overflow-hidden fixed">
        <div className=" lg:h-screen flex  flex-col lg:flex-row md:flex-col  items-center content-center lg:justify-end mt-[15%] sm:mt-0">
          <div className=" lg:mr-[15%] mt-[10%] lg:mt-0 px-[10%]">
            <div className=" md:w-max font-semibold font-sans text-custom-black text-2xl  pb-[10%]">
              Treat your hair loss
              <br />
              problems
              <span className="text-brand-accent font-bold">
                {" "}
                with a quick test.
              </span>
            </div>
            {tabClosed === "true" && formStatus !== "filled" && (
              <button
                className="flex mb-2  w-[100%] justify-center border border-brand-accent bg-brand-accent text-white hover:bg-white hover:text-brand-accent py-2.5 px-8 xs:px-4  md:text-xl sm:text-[15px] font-bold rounded-xl"
                onClick={() => reDirectFunction("editAgain")}
              >
                Resume Form
              </button>
            )}
            <button
              className="flex  w-[100%] justify-center border border-brand-accent bg-brand-accent text-white hover:bg-white hover:text-brand-accent py-2.5 px-8 xs:px-4  md:text-xl sm:text-[15px] font-bold rounded-xl"
              onClick={() => reDirectFunction("refill")}
            >
              Start Hair Test
            </button>
          </div>
          <div>
            <img src={frame676} />
          </div>
        </div>
      </div> */}
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
            {/* <div
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
            </div> */}
          </div>
        </div>
      </nav>
      <div className={`form-hero  xl:mb-1 lg:mb-2 xs:mb-4`}>
        <div className={`block xl:hidden lg:hidden md:hidden`}>
          <Image
            src={`https://dvv8w2q8s3qot.cloudfront.net/website_images/male_landing_page/Group_102353013.webp`}
            alt="Traya banner mobile"
            objectFit="cover"
            layout="responsive"
            priority={true}
            height={651}
            width={390}
          />
        </div>
        <div className="hidden md:block lg:block xl:block">
          <Image
            src={`https://dvv8w2q8s3qot.cloudfront.net/website_images/male_landing_page/Group_102353010_1_1.webp`}
            alt="Traya banner desktop"
            height={685}
            objectFit="cover"
            layout="responsive"
            width={1500}
            priority={true}
            unoptimized={true}
          />
        </div>
        <div className="xl:px-16 lg:px-16  md:px-8 px-5 absolute 2xl:top-[25%] xl:top-[20%] lg:top-[10%] md:top-1/5 top-16">
          <h2
            className={`xs:leading-[20px] xl:leading-none lg:leading-none md:leading-none xl:text-[35px] lg:text-[35px] md:text-[35px] text-lg ${fredoka.variable}`}
            style={{ color: "#303032" }}
          >
            Doctor Recommended
            <br /> Hair loss treatment
          </h2>
          <p
            className="xs:leading-[22px] xl:leading-none lg:leading-none md:leading-none xl:text-[40px] md:text-3xl text-[21px] font-Nunito font-bold my-6 xs:my-2 xs:py-1 xl:py-5 lg:py-5"
            style={{ color: "#303032" }}
          >
            Know The Root Cause
            <br />
            Of Your Hair Loss
          </p>
          <hr
            className="border-4 w-3/12 rounded-full my-5 xs:my-2 "
            style={{ borderColor: "#3e3e3e" }}
          />
          <h2
            className="xl:text-3xl lg:text-2xl font-Nunito my-6 xs:my-1 xs:py-1 xl:py-5 lg:py-5"
            style={{ color: "#303032" }}
          >
            93% saw results*
          </h2>
          <div className="flex flex-wrap flex-row">
            {/* {tabClosed === "true" && formStatus !== "filled" && (
              <button
                className="w-fit flex bg-[#414042] text-white hover:bg-white hover:text-black py-2.5 px-5 text-[16px] md:text-xl lg:text-xl xl:text-xl font-bold rounded-lg  uppercase"
                id="hairtestcta2-native"
                onClick={() => reDirectFunction("editAgain")}
              >
                Resume FormN
              </button>
            )} */}
            <button
              className="w-fit flex bg-[#414042] text-white hover:bg-white hover:text-black py-2.5 px-5 text-[16px] md:text-xl lg:text-xl xl:text-xl font-bold rounded-lg  uppercase"
              id="hairtestcta2-native"
              onClick={() => reDirectFunction("refill")}
            >
              Take The Hair Test{" "}
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
            </button>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default FemaleComponent;
