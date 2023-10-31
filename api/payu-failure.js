import Cookies from "js-cookie";
import { refundTransaction } from "../services/paymentService";

export default async function handler(req, res) {
  try {
    const txnid = req.body.txnid;
    const slotId = req.body.udf2;
    let caseId = req.body.udf1;
    let sessionId = Cookies.get("session_id_activity_logger");
    const _ref = await refundTransaction(
      req.body.mihpayid,
      slotId,
      txnid,
      caseId,
      sessionId
    );
    res.redirect(302, `/payu-failure?message=request-failed&txnid=${txnid}`);
  } catch (err) {
    res.status(500).send({ error: "failed to initiate refund" });
  }
}
