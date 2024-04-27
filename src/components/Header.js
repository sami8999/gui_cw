import React from "react"

export default function Header({ onLogout }) {
    return (
        <div className="bg-blue-900 text-white px-4 py-2 flex justify-between items-center">
            <div className="flex items-center">
                <div className="font-bold text-xl">COVID-19 Business Regulations</div>
            </div>
            <div
                className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600"
                onClick={onLogout}
            >
                LOG OUT
            </div>
        </div>
    );
}
