import React, { useState, useEffect } from "react";
import "./index.less";
import { Transfer } from "antd";

import { excelList } from "@/api/excel";

export default () => {
  const [transferData, setTransferData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const handleChange = (nextTargetKeys, direction, moveKeys) => {
    const data = nextTargetKeys.sort((a, b) => {
      return a - b;
    });
    setTargetKeys(data);
    console.log("targetKeys: ", data);
    console.log("direction: ", direction);
    console.log("moveKeys: ", moveKeys);
  };
  useEffect(() => {
    excelList().then((res) => {
      console.log(res);
      let data = res.data.data.items.map((item) => {
        item.key = item.id;
        return item;
      });
      console.log(data);
      setTransferData(data);
    });
  }, []);
  useEffect(() => {
    if (isTrue) {
      console.log(selectedKeys);
      setIsTrue(false);
    } else {
      console.log(111);
    }
  });
  const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    setIsTrue(true);
    console.log("sourceSelectedKeys: ", sourceSelectedKeys);
    console.log("targetSelectedKeys: ", targetSelectedKeys);
  };

  return (
    <div>
      <Transfer
        dataSource={transferData}
        titles={["Source", "Target"]}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        render={(item) => item.title}
        style={{ width: "100%" }}
        key={"id"}
      />
    </div>
  );
};
