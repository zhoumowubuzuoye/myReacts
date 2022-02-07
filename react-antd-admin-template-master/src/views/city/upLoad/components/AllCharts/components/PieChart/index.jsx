/**
 *@author: xiewenhao
 *@date: 2022-01-21 10:11:42
 *@version: V1.0.0
 *@description:
 */

import React, { useState, useRef, useEffect } from "react";
import echarts from "@/lib/echarts";
import { PropTypes } from "prop-types";

import "./index.less";
const PieChart = (props) => {
  const [chart, setChart] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const el = useRef();
  const setOptions = () => {
    const animationDuration = 3000;
    chart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"],
      },
      calculable: true,
      series: [
        {
          name: "WEEKLY WRITE ARTICLES",
          type: "pie",
          roseType: "radius",
          radius: [15, 95],
          center: ["50%", "38%"],
          data: props.pieData,
          animationEasing: "cubicInOut",
          animationDuration,
        },
      ],
    });
  };
  const initChart = () => {
    if (!el.current) return;
    setChart(echarts.init(el.current, "macarons"));
    setIsShow(true);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (chart) {
        chart.resize();
      }
    });
  });
  useEffect(() => {
    initChart();
  }, []);
  useEffect(() => {
    console.log(el.current);
    if (chart) {
      setOptions();
      setIsShow(false);
    }
  }, [isShow]);
  useEffect(() => {
    if (chart) {
      setOptions();
      setIsShow(false);
    }
  }, [props]);
  return <div className="pie-chart" ref={el}></div>;
};

PieChart.propTypes = {};

export default PieChart;
