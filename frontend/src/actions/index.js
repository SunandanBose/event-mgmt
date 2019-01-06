import {ADD_EVENT, CURRENT_USER, EVENT_PARTICIPATED} from '../constants/action-types'

export const addEvent = event => ({type: ADD_EVENT, payload: {id: 1}});
export const currentUser = user => ({type: CURRENT_USER, payload: user});
export const events_participated = events => {return {type: EVENT_PARTICIPATED, payload: events}};