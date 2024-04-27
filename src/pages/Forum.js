import React from 'react';
import DiscussionSection from '../components/DiscussionSection';
import ForumSection from '../components/ForumSection';

export default function Forum() {
    const forumPosts = [
        { title: "Vaccine Efficacy and Variants", tags: ["Vaccine", "COVID-19", "Variants"], views: "184 views", likes: "45 Likes", comments: "15 comments" },
        { title: "Impact of COVID-19 on Small Businesses", tags: ["Small Business", "Economy", "Support"], views: "98 views", likes: "22 Likes", comments: "9 comments" },
        { title: "Remote Work and Mental Health", tags: ["Remote Work", "Mental Health", "Well-being"], views: "76 views", likes: "18 Likes", comments: "5 comments" }
    ];

    const popularDiscussions = [
        { title: "Why tech breaks matter", content: "Tech breaks are extremely important when working especially in these unprecedented times of COVID-19. By doing such we can help increase productivity, mental health as well as....." },
        { title: "Managing Remote Teams", content: "Discover strategies for effectively managing remote teams and maintaining team cohesion during the pandemic." },
        { title: "Economic Recovery Post-COVID", content: "Join the discussion on what economic recovery might look like after the pandemic and how businesses can prepare." }
    ];

    return (
            <main className="flex space-x-8 mt-8">
                <ForumSection posts={forumPosts} />
                <DiscussionSection discussions={popularDiscussions} />
            </main>
    );
}