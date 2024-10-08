import React, { useState } from 'react';

const HeaderToolbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ID: ${searchQuery}`);
   
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-sm space-y-4 md:space-y-0">
      
<<<<<<< HEAD
  
=======

>>>>>>> 5524826e61101cc0e5c7e9008e670328f62f0c8e
      <div className="flex items-center space-x-2 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search by ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-md focus:outline-none"
        >
          Search
        </button>
      </div>

<<<<<<< HEAD
   
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
        
      
=======
      
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
     
>>>>>>> 5524826e61101cc0e5c7e9008e670328f62f0c8e
        <div className="w-full md:w-auto">
          <select className="w-full md:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>
                {num + 1} Selected
              </option>
            ))}
          </select>
        </div>

<<<<<<< HEAD
    
=======
     
>>>>>>> 5524826e61101cc0e5c7e9008e670328f62f0c8e
        <div className="flex space-x-2 w-full md:w-auto justify-center">
          <button className="px-4 py-2 text-blue-600 bg-blue-100 rounded-md focus:outline-none text-3xl">
            ⟳
          </button>

          <button className="px-4 py-2 text-white bg-blue-600 rounded-md focus:outline-none text-lg">
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderToolbar;


