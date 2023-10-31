import { nunito } from "@/constants/fontConfig";
import useScreenSize from "@/hooks/useScreenSize";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import FooterEndRow from "./FooterEndRow";
import LowerFooter from "./LowerFooter";
import { AppStoreIcon, GooglePlayIcon } from "@/constants/constants";



function FooterPage() {
  const [pageURL, setPageURL] = useState("");

  useEffect(() => {
    const UTM = Cookies.get("__TRAYA_UTM__");
    const tempUTM = UTM?.split("&")
      ?.find((val) => val.includes("page"))
      ?.replace("page=", "");
    if (tempUTM === "home") {
      setPageURL(tempUTM);
    } else if (tempUTM === "female") {
      setPageURL(tempUTM);
    } else {
      setPageURL(tempUTM ? tempUTM : "");
    }
  }, []);
  const screenSize = useScreenSize();
  return (
    <>
      <footer
        className="main-footer site-footer"
        id="footer"
        role="contentinfo"
        data-section-id="footer"
        data-section-type="footer-section"
      >
        <div className="footer-top">
          <div className="xl:px-[40px]">
            <div className="xl:flex lg:flex md:flex block justify-between xl:py-[35px] lg:py-[35px] md:py-[35px] py-[10px]">
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full px-5">
                <h2
                  className={`flex text-[#fff] xs:text-[16px] ${nunito.variable} uppercase mb-4`}
                >
                  <svg
                    width="14"
                    viewBox="0 0 13 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "2%" }}
                  >
                    <path
                      d="M10.0839 0.000150649H2.35392C1.14279 0.000150649 0.158691 0.981514 0.158691 2.18928V17.8109C0.158691 19.0186 1.14279 20 2.35392 20H10.082C11.2932 20 12.2773 19.0186 12.2773 17.8109V2.18928C12.2795 0.981363 11.2932 0 10.0843 0L10.0839 0.000150649ZM8.46986 0.626332L8.2071 1.33462H4.23067L3.96791 0.626332H8.46986ZM11.6514 17.811C11.6514 18.6725 10.9478 19.3741 10.0839 19.3741H2.35392C1.49008 19.3741 0.786466 18.6725 0.786466 17.811V2.18943C0.786466 1.32799 1.49008 0.626332 2.35392 0.626332H3.3001L3.71866 1.75644C3.76322 1.87855 3.88125 1.96065 4.01256 1.96065H8.42749C8.5588 1.96065 8.67683 1.87855 8.72139 1.75644L9.13995 0.626332H10.0839C10.9477 0.626332 11.6514 1.32799 11.6514 2.18943L11.6514 17.811ZM8.48093 18.1952C8.48093 18.3683 8.34062 18.5083 8.16697 18.5083H4.26873C4.09507 18.5083 3.95476 18.3683 3.95476 18.1952C3.95476 18.022 4.09728 17.8821 4.26873 17.8821H8.16734C8.34085 17.8821 8.48116 18.022 8.48116 18.1952H8.48093Z"
                      fill="white"
                    ></path>
                  </svg>{" "}
                  Experience the Traya Mobile App
                </h2>
                <div className="googleappple-icon">
                  <Link
                    href="https://trayahealth.app.link/xT3UrtZDvyb"
                    className="xl:w-[158px] xl:h-[48px]"
                  >
                    <Image
                      src={AppStoreIcon}
                      alt="App Store"
                      className="xl:w-[158px] xl:h-[48px]"
                      height={90}
                      width={300}
                      loading="lazy"
                    />
                  </Link>
                  <Link
                    href="https://trayahealth.app.link/xT3UrtZDvyb"
                    className="xl:w-[158px] xl:h-[48px]"
                  >
                    <Image
                      src={GooglePlayIcon}
                      alt="Google Play"
                      height={90}
                      width={300}
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
              {["xl", "lg", "md"].includes(screenSize) && (
                <div className="w-6/12">
                  <p
                    className="text-white"
                    style={{
                      lineHeight: "1.26",
                      opacity: "0.7",
                      fontSize: "12px",
                      marginBottom: "2%",
                    }}
                  >
                    Registered Copyright 2023
                  </p>
                  <p
                    className="text-white"
                    style={{
                      lineHeight: "1.26",
                      opacity: "0.7",
                      fontSize: "12px",
                    }}
                  >
                    <strong>Tatvartha Health Pvt. Ltd.</strong>
                    <strong>Mumbai Office:</strong> Unit no - 101, B wing,
                    Building -16,
                    <br />
                    Interface, Off Link Road, Malad (West), Mumbai - 400064,
                    Maharashtra
                    <br />
                  </p>
                  <p
                    style={{
                      lineHeight: "1.26",
                      opacity: "0.7",
                      fontSize: "12px",
                    }}
                  >
                    <br />
                    <strong>Registered Office:</strong> C67 P1, Fortune Hotel
                    Galaxy,Koparli R, GIDC, Vapi, Gujarat - 396195
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <LowerFooter />
        <FooterEndRow />
        <Script
          strategy="lazyOnload"
          src="https://apigoswirl.com/short_video/v3/multiple_page/swirl-short-videos-v3.9.min.js"
        ></Script>
      </footer>
    </>
  );
}

export default FooterPage;
