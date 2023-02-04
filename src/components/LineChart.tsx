import React, { FC } from 'react'
import { Line } from 'react-chartjs-2'
import { Col, Typography, Row } from 'antd';
import { ICoinHistory } from '../models/ICoinHistory';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);

interface LineChartProps {
   coinHistory: ICoinHistory,
   currentPrice: string,
   coinName: string,
}


const LineChart: FC<LineChartProps> = ({ coinHistory, currentPrice, coinName }) => {
   const coinPrice = [];
   const coinTimestamp = [];

   for (let i = 0; i < coinHistory?.history?.length; i++) {
      coinPrice.push(coinHistory.history[i].price)
   }

   for (let i = 0; i < coinHistory?.history?.length; i++) {
      coinTimestamp.push(new Date(coinHistory.history[i].timestamp * 1000).toLocaleDateString())
   }

   const data = {
      labels: coinTimestamp,
      datasets: [
         {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
         },
      ],
   };

   const options = {
      scales: {
         yAxes: [
            {
               ticks: {
                  beginAtZero: true,
               },
            },
         ],
      },
   };

   return (
      <>
         <Row className="chart-header">
            <Typography.Title level={2} className="chart-title">{coinName} Price Chart </Typography.Title>
            <Col className="price-container">
               <Typography.Title level={5} className="price-change">Change: {coinHistory?.change}%</Typography.Title>
               <Typography.Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Typography.Title>
            </Col>
         </Row>
         <Line data={data} />
      </>
   );
}


export default LineChart

