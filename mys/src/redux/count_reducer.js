import {
  ADDNUMBER,
  DELNUMBER
} from './constent'
const initState = 99
export default function countReducer(preState = initState, action) {
  console.log('action',action);
  const {
    type,
    data
  } = action
  switch (type) {
    case ADDNUMBER:
      return preState + data
    case DELNUMBER:
      return preState - data
    default:
      return preState
  }
}