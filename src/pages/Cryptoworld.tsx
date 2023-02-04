import React from 'react'
import { Footer, Navbar, AppRoutes } from '../components'
import { Layout } from 'antd'

const Cryptoworld = () => {
   return (
      <div className="app">
         <div className="navbar">
            <Navbar />
         </div>
         <div className='main'>
            <Layout>
               <AppRoutes />
            </Layout>
            <Footer />
         </div>
      </div>
   )
}

export default Cryptoworld