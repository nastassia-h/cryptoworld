import { IExchange } from "../models/IExchange"
export interface ExchangeState {
   exchanges: IExchange[],
   loading: boolean,
   error: string,
}

export enum exchangeActionsTypes {
   FETCH_EXCHANGES = 'FETCH_EXCHANGES',
   FETCH_EXCHANGES_SUCCSESS = 'FETCH_EXCHANGES_SUCCSESS',
   FETCH_EXCHANGES_ERROR = 'FETCH_EXCHANGES_ERROR',
}

interface fetchExchangesAction {
   type: exchangeActionsTypes.FETCH_EXCHANGES,
}

interface fetchExchangesSuccsessAction {
   type: exchangeActionsTypes.FETCH_EXCHANGES_SUCCSESS,
   payload: IExchange[]
}

interface fetchExchangesErrorAction {
   type: exchangeActionsTypes.FETCH_EXCHANGES_ERROR,
   payload: string
}

export type exchangesAction = fetchExchangesAction | fetchExchangesErrorAction | fetchExchangesSuccsessAction 