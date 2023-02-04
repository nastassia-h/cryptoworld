import axios from 'axios'
import { coinHistoryAction, coinHistoryActionsTypes } from '../../types/coinHistory'
import { Dispatch } from 'redux'

export const fetchCoinHistory = (uuid: string, date: string) => {
   return async (dispatch: Dispatch<coinHistoryAction>) => {
      try {
         dispatch({ type: coinHistoryActionsTypes.FETCH_COINHISTORY })
         const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${uuid}/history`,
            {
               headers: {
                  'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
                  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
               },
               params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: date },
            }
         )
         dispatch({ type: coinHistoryActionsTypes.FETCH_COINHISTORY_SUCCSESS, payload: response.data.data })
      } catch (e) {
         dispatch({
            type: coinHistoryActionsTypes.FETCH_COINHISTORY_ERROR,
            payload: `'Error: ' ${e}`
         })
      }
   }
}