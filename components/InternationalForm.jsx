"use client"

import React, { Suspense, useContext, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import international from "../helpers/international.json";

import ProgressBar from "./v3/ProgressBar";
import components from "./components";
import ChevronLeft from "../assets/icons/ChevronLeft";
import { PREVIEW_URL, TRAYA_HOME_URL } from "../constants/config";
import {
	moengageTrackEvent,
	sendUtmDataToMoengage,
} from "../helpers/handleMoengage";
import { InternationalFormContext } from "../context/international-form-store";
import Loader from "./Loader";

const InternationalForm = () => {
	const {
		currentQuestion,
		firstQuestion,
		removeFromPreviousQuestion,
		queryStrings: { utmData },
		init,
	} = useContext(InternationalFormContext);

	useEffect(() => {
		init(international, PREVIEW_URL);
		moengageTrackEvent("FORM_FILL_STARTED");
	}, []);

	useEffect(() => {
		if (isEmpty(utmData)) return;
		sendUtmDataToMoengage(utmData);
	}, [utmData]);

	return (
		<div className="px-4 mx-auto sm:px-8 lg:px-12 max-w-screen-2xl">
			{currentQuestion && (
				<>
					<ProgressBar />

					<Suspense fallback={<Loader />}>
						{components(currentQuestion, InternationalFormContext)}

						<button
							className="inline-flex items-center pb-4 mt-4 mb-8 focus:outline-none md:mb-10 text-brand-accent"
							onClick={() =>
								currentQuestion.id === firstQuestion
									? window.location.assign(TRAYA_HOME_URL)
									: removeFromPreviousQuestion()
							}
							id="previous_button">
							<ChevronLeft />
							<span className="font-medium uppercase">previous</span>
						</button>

						{currentQuestion.id === "phone_number" && (
							<p className="p-5 text-xs text-right sm:text-sm text-brand-disgray">
								*Your contact details will be used by Traya hair coach to reach
								out to you via call/sms/whatsapp.
							</p>
						)}
					</Suspense>
				</>
			)}
		</div>
	);
};

export default InternationalForm;
// export const getStaticProps = async () => {
// 	const jsonData = international;
// 	return {
// 		props: {
// 			jsonData,
// 		},
// 	};
// };