import { useEffect, useState, useContext } from "react";
import groupBy from "lodash/groupBy";
import isEmpty from "lodash/isEmpty";
import { groupText, groupTextHindi } from "../../constants/groupText";
import { QuestionsContext } from "../../context/questions-store";
import { MiniQuestionsContext } from "../../context/mini-questions-store";
import { HINDI_FORM } from "../../constants/routes";

const ProgressBar = ({ context }) => {
  const [gridColCount, setGridColCount] = useState(null);

  const { currentQuestion, questions } = useContext(
    context === "questions" ? QuestionsContext : MiniQuestionsContext
  );
  const [questionsGroups, setQuestionsGroups] = useState({});

  useEffect(() => {
    if (questions) setQuestionsGroups(() => questionsByGroup(questions));
  }, [questions]);

  useEffect(() => {
    if (questionsGroups)
      setGridColCount(() => Object.keys(questionsGroups).length);
  }, [questionsGroups]);

  const groupStyle = (key) => {
    if (key === currentQuestion.group)
      return "bg-brand-accent text-gray-50 font-semibold shadow-xl";

    if (hasSomeQuestionsAnswered(key))
      return "bg-brand-accent-light text-gray-700 font-semibold";

    return "bg-gray-200 text-gray-900";
  };

  const hiddenStyle = (key) => {
    if (key !== currentQuestion.group) {
      return "hidden w-0 md:flex";
    } else return "flex";
  };

  const pillsStyle = (id, optional) => {
    if (id === currentQuestion.id) return "bg-brand-accent shadow-2xl";
    else if (isEmpty(questions[id]?.reply)) return "bg-gray-200";
    else return "bg-brand-accent-light";
  };

  const getwidth = () => {
    let _index;
    let percentage;
    const mergedArray = [].concat(...Object.values(questionsGroups));
    if (questionsGroups[currentQuestion.group] !== undefined) {
      // questionsGroups[currentQuestion.group].map((idx, index) => {
      //   if (idx.id === currentQuestion.id) {
      //     _index = index + 1;
      //   }
      // });
      mergedArray.map((idx, index) => {
        if (idx.id === currentQuestion.id) {
          _index = index ;
        }
      });
      // percentage = _index / questionsGroups[currentQuestion.group].length;
      // if (currentQuestion.id !== "vitamin_def1") {
      if (_index !== undefined) {
        percentage = _index / mergedArray.length;
        window.localStorage.setItem("progress_bar_index", _index);
      } else {
        // if (currentQuestion.id === "vitamin_def1") {
        let index = window.localStorage.getItem("progress_bar_index");
        if (index) {
          percentage = (parseFloat(index) + 0.5) / mergedArray.length;
        }
      }
    }

    return percentage * 100;
  };

  const showPills = (key) => {
    return key === currentQuestion.group || hasSomeQuestionsAnswered(key);
  };

  const hasSomeQuestionsAnswered = (key) => {
    return questionsGroups[key].some((ques) => !isEmpty(ques.reply));
  };

  const hasAllQuestionsAnswered = (key) => {
    return questionsGroups[key].every((ques) => {
      if (ques.optional) return true;
      return !isEmpty(ques.reply);
    });
  };

  return (
    <div>
      <div className="flex justify-between">
        {Object.keys(questionsGroups).map((key) => (
          <div
            key={key}
            className={`w-full sm:py-3 sm:px-5 xs:px-2 xs:py-3 sm:mx-1 xs:mx-1 rounded-md ${groupStyle(
              key
            )}`}
          >
            <p className="text-base leading-5 md:leading-6 md:text-lg xs:leading-4 xs:text-[12px]">
              {window.location.pathname === HINDI_FORM
                ? groupTextHindi[key]
                : groupText[key]}
            </p>
          </div>
        ))}
      </div>
      <div className="flex mx-auto mt-4 text-center">
        {/* {Object.entries(questionsGroups).map(([key, values]) => (
          <div
            key={key}
            className={`flex-1 px-1 space-x-1 ${hiddenStyle(key)}`}
          >
            {hasAllQuestionsAnswered(key) && key !== currentQuestion.group ? (
              <span className="flex bg-brand-accent flex-1 w-0 h-1.5 rounded-full"></span>
            ) : (
              showPills(key) &&
              values.map(({ id, optional }) => (
                <span
                  key={id}
                  className={`flex-1 w-full h-1.5 rounded-full ${pillsStyle(
                    id,
                    optional
                  )}`}
                ></span>
              ))
            )}
          </div>
        ))} */}
      </div>
      {!isNaN(getwidth()) && (
        <div className="px-1.5">
          <p className="mx-auto md:px-[5%] text-[#414042] md:w-[75%] text-[12px] md:text-[14px] font-[400] text-right">
            {Math.round(getwidth(currentQuestion.id))}%
          </p>
          <div className="mx-auto bg-[#EBEBEB] w-full md:w-[65%] h-[5px] xl:h-[8px] mt-0.5 rounded-[5px]">
            <div
              className="w-full h-[5px] xl:h-[8px] bg-[#9BB96F] rounded-[5px]"
              style={{ width: `${getwidth()}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;

const questionsByGroup = (questions) => {
  return groupBy(questions, (question) => question.group);
};
