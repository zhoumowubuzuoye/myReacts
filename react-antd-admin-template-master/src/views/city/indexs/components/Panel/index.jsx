import React, { useState, useEffect } from "react";
import pubsub from "pubsub-js";

import { tableList, deleteItem, editItem } from "@/api/table";

import { Collapse, Form, Input, Select, Button } from "antd";
const { Panel } = Collapse;
const { Option } = Select;
export default () => {
  const [listData, setListData] = useState({
    title: "",
    status: "",
    pageNumber: 1,
    pageSize: 10,
  });
  useEffect(() => {
    handleSubmit();
  });
  const callback = (key) => {
    console.log(key);
  };
  const changeTitle = (e) => {
    setListData({
      ...listData,
      title: e.target.value,
    });
  };
  const chooseType = (value) => {
    console.log(value);
    setListData({
      ...listData,
      status: value,
    });
  };
  const chooseStar = (value) => {
    setListData({
      ...listData,
      star: value,
    });
    console.log(listData);
  };
  const handleSubmit = () => {
    tableList(listData).then((res) => {
      console.log(res);
      pubsub.publish("tableData", res.data.data.items);
    });
  };
  return (
    <Collapse defaultActiveKey={["1"]} onChange={callback}>
      <Panel header="筛选" key="1">
        <Form layout="inline" onSubmit={handleSubmit}>
          <Form.Item label="标题">
            <Input placeholder="请输入标题" onChange={changeTitle} />
          </Form.Item>
          <Form.Item label="类型">
            <Select style={{ width: "200px" }} onChange={chooseType}>
              <Option value="published">published</Option>
              <Option value="draft">draft</Option>
            </Select>
          </Form.Item>
          <Form.Item label="推荐指数">
            <Select style={{ width: "200px" }} onChange={chooseStar}>
              <Select.Option value={1}>★</Select.Option>
              <Select.Option value={2}>★★</Select.Option>
              <Select.Option value={3}>★★★</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              查找
            </Button>
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  );
};
