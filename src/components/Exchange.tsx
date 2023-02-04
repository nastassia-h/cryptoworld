import React, { useEffect } from 'react'
import { useAction } from '../hooks/useAction'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { Layout, Row, Col, Collapse } from 'antd'
import millify from 'millify'
import { LinkOutlined, GlobalOutlined } from '@ant-design/icons'
const { Panel } = Collapse

const Exchange = () => {

   const { exchanges, error, loading } = useTypedSelector(state => state.exchanges)
   const { fetchExchanges } = useAction()

   const v = ['Exchange', '24h Trade Volume', 'Year established'];

   useEffect(() => {
      fetchExchanges();
   }, [])

   return (
      <div>
         <div className='exchanges-title-container'>
            {v.map(x =>
               <p>{x}</p>
            )}
         </div>
         <div className='exchanges-container'>
            <Collapse defaultActiveKey={['1']}>
               {exchanges.map(exchange =>
                  <Panel key={exchange.id} header={
                     <div className='exchange-row'>
                        <p className='exchange-image'>{exchange.trust_score_rank}. <img src={exchange.image} alt="" />{exchange.name}</p>
                        <p className='second'>{millify(exchange.trade_volume_24h_btc)}</p>
                        <p className='third'>{exchange.year_established || '0000'}</p>
                     </div>
                  }
                  >
                     <p>
                        <GlobalOutlined style={{ marginRight: 5 }} />
                        {exchange?.country}</p>
                     <p className='exchange-description'>{exchange?.description}</p>
                     <p>
                        <LinkOutlined />
                        <a className='exchange-link' href={exchange.url}>Go to the Website</a>
                     </p>
                  </Panel>
               )}
            </Collapse>
         </div>
      </div>
   )
}

export default Exchange