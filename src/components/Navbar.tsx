import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Typography, Avatar } from 'antd'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { cryptocurrency } from '.'
import { useAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypeSelector'

const Navbar = () => {

   const { user } = useTypedSelector(state => state.auth)

   const [activeMenu, setActiveMenu] = useState(true);
   const [screenSize, setScreenSize] = useState(0);

   const { logout } = useAction()

   useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth)
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   useEffect(() => {
      if (screenSize < 768) {
         setActiveMenu(false);
      } else {
         setActiveMenu(true);
      }
   }, [screenSize])

   return (
      <div className='nav-container'>
         <div className='logo-container'>
            <Avatar src={cryptocurrency} size='large' />
            <Typography.Title level={2} className='logo'>
               <Link to='/'>Crytoworld</Link>
            </Typography.Title>
            <Button className='menu-control-container'
               onClick={() => setActiveMenu(!activeMenu)}
            >
               <MenuOutlined />
            </Button>
         </div>
         {activeMenu &&
            <Menu theme='dark'>
               <Menu.Item key={0} icon={<UserOutlined />}>
                  <Typography.Text style={{ color: '#fff' }}>{user.username}</Typography.Text>
               </Menu.Item>
               <Menu.Item key={1} icon={<HomeOutlined />}>
                  <Link to='/'>Home</Link>
               </Menu.Item>
               <Menu.Item key={2} icon={<FundOutlined />}>
                  <Link to='/currencies'>Cryptocurrencies</Link>
               </Menu.Item>
               <Menu.Item key={3} icon={<MoneyCollectOutlined />}>
                  <Link to='/exchanges'>Exchanges</Link>
               </Menu.Item>
               <Menu.Item key={4} icon={<BulbOutlined />}>
                  <Link to='/news'>News</Link>
               </Menu.Item>
               <Menu.Item key={5} icon={<LogoutOutlined />}>
                  <Button ghost onClick={logout}>Logout</Button>
               </Menu.Item>
            </Menu>
         }

      </div>
   )
}

export default Navbar