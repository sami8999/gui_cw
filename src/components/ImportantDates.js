import React from 'react';
import TimelineItem from './TimeLineItem';

export default function ImportantDates() {
    return (
        <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Important dates:</h2>
            <p className="text-sm mb-4">Below are some important dates for the firm. Click on the dates to load further information.</p>
            <div className="timeline relative">
                <TimelineItem
                    date="Mar 2020"
                    content="WHO declares COVID-19 a global pandemic, prompting immediate business continuity planning. Lockdown enforced, businesses to adopt remote work and supply chain disruptions."
                    position="left"
                />
                <TimelineItem
                    date="Apr 2020"
                    content="Initiation of vaccinations to help restore economy. Adjustment of corporate strategy."
                    position="right"
                />
                <TimelineItem
                    date="Jul 2020"
                    content="Further economic decline, workforce decreased in productivity."
                    position="left"
                />
                <TimelineItem
                    date="Sept 2020"
                    content="Adjustment of workforce and realignment of firm values and targets."
                    position="right"
                />
                <TimelineItem
                    date="Oct 2020"
                    content="Adjusting corporate policies to align with new COVID-19 government training, release firm wide compliance training."
                    position="left"
                />
            </div>
        </div>
    );
}
