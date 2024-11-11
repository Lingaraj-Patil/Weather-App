import { useState } from "react";

function SearchBar({onSearch}){
    const [city,setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(city.trim()){
            onSearch(city);
            setCity('')
        }
    }

    return(
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex items-center justify-center">
                <input type="text" 
                placeholder="Enter city" 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
                className="w-3/4 p-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">Search</button>
            </div>
        </form>
    )
}

export default SearchBar;