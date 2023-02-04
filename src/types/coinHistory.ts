import { ICoinHistory } from "../models/ICoinHistory";

export interface coinHistoryState {
   coinHistory: ICoinHistory,
   error: null | string,
   loadingHistory: boolean,
}

export enum coinHistoryActionsTypes {
   FETCH_COINHISTORY = "FETCH_COINHISTORY",
   FETCH_COINHISTORY_SUCCSESS = "FETCH_COINHISTORY_SUCCSESS",
   FETCH_COINHISTORY_ERROR = "FETCH_COINHISTORY_ERROR",
}

interface fetchCoinHistoryAction {
   type: coinHistoryActionsTypes.FETCH_COINHISTORY,
}

interface fetchCoinHistorySuccsessAction {
   type: coinHistoryActionsTypes.FETCH_COINHISTORY_SUCCSESS,
   payload: ICoinHistory,
}

interface fetchCoinHistoryErrorAction {
   type: coinHistoryActionsTypes.FETCH_COINHISTORY_ERROR,
   payload: string,
}

export type coinHistoryAction = fetchCoinHistoryAction | fetchCoinHistoryErrorAction | fetchCoinHistorySuccsessAction