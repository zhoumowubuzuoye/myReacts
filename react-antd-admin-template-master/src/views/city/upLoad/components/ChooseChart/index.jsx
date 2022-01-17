/**
 *@author: xiewenhao
 *@date: 2022-01-17 16:44:02
 *@version: V1.0.0
 *@description:
 */
import React, { useState, useEffect ,useRef} from "react";
import { PropTypes } from "prop-types";

const ChooseChart = (props) => {
  const el =useRef()
  useEffect(() => {
    const chartResize = window.addEventListener("resize");
  });
  const [chart, setChart] = [null];
  const setOptions = ({ expectedData, actualData } = {}) => {
    chart.setChart({
      backgroundColor: "#fff",
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        boundaryGap: false,
        axisTick: {
          show: false,
        },
      },
      grid: {
        left: 10,
        right: 10,
        bottom: 10,
        top: 30,
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
        padding: [5, 10],
      },
      yAxis: {
        axisTick: {
          show: false,
        },
      },
      legend: {
        data: ["expected", "actual"],
      },
      series: [
        {
          name: "expected",
          itemStyle: {
            normal: {
              color: "#FF005A",
              lineStyle: {
                color: "#FF005A",
                width: 2,
              },
            },
          },
          smooth: true,
          type: "line",
          data: expectedData,
          animationDuration: 2800,
          animationEasing: "cubicInOut",
        },
        {
          name: "actual",
          smooth: true,
          type: "line",
          itemStyle: {
            normal: {
              color: "#3888fa",
              lineStyle: {
                color: "#3888fa",
                width: 2,
              },
              areaStyle: {
                color: "#f3f8ff",
              },
            },
          },
          data: actualData,
          animationDuration: 2800,
          animationEasing: "quadraticOut",
        },
      ],
    });
  };
  const initChart = () => {
    if (!this.el) return;
    this.setState({ chart: echarts.init(this.el, "macarons") }, () => {
      setOptions(this.props.chartData);
    });
  };
  return <div></div>;
};
ChooseChart.PropTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.object,
  chartData: PropTypes.object.isRequired,
};
export default ChooseChart;
