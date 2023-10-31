import { sha512 } from "js-sha512";
import {
  PAYU_KEY,
  PAYU_SALT,
  RAZORPAY_API_URL,
  RAZORPAY_KEY,
  SECURITY_TOKEN,
  VERIFY_PAYU_URL,
} from "../constants/config";
import { CONSULT_DOCTOR_FEES } from "../constants/constants";
import {
  CONFIRM_DOCTOR_FORM_SLOT_API,
  INITIATE_SLOT_REFUND,
} from "../constants/urls";
import { fetchRequest } from "../helpers/fetchRequest";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const displayRazorpay = async (userInfo, amount, currency, orderId) => {
  const res = await loadScript(RAZORPAY_API_URL);
  if (!res) {
    alert("Razorpay SDK failed to load, Please check you Internet connection");
    return;
  }

  return new Promise((resolve) => {
    try {
      const paymentObject = new window.Razorpay({
        key: RAZORPAY_KEY,
        currency: currency,
        amount: amount.toString(),
        order_id: orderId,
        name: "Traya",
        handler: (response) => resolve(response),
        prefill: { ...userInfo },
      });

      paymentObject.open();
    } catch (err) {
      console.warn(err.message);
    }
  });
};

export const verifyPayuPayment = async (txnId, caseId) => {
  let res = {};
  let error = false;
  try {
    const encodedParams = new URLSearchParams();
    const hash = sha512(`${PAYU_KEY}|verify_payment|${txnId}|${PAYU_SALT}`);
    encodedParams.set("key", PAYU_KEY);
    encodedParams.set("command", "verify_payment");
    encodedParams.set("var1", txnId);
    encodedParams.set("hash", hash);

    res = await fetch(VERIFY_PAYU_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodedParams,
    });
    res = await res.json();
  } catch (err) {
    error = true;
    console.error(err.message);
  } finally {
    return Promise.resolve({ res, error });
  }
};

export const confirmSlotBooking = async (caseId, slotId, txnId, sessionId) => {
  let res = {};
  try {
    const { data } = await fetchRequest(CONFIRM_DOCTOR_FORM_SLOT_API, {
      method: "POST",
      body: JSON.stringify({
        case_id: caseId,
        slot_id: slotId,
        transaction_id: txnId,
        session_id: sessionId,
      }),
    });
    res = data;
  } catch (err) {
    console.error(err.message);
  } finally {
    return Promise.resolve(res);
  }
};

export const refundTransaction = async (
  mihpayid,
  slotId,
  txnId,
  caseId,
  sessionId
) => {
  let res = {};
  let error = false;
  try {
    const hash = sha512(
      `${PAYU_KEY}|cancel_refund_transaction|${mihpayid}|${PAYU_SALT}`
    );

    res = await fetch(INITIATE_SLOT_REFUND, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SECURITY_TOKEN}`,
      },
      body: JSON.stringify({
        mihpayid: mihpayid,
        hash: hash,
        slot_id: slotId,
        transaction_id: txnId,
        amount: CONSULT_DOCTOR_FEES,
        session_id: sessionId,
      }),
    });
    res = await res.json();
  } catch (err) {
    error = true;
    console.error(err.message);
  } finally {
    return Promise.resolve({ res, error });
  }
};
