import * as types from '../action-types'
const initState = {
    leftData: []
}
export default (state = initState, action) => {
    switch (action.type) {
        case types.UPLOAD_LEFT_CHART:
            return {
                leftData: action.data
            };
        default:
            return state
    }
}