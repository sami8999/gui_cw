import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import graph from '../images/stats.png'

const ToggleSection = ({ title, content, isOpen, onToggle }) => (
    <div className={`bg-gray-100 p-2 rounded-md mb-2`}>
        <span className="font-bold cursor-pointer flex items-center" onClick={onToggle}>
            {title}: <i className={`fas fa-chevron-${isOpen ? 'down' : 'right'} ml-2`}></i>
        </span>
        {isOpen && <span>{content}</span>}
    </div>
);

export default function Guidelines(){
    const [showTesting, setShowTesting] = useState(true);
    const [showVaccinations, setShowVaccinations] = useState(true);
    const [showHealthSafety, setShowHealthSafety] = useState(true);
    const [showKeyDates, setShowKeyDates] = useState(true);
    const [showAll, setShowAll] = useState(true);

    const toggleAll = () => {
        const newState = !showAll;
        setShowTesting(newState);
        setShowVaccinations(newState);
        setShowHealthSafety(newState);
        setShowKeyDates(newState);
        setShowAll(newState);
    };

    return (
            <div className="flex-1 flex p-4">
                <div className="bg-white p-4 rounded-lg shadow-md w-1/2 mr-4">
                    <h2 className="text-lg font-bold mb-2">Key Pandemic Guideline Stats:</h2>
                    <img src={graph} alt="A line graph" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
                    <h2 className="text-lg font-bold mb-2">Pandemic Guidelines:</h2>
                    <p className="mb-2">The following key guidelines set by the UK government. For more information please visit the Gov website.</p>
                    <div className="bg-gray-200 p-2 rounded-md mb-2 cursor-pointer" onClick={toggleAll}>
                        {showAll ? 'Hide sections' : 'Display all sections'}
                    </div>
                    <ToggleSection
                        title="Testing"
                        content="Testing guidelines: All employees must undergo regular COVID-19 testing as per the government guidelines."
                        isOpen={showTesting}
                        onToggle={() => setShowTesting(!showTesting)}
                    />
                    <ToggleSection
                        title="Vaccinations"
                        content="Vaccination guidelines: All employees are strongly encouraged to get vaccinated against COVID-19."
                        isOpen={showVaccinations}
                        onToggle={() => setShowVaccinations(!showVaccinations)}
                    />
                    <ToggleSection
                        title="Health and Safety"
                        content="Health and safety guidelines: Employees must follow social distancing, wear masks, and maintain proper hygiene."
                        isOpen={showHealthSafety}
                        onToggle={() => setShowHealthSafety(!showHealthSafety)}
                    />
                    <ToggleSection
                        title="Key Dates"
                        content="Key dates: Lockdown restrictions will be eased on June 1st, 2021."
                        isOpen={showKeyDates}
                        onToggle={() => setShowKeyDates(!showKeyDates)}
                    />
                </div>
            </div>
    );
};
