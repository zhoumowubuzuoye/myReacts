/**
 *@author: xiewenhao
 *@date: 2022-01-18 15:37:29
 *@version: V1.0.0
 *@description:
 */
import React, { useEffect } from "react";
import { connect } from "react-redux";
const RaddarChart = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return <div></div>;
};

export default connect((state) => state.upLoadLeftChart)(RaddarChart);
