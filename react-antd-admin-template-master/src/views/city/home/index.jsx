import React, { useState, useEffect } from "react";
import { excelList } from "@/api/excel";
import {
  Collapse,
  Form,
  Input,
  Icon,
  Radio,
  Select,
  Button,
  Table,
  message,
} from "antd";
const { Panel } = Collapse;

export default () => {
  const [isWidth, setIsWidth] = useState(true);
  const [bookType, setBookType] = useState("xlsx");
  const [fileName, setFileName] = useState("");
  const [dataList, setDataList] = useState([]);
  const [selectBox, setSelectBox] = useState([]);
  useEffect(() => {
    excelList().then((res) => {
      console.log(res.data.data.items);
      setDataList(res.data.data.items);
    });
  }, []);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
    },
    {
      title: "Readings",
      dataIndex: "readings",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectBox(selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  const getFileName = (e) => {
    e.persist();
    setFileName(e.target.value);
  };
  const chooseIsWidth = (e) => {
    console.log(e.target.value);
    setIsWidth(e.target.value);
  };
  const bookTypeChange = (e) => {
    setBookType(e);
  };
  const allExport = (type) => {
    let dataBox = [];
    if (type === "some") {
      dataBox = selectBox;
      if (selectBox.length === 0) {
        message.error("至少选择一项");
        return
      }
    } else {
      dataBox = dataList;
    }
    import("@/lib/Export2Excel").then((excel) => {
      const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
      const filterVal = ["id", "title", "author", "readings", "date"];
      const list = dataBox;
      const data = formatJson(filterVal, list);
      excel.export_json_to_excel({
        header: tHeader,
        data,
        filename: fileName,
        autoWidth: isWidth,
        bookType: bookType,
      });
    });
  };
  const formatJson = (filterVal, jsonData) => {
    return jsonData.map((v) => filterVal.map((j) => v[j]));
  };

  return (
    <div>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="导出选项" key="1">
          <Form layout="inline">
            <Form.Item label="文件名">
              <Input
                prefix={
                  <Icon type="file" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入文件名"
                onChange={(e) => getFileName(e)}
              />
            </Form.Item>
            <Form.Item label="单元格宽度是否自适应">
              <Radio.Group
                defaultValue={true}
                value={isWidth}
                onChange={(e) => chooseIsWidth(e)}
              >
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="文件类型">
              <Select
                defaultValue="xlsx"
                style={{ width: 120 }}
                onChange={(e) => bookTypeChange(e)}
              >
                <Select.Option value="xlsx">xlsx</Select.Option>
                <Select.Option value="csv">csv</Select.Option>
                <Select.Option value="txt">txt</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button
                type="primary"
                onClick={() => allExport("all")}
                icon="file"
              >
                全部导出
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button
                type="primary"
                onClick={() => allExport("some")}
                icon="file"
              >
                导出已选择项
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataList}
        pagination={false}
        rowKey="id"
      />
      ,
    </div>
  );
};
