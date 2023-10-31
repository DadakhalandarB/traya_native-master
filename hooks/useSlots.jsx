import isEmpty from "lodash/isEmpty";
import { useContext } from "react";

import { groupSlots } from "../components/SlotBooking/handler";
import { getDates } from "../components/v4/appoinetment/helpers";
import { GET_SLOTS_API } from "../constants/urls";
import { fetchRequest } from "../helpers/fetchRequest";
import { postTransactionReply } from "../services/form";

const slots = {
  GET_SLOTS_API: GET_SLOTS_API,
};

const useSlots = (context) => {
  const {
    apiResponse: { caseId, transactionId },
    byId,
    nextQuestion,
    saveSlotsList,
  } = useContext(context);

  const getSlots = (question) => {
    return new Promise(async (resolve) => {
      if (!caseId) return;

      const api = slots[question.slots];
      const _res = await fetchRequest(api(caseId));

      if (_res.hasError) return;

      const _data = groupSlots(_res.data);
      const _dates = getDates(_data);

      if (isEmpty(_dates)) {
        const _nextQuestion = byId[question.next];
        await postTransactionReply({
          currentQuestion: question,
          nextQuestion: _nextQuestion,
          reply: "auto skipped",
          transactionId: transactionId,
        });

        nextQuestion(question.id, "auto skipped");
        return resolve(true);
      }

      saveSlotsList(_data);
      return resolve(false);
    });
  };

  return [getSlots];
};

export default useSlots;
