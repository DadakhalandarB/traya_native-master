import Image from "next/image";
import { CDN_BASE_URL } from "../../constants/config";
import { fredoka } from "@/constants/fontConfig";

const authentic = `${CDN_BASE_URL}website_images/localImages/authentic.webp`;
const ayurvedic = `${CDN_BASE_URL}website_images/localImages/ayurvedaleaf.webp`;
const darmatologist = `${CDN_BASE_URL}website_images/localImages/darmatologist.webp`;
const holostic = `${CDN_BASE_URL}website_images/localImages/holostic.webp`;
const MadeSafe = `${CDN_BASE_URL}website_images/localImages/MadeSafe.webp`;
const nutrition = `${CDN_BASE_URL}website_images/localImages/nutrition.webp`;
const succuss = `${CDN_BASE_URL}website_images/localImages/succuss.webp`;

function Formula(props) {
  return (
    <>
      <div className="flex flex-col mt-12 xl:mb-8 md:mb-8 xs:mb-10 ">
        <div>
          <h5
            className={`${fredoka.variable} xl:text-[46px] md:text-5xl xs:text-[24px] text-center  text-custom-black`}
          >
            {" "}
            Traya&apos;s Holistic 3 Science Formula
            {/* <sup className="xl:text-3xl xs:text-[14px] font-sans"> TM</sup> */}
          </h5>
        </div>
        <div className="flex flex-wrap justify-center content-center item-center xs:w-full xl:px-4 xl:py-2 lg:p-4 md:p-4 pt-2 lg:mt-1">
          <div className="xl:w-[80%] 2xl:w-[1110px] 2xl:mx-auto md:w-[95%] h-auto xs:w-full border border-custom-green rounded-xl shadow-[5px_10px_20px_9px_#00000021] xl:mt-6 xl:mb-5 xl:p-0 md:p-0 lg:p-0 px-[14px]">
            <div className="flex flex-row xl:p-6 xs:p-3 xs:py-[16px] md:p-8 lg:p-5 text-center justify-around items-center">
              <div className="flex flex-col items-center xs:w-12 md:w-20 xl:w-36 lg:w-56">
                <Image
                  className=""
                  alt="nutrition"
                  src={nutrition}
                  unoptimized={true}
                  loader={props.loader}
                  height={100}
                  width={100}
                />
                <h5
                  className={`${fredoka.variable} xl:text-3xl lg:text-3xl md:text-2xl text-custom-green xs:text-[12px] font-bold text-custom-green`}
                >
                  Nutrition
                </h5>
              </div>
              <svg
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="xl:h-6 xl:w-6 md:w-6 md:h-6 xs:h-4 xs:w-4"
              >
                <path
                  d="M12.4941 23.8C11.1275 23.8 10.1608 23.6 9.59414 23.2C9.02747 22.7667 8.67747 22.2333 8.54414 21.6C8.44414 20.9667 8.39414 20.3167 8.39414 19.65V4.8C8.39414 4.13333 8.44414 3.5 8.54414 2.9C8.67747 2.26667 9.02747 1.75 9.59414 1.35C10.1941 0.949999 11.1775 0.749999 12.5441 0.749999C13.9108 0.749999 14.8775 0.949999 15.4441 1.35C16.0108 1.75 16.3441 2.26667 16.4441 2.9C16.5775 3.53333 16.6441 4.18333 16.6441 4.85V19.7C16.6441 20.3667 16.5775 21.0167 16.4441 21.65C16.3441 22.2833 16.0108 22.8 15.4441 23.2C14.8775 23.6 13.8941 23.8 12.4941 23.8ZM4.79414 16.4C4.19414 16.4 3.59414 16.35 2.99414 16.25C2.39414 16.1167 1.89414 15.7667 1.49414 15.2C1.12747 14.6 0.944141 13.6167 0.944141 12.25C0.944141 10.85 1.14414 9.86667 1.54414 9.3C1.97747 8.73333 2.51081 8.4 3.14414 8.3C3.81081 8.16667 4.47747 8.1 5.14414 8.1H19.9441C20.6108 8.1 21.2608 8.16667 21.8941 8.3C22.5275 8.4 23.0441 8.75 23.4441 9.35C23.8441 9.91667 24.0441 10.9 24.0441 12.3C24.0441 13.6667 23.8441 14.6333 23.4441 15.2C23.0775 15.7667 22.5941 16.1167 21.9941 16.25C21.4275 16.35 20.8275 16.4 20.1941 16.4H4.79414Z"
                  fill="#B4CA6C"
                ></path>
              </svg>
              <div className="flex flex-col items-center xs:w-12 md:w-20 xl:w-36 lg:w-56">
                <Image
                  className="max-w-full"
                  alt="ayurveda"
                  src={ayurvedic}
                  unoptimized={true}
                  loader={props.loader}
                  height={100}
                  width={100}
                />
                <h5
                  className={`${fredoka.variable} xl:text-3xl lg:text-3xl md:text-2xl text-custom-green xs:text-[12px] font-bold text-custom-green`}
                >
                  {" "}
                  Ayurveda{" "}
                </h5>
              </div>
              <svg
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="xl:h-6 xl:w-6 md:w-6 md:h-6 xs:h-4 xs:w-4"
              >
                <path
                  d="M12.4941 23.8C11.1275 23.8 10.1608 23.6 9.59414 23.2C9.02747 22.7667 8.67747 22.2333 8.54414 21.6C8.44414 20.9667 8.39414 20.3167 8.39414 19.65V4.8C8.39414 4.13333 8.44414 3.5 8.54414 2.9C8.67747 2.26667 9.02747 1.75 9.59414 1.35C10.1941 0.949999 11.1775 0.749999 12.5441 0.749999C13.9108 0.749999 14.8775 0.949999 15.4441 1.35C16.0108 1.75 16.3441 2.26667 16.4441 2.9C16.5775 3.53333 16.6441 4.18333 16.6441 4.85V19.7C16.6441 20.3667 16.5775 21.0167 16.4441 21.65C16.3441 22.2833 16.0108 22.8 15.4441 23.2C14.8775 23.6 13.8941 23.8 12.4941 23.8ZM4.79414 16.4C4.19414 16.4 3.59414 16.35 2.99414 16.25C2.39414 16.1167 1.89414 15.7667 1.49414 15.2C1.12747 14.6 0.944141 13.6167 0.944141 12.25C0.944141 10.85 1.14414 9.86667 1.54414 9.3C1.97747 8.73333 2.51081 8.4 3.14414 8.3C3.81081 8.16667 4.47747 8.1 5.14414 8.1H19.9441C20.6108 8.1 21.2608 8.16667 21.8941 8.3C22.5275 8.4 23.0441 8.75 23.4441 9.35C23.8441 9.91667 24.0441 10.9 24.0441 12.3C24.0441 13.6667 23.8441 14.6333 23.4441 15.2C23.0775 15.7667 22.5941 16.1167 21.9941 16.25C21.4275 16.35 20.8275 16.4 20.1941 16.4H4.79414Z"
                  fill="#B4CA6C"
                ></path>
              </svg>
              <div className=" flex flex-col items-center xs:w-12 md:w-20 xl:w-36 lg:w-56">
                <Image
                  className="max-w-full"
                  alt="Dermatologist"
                  src={darmatologist}
                  loader={props.loader}
                  unoptimized={true}
                  height={100}
                  width={100}
                />
                <h5
                  className={`${fredoka.variable} xl:text-3xl lg:text-3xl md:text-2xl xs:text-[12px] text-custom-green  font-bold text-custom-green`}
                >
                  {" "}
                  Dermatology
                </h5>
              </div>
            </div>
            <div className="flex justify-center xl:w-full xs:py-[8px]">
              <h5 className="xl:w-full text-center xl:px-[10.2rem] lg:text-3xl md:text-2xl xs:text-[10px] xs:px-4 lg:px-20  leading-5 text-[#414042] font-sans tracking-wide xl:w-4/5">
                {" "}
                Our approach combines the goodness of 3 powerful sciences. With
                a blend of 112 Ayurvedic herbs, 6 hair growth actives and a
                healing diet plan, we personalize your treatment delivering
                assured results.
              </h5>
            </div>
            <hr className="xl:mt-4  border-[1.5px]"></hr>
            <div className="flex flex-row xl:px-24 lg:px-20 xs:p-2 xs:py-[30px] text-center justify-around xl:mt-1">
              <div className="xs:w-12 lg:w-36">
                <Image
                  src={holostic}
                  alt=" Holistic"
                  unoptimized={true}
                  loader={props.loader}
                  height={90}
                  width={90}
                />
                <h5 className="text-custom-black xl:text-xl md:text-xl xs:text-xs ">
                  {" "}
                  Holistic
                </h5>
              </div>
              <div className="xs:w-12 lg:w-36">
                <Image
                  src={MadeSafe}
                  alt="Made Safe"
                  unoptimized={true}
                  loader={props.loader}
                  height={90}
                  width={90}
                />
                <h5 className="text-custom-black xl:text-xl md:text-xl  xs:text-xs">
                  {" "}
                  Made <br />
                  Safe
                </h5>
              </div>
              <div className="xs:w-12 lg:w-36">
                {" "}
                <Image
                  src={succuss}
                  alt="success"
                  unoptimized={true}
                  loader={props.loader}
                  height={90}
                  width={90}
                />
                <h5 className="text-custom-black xl:text-xl xs:text-xs md:text-xl">
                  Success
                </h5>
              </div>
              <div className="xs:w-12 lg:w-36">
                <Image
                  src={authentic}
                  alt="Made Safe"
                  unoptimized={true}
                  loader={props.loader}
                  height={90}
                  width={90}
                />
                <h5 className="text-custom-black xl:text-xl md:text-xl xs:text-xs text-center ">
                  {" "}
                  Authentic <br /> Ingredients
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Formula;
