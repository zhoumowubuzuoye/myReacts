import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./index.less";
import PanelGroup from "./components/PanelGroup";
import ChooseChart from "./components/ChooseChart";
import AllCharts from "./components/AllCharts";
import { leftChartData } from "@/store/actions";
const UpLoad = (props) => {
  const [chartList, setchartList] = useState([
    {
      type: "New Visits",
      icon: "user",
      num: 102400,
      color: "#40c9c6",
    },
    {
      type: "Messages",
      icon: "message",
      num: 81212,
      color: "#36a3f7",
    },
    {
      type: "Purchases",
      icon: "pay-circle",
      num: 9280,
      color: "#f4516c",
    },
    {
      type: "Shoppings",
      icon: "shopping-cart",
      num: 13600,
      color: "#f6ab40",
    },
  ]);
  const [lineChartDefaultData, setLineChartDefaultData] = useState({
    "New Visits": {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145],
    },
    Messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130],
    },
    Purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130],
    },
    Shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130],
    },
  });
  const [chooseData, setChooseData] = useState({
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  });
  const chooseLineDate = (type) => {
    console.log(props);
    setChooseData(lineChartDefaultData[type]);
  };
  useEffect(() => {
    props.leftChartData([
      {
        value: [5000, 7000, 12000, 11000, 15000, 14000],
        name: "Allocated Budget",
      },
      {
        value: [4000, 9000, 15000, 15000, 13000, 11000],
        name: "Expected Spending",
      },
      {
        value: [5500, 11000, 12000, 15000, 12000, 12000],
        name: "Actual Spending",
      },
    ]);
  }, []);
  return (
    <div className="upLoad">
      <PanelGroup
        chartList={chartList}
        chooseLineDate={chooseLineDate}
      ></PanelGroup>
      <ChooseChart chartData={chooseData}></ChooseChart>
      <AllCharts />
    </div>
  );
};

export default connect((state) => state.upLoadLeftChart, { leftChartData })(
  UpLoad
);
