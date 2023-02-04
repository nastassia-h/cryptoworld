import { exchangeActionsTypes, exchangesAction } from "../../types/exchanges"
import { Dispatch } from "redux"
import axios from "axios"

export const fetchExchanges = () => {
   return async (dispatch: Dispatch<exchangesAction>) => {
      try {
         dispatch({ type: exchangeActionsTypes.FETCH_EXCHANGES })
         const response = await axios.get('https://coingecko.p.rapidapi.com/exchanges',
            {
               headers: {
                  'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
                  'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
               }
            }
         )
         dispatch({ type: exchangeActionsTypes.FETCH_EXCHANGES_SUCCSESS, payload: response.data })
      } catch (e) {
         dispatch({
            type: exchangeActionsTypes.FETCH_EXCHANGES_ERROR, payload:
               `Error: ${e}`
         })
      }
   }
}