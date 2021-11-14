import { FC } from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
// import { useAppDispatch } from '../../../store';
// import { fetchLogin } from '../../../slices/LoginSlice';
import { toast } from 'react-toastify';
import { Service } from '../../../services';

export const ResetPassword: FC = () => {
  const { id }:any = useParams();
  // const dispatch = useAppDispatch();
  const onFinish = (values: any) => {
    values.id = id;
    Service.User.ResetPassword(values).then(res => {
      if (res && !res.error) {
        toast('Password changed');
        window.location.href = '/';
      }
    });
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
            rules={[{ required: true, message: 'Please input your Re-Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Re-Password"
              autoCapitalize="off"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Reset Password
            </Button>
            <span style={{ margin: '0 10px 0 10px' }}>
              Or
            </span>
            <Link to="/">Login!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
