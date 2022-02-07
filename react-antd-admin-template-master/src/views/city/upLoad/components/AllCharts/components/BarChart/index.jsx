/**
 *@author: xiewenhao
 *@date: 2022-01-21 11:03:31
 *@version: V1.0.0
 *@description:
 */

import React, { useEffect, useState, useRef } from "react";
import echarts from "@/lib/echarts";
import "./index.less";
import { subscribe, unsubscribe } from "pubsub-js";
export default function Index() {
  const [chart, setChart] = useState(null);
  const [isChart, setIsChart] = useState(false);
  const [x, setX] = useState([]);
  const [A, setA] = useState({});
  const [B, setB] = useState({});
  const [C, setC] = useState({});
  const el = useRef();
  useEffect(() => {
    const barData = subscribe("barData", (name, data) => {
      console.log(data);
      setX(data.x);
      setA(data.A);
      setB(data.B);
      setC(data.C);
      initChart();
    });
    // return unsubscribe(barData);
  });
  useEffect(() => {
    if (isChart) {
      setOptions();
      setIsChart(false);
    }
  }, [isChart]);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (chart) {
        chart.resize();
      }
    });
  });
  const initChart = () => {
    if (!el.current) return;
    setChart(echarts.init(el.current, "macarons"));
    setIsChart(true);
  };
  const setOptions = () => {
    const animationDuration = 3000;
    if (chart) {
      chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          top: 10,
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            ...A,
            animationDuration,
          },
          {
            ...B,
            animationDuration,
          },
          {
            ...C,
            animationDuration,
          },
        ],
      });
    }
  };
  return <div ref={el} className="bar-chart"></div>;
}
