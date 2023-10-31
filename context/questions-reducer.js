import * as ACTIONS from "./questions-actions";
import getQuestions from "./getQuestions";
import jsonLogic from "json-logic-js";
import { normalize, schema } from "normalizr";
import { MALE_RESULT_PAGE } from "../constants/constants";

const questionsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INITIALIZE_STATE: {
      const _state = localStorage.getItem("state" + window.location.pathname);
      if (_state) {
        return JSON.parse(_state);
      }
      const { data, previewURL } = action.payload;

      const question = new schema.Entity("questions");
      const mySchema = { questions: [question] };
      const { entities } = normalize(data, mySchema);

      const byId = entities.questions;
      const currentQuestion = data.questions[0];
      const firstQuestion = currentQuestion.id;
      const questionsList = getQuestions({ byId, firstQuestion });

      return {
        ...state,
        byId,
        currentQuestion,
        questions: questionsList,
        firstQuestion,
        previewURL,
      };
    }

    case ACTIONS.SAVE_QUESTION_REPLY:
      const { reply, id } = action.payload;
      const question = state.byId[id];

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: { ...question, reply },
        },
      };

    case ACTIONS.SAVE_GENDER_REPLY: {
      const { genderReply, id } = action.payload;
      const question = state.byId[id];
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: { ...question, genderReply },
        },
      };
    }

    case ACTIONS.MAKE_QUESTIONS_LIST:
      const questions = getQuestions(state);

      return {
        ...state,
        questions,
      };

    case ACTIONS.ADD_PREVIOUS_QUESTIONS:
      return {
        ...state,
        previousQuestions: [...state.previousQuestions, action.payload],
      };

  case ACTIONS.REMOVE_PREVIOUS_QUESTIONS:{
    const { byId, previousQuestions } = state;
    const previousQuestion = previousQuestions.pop();
    let hair_goals2 = window.localStorage.getItem("hair_goals2");
    if(previousQuestion==='hair_vol1'&& hair_goals2 !== "Improve Hair Quality"){
      const filteredOptionsObj = {
        ...state.byId["hair_vol1"],
        optionMap: state.byId["hair_vol1"].optionMap.filter(
          (e) => e.name !== "Texture Loss"
        ),
      };
      return {
        ...state,
        previousQuestion:[...previousQuestions],
        currentQuestion:filteredOptionsObj
      }
    }
    return {
      ...state,
      previousQuestions: [...previousQuestions],
      currentQuestion: byId[previousQuestion],
    };}

    case ACTIONS.SAVE_API_RESPONSE:
      return {
        ...state,
        apiResponse: action.payload,
      };

    case ACTIONS.SAVE_SLOTS:
      return {
        ...state,
        selectedSlots: action.payload,
      };

    case ACTIONS.SAVE_SLOTS_LIST:
      return {
        ...state,
        slots: action.payload,
      };

    case ACTIONS.NEXT_QUESTION: {
      const { reply, id } = action.payload;
      const question = state.byId[id];
      let nextId = question.next;

      const gender = window.localStorage.getItem("gender");
      const fs1 = window.localStorage.getItem("fs1");
      const skipPhoto = window.localStorage.getItem("skipPhoto");
      const maleStage = window.localStorage.getItem("2e");
      let age = parseInt(window.localStorage.getItem("C1d"));
      let hair_goals2 = window.localStorage.getItem("hair_goals2");
      let hair_vol1 = window.localStorage.getItem("hair_vol1");
      let feel_hair_fall = window.localStorage.getItem("feel_hair_fall");
      if (question.id == "2e") {
        window.localStorage.setItem("2e", reply);
      }
      if (question.id == "C1d") {
        window.localStorage.setItem("C1d", reply);
      }
      if (question.id == 'female_stage') {
        window.localStorage.setItem("female_stage", reply);
      }

      if (question.id == "info2") {
        if (question.fn) nextId = gender == "M" ? "male-branch" : "hair_type";
      } else if (question.id === "female_cond") {
        nextId = fs1 == "Pregnancy" ? "sleep_check" : "vitamin_def";
      }else if(question.id == "vitamin_def"){
        nextId = reply == "No" ? "sleep_check" : "vitamin_def1";
      }else if (skipPhoto == "true") {
        nextId = null;
      } else if (gender === 'M' && nextId === 'open_ended_q') {
        nextId = 'photo_q';
      } else {
        if (question.fn) nextId = jsonLogic.apply(question.fn, { reply });
        // skip bp question for mild and no danfruff because it doent not decide serum in other cases
        if (nextId == "3j" &&  ['Stage-1',"Heavy Hair Fall"].includes(maleStage )) nextId = "photo_q"
      }

      if (nextId == "female_stage" && age > 38) {
        nextId = "fs3";
      } else if (question.id == "fs3" && age > 38) {
        nextId = "female_stage";
      } else if (question.id == "female_stage" && reply == "Menopause" && age <= 38) {
        nextId = "fs3";
      }

      if (question.id == "hair_fall_treatment") {
        if (!reply.includes("Hair transplant") && reply.includes("Minoxidil")) {
          nextId = "minoxidile_serum";
        } else if (
          reply.includes("Hair transplant") &&
          reply.includes("Minoxidil")
        ) {
          nextId = "hair_transplant";
        } else if (reply.includes("Hair transplant")) {
          nextId = "hair_transplant";
        }

        // if (
        //   !reply.includes("Hair transplant") &&
        //   !reply.includes("Minoxidil") &&  !reply.includes("None")
        // ) {
        //   nextId = "other_medications";
        // }
      }
      if (hair_goals2 !== "Improve Hair Quality" && nextId == "hair_vol1") {
        const filteredOptionsObj = {
          ...state.byId["hair_vol1"],
          optionMap: state.byId["hair_vol1"].optionMap.filter(
            (e) => e.name !== "Texture Loss"
          ),
        };
        return {
          ...state,
          currentQuestion: filteredOptionsObj,
        };
      }
        
        if (
          nextId === "hair_quality" &&
          hair_goals2 === "Improve Hair Quality" &&
          (hair_vol1 === "Texture Loss" ||
            (feel_hair_fall === "No Hair fall" && hair_vol1 === "No widening"))
        ) {
          nextId = "hair_concern1";
        }
      return {
        ...state,
        currentQuestion: nextId ? state.byId[nextId] : null,
      };
    }

    case ACTIONS.SET_PREVIEW_URL: {
      let { url } = action.payload;
      if (!url) url = MALE_RESULT_PAGE;

      return {
        ...state,
        previewURL: url,
      };
    }

    case ACTIONS.SET_FORM_ALL_QUESTIONS_FILLED: {
      return {
        ...state,
        allQuestionsFilled: action.payload.flag,
      }
    }
    default:
      return state;
  }
};

export default questionsReducer;
