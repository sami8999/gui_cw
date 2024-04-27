import React from "react"

export default function Footer(){

return (
    <div className="bg-blue-900 text-white px-4 py-2 flex justify-between items-center">
        <div className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600">GOV.UK</div>
        <div className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600">CONTACT US</div>
        <div className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600">FEEDBACK</div>
        <div>
            <span className="mr-2">Email:</span>
            <input type="email" placeholder="Enter your email" className="bg-white rounded-md px-2 py-1 text-gray-700" />
        </div>
        <div className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600">Sign up for push alerts</div>
    </div>
);

}