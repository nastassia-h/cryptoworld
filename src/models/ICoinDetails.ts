export interface ICoinDetails {
   name: string,
   uuid: string,
   symbol: string,
   description: string,
   links: [
      {
         name: string,
         url: string,
         type: string,
      }
   ],
   price: number,
   '24hVolume': number,
   rank: number,
   marketCap: number,
   allTimeHigh: {
      price: number,
   },
   websiteUrl: string,
   numberOfMarkets: number,
   numberOfExchanges: number,
   supply: {
      circulating: number,
      total: number,
      confirmed: boolean,
   }
}