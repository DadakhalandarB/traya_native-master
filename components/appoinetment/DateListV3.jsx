import { useEffect, useMemo } from "react";
import isEmpty from "lodash/isEmpty";
import isBetween from "dayjs/plugin/isBetween";
import dayjs from "dayjs";
import { getDates } from "./helpersV2";
dayjs.extend(isBetween);

const DateListV3 = ({
  slots,
  selectedDate,
  setDate,
  setSlots,
  bookForm,
  setSlotTime,
  slotTime,
  setIsConfirm,
}) => {
  const _dateList = useMemo(() => {
    const _data = getDates(slots);
    return isEmpty(_data) ? [] : _data;
  }, [slots]);

  const isSlotsAvailabe = (date) => {
    const _date = dayjs(date).format("YYYY-MM-DD");
    const _slots = slots[_date];
    let count = 0;
    _slots.map((e) => {
      if (e.slots.count !== 0) {
        count++;
      }
    });
    return count ? true : false;
  };
  useEffect(() => {
    if (isEmpty(_dateList)) setSlots({});
    let count = 0;
    if (_dateList) {
      _dateList.map(({ date }) => {
        let defaultDate = isSlotsAvailabe(date);
        if (!defaultDate) {
          count++;
        }
      });
      setDate(_dateList[0]?.date);
    }
  }, [setDate, setSlots]);

  return (
    <div className={`max-w-full w-max ${bookForm ? "px-4" : "ml-3"}`}>
      <p className="text-[#414042] font-[600] text-[19px] mb-2">Schedule</p>
      <div className="w-max bg-white px-0 py-0 ">
        <div className="flex w-max pb-0 mt-0 overflow-x-hidden space-x-1.5">
          {_dateList?.map(({ date, day }, index) => {
            const _isSelectedDate = date.isSame(selectedDate, "day");
            const _isSlotsAvailabe = isSlotsAvailabe(date);

            return (
              <button
                type="button"
                disabled={!_isSlotsAvailabe}
                onClick={() => {
                  setDate(date);
                  setSlotTime(null);
                  setIsConfirm(false);
                }}
                key={index}
                className={`inline-flex flex-col items-center w-[55px] xl:w-[65px] py-3.5 xl:py-5 space-y-1 rounded border border-[#E3E3E3] disabled:bg-custom-disable-grey disabled:text-white disabled:cursor-not-allowed ${
                  _isSelectedDate
                    ? "bg-custom-green text-[#414042] focus:outline-none"
                    : "border-custom-bordergrey text-[#414042] focus:outline-none"
                }`}
              >
                <p className="font-sans w-16 font-[600] text-[14px] xl:text-[16px] mb-2">
                  {dayjs(date).format("ddd")}
                </p>
                <p className="font-sans text-[14px] xl:text-[16px] font-[600]">
                  {date.format("D")}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DateListV3;
