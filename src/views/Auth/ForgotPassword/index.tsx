import { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Service } from '../../../services';

export const ForgotPassword: FC = () => {
  const onFinish = (values: any) => {
    Service.User.ForgotPassword(values).then(res => console.log(res));
  };
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fafcff',
    }}
    >
      <div
        style={{ padding: 30,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          width: '70%',
          height: '50%',
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input autoCapitalize="off" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
