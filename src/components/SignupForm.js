import React from 'react';

export default function SignupForm({onLogin}){
    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <div className="text-lg font-bold mb-4">SIGN UP</div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Full Name:</label>
                <input type="text" placeholder="Enter your full name" className="border border-gray-400 p-2 w-full" required />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Company:</label>
                <input type="text" placeholder="Enter your company name" className="border border-gray-400 p-2 w-full" required />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2">Email:</label>
                <input type="email" placeholder="Enter your email" className="border border-gray-400 p-2 w-full" required />
            </div>
            <div className="mb-6">
                <label className="block font-bold mb-2">Password:</label>
                <input type="password" placeholder="Enter your password" className="border border-gray-400 p-2 w-full" required />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full" onClick={onLogin}>SIGN UP</button>
        </div>
    );
}

