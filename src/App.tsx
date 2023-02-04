import React, { useEffect } from 'react';
import { useTypedSelector } from './hooks/useTypeSelector';
import LoginPage from './pages/LoginPage';
import Cryptoworld from './pages/Cryptoworld';
import { useAction } from './hooks/useAction';
import { IUser } from './models/IUser';



function App() {
  const { setAuth, setUser } = useAction()
  const { auth } = useTypedSelector(state => state.auth)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser)
      setAuth(true)
    }
  }, [])

  return (
    auth
      ?
      <Cryptoworld />
      :
      <LoginPage />
  );
}

export default App;
