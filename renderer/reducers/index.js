import {combineReducers} from 'redux';

const initState = {
	works: [],
	currentWork: null
};

export function pixiv(state=initState, action) {
	switch (action.type) {
		case 'receive:works':
			return {...state, works: action.works};
		case 'currentWork':
			return {...state, currentWork: action.id};
		default:
			return state;
	}
}

const manageState = {
	isModal: false
};

export function manage(state=manageState, action) {
	switch (action.type) {
		case 'openModal':
			return {...state, isModal: true};
		case 'closeModal':
			return {...state, isModal: false};
		case 'toggleModal':
			return {...state, isModal: !state.isModal};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	pixiv,
	manage
});

export default rootReducer;
