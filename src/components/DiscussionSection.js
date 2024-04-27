import React from 'react';

export default function DiscussionSection({ discussions }) {
    return (
        <section className="w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Popular Discussions:</h2>
            <div className="space-y-6">
                {discussions.map((discussion, index) => (
                    <div key={index} className="bg-blue-200 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">{discussion.title}</h3>
                        <p className="text-sm mb-4">{discussion.content}</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            CLICK TO READ
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

