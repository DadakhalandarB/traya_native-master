import { useEffect, useState, useContext } from "react";
import groupBy from "lodash/groupBy";
import isEmpty from "lodash/isEmpty";
import { groupText } from "../../constants/groupText";

import { InternationalFormContext } from "../../context/international-form-store";

const ProgressBar = ({ context }) => {
	const { currentQuestion, questions } = useContext(InternationalFormContext);
	const [questionsGroups, setQuestionsGroups] = useState({});

	useEffect(() => {
		if (questions) setQuestionsGroups(() => questionsByGroup(questions));
	}, [questions]);

	const groupStyle = key => {
		if (key === currentQuestion.group)
			return "bg-brand-accent text-gray-50 font-semibold shadow-xl";

		if (hasSomeQuestionsAnswered(key))
			return "bg-brand-accent-light text-gray-700 font-semibold";

		return "bg-gray-200 text-gray-900";
	};

	const hiddenStyle = key => {
		if (key !== currentQuestion.group) return "hidden w-0 md:flex";
		else return "flex";
	};

	const pillsStyle = id => {
		if (id === currentQuestion.id) return "bg-brand-accent shadow-2xl";
		else if (isEmpty(questions[id]?.reply)) return "bg-gray-200";
		else return "bg-brand-accent-light";
	};

	const showPills = key => {
		return key === currentQuestion.group || hasSomeQuestionsAnswered(key);
	};

	const hasSomeQuestionsAnswered = key => {
		return questionsGroups[key].some(ques => !isEmpty(ques.reply));
	};

	const hasAllQuestionsAnswered = key => {
		return questionsGroups[key].every(ques => !isEmpty(ques.reply));
	};

	return (
		<div className="flex flex-col mt-2 sm:mt-4 md:mt-10">
			<div className="grid gap-2 md:gap-4 xs:gap-1 xs:grid-cols-4">
				{Object.keys(questionsGroups).map(key => (
					<div
						key={key}
						className={`px-4 sm:py-5 sm:px-5 xs:px-3 xs:py-3 rounded-md ${groupStyle(
							key
						)}`}>
						<p className="text-base leading-5 tracking-wider md:leading-6 md:text-lg xs:leading-3 xs:text-xxs">
							{groupText[key]}
						</p>
					</div>
				))}
			</div>

			<div className="flex flex-1 w-3/5 gap-4 mx-auto mt-6 text-center md:w-full sm:mt-10">
				{Object.entries(questionsGroups).map(([key, values]) => (
					<div
						key={key}
						className={`flex-1 px-1 space-x-1 ${hiddenStyle(key)}`}>
						{hasAllQuestionsAnswered(key) && key !== currentQuestion.group ? (
							<span className="flex bg-brand-accent flex-1 w-0 h-1.5 rounded-full"></span>
						) : (
							showPills(key) &&
							values.map(({ id }) => (
								<span
									key={id}
									className={`flex-1 w-full h-1.5 rounded-full ${pillsStyle(
										id
									)}`}></span>
							))
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProgressBar;

const questionsByGroup = questions => {
	return groupBy(questions, question => question.group);
};
