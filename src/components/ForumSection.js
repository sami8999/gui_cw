import React from 'react';
import DiscussionItem from './DiscussionItem';

export default function ForumSection({ posts }) {
    return (
        <section className="w-2/3 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Community Forum:</h2>
            <p className="text-sm mb-4">Start a discussion about Business Regulations</p>
            <div className="space-y-6">
                {posts.map((post, index) => (
                    <DiscussionItem key={index} {...post} />
                ))}
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
                VIEW MORE DISCUSSIONS
            </button>
        </section>
    );
}
