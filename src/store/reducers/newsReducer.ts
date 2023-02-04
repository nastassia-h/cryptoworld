import { newsState, newsActionsTypes, newsAction } from "../../types/news";

const initialState: newsState = {
   news: [],
   loading: false,
   error: null
}

export const newsReducer = (state = initialState, action: newsAction): newsState => {
   switch (action.type) {
      case newsActionsTypes.FETCH_NEWS:
         return { ...state, loading: true };
      case newsActionsTypes.FETCH_NEWS_SUCCSESS:
         return { ...state, loading: false, news: action.payload };
      case newsActionsTypes.ADD_NEWS:
         return { ...state, loading: false, news: [...state.news, ...action.payload] }
      case newsActionsTypes.FETCH_NEWS_ERROR:
         return { ...state, loading: false, error: action.payload };
      default:
         return state

   }
}