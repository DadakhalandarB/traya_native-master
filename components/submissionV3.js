"use client"

import { useContext, useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import Cookies from "js-cookie";
import { InternationalFormContext } from "../context/international-form-store";
import formatDateTime from "../helpers/formatDateTime";
import useUploadImage from "../hooks/useUploadImage";
import {
	handleCustomUserAttributes,
	moengageTrackEvent,
} from "../helpers/handleMoengage";

import traya_processing_animation from "../assets/images/traya-processing-animation.gif";
import { TRANSACTION_API, UPLOAD_API } from "../constants/urls";
import { fetchRequest } from "../helpers/fetchRequest";
import { COOKIES_DOMAIN } from "../constants/config";
import { COOKIES_EXPIRY } from "../constants/constants";
import { logGtmEvent, SUBMISSION_COMPLETED } from "../helpers/gtmHelpers";
import Image from "next/image";


const Submission = () => {
	const {
		apiResponse: { syntheticId, caseId, transactionId },
		queryStrings,
		byId,
		previewURL,
		questions,
	} = useContext(InternationalFormContext);
	const { uploadImage } = useUploadImage(InternationalFormContext);
	const [isApiCalled, setIsApiCalled] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [operationFinished, setOperationFinished] = useState(false);

	useEffect(() => {
		const currDateTime = formatDateTime();
		moengageTrackEvent("FORM_FILL_COMPLETE");
		handleCustomUserAttributes("Diagnosis Submit date", currDateTime.date);
		handleCustomUserAttributes("Diagnosis Submit time", currDateTime.time);
	}, []);

	useEffect(() => {
		if (isEmpty(caseId) || isEmpty(byId["photo_q"].reply) || isApiCalled)
			return;

		const init = async () => {
			const _uploadRes = await uploadImage(
				byId["photo_q"].reply,
				UPLOAD_API(caseId)
			);
			if (_uploadRes?.hasError) {
				setHasError(true);
				return;
			}

			const _transactionData = {
				question_id: "",
				question: "",
				response: "",
				form_status: "COMPLETED",
				locationPath: window.location.pathname + window.location.search,
        		formFillSource: 'website',
			};

			const _trOptions = {
				method: "PUT",
				body: JSON.stringify(_transactionData),
			};

			const _postRes = await fetchRequest(
				TRANSACTION_API(transactionId),
				_trOptions
			);
			if (_postRes.hasError) {
				setHasError(true);
				return;
			}
			await logGtmEvent(SUBMISSION_COMPLETED, caseId, questions.email?.reply);

			Cookies.set("form_status", "filled", {
				domain: COOKIES_DOMAIN,
				expires: COOKIES_EXPIRY,
			});

			setOperationFinished(true);
		};

		init();
		setIsApiCalled(true);
	}, [byId, caseId, isApiCalled]);

	useEffect(() => {
		if (operationFinished) {
			const _cohort = queryStrings.cohort;
			const _result_page = isEmpty(_cohort)
				? `${previewURL}?id=${syntheticId}`
				: `${previewURL}?id=${syntheticId}&cohort=${_cohort}`;
			handleCustomUserAttributes("result page link", _result_page);
			handleCustomUserAttributes("synthetic_id", syntheticId);
			let arr = [];
			for (let i = 0; i < localStorage.length; i++) {
				if (localStorage.key(i).substring(0, 5) === "state") {
					arr.push(localStorage.key(i));
				}
			}

			for (let i = 0; i < arr.length; i++) {
				localStorage.removeItem(arr[i]);
			}

			setTimeout(() => {
				window.location.replace(_result_page);
			}, 2000);
		}
	}, [operationFinished, previewURL]);

	return (
		<div>
			<div className="flex flex-col items-center justify-center w-full min-h-screen mx-auto md:w-96">
				<div className="inline-flex items-center justify-center w-full h-24 bg-brand-dark">
					<picture>
						<source srcSet={require("../assets/images/traya.png").default} />
						<source
							media="(min-width: 768px)"
							srcSet={require("../assets/images/traya@2x.png").default}
						/>
						<source
							media="(min-width: 1024px)"
							srcSet={require("../assets/images/traya@3x.png").default}
						/>
						<Image
							src={require("../assets/images/traya.png").default}
							alt="traya"
							height={40}
							width={128}
						/>
					</picture>

					<picture className="dxImg">
						<source srcSet={require("../assets/images/Dx.png").default} />
						<source
							media="(min-width: 768px)"
							srcSet={require("../assets/images/Dx@2x.png").default}
						/>
						<source
							media="(min-width: 1024px)"
							srcSet={require("../assets/images/Dx@3x.png").default}
						/>
						<Image
							className="mt-6"
							src={require("../assets/images/Dx.png").default}
							alt="dx"
							height={87}
							width={105}
						/>
					</picture>
				</div>
				<Image
					src={traya_processing_animation}
					width={320}
					alt="processing animation"
					className="object-contain"
				/>
				{hasError && (
					<span className="block mt-1 text-center text-red-600">
						Sorry we are unable to process your data.
					</span>
				)}
			</div>
		</div>
	);
};

export default Submission;

export const getStaticProps = async () => {
	const jsonData = mainData;
	return {
		props: {
			jsonData,
		},
	};
};
