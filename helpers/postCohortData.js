import isEmpty from "lodash/isEmpty";
import { fetchRequest } from "./fetchRequest";

export const postCohortData = async (api, cohort) => {
	if (isEmpty(cohort)) return {};

	const _formData = {
		question_id: "cohort",
		question: "cohort",
		response: cohort,
	};

	const _option = {
		method: "PUT",
		body: JSON.stringify(_formData),
	};

	const res = await fetchRequest(api, _option);
	return res;
};
