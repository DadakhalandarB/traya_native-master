import groupBy from "lodash/groupBy";
import dayjs from "dayjs";

export const groupScalpImages = scalpImages => {
	const groupImage = groupBy(scalpImages, image => {
		return dayjs(image.created_at).format("MMMM DD, YYYY");
	});

	Object.values(groupImage).map(item => sortDesc(item));

	return groupImage;
};

const sortDesc = data => {
	return data.sort((a, b) => {
		return new Date(b.created_at) - new Date(a.created_at);
	});
};

export const sortKeysDesc = data => {
	return Object.keys(data).sort((a, b) => {
		return new Date(b) - new Date(a);
	});
};
