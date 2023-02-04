import React, { useEffect, useState, useMemo, FC } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, List, Typography } from 'antd';
import Loader from './Loader';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypeSelector';

export interface CryptoProps {
   simplified: boolean;
}


const Cryptocurrencies: FC<CryptoProps> = ({ simplified }) => {

   const { fetchCoins } = useAction();
   const { coins, error, loading } = useTypedSelector(state => state.coins)

   const [searchedCoins, setSearchedCoins] = useState(coins)

   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      fetchCoins()
   }, []);

   useMemo(() => {
      const filteredData = coins.filter((item) => item.name.toLowerCase().includes(searchTerm));
      setSearchedCoins(filteredData);
   }, [searchTerm])

   if (loading) return <Loader />;

   return (
      <div>
         {simplified &&
            <List
               dataSource={coins}
            >
               {coins?.slice(0, 10).map(coin =>
                  <List.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
                     <Typography.Text>{coin.name}</Typography.Text>
                     <span style={coin.change > 0 ? { color: 'green' } : { color: 'red' }}>{coin.change}%</span>
                  </List.Item>
               )}
            </List>
         }
         {!simplified &&
            <>
               <div className="search-crypto">
                  <Input
                     placeholder="Search Cryptocurrency"
                     onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                  />
               </div>

               <Row gutter={[32, 32]} className="crypto-card-container">
                  {searchedCoins.map((currency) => (
                     <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={currency.uuid}
                     >
                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                           <Card
                              title={`${currency.rank}. ${currency.name}`}
                              extra={<img className="crypto-image" src={currency.iconUrl} />}
                              hoverable
                           >
                              <p>Price: {millify(currency.price)}</p>
                              <p>Market Cap: {millify(currency.marketCap)}</p>
                              <p>Daily Change: <span style={currency.change > 0 ? { color: 'green' } : { color: 'red' }}>{currency.change}%</span></p>
                           </Card>
                        </Link>
                     </Col>
                  ))}
               </Row>
            </>
         }
      </div>
   );
};
export default Cryptocurrencies;