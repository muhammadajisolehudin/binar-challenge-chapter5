import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLoginUser } from '../../services/auth/login_user';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { mutate: LoginUser, isSucces, data, error } = useLoginUser();

    const HandleInput = (e) => {
        if (e) {
            if (e.target.id === 'email') {
                setEmail(e.target.value);
            }
            if (e.target.id === 'password') {
                setPassword(e.target.value);
            }
        }
    };
    const Login = () => {
        LoginUser({
            email: email,
            password: password,
        });
    };
    return (
        <div>
            <div><h1> Email </h1>
                <input onChange={HandleInput} id='email' className='border' type='email' />
            </div>
            <div> <h1> Password</h1>
                <input onChange={HandleInput} id='password' className='border' type='password' />
            </div>
            <div>
                <button onClick={() => {Login()}}> Login </button>
            </div>
        </div>
    )
}