const getActiveOrder = orders => {
	if (!orders || orders.length <= 0) return;

	const _noVoidOrder = orders.filter(order => {
		return order.status !== "void";
	});

	const _sortDescOrder = _noVoidOrder.sort((a, b) => {
		return new Date(b.created_at) - new Date(a.created_at);
	});
	return _sortDescOrder[0];
};

export default getActiveOrder;
