import { useContext } from "react";
import Cookies from "js-cookie";
import { MD5 } from "crypto-js";
import {
  handleCustomUserAttributes,
  handleMoengage,
} from "../helpers/handleMoengage";
import { COOKIES_DOMAIN, LAST_QUESTIONS } from "../constants/config";
import { COOKIES_EXPIRY } from "../constants/constants";
import { isGroupComplete } from "../helpers/isGroupComplete";
import { groupNameMapper } from "../constants/groupNameMapper";

const useFormSubmit = (context) => {
  const {
    questions,
    addToPreviousQuestion,
    byId,
    currentQuestion,
    makeQuestionsList,
    nextQuestion,
    queryStrings,
    saveReply,
  } = useContext(context);

  const handleSubmit = async (reply) => {
    reply = typeof reply === "string" ? reply.trim() : reply;

    saveReply(currentQuestion.id, reply);
    const _nextQuestion = byId[currentQuestion.next];

    if (isGroupComplete(currentQuestion, _nextQuestion)) {
      let _group = groupNameMapper[currentQuestion.group];
      if (!_group) _group = currentQuestion.group;
      _group = _group + "_complete";
      if (_group === "scalp_health_complete") {
        window.dataLayer = window.dataLayer || [];
        let user_email = window.localStorage.getItem("user_email");
        let user_phone = window.localStorage.getItem("user_phone");
        let user_synthetic_id = window.localStorage.getItem("user_syn");

        const encryptedEmail = user_email
          ? MD5(user_email.trim()).toString()
          : "";
        const encryptedPhone = user_phone
          ? MD5(user_phone.trim()).toString()
          : "";

        // Add the `view_item_list` event and associated data to the dataLayer
        let age = window.localStorage.getItem("age");
        let gender = window.localStorage.getItem("gender");
        let LossStage = window.localStorage.getItem("2e");

        window.dataLayer.push({
          EID: encryptedEmail,
          PageName: "Hair Diagnosis",
          JourneyType: "Hair Test",
          Section: "Scalp Health details",
          Age: age ? age : "",
          Gender: gender ? gender : "",
          LossStage: LossStage ? LossStage : "",
          MID: encryptedPhone,
          NAEID: user_email ? user_email.trim() : "",
          NAMID: user_phone ? user_phone.trim() : "",
          user_id: user_synthetic_id ? user_synthetic_id : "",
          event: "ScalpDetails_Submitted",
        });
      }
      handleCustomUserAttributes(_group, "yes");
    }

    handleMoengage(currentQuestion.id, reply, queryStrings.pageSource);
    // handleFresh(questions, currentQuestion, reply, queryStrings.pageSource);
    addToPreviousQuestion(currentQuestion.id);
    makeQuestionsList();
    nextQuestion(currentQuestion.id, reply);

    if (LAST_QUESTIONS.has(currentQuestion.next)) {
      Cookies.set("form_status", "semi-filled", {
        domain: COOKIES_DOMAIN,
        expires: COOKIES_EXPIRY,
      });
    }
  };

  return handleSubmit;
};

export default useFormSubmit;
