import React, { useState } from "react";
import { Collapse, Form, Input, Select } from "antd";
const { Panel } = Collapse;
const { Option } = Select;
export default () => {
  const callback = (key) => {
    console.log(key);
  };
  const changeTitle = (e) => {
    setListData({
      ...listData,
      title: e.target.value,
    });
  };
  const [listData, setListData] = useState({});
  return (
    <Collapse defaultActiveKey={["1"]} onChange={callback}>
      <Panel header="筛选" key="1">
        <Form layout="inline">
          <Form.Item label="标题">
            <Input placeholder="请输入标题" onChange={changeTitle} />
          </Form.Item>
          <Form.Item label="类型">
            <Select style={{ width: "200px" }}>
              <Option value="published">published</Option>
              <Option value="draft">draft</Option>
            </Select>
          </Form.Item>
          <Form.Item label="推荐指数">
            <Select style={{ width: "200px" }}>
              <Select.Option value={1}>★</Select.Option>
              <Select.Option value={2}>★★</Select.Option>
              <Select.Option value={3}>★★★</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  );
};
