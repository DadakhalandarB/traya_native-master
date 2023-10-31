import Script from "next/script";
import { FiPlus, FiMinus } from "react-icons/fi";

const Accordian = ({ title, description,id }) => {

  return (
    <>
      <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
            data-collapse-target={id}
          >
            <span>{title}</span>
            <span className="absolute right-0 pt-1 text-xs group-open:opacity-0">
              <FiPlus />
            </span>
            <span className="absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100">
              <FiMinus />
            </span>
          </button>
        </h6>
        <div
          data-collapse={id}
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            {description}
          </div>
        </div>
      </div>
      <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></Script>

    </>
  );
};

export default Accordian;
