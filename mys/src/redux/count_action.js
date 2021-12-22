import { ADDNUMBER, DELNUMBER } from './constent'
import store from './store'
export const createAddNumberAction = data => ({
  data: data,
  type: ADDNUMBER,
})
export const createDelNumberAction = data => ({
  data: data,
  type: DELNUMBER,
})
export const creatActionAddNumberAction = (data, time) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(createAddNumberAction(data))
    }, time)
  }
}
