import { nunito } from "@/constants/fontConfig";
const DynamicMaleReview = dynamic(() =>
  import("@components/generic/MaleReview")
);

const OurCustomer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center   mb-5">
        <p className={`${nunito.variable} xl:text-xx4l xs:text-[30px] lg:text-xx4l mt-10 tracking-wide font-bold text-custom-black xs:px-10`}>
          Our Customers
        </p>
      </div>

      <DynamicMaleReview />
      <div className="my-10 w-10/12 mx-auto">
        <div className="flex justify-center">
          <a
            href="/home/question?cohort=1&lcn=customers%20review&page=homev2"
            onClick={() => Cookies.set("__TRAYA_UTM__", "&page=homev2")}
            className="flex  bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl text-[13px] font-bold rounded-lg  uppercase"
            id="hairtestcta7-native"
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
