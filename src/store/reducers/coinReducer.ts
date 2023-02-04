import { coinState, coinsActionsTypes, coinAction } from "../../types/coin";

const initialState: coinState = {
   coins: [],
   loading: false,
   error: null
}

export const coinReducer = (state = initialState, action: coinAction): coinState => {
   switch (action.type) {
      case coinsActionsTypes.FETCH_COINS:
         return { ...state, loading: true };
      case coinsActionsTypes.FETCH_COINS_SUCCSESS:
         return { ...state, loading: false, coins: action.payload };
      case coinsActionsTypes.FETCH_COINS_ERROR:
         return { ...state, loading: false, error: action.payload };
      default:
         return state

   }
}