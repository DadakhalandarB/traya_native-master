import { CDN_BASE_URL } from "@/constants/config";
import { fredoka, nunito } from "@/constants/fontConfig";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";

const NotAlone = () => {
  const screenSize = useScreenSize();
  return (
    <div>
      <div className="2xl:w-[1110px] xl:w-8/12 lg:12/12 lg:px-8 md:px-8 xs:px-4 mx-auto relative xl:py-9 lg:py-9 md:py-9 xs:mt-10">
        <Image
          src={`${CDN_BASE_URL}website_images/female_landing_page/Frame_102352665.png`}
          className="hidden xl:block md:block lg:block"
          alt="female traya"
          width={864}
          height={420}
          responsive
          loading="lazy"
        />
        {!["xl", "md", "lg"].includes(screenSize) && (
          <div className="block xl:hidden md:hidden lg:hidden">
            <Image
              src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_page_mobile/Frame_102352664_1.png`}
              className="block xl:hidden md:hidden lg:hidden"
              alt="female traya"
              height={595}
              width={343}
              responsive
              loading="lazy"
            />
          </div>
        )}
        <div className="safeSci absolute 2xl:w-[1110px] xl:w-9/12 lg:w-9/12 md:w-8/12 xl:left-9 lg:left-9 md:left-9 left-0  xl:top-20 lg:top-16 md:top-10 top-14">
          <div className="flex flex-wrap flex-row justify-between px-10">
            <div>
              <h2
                className={`text-2xl xl:text-5xl lg:text-5xl md:text-3xl font-[500] ${fredoka.variable}`}
                style={{ color: "#414042" }}
              >
                You are not ALONE!
              </h2>
              <p
                className="text-left font-bold text-xl xl:text-3xl md:text-2xl lg:text-3xl font-sans my-2"
                style={{ color: "#414042" }}
              >
                It&apos;s time we talk about
                <br />
                women&apos;s hair fall
              </p>
              <h5
                className={`text-left text-custom-black text-md ${nunito.variable} font-bold`}
                style={{ color: "#414042" }}
              >
                Healthy Hair Heroines is a safe space for women to seek
              </h5>
              <div className="w-[75%]">
                <Image
                  src={`${CDN_BASE_URL}website_images/female_landing_page/femaleLandinghelp.png`}
                  alt="female traya"
                  width={350}
                  height={98}
                  responsive
                  loading="lazy"
                />
              </div>

              <div className="mb-10 w-10/12">
                <div className="flex py-2">
                  <a
                    href="https://chat.whatsapp.com/EfWNm48o6Ul4FecOVelEYs"
                    className=" bg-custom-black text-white hover:bg-white hover:text-black py-2.5 px-8 xl:px-24 lg:px-24 md:px-24 text-[19px] font-bold rounded-md uppercase"
                  >
                    JOIN US HERE
                  </a>
                </div>
                <div className="getyour w-10/12 ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 70 87"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="
              mx-auto block joinusarrup"
                  >
                    <path
                      d="M69.4 86.75L6.31066e-06 86.75L34.6889 41.64L69.4 86.75Z"
                      fill="#414042"
                    ></path>
                    <path
                      d="M69.4 45.1099L6.31066e-06 45.1099L34.6889 -9.21456e-05L69.4 45.1099Z"
                      fill="#414042"
                    ></path>
                  </svg>

                  <p className="xs:text-left xl:text-center xs:text-[12px] xl:text-[16px]">
                    Get your queries answered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotAlone;
