import React from 'react';

export default function TimelineItem({ date, content, position }) {
    return (
        <div className={`timeline-item ${position}-item`}>
            <div className="timeline-circle"></div>
            <p className="text-blue-800 font-bold">{date}</p>
            <p className="text-xs">{content}</p>
        </div>
    );
}
