import { coinDetailsState, coinDetailsActionsTypes, coinDetailsAction } from "../../types/coinDetails";
import { ICoinDetails } from "../../models/ICoinDetails";

const initialState: coinDetailsState = {
   coinDetails: <ICoinDetails>{},
   loading: false,
   error: null
}

export const coinDetailsReducer = (state = initialState, action: coinDetailsAction): coinDetailsState => {
   switch (action.type) {
      case coinDetailsActionsTypes.FETCH_COINDETAILS:
         return { ...state, loading: true };
      case coinDetailsActionsTypes.FETCH_COINDETAILS_SUCCSESS:
         return { ...state, loading: false, coinDetails: action.payload };
      case coinDetailsActionsTypes.FETCH_COINDETAILS_ERROR:
         return { ...state, loading: false, error: action.payload };
      default:
         return state

   }
}