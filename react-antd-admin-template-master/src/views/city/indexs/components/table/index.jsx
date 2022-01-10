import React, { useState, useEffect } from "react";
import pubsub from "pubsub-js";
import { Table, Tag } from "antd";
export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const sub = pubsub.subscribe("tableData", (msg, data) => {
      console.log(data);
      setData(data);
    });
    return () => {
      pubsub.unsubscribe("tableData");
    };
  });
  const columns = [
    {
      title: "名称",
      dataIndex: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "作者",
      dataIndex: "author",
    },
    {
      title: "时间",
      dataIndex: "date",
    },
    {
      title: "读者",
      dataIndex: "readings",
    },
    {
      title: "好评",
      dataIndex: "star",
    },
    {
      title: "评论",
      dataIndex: "status",
      render: (status, record, index) => {
        if (record.status === "draft") {
          return (
            <Tag color="#2db7f5" className="tag">
              {record.status}
            </Tag>
          );
        } else {
          return (
            <Tag color="#87d068" className="tag">
              {record.status}
            </Tag>
          );
        }
      },
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys({ selectedRowKeys });
  };

  return (
    <Table
      rowKey="id"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
    />
  );
};
