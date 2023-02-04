import React from 'react'
import { Layout, Row, Card } from 'antd'
import LoginForm from '../components/LoginForm';

const Login = () => {
   return (
      <Row justify="center" align='middle' className='h100'>
         <Card>
            <LoginForm />
         </Card>
      </Row>
   )
}

export default Login