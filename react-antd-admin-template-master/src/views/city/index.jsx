import React, { useState } from "react";
import "./index.less";
import CityHeader from "./components/Header";
import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;
export const City = () => {
  const [tableList, setTableList] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const getTabList = (data) => {
    setTableList(data);
  };
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <CityHeader setTableList={getTabList} />
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} className="city-select">
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]} className="city-menu">
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={toggle.bind(this)}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default City;
