import { IUser } from "../../models/IUser";
import { AuthState } from "../../types/auth";
import { authAction } from "../../types/auth";
import { authActionTypes } from "../../types/auth";

const initialState: AuthState = {
   user: {} as IUser,
   authLoading: false,
   authError: '',
   auth: false,
}

export const authReducer = (state = initialState, action: authAction): AuthState => {
   switch (action.type) {
      case authActionTypes.SET_AUTH:
         return { ...state, auth: action.payload, authLoading: false };
      case authActionTypes.SET_ERROR:
         return { ...state, authError: action.payload, authLoading: false };
      case authActionTypes.SET_IS_LOADING:
         return { ...state, authLoading: action.payload };
      case authActionTypes.SET_USER:
         return { ...state, user: action.payload };
      default:
         return state

   }
}