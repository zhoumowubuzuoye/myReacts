import React from "react";
import "./index.less";
import { Row, Col, Icon } from "antd";
import CountUp from "react-countup";

export default (props) => {
  return (
    <Row gutter={40} className="panel-group">
      {props.chartList.map((item) => {
        return (
          <Col key={item.type} lg={6} sm={12} xs={24}>
            <div className="panel">
              <div className="icon">
                <Icon
                  className={item.type}
                  style={{ fontSize: 55, color: item.color }}
                  type={item.icon}
                />
              </div>
              <div className="des">
                <p className="card-panel-text">{item.type}</p>
                <CountUp end={item.num} start={0} className="card-panel-num" />
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};
