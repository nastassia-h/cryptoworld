import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import News from './News'
import Cryptocurrencies from './Cryptocurrencies'
import { IGlobalStats } from '../models/IGlobalStats'
import axios from 'axios'
import Loader from './Loader'

const Homepage = () => {
   const [data, setData] = useState<IGlobalStats>();
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      setLoading(true)
      axios.get('https://coinranking1.p.rapidapi.com/stats',
         {
            params: { referenceCurrencyUuid: 'yhjMzLPhuIDl' },
            headers: {
               'X-RapidAPI-Key': '56a2524e12msh8d32a9a56a0a6adp1d008djsn065802268cc7',
               'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
         }
      )
         .then(response => setData(response.data.data))
         .finally(() => setLoading(false))
   }, [])

   return (
      <>
         <Typography.Title level={2} className='heading'>
            Global Crypto Stats
         </Typography.Title>
         {loading
            ? <Loader />

            :
            <Row>
               <Col span={12}><Statistic title='Total Cryptocurrencies' value={data?.totalCoins} /></Col>
               <Col span={12}><Statistic title='Total Exchanges' value={millify(data?.totalExchanges || 0)} /></Col>
               <Col span={12}><Statistic title='Total Market Cap' value={millify(data?.totalMarketCap || 0)} /></Col>
               <Col span={12}><Statistic title='Total 24h Volume' value={millify(data?.total24hVolume || 0)} /></Col>
               <Col span={12}><Statistic title='Total Markets' value={millify(data?.totalMarkets || 0)} /></Col>
            </Row>
         }
         <div className='home-heading-container'>
            <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
            <Typography.Title level={2} className='show-more'><Link to='/currencies'>Show more</Link></Typography.Title>
         </div>
         <Cryptocurrencies simplified={true} />
         <div className='home-heading-container'>
            <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
            <Typography.Title level={2} className='show-more'><Link to='/news'>Show more</Link></Typography.Title>
         </div>
         <News simplified={true} />
      </>
   )
}

export default Homepage