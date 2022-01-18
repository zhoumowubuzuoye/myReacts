/**
 *@author: xiewenhao
 *@date: 2022-01-18 15:31:01
 *@version: V1.0.0
 *@description:
 */
import React from "react";
import "./index.less";
import { Row, Col } from "antd";

import RaddarChart from "./components/RaddarChart";
export default () => {
  return (
    <div className="all-charts">
      <Row gutter={40}>
        <Col span={8} className="chart">
          <RaddarChart></RaddarChart>
        </Col>
        <Col span={8} className="chart">
          2
        </Col>
        <Col span={8} className="chart">
          3
        </Col>
      </Row>
    </div>
  );
};
