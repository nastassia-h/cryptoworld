import React, { FC, useEffect, useMemo, useState, } from 'react'
import { Row, Col, Select, Card, Typography, Avatar, Button } from 'antd'
import { Option } from 'antd/es/mentions';
import Loader from './Loader'
import moment from 'moment';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useAction';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

interface NewsProps {
   simplified: boolean;
}

const News: FC<NewsProps> = ({ simplified }) => {

   const { news, error, loading } = useTypedSelector(state => state.news)
   const { coins } = useTypedSelector(state => state.coins)
   const [offset, setOffset] = useState(0);

   const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

   const { fetchNews, fetchCoins, addNews } = useAction()

   const loadMore = () => {
      setOffset((prev) => { return prev + (!simplified ? 12 : 6) })
      let i = offset + (!simplified ? 12 : 6)
      addNews(!simplified ? 12 : 6, newsCategory, i)
   }

   useEffect(() => {
      fetchCoins()
   }, [])

   useMemo(() => {
      fetchNews(!simplified ? 12 : 6, newsCategory, offset)
   }, [newsCategory])

   if (loading) return <Loader />;

   return (
      <>
         <Row gutter={[24, 24]}>
            {!simplified && (
               <Col span={24}>
                  <Select
                     showSearch
                     className="select-news"
                     placeholder="Select a Crypto"
                     optionFilterProp="children"
                     onChange={(value) => setNewsCategory(value)}
                  >
                     <Option value="Cryptocurency">Cryptocurrency</Option>
                     {coins.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
                  </Select>
               </Col>
            )}
            {news.map((news, i) => (
               <Col xs={24} sm={12} lg={8} key={i}>
                  <Card hoverable className="news-card">
                     <a href={news.newsSearchUrl} target="_blank" rel="noreferrer">
                        <div className="news-image-container">
                           <Typography.Title className="news-title" level={5}>{news.name}</Typography.Title>
                           <div style={{ backgroundImage: `url(${news.image?.thumbnail?.contentUrl || demoImage})` }}></div>
                        </div>
                        <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                        <div className="provider-container">
                           <div>
                              <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                              <Typography.Text className="provider-name">{news.provider[0]?.name}</Typography.Text>
                           </div>
                           <Typography.Text>{moment(news.datePublished).startOf('day').fromNow()}</Typography.Text>
                        </div>
                     </a>
                  </Card>
               </Col>
            ))}
         </Row>
         {!simplified &&
            <Button style={{ marginTop: 10, background: '#0071bd', color: 'white', fontWeight: 700, display: 'grid', alignItems: 'center' }} onClick={loadMore}>Show more</Button>
         }
      </>
   )
}

export default News