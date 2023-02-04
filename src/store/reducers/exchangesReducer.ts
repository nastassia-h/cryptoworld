import { ExchangeState, exchangesAction, exchangeActionsTypes } from "../../types/exchanges";
import { IExchange } from "../../models/IExchange";

const initialState: ExchangeState = {
   exchanges: [],
   error: '',
   loading: false,
}

export const exchangesReducer = (state = initialState, action: exchangesAction): ExchangeState => {
   switch (action.type) {
      case exchangeActionsTypes.FETCH_EXCHANGES:
         return ({ ...state, loading: true });
      case exchangeActionsTypes.FETCH_EXCHANGES_ERROR:
         return ({ ...state, error: action.payload });
      case exchangeActionsTypes.FETCH_EXCHANGES_SUCCSESS:
         return ({ ...state, exchanges: action.payload });
      default: return state
   }
}