export interface ICoinHistory {
   change: string,
   history: [
      {
         price: number,
         timestamp: number,
      }
   ]
}