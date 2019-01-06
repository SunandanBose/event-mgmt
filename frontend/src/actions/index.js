import { ADD_EVENT } from '../constants/action-types'

// export const addEvent = () => ({type: "", payload: {}})
export const addEvent = event => ({type: ADD_EVENT, payload: {id: 1}})