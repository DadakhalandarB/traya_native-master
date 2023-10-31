import moment from "moment";

export const kitRunsOutInDays = (orders) => {
  if (!orders) return;
  if (orders.length <= 0) return;

  for (let i = 0; i < orders?.length; i++) {
    if (orders[i]?.status === "delivered") {
      const date = new Date();
      let days = moment(date).diff(
        moment(orders[i]?.delivery_date),
        "days",
        false
      );

      if (days > 31) {
        return (
          <>
            Kit expired before{" "}
            <span className="font-semibold">{days - 31} days</span>
          </>
        );
      } else if (31 - days) {
        return (
          <>
            Kit runs out in{" "}
            <span className="font-semibold">{31 - days} day</span>
          </>
        );
      } else return `Kit has run out`;
    }
  }
};
