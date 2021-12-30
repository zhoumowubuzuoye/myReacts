import React, { useState } from "react";
import { Redirect, withRouter, Route, Switch, Link } from "react-router-dom";

import "./index.less";
import cityConfig from "../../config/cityConfig";
import cityMap from "../../config/cityMap";
import CityHeader from "./components/Header";
import { Layout, Menu, Icon } from "antd";

const { Header, Sider, Content } = Layout;
export const City = (props) => {
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
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="city-select"
        >
          <div className="logo" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={props.location.pathname}
            className="city-menu"
          >
            {cityConfig.map((item) => (
              <Menu.Item key={item.route}>
                <Link to={item.route}>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </Link>
              </Menu.Item>
            ))}
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
            <Switch>
              {cityMap.map((item) => (
                <Route
                  path={item.path}
                  key={item.path}
                  component={item.component}
                ></Route>
              ))}
              <Redirect to="/city/home"></Redirect>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default withRouter(City);
