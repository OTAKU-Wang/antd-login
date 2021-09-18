import '../../css/App.less'
import { Form, Input, Button, Checkbox } from 'antd';
import * as React from "react";
import { ChangeEvent } from "react";

interface PropsType {
  onClick: (email: string, password: string) => void;
}
interface StateType {
  email: string;
  password: string;
}

export class SignInComponent extends React.Component<PropsType, StateType> {
  state = {
    email: "email@email.com",
    password: "abc123",
  };
  handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
    event.preventDefault();
  };

  handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
    event.preventDefault();
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    this.props.onClick(email, password);
  };

  onFinish = (values: any) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <div className="site-page-form-ghost-wrapper">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, type: 'email', message: '请输正确的邮箱地址!' }]}
          >
            <Input type="text"
              placeholder={this.state.email}
              value={this.state.email}
              onChange={this.handleChangeEmail} />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, whitespace: true, message: '请输入密码!' }]}
          >
            <Input.Password type="password"
              placeholder={this.state.password}
              value={this.state.password}
              onChange={this.handleChangePassword} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>

    );
  }

}