import Cookies from "js-cookie";
import { BITESPEED_API_URL } from "../constants/config";

export const handleBiteSpeedData = (phoneNo) => {
	const ref = Cookies.get("refb");
	if (ref) sendBiteSpeedData("91" + phoneNo, ref);
	return;
};

const sendBiteSpeedData = async (phoneNo, ref) => {
	try {
		await fetch(BITESPEED_API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				customOptin: true,
				phoneNumber: phoneNo,
				ref: ref,
			}),
		});
	} catch (error) {
		console.warn(error.message);
	}
	return;
};
