import React, { useState, useEffect, useRef } from "react";
import pubsub from "pubsub-js";
import moment from "moment";
import "./index.less";
import {
  Table,
  Tag,
  Button,
  message,
  Modal,
  Form,
  Input,
  Rate,
  Select,
  DatePicker,
  Pagination,
} from "antd";
import { tableList, deleteItem, editItem } from "@/api/table";

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onOk, form, formData } = this.props;
      const { getFieldDecorator } = form;
      const { id, title, author, readings, star, status, date } = formData;
      const formItemLayout = {
        labelCol: {
          sm: { span: 4 },
        },
        wrapperCol: {
          sm: { span: 16 },
        },
      };
      return (
        <Modal visible={visible} onCancel={onCancel} onOk={onOk}>
          <Form {...formItemLayout}>
            <Form.Item label="序号:">
              {getFieldDecorator("id", {
                initialValue: id,
              })(<Input disabled />)}
            </Form.Item>
            <Form.Item label="标题:">
              {getFieldDecorator("title", {
                rules: [{ required: true, message: "请输入标题!" }],
                initialValue: title,
              })(<Input placeholder="标题" />)}
            </Form.Item>
            <Form.Item label="作者:">
              {getFieldDecorator("author", {
                rules: [{ required: true, message: "请输入标题!" }],
                initialValue: author,
              })(<Input placeholder="作者" />)}
            </Form.Item>
            <Form.Item label="阅读量:">
              {getFieldDecorator("readings", {
                rules: [{ required: true, message: "请输入标题!" }],
                initialValue: readings,
              })(<Input disabled />)}
            </Form.Item>
            <Form.Item label="推荐指数:">
              {getFieldDecorator("star", {
                initialValue: (star + "").length,
              })(<Rate count={3} />)}
            </Form.Item>
            <Form.Item label="状态:">
              {getFieldDecorator("status", {
                initialValue: status,
              })(
                <Select style={{ width: 120 }}>
                  <Select.Option value="published">published</Select.Option>
                  <Select.Option value="draft">draft</Select.Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item label="时间:">
              {getFieldDecorator("date", {
                rules: [
                  { type: "object", required: true, message: "请选择时间!" },
                ],
                initialValue: moment(date || "YYYY-MM-DD HH:mm:ss"),
              })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

export default () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const [visible, setvisible] = useState(false);
  const [formData, setFormData] = useState({});
  const formRef = useRef();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const sub = pubsub.subscribe("tableData", (msg, data) => {
      setTotal(data.total);
      setData(data.items);
    });
    return () => {
      pubsub.unsubscribe("tableData");
    };
  });
  useEffect(() => {
    const current = pubsub.subscribe("currentPage", (name,page) => {
      setPage(page);
    });
    return () => {
      pubsub.unsubscribe(current);
    };
  });
  const columns = [
    {
      title: "名称",
      dataIndex: "title",
      render: (text) => <a>{text}</a>,
      align: "center",
    },
    {
      title: "作者",
      align: "center",
      dataIndex: "author",
    },
    {
      title: "时间",
      align: "center",
      dataIndex: "date",
    },
    {
      align: "center",
      title: "读者",
      dataIndex: "readings",
    },
    {
      align: "center",
      title: "好评",
      dataIndex: "star",
    },
    {
      align: "center",
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
    {
      align: "center",
      title: "操作",
      render: (status, record, index) => {
        return (
          <>
            <Button
              type="primary"
              shape="circle"
              icon="delete"
              className="delete"
              onClick={() => deleteData(record)}
            />
            <Button
              type="primary"
              shape="circle"
              icon="edit"
              onClick={() => editData(record)}
            />
          </>
        );
      },
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys({ selectedRowKeys });
  };
  const deleteData = (data) => {
    deleteItem({ id: data.id }).then((res) => {
      message.success("删除成功");
      pubsub.publish("getData");
    });
  };
  const editData = (data) => {
    setFormData({ ...data });
    showModal();
  };
  const showModal = () => {
    setvisible(true);
  };

  const handleCancel = () => {
    setvisible(false);
  };
  const onOk = () => {
    const { form } = formRef.current.props;
    setvisible(false);
    form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const values = {
        ...fieldsValue,
        star: "".padStart(fieldsValue["star"], "★"),
        date: fieldsValue.date._i,
      };
      editItem(values).then((res) => {
        pubsub.publish("getData");
      });
      // const values = {
      //   ...fieldsValue,
      //   'star': "".padStart(fieldsValue['star'], '★'),
      //   'date': fieldsValue['date'].format('YYYY-MM-DD HH:mm:ss'),
      // };
      // this.setState({ editModalLoading: true, });
      // editItem(values).then((response) => {
      //   form.resetFields();
      //   this.setState({ editModalVisible: false, editModalLoading: false });
      //   message.success("编辑成功!")
      //   this.fetchData()
      // }).catch(e => {
      //   message.success("编辑失败,请重试!")
      // })
    });
    form.resetFields();
  };
  const changePage = (page, pageSize) => {
    setPage(page);
    pubsub.publish("page", page);
  };
  return (
    <>
      <Table
        rowKey="id"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        bordered
        scroll={{ x: "calc(700px + 50%)" }}
        pagination={false}
      />
      <Pagination
        className="pagination"
        total={total}
        pageSizeOptions={["10", "20", "40"]}
        onChange={changePage}
        current={page}
      />
      <CollectionCreateForm
        wrappedComponentRef={formRef}
        formData={formData}
        visible={visible}
        onCancel={handleCancel}
        onOk={onOk}
      />
    </>
  );
};
