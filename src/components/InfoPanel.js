import React from 'react';

export default function InfoPanel({ title, content }) {
    return (
        <div className="w-1/4 bg-blue-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{title}:</h2>
            <p className="text-sm">{content}</p>
        </div>
    );
}