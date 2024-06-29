import React from 'react';

export const AddAuthor = ({ onAdd }) => (
  <fieldset className="p-4 border border-gray-300 rounded-lg">
    <form onSubmit={onAdd} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter name"/>
      </div>

      <div>
        <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Surname</label>
        <input type="text" id="surname" name="surname" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter surname"/>
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md">Add Author</button>
    </form>
  </fieldset>
);

export default AddAuthor;
