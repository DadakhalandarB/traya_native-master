import Image from "next/image";
import Link from "next/link";
import { CDN_BASE_URL } from "@/constants/config";
import Script from "next/script";

const TrayaHealthLogo = `${CDN_BASE_URL}website_images/localImages/TrayaFullLogo.webp`;
const traya = `${CDN_BASE_URL}website_images/localImages/traya.webp`;

function Footer() {
  return (
    <>
      <footer className=" lg:text-left bg-custom-black text-gray-50">
        <div className="flex flex-wrap flex-col mt-10 xl:p-12 xs:p-2">
          <div className="flex xl:flex-row md:flex-row xs:flex-col-reverse  items-center xs:justify-center md:justify-between xl:justify-between place-content-center ">
            <div className="flex justify-center">
              <a href="https://traya.health/" className=" ">
                <Image
                  src={TrayaHealthLogo}
                  alt="Traya Health Logo"
                  height={180}
                  width={180}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="flex flex-wrap flex-row justify-around xs:mt-5 xl:mt-10 ">
              <div className=" xl:block xs:hidden xl:flex xl:flex-row items-top w-96">
                <div className="ml-12">
                  <a href="https://www.instagram.com/traya.health/">
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      width="48px"
                      height="48px"
                    >
                      <path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z" />
                    </svg>
                  </a>
                </div>
                <div className="ml-4">
                  <a href="https://www.facebook.com/traya.health/">
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="48px"
                      height="48px"
                    >
                      <path d="M 17.722656 10 C 10.560656 10 10 10.560656 10 17.722656 L 10 32.277344 C 10 39.439344 10.560656 40 17.722656 40 L 32.277344 40 C 39.439344 40 40 39.439344 40 32.277344 L 40 17.769531 C 40 10.563531 39.436469 10 32.230469 10 L 17.722656 10 z M 17 11 L 33 11 C 38.565 11 39 11.435 39 17 L 39 33 C 39 38.565 38.565 39 33 39 L 29.712891 39 L 29.712891 29.355469 L 33.453125 29.355469 L 34.013672 24.894531 L 29.714844 24.894531 L 29.714844 21.771484 C 29.714844 20.534484 30.5495 19.900391 31.4375 19.900391 C 32.3255 19.900391 34.164062 19.875 34.164062 19.875 L 34.164062 15.884766 C 34.164062 15.884766 32.528422 15.695312 30.857422 15.695312 C 29.453422 15.695312 27.907922 16.091234 26.669922 17.365234 C 25.410922 18.660234 25.228516 20.57225 25.228516 22.90625 L 25.228516 24.896484 L 21.478516 24.896484 L 21.478516 29.357422 L 25.228516 29.357422 L 25.228516 39 L 17 39 C 11.435 39 11 38.565 11 33 L 11 17 C 11 11.435 11.435 11 17 11 z" />
                    </svg>
                  </a>
                </div>
                <div className=" ml-6 mt-1">
                  <a href="https://api.whatsapp.com/send/?phone=918828006272&text=Hey%21+I+would+like+to+know+more+about+Traya&type=phone_number&app_absent=0">
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="40px"
                      height="40px"
                    >
                      {" "}
                      <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:mr-8  xs:p-3 flex flex-wrap flex-col xl:w-96 xs:w-full xs:mt-0 text-white">
            <div>
              <Image
                src={traya}
                alt="traya logo"
                height={41}
                width={128}
                loading="lazy"
              />
            </div>
            <div>
              <h5 className="mt-1 mb-2"> Registered Copyright 2020</h5>

              <p> Tatvartha health Pvt. Ltd.</p>
              <p> Mumbai Office: Ground Floor, VakraTunda Corporate Park </p>
              <p> Goregaon East, Mumbai, Maharastra 400063</p>
              <div>
                {" "}
                <span className="font-bold">Registered Office: </span>C67 P1,
                Fortune Hotel Galaxy,
                <p>Koprali R, GIDC, Vapi, Gujarat - 396195</p>
              </div>
            </div>
          </div>
        </div>
        <Script
          async
          src="https://apigoswirl.com/short_video/v3/multiple_page/swirl-short-videos-v3.9.min.js"
        ></Script>
      </footer>
    </>
  );
}

export default Footer;