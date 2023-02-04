export interface newsState {
   news: any[],
   error: null | string,
   loading: boolean,
}

export enum newsActionsTypes {
   FETCH_NEWS = "FETCH_NEWS",
   FETCH_NEWS_SUCCSESS = "FETCH_NEWS_SUCCSESS",
   FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR",
   ADD_NEWS = "ADD_NEWS"
}

interface addNewsAction {
   type: newsActionsTypes.ADD_NEWS,
   payload: any[],
}

interface fetchNewsAction {
   type: newsActionsTypes.FETCH_NEWS,
}

interface fetchNewsSuccsessAction {
   type: newsActionsTypes.FETCH_NEWS_SUCCSESS,
   payload: any[],
}

interface fetchNewsErrorAction {
   type: newsActionsTypes.FETCH_NEWS_ERROR,
   payload: string,
}

export type newsAction = fetchNewsAction | fetchNewsSuccsessAction | fetchNewsErrorAction | addNewsAction