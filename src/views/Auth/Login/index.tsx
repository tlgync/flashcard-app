import { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { fetchLogin } from '../../../slices/LoginSlice';

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: any) => {
    dispatch(fetchLogin(values));
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
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input autoCapitalize="off" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              autoCapitalize="off"
            />
          </Form.Item>
          <Form.Item>
            <Link to="/forgotPassword" className="login-form-forgot">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <span style={{ margin: '0 10px 0 10px' }}>
              Or
            </span>
            <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
