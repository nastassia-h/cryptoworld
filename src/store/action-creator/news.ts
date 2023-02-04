import axios from 'axios'
import { newsAction, newsActionsTypes } from '../../types/news'
import { Dispatch } from 'redux'

export const fetchNews = (count: number, newsCategory: string, offset: number) => {
   return async (dispatch: Dispatch<newsAction>) => {
      try {
         dispatch({ type: newsActionsTypes.FETCH_NEWS })
         const response = await axios.get(`https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&safeSearch=Off&offset=${offset}&textFormat=Raw&freshness=Day&count=${count}`,
            {
               headers: {
                  'X-BingApis-SDK': 'true',
                  'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
                  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
               }
            }
         )
         dispatch({ type: newsActionsTypes.FETCH_NEWS_SUCCSESS, payload: response.data.value })
      } catch (e) {
         dispatch({
            type: newsActionsTypes.FETCH_NEWS_ERROR,
            payload: `'Error: ' ${e}`
         })
      }
   }
}

export const addNews = (count: number, newsCategory: string, offset: number) => {
   return async (dispatch: Dispatch<newsAction>) => {
      try {
         dispatch({ type: newsActionsTypes.FETCH_NEWS })
         const response = await axios.get(`https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&safeSearch=Off&offset=${offset}&textFormat=Raw&freshness=Day&count=${count}`,
            {
               headers: {
                  'X-BingApis-SDK': 'true',
                  'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
                  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
               }
            }
         )
         dispatch({ type: newsActionsTypes.ADD_NEWS, payload: response.data.value })
      } catch (e) {
         dispatch({
            type: newsActionsTypes.FETCH_NEWS_ERROR,
            payload: `'Error: ' ${e}`
         })
      }
   }
}

