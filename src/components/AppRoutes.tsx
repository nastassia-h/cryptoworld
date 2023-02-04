import '../App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Homepage, Exchange, Cryptocurrencies, CryptoDetails, News, Login } from '.'
import { useTypedSelector } from '../hooks/useTypeSelector'


const AppRoutes = () => {
   const { auth } = useTypedSelector(state => state.auth)
   return (
      auth
         ?
         <div className='routes'>
            <Routes>
               <Route path='/' element={<Homepage />}>
               </Route>
               <Route path='/exchanges' element={<Exchange />}>
               </Route>
               <Route path='/currencies' element={<Cryptocurrencies simplified={false} />}>
               </Route>
               <Route path='/crypto/:coinId' element={<CryptoDetails />}>
               </Route>
               <Route path='/news' element={<News simplified={false} />}>
               </Route>
               <Route path="*" element={<Navigate to='/' />} />
            </Routes>
         </div>
         :
         <div className='routes'>
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="*" element={<Navigate to='/login' />} />
            </Routes>
         </div>
   )
}

export default AppRoutes