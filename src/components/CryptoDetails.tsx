import React, { useEffect, useMemo, useState } from 'react'
import { useAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypeSelector';
import Loader from './Loader';
import { NumberOutlined, DollarCircleOutlined, ThunderboltOutlined, FundOutlined, CheckOutlined, StopOutlined, ExclamationCircleOutlined, MoneyCollectOutlined, TrophyOutlined } from '@ant-design/icons'
import millify from 'millify';
import { Typography, Col, Select, Row } from 'antd';
import parse from 'html-react-parser';
import LineChart from './LineChart';
import { Option } from 'antd/es/mentions';
const { Title, Text } = Typography


const CryptoDetails = () => {

   const { coinHistory, loadingHistory } = useTypedSelector(state => state.coinHistory)
   const { coinDetails, error, loading } = useTypedSelector(state => state.coinDetails)
   const [date, setDate] = useState('7d')
   const { fetchCoinDetails, fetchCoinHistory } = useAction();

   const uuid = document.location.pathname.split('/')

   const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

   useEffect(() => {
      fetchCoinDetails(uuid[2])
   }, [])

   useMemo(() => {
      fetchCoinHistory(uuid[2], date)
   }, [date])

   const stats = [
      { title: 'Price to USD', value: `$ ${coinDetails?.price && millify(coinDetails?.price)}`, icon: <DollarCircleOutlined /> },
      { title: 'Rank', value: coinDetails?.rank, icon: <NumberOutlined /> },
      { title: '24h Volume', value: `$ ${coinDetails['24hVolume'] && millify(coinDetails['24hVolume'])}`, icon: <ThunderboltOutlined /> },
      { title: 'Market Cap', value: `$ ${coinDetails?.marketCap && millify(coinDetails?.marketCap)} `, icon: <DollarCircleOutlined /> },
      { title: 'All-time-high(daily avg.)', value: `$ ${coinDetails?.allTimeHigh?.price && millify(coinDetails?.allTimeHigh?.price)} `, icon: <TrophyOutlined /> },
   ];

   const genericStats = [
      { title: 'Number Of Markets', value: coinDetails?.numberOfMarkets, icon: <FundOutlined /> },
      { title: 'Number Of Exchanges', value: coinDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
      { title: 'Approved Supply', value: coinDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
      { title: 'Total Supply', value: `$ ${coinDetails?.supply?.total && millify(coinDetails?.supply?.total)} `, icon: <ExclamationCircleOutlined /> },
      { title: 'Circulating Supply', value: `$ ${coinDetails?.supply?.circulating && millify(coinDetails?.supply?.circulating)} `, icon: <ExclamationCircleOutlined /> },
   ];



   if (loading) return (<Loader />)
   else

      return (
         <Col className="coin-detail-container">
            <Col className="coin-heading-container">
               <Title level={2} className="coin-name">
                  {coinDetails.name} ({coinDetails.symbol}) Price
               </Title>
               <p>{coinDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
            </Col>
            <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setDate(value)}>
               {time.map((date) => <Option key={date}>{date}</Option>)}
            </Select>
            {loadingHistory
               ? <Loader />
               : <LineChart coinHistory={coinHistory} currentPrice={millify(coinDetails?.price)} coinName={coinDetails.name} />
            }
            <Col className="stats-container">
               <Col className="coin-value-statistics">
                  <Col className="coin-value-statistics-heading">
                     <Title level={3} className="coin-details-heading">{coinDetails.name} Value Statistics</Title>
                     <p>An overview showing the statistics of {coinDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
                  </Col>
                  {stats.map(({ icon, title, value }) => (
                     <Col className="coin-stats">
                        <Col className="coin-stats-name">
                           <Text>{icon}</Text>
                           <Text>{title}</Text>
                        </Col>
                        <Text className="stats">{value}</Text>
                     </Col>
                  ))}
               </Col>
               <Col className="other-stats-info">
                  <Col className="coin-value-statistics-heading">
                     <Title level={3} className="coin-details-heading">Other Stats Info</Title>
                     <p>An overview showing the statistics of {coinDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
                  </Col>
                  {genericStats.map(({ icon, title, value }) => (
                     <Col className="coin-stats">
                        <Col className="coin-stats-name">
                           <Text>{icon}</Text>
                           <Text>{title}</Text>
                        </Col>
                        <Text className="stats">{value}</Text>
                     </Col>
                  ))}
               </Col>
            </Col>
            <Col className="coin-desc-link">
               <Row className="coin-desc">
                  <Title level={3} className="coin-details-heading">What is {coinDetails.name}?</Title>
                  {parse(coinDetails.description || '')}
               </Row>
               <Col className="coin-links">
                  <Title level={3} className="coin-details-heading">{coinDetails.name} Links</Title>
                  {coinDetails.links?.map((link) => (
                     <Row className="coin-link" key={link.name}>
                        <Title level={5} className="link-name">{link.type}</Title>
                        <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                     </Row>
                  ))}
               </Col>
            </Col>
         </Col>
      )
}

export default CryptoDetails;


