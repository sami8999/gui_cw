import React from 'react';
import ImportantDates from '../components/ImportantDates';
import InfoPanel from '../components/InfoPanel';
import './Dates.css'; 

export default function Dates() {
    return (
            <main className="p-10">
                <div className="flex gap-10">
                    <ImportantDates />
                    <InfoPanel
                        title="Oct 2020"
                        content="Adjusting corporate policies to align with new COVID-19 government training, release firm wide compliance training. Implementation of safety measures in the workplace and adoption of remote work where possible. Focus on digital transformation and resilience."
                    />
                </div>
            </main>
    );
}
