import { fetchRequest } from "./fetchRequest";

export const postRadioData = async (api, block, reply) => {
	const _formData = {
		question_id: block.id,
		question: block.text,
		response: reply,
		form_status: "In-Progress",
	};

	const _options = {
		method: "PUT",
		body: JSON.stringify(_formData),
	};

	const _res = await fetchRequest(api, _options);
	return _res;
};
