/**
 *@author: xiewenhao
 *@date: 2022-01-17 16:44:02
 *@version: V1.0.0
 *@description:
 */
import React, { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import echarts from "@/lib/echarts";
import "./index.less";
const ChooseChart = (props) => {
  const el = useRef();
  useEffect(() => {
    const chartResize = window.addEventListener("resize", () => {
      if (chart) {
        chart.resize();
      }
      // console.log(chart);
    });
  });
  useEffect(() => {
    initChart();
  }, [props]);
  useEffect(() => {
    if (el.current) {
      initChart();
    }
  }, [el.current]);
  useEffect(() => {
    if (chartDataChange) {
      setOptions({
        ...props.chartData,
      });
      setChartDataChange(false);
    }
  });
  const [chart, setChart] = useState(null);
  const [chartDataChange, setChartDataChange] = useState([false]);
  const setOptions = ({ expectedData, actualData } = {}) => {
    if (chart) {
      chart.setOption({
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
    } else {
    }
  };
  const initChart = () => {
    if (!el.current) return;
    setChart(echarts.init(el.current, "macarons"));
    setChartDataChange(true);
  };
  return <div ref={el} className="macarons"></div>;
};
ChooseChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.object,
  chartData: PropTypes.object.isRequired,
};
export default ChooseChart;
