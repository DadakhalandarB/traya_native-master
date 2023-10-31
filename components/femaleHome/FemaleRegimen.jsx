import { CDN_BASE_URL } from "@/constants/config";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";

const FemaleRegimen = () => {
  const screenSize = useScreenSize();
  return (
    <div>
      <div className="2xl:w-[1110px]  xl:w-[79%] lg:w-12/12 md:w-[98%] sm:w-9/12 w-11/12  lg:px-8 md:px-8  mx-auto relative xl:py-5 lg:py-4 mt-12">
        {["xl", "md", "lg"].includes(screenSize) && (
          <>
            <div className="hidden xl:block md:block lg:block">
              <Image
                src={`${CDN_BASE_URL}website_images/female_landing_page/Female-2x2Regimen.png`}
                className="w-full"
                alt="Female 2x2 Regimen"
                width={930}
                height={533}
                responsive
                loading="lazy"
              />
            </div>
            <div className="block xl:hidden md:hidden lg:hidden">
              <Image
                src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_page_mobile/3min-guy-mobile-new_578x_7ecf0e82-3511-4ab7-af57-6b091befa241.png`}
                alt="Female 2x2 Regimen"
                width={343}
                height={548}
                responsive
                loading="lazy"
              />
            </div>
          </>
        )}
        <div className="safeSci absolute xl:w-9/12 lg:w-9/12 md:w-11/12 xl:left-[-60px] left-0  xl:top-24 lg:top-28 md:top-10 top-0">
          <div className="flex flex-wrap flex-row justify-between xl:py- lg:py-5 md:py- py-2">
            <div>
              <h2 className="text-center text-custom-black text-[18px] xl:text-xl md:text-xl lg:text-xl">
                TRAYA 2X2 REGIMEN
              </h2>
              <h2 className="text-center font-bold text-[45px] xl:text-7xl md:text-6xl lg:text-6xl font-sans text-custom-black xl:my-6 lg:my-3 md:my-5 my-0">
                2min
              </h2>
              <h2 className="text-center text-4xl xl:text-[51px] md:text-[2.5rem] lg:text-6xl text-custom-black my-0">
                twice a day
              </h2>
              <h5 className="text-center text-lg xl:text-2xl md:text-2xl lg:text-2xl text-[#231f20] xl:my-6 lg:my-3 md:my-3 my-3 xl:w-11/12  mx-auto xl:px-20 lg:px-10 md:px-10">
                Follow a simple daily routine. Best results when used for 5
                months.
              </h5>
              <div className="mb-10 w-10/12 mx-auto">
                <div className="flex justify-center">
                  <a
                    href="https://traya.health/pages/the-science"
                    className="flex bg-custom-black text-white hover:bg-custom-green hover:text-black xl:py-2.5 xl:px-6 lg:py-2.5 lg:px-6 md:py-2.5 md:px-6 py-2 px-3 text-[15px] md:text-xl lg:text-xl xl:text-xl font-bold rounded-md  uppercase"
                  >
                    The Science
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FemaleRegimen;
