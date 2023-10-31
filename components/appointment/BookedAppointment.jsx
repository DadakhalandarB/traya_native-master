import { fredoka } from "@/constants/fontConfig";
import { FiPhoneCall, FiClock, FiCalendar } from "react-icons/fi";

const BookedAppointment = ({ alreadyBooked }) => {
  const rescheduleCall = () => {
    router.push(`/pages/reschedule-slot/${caseId}`);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.05)",
        }}
        className="py-[1.5%] xl:py-[0.3%]"
      >
        <div
          className={`${fredoka.variable} flex justify-center w-[100%] text-[24px] xl:text-[30px] not-italic font-[500] text-brand-dark`}
        >
          Schedule your call
        </div>
      </div>
      <div className="overflow-hidden h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-screen p-4 -mt-28 h-full">
          <div className="flex flex-col text-left w-11/12 md:w-9/12 lg:w-9/12  px-4 py-12 mt-8 bg-custom-lightgrey shadow-lg shadow-gray-500/50 rounded-lg ">
            <p className="text-[24px] px-3 font-sans md:text-4xl lg:text-5xl font-[900] text-[#414042]">
              Oops!
            </p>
            <p className="font-sans px-3 pt-1 text-[16px] md:text-2xl lg:text-[22px] font-[400] text-[#434343]">
              You already have a call booked with the hair coach!
            </p>

            <div className="flex flex-col items-start justify-start mt-[4%] xl:mt-[1%]">
              <div className=" ml-3 md:ml-4 xl:ml-6 flex text-[16px] font-[400] text-[#434343] mb-6">
                <FiPhoneCall color="#434343" size={17} /> &nbsp;
                <p className="ml-1">Audio Call</p>
              </div>
              <div className=" ml-3 md:ml-4 xl:ml-6 flex text-[16px] font-[400] text-[#434343] mb-6">
                <FiCalendar color="#434343" size={18} />
                &nbsp;{" "}
                <p className="ml-1">
                  {dayjs(alreadyBooked?.reminder_date).format("MMMM D")}
                </p>
              </div>
              <div className=" ml-3 md:ml-4 xl:ml-6 flex text-[16px] font-[400] text-[#434343] mb-6">
                <FiClock color="#434343" size={18} />
                &nbsp;
                <p className="ml-1">
                  {moment(alreadyBooked?.reminder_date).format("dddd, hh:mm A")}
                </p>
              </div>
              <div className="mx-auto flex flex-col xl:flex-row xl:justify-between xl:space-x-6 w-[100%] xl:w-[75%]">
                <button
                  className="px-0 py-2 mt-4 mx-auto w-full md:w-96 rounded-md bg-custom-green text-[#414042] text-[18px] font-[600] font-sans focus:outline-none"
                  onClick={rescheduleCall}
                >
                  RESCHEDULE YOUR CALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookedAppointment;
