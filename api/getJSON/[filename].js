// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import data from "@helpers/data.json";
import miniData from "@helpers/mini-data.json";

export default function handler(req, res) {
	let { filename } = req.query;
	let jsonData = {};
	switch (filename) {
		case "data":
			jsonData = data;
			break;
		case "mini-data":
			jsonData = miniData;
			break;

		default:
			jsonData = data;
			break;
	}

	res.status(200).json(jsonData);
}
