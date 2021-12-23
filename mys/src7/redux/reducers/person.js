import {
    ADDPERSON
} from '../constent'

const initState = []

export default function personResucer(preState = initState, action) {
    const {
        type,
        data
    } = action
    switch (type) {
        case ADDPERSON:
            return [data, ...preState]
        default:
            return preState
    }
}