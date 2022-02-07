/**
 *@author: xiewenhao
 *@date: 2022-01-18 15:31:01
 *@version: V1.0.0
 *@description:
 */
import React from "react";
import "./index.less";
import { Row, Col } from "antd";

import RaddarChart from "./components/RaddarChart/RaddarChart";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
export default (props) => {
  const { pieData } = props;
  return (
    <div className="all-charts">
      <Row gutter={40}>
        <Col span={8} className="chart">
          <RaddarChart></RaddarChart>
        </Col>
        <Col span={8} className="chart">
          <PieChart pieData={pieData} />
        </Col>
        <Col span={8} className="chart">
          <BarChart />
        </Col>
      </Row>
    </div>
  );
};
