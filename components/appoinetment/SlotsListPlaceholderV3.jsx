import { useMemo } from "react";
import dayjs from "dayjs";

const START_TIME = 9;
const END_TIME = 20;

const SlotsListPlaceholderV3 = () => {
  const _slotsList = useMemo(() => {
    const _slots = [];

    const _startTime = dayjs().hour(START_TIME).startOf("h");
    const _endTime = dayjs().hour(END_TIME).startOf("h");
    const _hoursLeft = _endTime.diff(_startTime, "h");

    for (let i = 0; i <= _hoursLeft; i++) {
      const _time = _startTime.add(i, "h").minute(0).second(0);

      _slots.push(_time);
      _slots.push(_time.add(60, "m").second(0));
    }

    return _slots;
  }, []);

  return (
    <div className="h-full mx-4 w-max">
      <p className="font-sans font-[500] text-[16px] text-[#A4A4A4] mb-1">
        Available slots
      </p>
      <div className="px-6 py-8">
        <div className="grid grid-cols-3 gap-2 pr-0 mt-0 overflow-x-hidden overflow-y-auto  max-h-40 sm:grid-cols-4 ">
          {_slotsList.map((slot, index) => {
            return (
              <button
                type="button"
                key={index}
                className="inline-flex self-center flex-col items-center px-5 py-2 bg-brand-accent-light rounded-full disabled:bg-custom-borderdarkgrey disabled:text-brand-darkgray disabled:cursor-not-allowed ${
									"
              >
                <span className="font-sans text-[14px] xl:text-[16px] font-[600]">
                  {slot.format("h:mm A")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SlotsListPlaceholderV3;
