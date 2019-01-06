import {ADD_EVENT, CURRENT_USER, EVENT_PARTICIPATED} from "../constants/action-types";

const initialState = {
	events: [],
	events_participated: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_EVENT:
			return {...state, events: [...state.events, action.payload]};
		case CURRENT_USER:
			return {...state, currentUser: action.payload};
		case EVENT_PARTICIPATED:
			return {...state, events_participated: action.payload};
		default:
			return state;
	}
};

export default rootReducer;