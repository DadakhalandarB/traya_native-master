"use client";

import { createContext, useEffect, useReducer } from "react";
import questionsReducer from "./questions-reducer";
import * as ACTIONS from "./questions-actions";
import getQueryStrings from "./getQueryStrings";

const queryStrings = getQueryStrings();

const initialState = {
  byId: {},
  currentQuestion: {},
  questions: {},
  firstQuestion: "",
  previousQuestions: [],
  apiResponse: {},
  selectedSlots: {},
  queryStrings,
  previewURL: "",
  slots: [],
  allQuestionsFilled:false
};

export const QuestionsContext = createContext();

const QuestionsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionsReducer, initialState);

  useEffect(() => {

    if (state.previousQuestions && state.previousQuestions.length <= 0) return;

    localStorage.setItem(
      "state" + window.location.pathname,
      JSON.stringify(state)
    );
  }, [state]);

  const saveReply = (id, reply) => {
    dispatch({ type: ACTIONS.SAVE_QUESTION_REPLY, payload: { id, reply } });
  };
  const saveGenderReply = (id, genderReply) => {
    dispatch({ type: ACTIONS.SAVE_GENDER_REPLY, payload: { id, genderReply } });
  };

  const makeQuestionsList = () => {
    dispatch({ type: ACTIONS.MAKE_QUESTIONS_LIST });
  };

  const addToPreviousQuestion = (id) => {
    dispatch({ type: ACTIONS.ADD_PREVIOUS_QUESTIONS, payload: id });
  };

  const removeFromPreviousQuestion = () => {
    dispatch({ type: ACTIONS.REMOVE_PREVIOUS_QUESTIONS });
  };

  const saveApiResponse = (data) => {
    dispatch({ type: ACTIONS.SAVE_API_RESPONSE, payload: data });
  };

  const saveSlots = (data) => {
    dispatch({ type: ACTIONS.SAVE_SLOTS, payload: data });
  };

  const saveSlotsList = (data) => {
    dispatch({ type: ACTIONS.SAVE_SLOTS_LIST, payload: data });
  };

  const init = (data, previewURL) => {
    dispatch({ type: ACTIONS.INITIALIZE_STATE, payload: { data, previewURL } });
  };

  const nextQuestion = (id, reply) => {
    dispatch({ type: ACTIONS.NEXT_QUESTION, payload: { id, reply } });
  };
  const setPreviewURL = (url) => {
    dispatch({ type: ACTIONS.SET_PREVIEW_URL, payload: { url } });
  };
  const setAllQuestionsFilled=(flag)=>{
    dispatch({type:ACTIONS.SET_FORM_ALL_QUESTIONS_FILLED, payload: { flag}})
  }
  return (
    <QuestionsContext.Provider
      value={{
        apiResponse: state.apiResponse,
        byId: state.byId,
        currentQuestion: state.currentQuestion,
        firstQuestion: state.firstQuestion,
        previewURL: state.previewURL,
        previousQuestions: state.previousQuestions,
        queryStrings: state.queryStrings,
        questions: state.questions,
        slots: state.slots,
        selectedSlots: state.selectedSlots,
        allQuestionsFilled:state.allQuestionsFilled,
        addToPreviousQuestion,
        init,
        makeQuestionsList,
        nextQuestion,
        removeFromPreviousQuestion,
        saveApiResponse,
        saveReply,
        saveGenderReply,
        saveSlots,
        saveSlotsList,
        setPreviewURL,
        setAllQuestionsFilled
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;
