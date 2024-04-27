import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GovernmentRegulations from './pages/Regulations';
import Guidelines from './pages/Guidelines';
import Forum from './pages/Forum';
import Dates from './pages/Dates';
import Login from './pages/Login';

const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = ['Home', 'Government Regulations', 'Pandemic Guidelines', 'Community Forum', 'Important dates'];
    return (
        <div className="bg-blue-800 text-white px-4 py-2 flex justify-between items-center">
            {tabs.map(tab => (
                <div
                    key={tab}
                    className={`cursor-pointer ${activeTab === tab ? 'font-bold' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
};

export default function App() {
    const [activeTab, setActiveTab] = useState('Home');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setActiveTab('Home');
    };

    if (!isLoggedIn) {
        return (
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
                <Login onLogin={handleLogin} />
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header onLogout={handleLogout} />
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'Home' && <Home setActiveTab={setActiveTab}/>}
            {activeTab === 'Government Regulations' && <GovernmentRegulations />}
            {activeTab === 'Pandemic Guidelines' && <Guidelines />}
            {activeTab === 'Community Forum' && <Forum />}
            {activeTab === 'Important dates' && <Dates />}
            <div className="flex-grow"></div>
            <Footer />
        </div>
    );
}
