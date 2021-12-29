import React from "react";
import "./index.less";
import { Input, Button, Icon } from "antd";

const { Search } = Input;
export const Header = (props) => {
  const { setTableList } = props;
  return (
    <div className="city-header">
      <div className="header-main">
        <div className="main-top">
          <div className="city-name">数字政府综合应用</div>
          <div className="city-user">
            <Button shape="round" className="button-hover">
              数字金华
            </Button>
            <Icon type="user" style={{ color: "white" }} />
            <div className="username">阮志强，您好！</div>
            <Button type="primary" icon="poweroff" className="exit">
              退出
            </Button>
          </div>
        </div>
        <div className="header-search">
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={(value) => setTableList(value)}
            className="header-searchs"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
