import React, { useState, useEffect } from "react";
import pubsub from "pubsub-js";

import { tableList } from "@/api/table";

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
  const [page, setPage] = useState(1);
  const [pageChange, setPageChange] = useState(false);
  useEffect(() => {
    handleSubmit(1);
  }, []);
  useEffect(() => {
    const getData = pubsub.subscribe("getData", () => {
      handleSubmit(page);
    });
    const getPage = pubsub.subscribe("page", (name, data) => {
      console.log(data);
      setPage(data);
      setListData({ ...listData, pageNumber: data });
      setPageChange(true);
    });
    return () => {
      pubsub.unsubscribe(getData);
      pubsub.unsubscribe(getPage);
    };
  });
  useEffect(() => {
    if (pageChange) {
      tableList(listData).then((res) => {
        console.log(listData);
        console.log(res.data.data.items);
        if (res.data.data.items.length > 0) {
          pubsub.publish("tableData", res.data.data);
        } else {
          if (res.data.data.total > 0) {
            pubsub.publish("page", page - 1);
            pubsub.publish("currentPage", page - 1);
          } else {
            pubsub.publish("tableData", []);
          }
        }
        setPageChange(false);
      });
      setPageChange(false);
    } else {
    }
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
  const handleSubmit = (page) => {
    setPage(page);
    pubsub.publish("currentPage", page);
    setListData({ ...listData, pageNumber: page });
    setPageChange(true);
  };
  return (
    <Collapse defaultActiveKey={["1"]} onChange={callback}>
      <Panel header="??????" key="1">
        <Form layout="inline">
          <Form.Item label="??????">
            <Input placeholder="???????????????" onChange={changeTitle} />
          </Form.Item>
          <Form.Item label="??????">
            <Select style={{ width: "200px" }} onChange={chooseType}>
              <Option value="published">published</Option>
              <Option value="draft">draft</Option>
            </Select>
          </Form.Item>
          <Form.Item label="????????????">
            <Select style={{ width: "200px" }} onChange={chooseStar}>
              <Select.Option value={1}>???</Select.Option>
              <Select.Option value={2}>??????</Select.Option>
              <Select.Option value={3}>?????????</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => handleSubmit(1)}
            >
              ??????
            </Button>
          </Form.Item>
        </Form>
      </Panel>
    </Collapse>
  );
};
