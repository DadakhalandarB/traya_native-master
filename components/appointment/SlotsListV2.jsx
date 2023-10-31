import { useMemo } from "react";
import dayjs from "dayjs";
import { FiCalendar } from "react-icons/fi";

const SlotsListV2 = ({
  selectedDate,
  slots,
  selectedSlot,
  setSlot,
  setIsConfirm,
  doc,
  setSlotTime,
  slotTime,
  isConfirm,
}) => {
  const _slotsList = useMemo(() => {
    if (!selectedDate) return [];

    const _selectedDate = dayjs(selectedDate).format("YYYY-MM-DD");
    return slots[_selectedDate];
  }, [selectedDate, slots]);

  if (!dayjs.isDayjs(selectedDate)) return <></>;

  return (
    <div className="mx-auto w-[95%] xl:w-[100%] h-[100%]">
      <p className="font-sans font-[500] text-[16px] text-[#A4A4A4] mb-1">
        Available slots
      </p>
      <div className="flex">
        <FiCalendar color="#414042" size={22} className="mt-0.5" />
        <p className="font-sans font-[700] text-[20px] text-[#414042] mb-2 ml-2">
          {dayjs(selectedDate).format("D MMM dddd")}
        </p>
      </div>

      <div className="md:pt-2 md:pb-6 py-4 rounded-lg">
        <div className="grid grid-cols-3 gap-1.5 pr-0 mb-0 overflow-x-hidden overflow-y-auto max-h-96 sm:grid-cols-3">
          {_slotsList.map((slot, index) => {
            let _isSelectedSlot = slot.id === selectedSlot.id;
            let buttonID = _isSelectedSlot ? "Slot_booked_yes" : "";
            let isBooked = false;
            if (slot?.slots?.count === 0) {
              isBooked = true;
            }
            return (
              <button
                type="button"
                disabled={isBooked}
                onClick={() => {
                  setSlot(slot);
                  setIsConfirm(true);
                  setSlotTime(slot.slotTime);
                }}
                key={index}
                id={buttonID}
                className={`inline-flex self-center flex-col items-center font-sans px-4 xl:px-4 xl:mx-1.5 py-2.5 xl:py-3 rounded-full border border-[#E3E3E3] disabled:text-white disabled:cursor-not-allowed ${
                  _isSelectedSlot && isConfirm
                    ? "bg-custom-green text-[#414042] focus:outline-none"
                    : isBooked
                    ? "bg-custom-disable-grey"
                    : "bg-white text-[#414042] focus:outline-none"
                }
               `}
              >
                <span
                  className="font-sans text-[14px] xl:text-[16px] text-[#414042] font-[600]"
                  id={`${buttonID}`}
                >
                  {dayjs(slot.slotTime).format("h:mm A")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {slotTime !== null && (
        <div
          className={`${
            doc ? "bottom-[8.5%]" : "bottom-[4%]"
          } flex flex-col justify-center align-center fixed xl:bottom-[10%] right-0 bg-white focus:outline-none w-full border-t-2 border-t-custom-green text-[#414042]`}
        >
          <div className="mx-auto pt-0  w-100 flex flex-row justify-center items-center gap-4 mt-2 mb-6 xl:mb-3">
            <span className="text-[17px] xl:text-[20px] font-[600]">
              {dayjs(selectedDate).format("MMM D")}
            </span>
            <span className="text-custom-green font-[600] text-[17px] xl:text-[25px]">
              |
            </span>
            <span className="text-[17px] xl:text-[20px] font-[600]">
              {dayjs(selectedDate).format("ddd")}
            </span>
            <span className="text-custom-green font-[600] text-[17px] xl:text-[25px]">
              |
            </span>
            <span className="text-[17px] xl:text-[20px] font-[600]">
              {dayjs(slotTime).format("h:mm A")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlotsListV2;
