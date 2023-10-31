import React from "react";

const ReferYourFriend = () => {
  return (
    <div
      className=" w-11/12 xl:w-9/12 lg:w-9/12 md:w-9/12 mx-auto relative my-0 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-xl border-2 py-0 xl:py-11 lg:py-11 md:py-11 border-2"
      style={{ backgroundColor: "#a9b69945" }}
    >
      <a href="/pages/referral">
        <div className="flex justify-between p-5 items-center px-0 xl:px-10 lg:px-10 md:px-10">
          <div>
            <p className="text-xl xl:text-6xl lg:text-6xl md:text-6xl text-black font-bold">
              Refer Your friend
            </p>
            <p className="text-xl xl:text-6xl lg:text-6xl md:text-6xl text-black font-bold mt-0 xl:mt-5 lg:mt-5 md:mt-5">
              & Earn flat{" "}
              <span className="font-fredoka" style={{ color: "#F19C3E" }}>
                20 % OFF
              </span>
            </p>
            <p className="text-lg xl:text-2xl lg:text-2xl md:text-2xl mt-5">
              *on your next order. Offer valid on Rs.2000+
            </p>
          </div>
          <div>
            <img
              className="d-none d-md-block w-20 xl:w-64 lg:w-64 md:w-64 ls-is-cached lazyloaded"
              data-src="//cdn.shopify.com/s/files/1/0100/1622/7394/files/money_doodle_3_881d2c17-9423-439f-9229-dd6faa233490.png?v=1664901745"
              alt="money_doodle_3"
              src="//cdn.shopify.com/s/files/1/0100/1622/7394/files/money_doodle_3_881d2c17-9423-439f-9229-dd6faa233490.png?v=1664901745"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ReferYourFriend;
