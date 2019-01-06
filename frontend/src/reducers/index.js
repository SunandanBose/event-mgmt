import {ADD_EVENT} from "../constants/action-types";

const initialState = {
	events: [{id: 0}], // => [{id:0}, {id:1}]
	currentUser: 'raj',
	totalUsers: 2
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_EVENT:
			return {...state, events: [...state.events, action.payload]};
		default:
			return state;
	}
};

export default rootReducer;