import Cookies from "js-cookie";
import {
  confirmSlotBooking,
  refundTransaction,
  verifyPayuPayment,
} from "../services/paymentService";

export default async function handler(req, res) {
  let refund = true;
  let message = "success";
  let url = "/payu-failure";
  let txnid = req.body.txnid;
  let caseId = req.body.udf1;
  let slotId = null;
  let doctor_app_name = "";
  let sessionId = Cookies.get("session_id_activity_logger");
  try {
    const { res: _res, error } = await verifyPayuPayment(txnid, caseId);
    if (!error) {
      if (_res.status == 1) {
        slotId = req.body.udf2;
        const confirming = await confirmSlotBooking(
          caseId,
          slotId,
          txnid,
          sessionId
        );
        if (confirming.message !== "success") {
          message = "failed-to-book-slot";
        } else {
          refund = false;
          url = "/payu-success";
          doctor_app_name = confirming.booking.assignedTo;
        }
      } else {
        message = "failed";
      }
    } else {
      message = "failed-to-verify-payment";
    }
  } catch (err) {
    message = "failed-to-book-slot";
  } finally {
    if (refund) {
      const _ref = await refundTransaction(
        req.body.mihpayid,
        slotId,
        txnid,
        caseId,
        sessionId
      );
    }
    res.redirect(
      302,
      `${url}?message=${message}&txnid=${txnid}&doctor_app_name=${doctor_app_name}`
    );
  }
}
