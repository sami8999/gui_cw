import React from 'react';

export default function LoginForm({ onLogin }){
    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <div className="text-lg font-bold mb-4">LOGIN</div>
            <div className="mb-2">Please enter your details to login</div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Email:</label>
                <input type="email" placeholder="Enter your email" className="border border-gray-400 p-2 w-full" required />
            </div>
            <div className="mb-6">
                <label className="block font-bold mb-2">Password:</label>
                <input type="password" placeholder="Enter your password" className="border border-gray-400 p-2 w-full" required />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full mb-4" onClick={onLogin}>LOGIN</button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 w-full flex items-center justify-center" onClick={onLogin}>
                <i className="fab fa-google mr-2"></i>
                Sign in with SSO
            </button>
        </div>
    );
}
