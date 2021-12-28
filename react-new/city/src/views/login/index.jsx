/*
 * @Autor: yugeStrive
 * @Date: 2020-07-07 08:51:44
 * @LastEditTime: 2020-07-31 12:39:04
 * @Description: 登录页
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import { authAPI } from '@/apis'
import loginStyles from './index.module.scss'
import { GlabelStore } from '@/store/glabel.store'
import { Debounce, BindSelf } from '@/utils/decorators'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
}

class Login extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  @BindSelf()
  @Debounce(400)
  async handleSubmit(e) {
    message.success('防抖成功!')
    let config = {
      data: {
        username: e.username,
        pwd: e.password,
      },
    }
    
    let res = await authAPI.login(config.data)
    const { name } = res.data.user
    // 登录成功后的操作
    this.props.setUserInfo(name)
    message.success({
      content: 'Welcome to system!',
      duration: 1,
      maxCount: 1,
    })
  }
  render() {
    console.log(this.props, 'this.props.userInfo')
    return (
      <div className={loginStyles.loginPage}>
        <div className={loginStyles.login_wrap}>
          <h2 className={loginStyles.title}>{this.props.userInfo}</h2>
          <div className={loginStyles.login_content}>
            <Form {...layout} onFinish={this.handleSubmit} className={loginStyles.login_from}>
              <Form.Item
                label="username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input
                  placeholder="username"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,0.25)' }}></Icon>}
                />
              </Form.Item>
              <Form.Item
                label="password"
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  type="password"
                  placeholder="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}></Icon>}
                />
              </Form.Item>
              <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <span className={loginStyles.login_form_forgot}>Forgot password</span>
                <Button type="primary" htmlType="submit" className={loginStyles.login_form_button}>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
// class Login extends Component {
//   constructor() {
//     super()
//     this.state = {}
//   }
//   onFinish = (values) => {
//     console.log('Success:', values);
//   };
//   onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };
//   @BindSelf()
//   @Debounce(400)
//   async handleSubmit(e) {
//     message.success('防抖成功!')
//     let config = {
//       data: {
//         username: e.username,
//         pwd: e.password,
//       },
//     }

//     let res = await authAPI.login(config.data)
//     const { name } = res.data.user
//     // 登录成功后的操作
//     this.props.setUserInfo(name)
//     message.success({
//       content: 'Welcome to system!',
//       duration: 1,
//       maxCount: 1,
//     })
//   }
//   render() {
//     console.log(this.props, 'this.props.userInfo')
//     return (
//       <Form
//       name="basic"
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 16,
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={this.onFinish}
//       onFinishFailed={this.onFinishFailed}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your username!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="remember"
//         valuePropName="checked"
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//     )
//   }
// }

const mapStateToProps = (state) => ({
  userInfo: state.glabelStore.userInfo,
})

const mapDispatchToProps = {
  ...GlabelStore.action,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
