import axios from 'axios'
import { coinAction, coinsActionsTypes } from '../../types/coin'
import { Dispatch } from 'redux'

export const fetchCoins = () => {
   return async (dispatch: Dispatch<coinAction>) => {
      try {
         dispatch({ type: coinsActionsTypes.FETCH_COINS })
         const response = await axios.get('https://coinranking1.p.rapidapi.com/coins',
            {
               headers: {
                  'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
                  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
               }
            }
         )
         dispatch({ type: coinsActionsTypes.FETCH_COINS_SUCCSESS, payload: response.data.data.coins })
      } catch (e) {
         dispatch({
            type: coinsActionsTypes.FETCH_COINS_ERROR,
            payload: `'Error: ' ${e}`
         })
      }
   }
}