import {Route, Redirect, useLocation} from 'react-router-dom';
import useUser from '../hooks/useUser.js';
import React from 'react';

const PrivateRouteProfileT = ({component:Component,...rest}) => {
    const {isLogged,id,roles} = useUser();
    const {pathname} = useLocation();
    
    console.log('loged',isLogged)
    console.log('id',id)
    console.log('params',pathname)
    console.log('rol',roles)
    return (
        <Route {...rest}>
            {isLogged && pathname === `/editProfileTheater/${id}` && roles ? 
            <Component/> : <Redirect to='/loginteatres'/>}
        </Route>
    )
}

export default PrivateRouteProfileT;