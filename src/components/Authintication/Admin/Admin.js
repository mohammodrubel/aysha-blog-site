import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Admin = ({children,...rest}) => {
    const {user,isLoading,admin} = useAuth()
    let location = useLocation()

    if(isLoading){
        return <div style={{textAlign:'center'}}><div class="spinner-border text-warning" role="status"></div></div>
    };

        if(user.email && admin){
            return children;
        }
        return <Navigate to="/" state={{from:location}} />
};

export default Admin;