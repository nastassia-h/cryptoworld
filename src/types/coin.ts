export interface coinState {
   coins: any[],
   error: null | string,
   loading: boolean,
}

export enum coinsActionsTypes {
   FETCH_COINS = "FETCH_COINS",
   FETCH_COINS_SUCCSESS = "FETCH_COINS_SUCCSESS",
   FETCH_COINS_ERROR = "FETCH_COINS_ERROR",
}

interface fetchCoinsAction {
   type: coinsActionsTypes.FETCH_COINS,
}

interface fetchCoinsSuccsessAction {
   type: coinsActionsTypes.FETCH_COINS_SUCCSESS,
   payload: any[],
}

interface fetchCoinsErrorAction {
   type: coinsActionsTypes.FETCH_COINS_ERROR,
   payload: string,
}

export type coinAction = fetchCoinsAction | fetchCoinsErrorAction | fetchCoinsSuccsessAction