import React, { useState, useEffect } from "react";
import "./index.less";
import { Transfer } from "antd";

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);

export default () => {
  const [targetKeys, setTargetKeys] = useState(oriTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  const handleChange = (nextTargetKeys, direction, moveKeys) => {
    setTargetKeys(setTargetKeys);
    console.log("targetKeys: ", nextTargetKeys);
    console.log("direction: ", direction);
    console.log("moveKeys: ", moveKeys);
  };
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
        dataSource={mockData}
        titles={["Source", "Target"]}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={handleChange}
        onSelectChange={handleSelectChange}
        render={(item) => item.title}
        style={{ width: "100%" }}
      />
    </div>
  );
};
