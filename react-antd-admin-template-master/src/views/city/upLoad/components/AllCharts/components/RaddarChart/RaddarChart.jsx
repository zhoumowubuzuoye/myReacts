/**
 *@author: xiewenhao
 *@date: 2022-01-18 15:37:29
 *@version: V1.0.0
 *@description:
 */
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import echarts from "@/lib/echarts";
import { PropTypes } from "prop-types";
import "./index.less";
const RaddarChart = (props) => {
  const [chart, setChart] = useState(null);
  const [ischart, setIsChart] = useState(false);
  const setOptions = () => {
    const animationDuration = 3000;
    chart.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      radar: {
        radius: "66%",
        center: ["50%", "42%"],
        splitNumber: 8,
        splitArea: {
          areaStyle: {
            color: "rgba(127,95,132,.3)",
            opacity: 1,
            shadowBlur: 45,
            shadowColor: "rgba(0,0,0,.5)",
            shadowOffsetX: 0,
            shadowOffsetY: 15,
          },
        },
        indicator: [
          { name: "Sales", max: 10000 },
          { name: "Administration", max: 20000 },
          { name: "Information Techology", max: 20000 },
          { name: "Customer Support", max: 20000 },
          { name: "Development", max: 20000 },
          { name: "Marketing", max: 20000 },
        ],
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["Allocated Budget", "Expected Spending", "Actual Spending"],
      },
      series: [
        {
          type: "radar",
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: "rgba(0,0,0,.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1,
            },
          },
          data: props.leftData,
          animationDuration,
        },
      ],
    });
  };

  const initChart = () => {
    if (!el.current) return;
    setChart(echarts.init(el.current, "macarons"));
    setIsChart(true);
  };
  const el = useRef();
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (chart) {
        chart.resize();
      }
    });
  });
  useEffect(() => {
    if (el.current) {
      initChart();
    }
  }, []);
  useEffect(() => {
    if (chart) {
      setOptions();
    }
  }, [props]);
  useEffect(() => {
    if (ischart) {
      setOptions();
      setIsChart(false);
    }
  }, [ischart]);
  return <div className="raddar-chart" ref={el}></div>;
};

RaddarChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};
RaddarChart.defalutProps = {
  width: "100%",
  height: "300px",
  styles: {},
  className: "",
};
export default connect((state) => state.upLoadLeftChart)(RaddarChart);
