import react from 'react'
import { Layout, Button, Avatar, Typography } from 'antd';
import { cryptocurrency } from '../components';
import { AppRoutes } from '../components';
const { Header, Footer, Sider, Content } = Layout;


const LoginPage = () => {
   return (
      <div className='login'>
         <div className='login-header'>
            <div className='login-container'>
               <div className='login-logo'>
                  <Avatar src={cryptocurrency} size='large' />
                  <Typography.Title style={{ color: '#fff' }} level={2} className='logo'>Cryptoworld</Typography.Title>
               </div>
            </div>
         </div>
         <div className='login-content'>
            <AppRoutes />
         </div>
         <div className='login-footer'>
            <Typography.Title level={5} style={{ color: '#fff', textAlign: 'center' }}>
               Cryptoverse <br />
               All rights reserverd
            </Typography.Title>
         </div>
      </div>
   );
};

export default LoginPage;