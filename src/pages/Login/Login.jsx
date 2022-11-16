import React from 'react';
import PropTypes from 'prop-types';
import GoogleLoginButton from '../../components/common/googleLoginButton';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { login } from './useLogin';
import { useState } from 'react';
import { validateEmail } from './../../utils/rules/commonValidate';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const validateForm = (data) => {
        if (data.email === '' || data.password === '') {
            setError('Please enter your email and password');
            return false;
        } else if (!validateEmail(data.email)) {
            setError('Email is invalid!')
            return false;
        }
        setError('');
        return true;
    }

    const onSubmit = async data => {
        if (validateForm(data)) {
            const isLogin = await login(data, setError);
            if (isLogin.success && !error) {
                navigate('/')
            }
        }
    }

    return (
        <div className="container h-[600px] flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border border-gray-900">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or if you don't have account already,
                        <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500"> Sign Up</Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className='my-2'>
                            <label for="email-address" className="sr-only">Email address</label>
                            <input id="email-address" required {...register("email")} name="email" type="email" autoComplete="email" className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div className='my-2'>
                            <label for="password" className="sr-only">Password</label>
                            <input id="password" required {...register("password")} name="password" type="password" autoComplete="current-password" className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>
                    <div className="errorMsg">
                        <span className='text-red-500 text-[14px] text-center'>{error}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
            <span className='pt-2'>Or</span>
            <div className='pt-2'>
                <GoogleLoginButton />
            </div>
        </div>
    );
};

export default Login;