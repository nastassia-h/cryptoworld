import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { coinDetailsReducer } from "./coinDetailsReducer";
import { coinHistoryReducer } from "./coinHistory";
import { coinReducer } from "./coinReducer";
import { newsReducer } from "./newsReducer";
import { exchangesReducer } from "./exchangesReducer";

export const rootReducer = combineReducers({
   coins: coinReducer,
   news: newsReducer,
   coinDetails: coinDetailsReducer,
   coinHistory: coinHistoryReducer,
   auth: authReducer,
   exchanges: exchangesReducer,
})

export type rootState = ReturnType<typeof rootReducer>