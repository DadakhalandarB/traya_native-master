import moment from "moment";

export const memberSinceDays = (orders) => {
  let firstDayOfYear = new Date();

  let _days = moment(firstDayOfYear).diff(
    moment(orders[orders.length - 1]?.created_at),
    "days",
    false
  );

  return `Member since ${_days} days`;
};
