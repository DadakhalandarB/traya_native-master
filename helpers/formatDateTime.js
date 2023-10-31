const formatDateTime = () => {
	const _date = new Date();

	return {
		date: _date.toISOString(),
		time: new Intl.DateTimeFormat("en-IN", {
			hour: "numeric",
			minute: "numeric",
		}).format(_date),
	};
};

export default formatDateTime;
