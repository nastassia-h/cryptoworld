import { IUser } from "../models/IUser";

export interface AuthState {
   user: IUser;
   auth: boolean;
   authLoading: boolean;
   authError: string;
}

export enum authActionTypes {
   SET_AUTH = 'SET_AUTH',
   SET_ERROR = 'SET_ERROR',
   SET_IS_LOADING = 'SET_IS_LOADING',
   SET_USER = 'SET_USER',
}

interface setAuthAction {
   type: authActionTypes.SET_AUTH,
   payload: boolean
}

interface setErrorAction {
   type: authActionTypes.SET_ERROR,
   payload: string
}

interface setIsLoadingAction {
   type: authActionTypes.SET_IS_LOADING,
   payload: boolean
}

interface setUser {
   type: authActionTypes.SET_USER,
   payload: IUser
}

export type authAction = setAuthAction | setErrorAction | setIsLoadingAction | setUser