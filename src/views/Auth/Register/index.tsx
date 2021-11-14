import { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../store';
import { fetchRegister } from '../../../slices/RegisterSlice';

export const Register: FC = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: any) => {
    if (values.password === values.repassword) {
      dispatch(fetchRegister(values));
      toast('You have successfully registered.');
      window.location.href = '/';
    } else {
      toast('Passwords do not match.');
    }
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
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input autoCapitalize="off" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="surname"
            rules={[{ required: true, message: 'Please input your Surname!' }]}
          >
            <Input autoCapitalize="off" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Surname" />
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
          <Form.Item
            name="repassword"
            rules={[{ required: true, message: 'Please input your Password Again!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password Again"
              autoCapitalize="off"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
