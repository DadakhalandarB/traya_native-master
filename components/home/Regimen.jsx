import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";

const Regimen = () => {
  const screenSize = useScreenSize();
  return (
    <div>
      <div className="2xl:w-[1040px]  xl:w-[1040px]  lg:w-12/12 md:w-12/12 sm:w-9/12 w-11/12  lg:px-8 md:px-8  mx-auto relative xl:py-5 lg:py-4  xl:mt-4 lg:mt-4 md:mt-4 mt-10">
        {["xl", "md", "lg"].includes(screenSize) ? (
          <div className="hidden xl:block md:block lg:block w-full  justify-center">
            <Image
              height={581}
              width={976}
              src={`${CDN_BASE_URL}website_images/male_landing_page/Male-2x2Regimen_2.png`}
              className="hidden xl:block md:block lg:block w-full"
              alt="Traya Male-2x2Regimen"
              loading="lazy"
              responsive
            />
          </div>
        ) : (
          <div className="block xl:hidden md:hidden lg:hidden justify-center">
            <Image
              height={620}
              width={389}
              src={`${CDN_BASE_URL}website_images/male_landing_page/male_landing_page_mobile/Male-2x2Regimen-mobile_2.png`}
              className="block xl:hidden md:hidden lg:hidden"
              alt="Traya Male-2x2Regimen"
              loading="lazy"
              responsive
            />
          </div>
        )}
        <div className="safeSci absolute xl:w-7/12 lg:w-9/12 md:w-8/12 xl:left-9 lg:left-9 md:left-9 left-0  xl:top-28 lg:top-28 md:top-0 -top-8">
          <div className="flex flex-wrap flex-row justify-between py-5">
            <div>
              <h5 className="text-center text-custom-black text-[18px] xl:text-xl md:text-xl lg:text-xl">
                TRAYA 2X2 REGIMEN
              </h5>
              <h2 className="text-center font-bold text-[45px] xl:text-6xl md:text-6xl lg:text-6xl font-sans text-custom-black my-0 xl:my-3 lg:my-3 md:my-3 xl:leading-none lg:leading-none md:leading-none leading-[50px] xs:mt-5">
                2min
              </h2>
              <h2 className="text-center text-[45px] xl:text-[51px] md:text-3xl lg:text-3xl text-custom-black  my-0 xl:my-5 lg:my-5 md:my-5 xl:leading-none lg:leading-none md:leading-none leading-[40px]">
                twice a day
              </h2>
              <h5 className="text-center text-[18px] xl:text-2xl md:text-2xl lg:text-2xl text-custom-black my-5 px-10 xl:px-20 lg:px-20 md:px-20">
                Follow a simple daily routine. Start seeing the difference in
                under 30 days.
              </h5>
              <div className="xl:mb-10 lg:mb-10 md:mb-10 mb-0 w-10/12 mx-auto">
                <div className="flex justify-center">
                  <a
                    href="/pages/the-science"
                    className="flex bg-custom-black text-white hover:bg-custom-green hover:text-black py-2 px-4 text-[15px] font-bold rounded-lg  uppercase"
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

export default Regimen;
