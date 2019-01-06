import {ADD_EVENT, CURRENT_USER, EVENT_PARTICIPATED, UPCOMING_EVENTS} from "../constants/action-types";

const initialState = {
	events: [],
	events_participated: [],
	upcoming_events: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_EVENT:
			return {...state, events: [...state.events, action.payload]};
		case CURRENT_USER:
			return {...state, currentUser: action.payload};
		case EVENT_PARTICIPATED:
			return {...state, events_participated: action.payload};
		case UPCOMING_EVENTS:
			return {...state, upcoming_events: action.payload};
		default:
			return state;
	}
};

export default rootReducer;