import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default function Login({onLogin}){
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <div className="flex-grow flex justify-center items-center">
                <div className="flex space-x-8">
                    <LoginForm onLogin={onLogin}/>
                    <div className="text-4xl font-bold">OR</div>
                    <SignupForm onLogin={onLogin} />
                </div>
            </div>
        </div>
    );
}
