import jsonLogic from "json-logic-js";
import subgroup from "@helpers/questionSubgroup.json";

const getNextId = (currQuestion, questionSet, questions) => {
	const _goals = questions.hair_goals.reply;
	if (!Array.isArray(_goals)) return currQuestion.next;

	let _nextId = null;

	for (let i = 0; i < subgroup.length; i++) {
		const { id: questionId, has, only, not, max_length, all } = subgroup[i];
		if (questionId in questionSet) continue;

		if (not) {
			const _hide = not.some(item => _goals.includes(item));
			if (_hide) continue;
		}

		if (only && _goals.length === 1) {
			let _show = only.some(item => _goals.includes(item));

			if (_show) {
				const _nextQuestion = questions[questionId];
				if (_nextQuestion) {
					_nextId = _nextQuestion.id;
					break;
				}
			}
		}

		if (has) {
			if (max_length) {
				if (_goals.length > max_length) continue;
			}

			const _show = has.some(item => _goals.includes(item));
			if (_show) {
				const _nextQuestion = questions[questionId];
				if (_nextQuestion) {
					_nextId = _nextQuestion.id;
					break;
				}
			}
		}

		if (all) {
			const _nextQuestion = questions[questionId];
			if (_nextQuestion) {
				_nextId = _nextQuestion.id;
				break;
			}
		}
	}

	return _nextId;
};

const getQuestions = ({ byId, firstQuestion }) => {
	let i = firstQuestion;
	const _questions = { [i]: byId[i] };

	while (byId[i].next) {
		let nextId = null;
		const currQuestion = byId[i];
		const nextQuestion = byId[currQuestion.next];

		if (nextQuestion?.checkSubgroup) {
			nextId = getNextId(currQuestion, _questions, byId);
			if (!nextId) nextId = "gut_problems";
			currQuestion["next"] = nextId;
		} else {
			nextId = currQuestion.next;
		}

		if (currQuestion.fn) {
			nextId = jsonLogic.apply(currQuestion.fn, { reply: currQuestion.reply });
		}

		if (nextId) _questions[nextId] = byId[nextId];
		let maleStage;
		
		if (typeof window !== "undefined") {
			maleStage = window.localStorage.getItem('2e');
		}
		if (byId[nextId].next == "3j" &&  ['Stage-1',"Heavy Hair Fall"].includes(maleStage )) {
			_questions[nextId] = {...byId[nextId], next: "photo_q"};
			nextId = "3j";
		}

		let age, femaleStage;
		if (typeof window !== "undefined") {
			age = parseInt(window.localStorage.getItem("C1d"));
			femaleStage = window.localStorage.getItem("female_stage");
		}
		if (age > 38 && byId[nextId].next == "female_stage") {
			_questions[nextId] = {...byId[nextId], next: "fs3"};
			_questions['fs3'] = byId['fs3'];
		}
		if (age <= 38 && nextId == "female_stage" && femaleStage == "Menopause") {
			_questions[nextId] = {...byId[nextId], next: "fs3"};
			_questions['fs3'] = byId['fs3'];
		}
		let gender;
		if (typeof window !== 'undefined') {
			gender = window.localStorage.getItem('gender');
		}
		if (gender === 'M' && byId[nextId].next === 'open_ended_q') {
			_questions[nextId] = {...byId[nextId], next: "photo_q"};
			nextId = 'open_ended_q';
		}
        
		let hair_goals2;
		let feel_hair_fall;
		let hair_vol1;
		if(typeof window !=='undefined'){
			hair_goals2=window.localStorage.getItem('hair_goals2');
			feel_hair_fall=window.localStorage.getItem('feel_hair_fall');
			hair_vol1=window.localStorage.getItem('hair_vol1');
		}
		// if(hair_goals2!=='Improve Hair Quality'&&byId['hair_vol1']){
		// 	_questions['hair_vol1'] = {...byId['hair_vol1'],optionMap:byId['hair_vol1'].optionMap.filter(e=>e.name!=='Texture Loss')};
		// }

		if( byId[nextId].next === 'hair_quality'&& hair_goals2==='Improve Hair Quality'&&(hair_vol1==='Texture Loss' ||(feel_hair_fall==='No Hair fall'&&hair_vol1==='No widening')) ){
            _questions[nextId]={...byId[nextId],next:'hair_concern1'}
			nextId = 'hair_concern1';
		}
		i = nextId;
		
	}

	return _questions;
};

export default getQuestions;
