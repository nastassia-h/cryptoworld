import axios from 'axios'
import { coinDetailsAction, coinDetailsActionsTypes } from '../../types/coinDetails'
import { Dispatch } from 'redux'

export const fetchCoinDetails = (uuid: string) => {
   return async (dispatch: Dispatch<coinDetailsAction>) => {
      try {
         dispatch({ type: coinDetailsActionsTypes.FETCH_COINDETAILS })
         const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${uuid}`,
            {
               headers: {
                  'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
                  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
               }
            }
         )
         dispatch({ type: coinDetailsActionsTypes.FETCH_COINDETAILS_SUCCSESS, payload: response.data.data.coin })
      } catch (e) {
         dispatch({
            type: coinDetailsActionsTypes.FETCH_COINDETAILS_ERROR,
            payload: `'Error: ' ${e}`
         })
      }
   }
}