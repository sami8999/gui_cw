import React from "react"

export default function SearchBar(){

    return (
        <div className="flex items-center mb-4">
            <div className="flex items-center bg-white rounded-l-md px-2 py-1">
                <i className="fas fa-question-circle text-gray-500 mr-2"></i>
                <div className="text-gray-500">Ask</div>
            </div>
            <div className="flex-grow bg-white px-2 py-1">
                <input type="text" placeholder="Search for information..." className="w-full bg-transparent outline-none" />
            </div>
            <div className="bg-white rounded-r-md px-2 py-1 cursor-pointer hover:bg-gray-200">
                <i className="fas fa-download text-gray-500"></i>
            </div>
            <div className="bg-blue-500 text-white rounded-md px-4 py-2 ml-2 cursor-pointer hover:bg-blue-600">Enter</div>
        </div>
    );

} 