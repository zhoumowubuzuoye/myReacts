import * as types from "../action-types";

export const leftChartData = (data) => {
    console.log(data);
    return {
        type: types.UPLOAD_LEFT_CHART,
        data
    }
}