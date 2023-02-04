import React, { FC, useState } from 'react'
import { Form, Input, Button } from 'antd'
//import { rules } from '../utils/rules'
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useAction';

const LoginForm: FC = () => {
   const { authError, authLoading } = useTypedSelector(state => state.auth)
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const { login } = useAction()

   const submit = () => {
      login(username, password)
   }

   return (
      <Form
         onFinish={submit}
      >
         {authError && <div style={{ color: 'red', marginBottom: 30 }}>{authError}</div>}
         <Form.Item
            label="Username"
            name="username"
         >
            <Input value={username} onChange={e => setUsername(e.target.value)} />
         </Form.Item>
         <Form.Item
            label="Password"
            name="password"
         >
            <Input type={'password'} value={password} onChange={e => setPassword(e.target.value)} />
         </Form.Item>
         <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" htmlType="submit" loading={authLoading}>
               Submit
            </Button>
         </Form.Item>
      </Form>
   );
};

export default LoginForm;