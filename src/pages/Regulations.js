import React, { useState } from 'react';

const GovernmentRegulations = () => {
    const [showAll, setShowAll] = useState(true);
    const [expandedRegulations, setExpandedRegulations] = useState([0,1,2,3,4]);

    const regulations = [
        {
            title: 'Workplace Safety Regulations:',
            content: 'Detailed information about workplace safety regulations during the COVID-19 pandemic. This includes guidelines for social distancing, sanitization, and personal protective equipment (PPE) requirements in the workplace.'
        },
        {
            title: 'Quarantine and Travel Restrictions:',
            content: 'Information about quarantine requirements and travel restrictions imposed by the government to control the spread of COVID-19. This includes guidelines for self-isolation, border closures, and travel advisories.'
        },
        {
            title: 'Lockdown Measures:',
            content: 'Details about lockdown measures implemented by the government to limit the spread of COVID-19. This includes information about stay-at-home orders, business closures, and restrictions on gatherings and movement.'
        },
        {
            title: 'Mask Mandates:',
            content: 'Guidelines and requirements for wearing face masks or coverings in public places to help prevent the transmission of COVID-19.'
        },
        {
            title: 'Business and Venue Closures:',
            content: 'Information about the closure of non-essential businesses and venues, such as restaurants, bars, theaters, and gyms, to limit the spread of COVID-19.'
        }
    ];

    const toggleShowAll = () => {
        setShowAll(!showAll);
        if (showAll) {
            setExpandedRegulations([]);
        } else {
            setExpandedRegulations(regulations.map((_, index) => index));
        }
    }

    const toggleRegulation = (index) => {
        if (expandedRegulations.includes(index)) {
            setExpandedRegulations(expandedRegulations.filter(i => i !== index));
        } else {
            setExpandedRegulations([...expandedRegulations, index]);
        }
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-lg font-bold mb-2">Government Regulations:</div>
            <div className="mb-4">The following lists regulations set by the UK government. These must be followed and implemented within our working environments.</div>
            <button onClick={toggleShowAll} className="bg-gray-200 p-2 rounded-md mb-2 flex items-center">
                {showAll ? 'Hide sections' : 'Display all sections'}
            </button>
            {regulations.map((regulation, index) => (
                <div key={index} className="bg-gray-100 p-2 rounded-md mb-2">
                    <div className="flex justify-between items-center">
                        <div>{regulation.title}</div>
                        <button onClick={() => toggleRegulation(index)}>
                            <i className={`fas fa-chevron-${expandedRegulations.includes(index) ? 'up' : 'down'} ml-2`}></i>
                        </button>
                    </div>
                    {expandedRegulations.includes(index) && (
                        <div className="mt-2">{regulation.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default GovernmentRegulations;
