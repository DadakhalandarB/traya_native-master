"use client";

import Header from "@/components/generic/Header";
import Image from "next/image";
import React, { useEffect } from "react";
const mockupSmartPhone = require(`@assets/images/holding-hand-smart-phone-mockup.jpg`);
const CalendlyThankYouPage = () => {
  useEffect(() => {
    window.localStorage.removeItem("affiliate");
    window.localStorage.removeItem("affiliate_name");
  }, []);

  return (
    <div>
      <Header />
      <section className="flex flex-col items-center justify-between w-screen max-w-screen-md min-h-screen gap-4 px-4 mx-auto">
        <div className="flex flex-col justify-center flex-1 gap-4">
          <div className="mt-">
            <h2 className="text-4xl font-bold text-center text-brand-dark">
              Thank you
            </h2>
            <p className="text-lg font-bold text-center md:text-2xl text-brand-dark">
              {/* Your slot has been booked successfully */}
              We have recorded your response.
            </p>
          </div>

          <div className="w-16 h-2 mx-auto rounded-full bg-brand-dark"></div>

          <p className="mt-6 text-lg font-extrabold text-center md:text-2xl text-brand-accent">
            {/* If you haven’t filled the hair diagnosis yet, go ahead and do so */}
            We will receive your customized cart link in your WhatsApp.
          </p>

          {/* <a
					href={`/questions`}
					className="px-8 py-3 mx-auto my-6 font-bold uppercase rounded-md sm:my-8 w-max bg-brand-dark text-brand-lightgrey">
					TAKE THE HAIR TEST
          </a>

          <p className="z-10 text-lg font-extrabold text-center md:text-2xl text-brand-accent">
					This will help our team of hair experts to build your case
				</p> */}
        </div>

        <figure className="w-full">
          <Image
            className="object-scale-down mx-auto align-middle w-max"
            src={mockupSmartPhone.default}
            alt="Holding Hand Smart Phone Mockup"
          />
        </figure>
      </section>
    </div>
  );
};

export default CalendlyThankYouPage;
