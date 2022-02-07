import * as types from "../action-types";

export const leftChartData = (data) => {
    return {
        type: types.UPLOAD_LEFT_CHART,
        data
    }
}