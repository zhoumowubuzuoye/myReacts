import React, { useState } from "react";

import "./index.less";
import cityConfig from "../../config/cityConfig";
import CityHeader from "./components/Header";
import { Icon, Breadcrumb } from "antd";

export const City = (props) => {
  const [tableList, setTableList] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const getTabList = (data) => {
    setTableList(data);
  };
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const checkMenu = (value) => {
    console.log(cityConfig);
  };
  return (
    <div>
      <CityHeader setTableList={getTabList} />
    </div>
  );
};

export default City;
