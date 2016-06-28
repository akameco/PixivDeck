const initState = {works: []};

export function pixiv(state=initState, action) {
	switch (action.type) {
		case 'receive:works':
			return {...state, works: action.works};
		default:
			return state;
	}
}
