<<<<<<< HEAD
import { ADDNUMBER, DELNUMBER } from './constent'
=======
import {
  ADDNUMBER,
  DELNUMBER
} from './constent'
>>>>>>> a306992d9d4931cdea5b178758600b9817fa5f0f
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