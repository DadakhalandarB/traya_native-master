import { TRANSACTION_API } from "../constants/urls";
import { fetchRequest } from "../helpers/fetchRequest";

export const postTransactionReply = async ({
	currentQuestion,
	nextQuestion,
	reply,
	transactionId,
}) => {
	let res = {};

	let formStatus = "In-Progress";
	if (nextQuestion && nextQuestion.next === null) formStatus = "semi-filled";

	try {
		res = await fetchRequest(TRANSACTION_API(transactionId), {
			method: "PUT",
			body: JSON.stringify({
				question_id: currentQuestion.id,
				question: currentQuestion.text,
				response: reply,
				form_status: formStatus,
				locationPath: window.location.pathname + window.location.search,
        		formFillSource: 'website',
			}),
		});
	} catch (error) {
		console.warn(error.message);
	} finally {
		return res;
	}
};
