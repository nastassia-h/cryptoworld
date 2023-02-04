import { IUser } from "../../models/IUser";
import { authAction, authActionTypes } from "../../types/auth";
import { Dispatch } from 'redux'
import axios from "axios";


export const setAuth = (isAuth: boolean) => {
   return (dispatch: Dispatch<authAction>) => {
      dispatch({ type: authActionTypes.SET_AUTH, payload: isAuth })
   }
}

export const setUser = (user: IUser) => {
   return (dispatch: Dispatch<authAction>) => {
      dispatch({ type: authActionTypes.SET_USER, payload: user })
   }
}

export const login = (username: string, password: string) => {
   return async (dispatch: Dispatch<authAction>) => {
      try {
         dispatch({ type: authActionTypes.SET_IS_LOADING, payload: true })
         setTimeout(async () => {
            const response = await axios.get<IUser[]>('./users.json')
            const mockUser = response.data.find(user => user.username === username && user.password === password)

            if (mockUser) {
               localStorage.setItem('auth', 'true');
               localStorage.setItem('username', mockUser.username);
               dispatch({ type: authActionTypes.SET_USER, payload: mockUser })
               dispatch({ type: authActionTypes.SET_AUTH, payload: true })

            } else {
               dispatch({ type: authActionTypes.SET_ERROR, payload: 'Invalid login or password!' });
            }
            dispatch({ type: authActionTypes.SET_IS_LOADING, payload: false })
         }, 1000)

      } catch (e) {
         dispatch({
            type: authActionTypes.SET_ERROR,
            payload: `'Error: ' ${e}`
         })
      }
   }

}

export const logout = () => {
   return async (dispatch: Dispatch<authAction>) => {
      localStorage.removeItem('auth');
      localStorage.removeItem('username');
      dispatch({ type: authActionTypes.SET_USER, payload: {} as IUser })
      dispatch({ type: authActionTypes.SET_AUTH, payload: false })
   }
}
