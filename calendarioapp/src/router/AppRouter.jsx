import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { Calendari } from '../calendario'






export const AppRouter = () => {


    const authStatus = 'autheticated';
    return (
        <Routes>
            {
            (authStatus === 'not-autheticated')
            ?   <Route path='/auth/*' element={<LoginPage />} />
            : <Route path='/*' element={<Calendari />} />
   }
          

           
            <Route path='/*' element={<Navigate to='/auth/login'/>}/>

        </Routes>
    )
}