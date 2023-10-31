import React from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { fredoka } from "@/constants/fontConfig";

const SlotBookingHeader = ({ source }) => {
  
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.05)",
      }}
      className="py-[1.5%] xl:py-[0.3%] flex items-center px-2"
    >
      {(source === "login_landing" || source === "login_profile") && (
        <div className="w-[5%] cursor-pointer">
          <FiArrowLeft
            size={"26px"}
            color="#414042"
            onClick={() => {
              if (source === "login_landing") {
                router.push("/user-account");
              } else if (source === "login_profile") {
                router.push("/user-account/profile");
              }
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
      <div className={`${fredoka.variable} flex justify-center w-[100%] text-[24px] xl:text-[30px] not-italic font-[500] text-brand-dark"`}>
        Schedule your call
      </div>
    </div>
  );
};
export default SlotBookingHeader;
