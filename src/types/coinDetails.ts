import { ICoinDetails } from "../models/ICoinDetails";

export interface coinDetailsState {
   coinDetails: ICoinDetails,
   error: null | string,
   loading: boolean,
}

export enum coinDetailsActionsTypes {
   FETCH_COINDETAILS = "FETCH_COINDETAILS",
   FETCH_COINDETAILS_SUCCSESS = "FETCH_COINDETAILS_SUCCSESS",
   FETCH_COINDETAILS_ERROR = "FETCH_COINDETAILS_ERROR",
}

interface fetchCoinDetailsAction {
   type: coinDetailsActionsTypes.FETCH_COINDETAILS,
}

interface fetchCoinDetailsSuccsessAction {
   type: coinDetailsActionsTypes.FETCH_COINDETAILS_SUCCSESS,
   payload: ICoinDetails,
}

interface fetchCoinDetailsErrorAction {
   type: coinDetailsActionsTypes.FETCH_COINDETAILS_ERROR,
   payload: string,
}

export type coinDetailsAction = fetchCoinDetailsAction | fetchCoinDetailsErrorAction | fetchCoinDetailsSuccsessAction