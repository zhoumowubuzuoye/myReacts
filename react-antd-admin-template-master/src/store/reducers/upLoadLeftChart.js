import * as types from '../action-types'
const initState = {
    leftData: []
}
export default (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case types.UPLOAD_LEFT_CHART:
            return action.data;
        default:
            return state
    }
}