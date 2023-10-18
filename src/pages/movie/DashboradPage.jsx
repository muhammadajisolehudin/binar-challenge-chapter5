import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
import { useGetDataUser } from '../../services/auth/get_user';


export const DashboradPage = () => {
    const { data: Paijo, isError, status } = useGetDataUser({});
    const navigate = useNavigate();
    const handleLogout = () => {
        CookieStorage.remove(CookieKeys.AuthToken, {
            path: '/',
            expires: new Date(0)
        });
    }
    return (
        <div>
            <h1>DASHBOARD</h1>
            <button onClick={handleLogout} >
                LogOut
            </button>
        </div>
    )
}
