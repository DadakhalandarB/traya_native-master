import isEmpty from "lodash/isEmpty";
import { fetchRequest } from "./fetchRequest";

export const postUTMData = async (api, utmData) => {
	let res = {};
	if (isEmpty(utmData)) return {};
	for (let key in utmData) {
		const _formData = {
			question_id: key,
			question: key,
			response: utmData[key],
		};

		const _option = {
			method: "PUT",
			body: JSON.stringify(_formData),
		};

		res = await fetchRequest(api, _option);
	}
	return res;
};
