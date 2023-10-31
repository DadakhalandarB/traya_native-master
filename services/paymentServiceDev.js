import Cookies from "js-cookie";
import { confirmSlotBooking, refundTransaction } from "./paymentService";

// this is only for development , don't push this in production
export const paymentSuccess = async (data, slotId) => {
  let txnid = data.transactionId;
  let caseId = data.caseId;
  let sessionId = Cookies.get("session_id_activity_logger");
  try {
    const confirming = await confirmSlotBooking(
      caseId,
      slotId,
      txnid,
      sessionId
    );
    if (confirming.message !== "success") {
      const _ref = await refundTransaction(
        1234,
        slotId,
        txnid,
        caseId,
        sessionId
      );
      console.log("Refund for txnId: " + txnid + " " + _ref.res);
      window.location.replace(
        `/payu-failure?message=request-failed&txnid=${txnid}`
      );
    } else {
      let temp = "success";
      window.location.replace(
        `/payu-success?doctor_app_name=${confirming.booking.assignedTo}&message=${temp}&txnid=${txnid}`
      );
    }
  } catch (err) {
    console.log(err);
  }
};

export const paymentFailure = async (data, slotId) => {
  try {
    let txnid = data.transactionId;
    let caseId = data.caseId;
    let sessionId = Cookies.get("session_id_activity_logger");
    await confirmSlotBooking(caseId, slotId, txnid, sessionId);
    const _ref = await refundTransaction(
      1234,
      slotId,
      txnid,
      caseId,
      sessionId
    );
    console.log("Refund for txnId: " + txnid + " " + _ref.res);
    window.location.replace(
      `/payu-failure?message=request-failed&txnid=${txnid}`
    );
  } catch (err) {
    alert("failed to initiate refund");
  }
};
