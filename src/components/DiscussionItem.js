import React from 'react';

export default function DiscussionItem({ title, tags, views, likes, comments }) {
    return (
        <div className="border-b border-gray-200 pb-4 mb-4">
            <h3 className="font-semibold mb-1">{title}</h3>
            <div className="flex space-x-2 mb-2">
                {tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">{tag}</span>
                ))}
            </div>
            <div className="flex justify-between items-center text-xs text-gray-600">
                <span>{views}</span>
                <span>{likes}</span>
                <span>{comments}</span>
            </div>
        </div>
    );
}
