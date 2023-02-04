import { coinHistoryState, coinHistoryActionsTypes, coinHistoryAction } from "../../types/coinHistory";
import { ICoinHistory } from "../../models/ICoinHistory";

const initialState: coinHistoryState = {
   coinHistory: <ICoinHistory>{},
   loadingHistory: false,
   error: null
}

export const coinHistoryReducer = (state = initialState, action: coinHistoryAction): coinHistoryState => {
   switch (action.type) {
      case coinHistoryActionsTypes.FETCH_COINHISTORY:
         return { ...state, loadingHistory: true };
      case coinHistoryActionsTypes.FETCH_COINHISTORY_SUCCSESS:
         return { ...state, loadingHistory: false, coinHistory: action.payload };
      case coinHistoryActionsTypes.FETCH_COINHISTORY_ERROR:
         return { ...state, loadingHistory: false, error: action.payload };
      default:
         return state

   }
}