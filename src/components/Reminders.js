import timeline from '../images/timeline.png'
import React, { useState } from 'react';

export default function Reminders({setActiveTab}){
    
    const goToGuidelines = () => {
        setActiveTab('Pandemic Guidelines'); 
    };

    return (
        <div className="bg-white rounded-md w-1/2 p-4">
            <div className="text-lg font-bold mb-2">Reminders:</div>
                <div className="mb-4">
                    <div className="text-gray-700 bg-blue-100 rounded-md px-4 py-2 mb-2 cursor-pointer hover:bg-blue-200">March 23rd: Stay at Home</div>
                    <div className="text-gray-700 bg-blue-100 rounded-md px-4 py-2 mb-2 cursor-pointer hover:bg-blue-200">June 10: Return to Office</div>
                    <div className="text-gray-700 bg-blue-100 rounded-md px-4 py-2 mb-2 cursor-pointer hover:bg-blue-200">July 15: Mandatory Mask Policy</div>
                </div>
            <div className="text-lg font-bold mb-2">Quick Stats Timeline:</div>
            <div className="mb-4">
                <img src={timeline} alt="A placeholder image for the quick stats timeline" className="w-full rounded-md" />
            </div>
            <div className="mt-4">
                <div className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer inline-block hover:bg-blue-600" onClick={goToGuidelines}>More Information</div>
            </div>
        </div>  
    )
}
