import React, { useState, useEffect } from 'react';

import news1 from '../images/news1.png';
import news2 from '../images/news2.png';
import news3 from '../images/news3.png';

export default function BreakingNews({ currentSlide, handlePrevSlide, handleNextSlide, setActiveTab }){
    const slideContent = [
        {
            title: "New safety guidelines for essential workers.",
            detail: "All essential workers must wear masks, maintain social distancing, and follow strict hygiene protocols.",
            image: news1
        },
        {
            title: "Lockdown has been extended for at least 3 more weeks.",
            detail: "All non-essential businesses must remain closed during this time. Essential workers should follow strict safety guidelines.",
            image: news2
        },
        {
            title: "Vaccine rollout plan announced for next month.",
            detail: "The government has announced a plan to vaccinate all eligible citizens starting next month.",
            image: news3
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 2000);
        return () => clearInterval(interval);
    }, [handleNextSlide]);

    const { title, detail, image } = slideContent[currentSlide];

    const goToImportantDates = () => {
        setActiveTab('Important dates'); 
    };

    return (
        <div className="bg-white rounded-md w-1/2 mr-4 relative">
            <div className="text-lg font-bold mb-2 p-4">Breaking news:</div>
            <div className="flex justify-between items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-600" onClick={handlePrevSlide}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="relative">
                    <img src={image} alt="Breaking news" className="w-[600px] h-[300px]" />
                </div>
                <div className="bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-600" onClick={handleNextSlide}>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            <div className="p-4">
                <div className="text-gray-700 mb-2">{title}</div>
                <div className="text-gray-700 mb-4">{detail}</div>
                <div className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer inline-block hover:bg-blue-600" onClick={goToImportantDates} >More Information</div>
            </div>
        </div>
    );
};
