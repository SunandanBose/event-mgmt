import {ADD_EVENT, CURRENT_USER} from '../constants/action-types'

// export const addEvent = () => ({type: "", payload: {}})
export const addEvent = event => ({type: ADD_EVENT, payload: {id: 1}});
export const currentUser = user => ({type: CURRENT_USER, payload: user});