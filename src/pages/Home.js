
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import BreakingNews from '../components/News';
import Reminders from '../components/Reminders';

export default function Home({setActiveTab}){
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
    const handleNextSlide = () => setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);

    return (

        <div className="flex-grow flex flex-col p-4">
                <SearchBar />
                <div className="flex justify-between h-full">
                    <BreakingNews
                        currentSlide={currentSlide}
                        handlePrevSlide={handlePrevSlide}
                        handleNextSlide={handleNextSlide}
                        setActiveTab={setActiveTab}
                    />
                 <Reminders setActiveTab={setActiveTab}/>
             </div>
        </div>

    );
};