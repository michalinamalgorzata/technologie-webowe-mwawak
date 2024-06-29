import React, { useState } from 'react';

const AuthorList = ({ authors, onDelete, onEdit }) => {
  const [editingAuthorId, setEditingAuthorId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedSurname, setEditedSurname] = useState("");

  const handleEditClick = (author) => {
    setEditingAuthorId(author.id);
    setEditedName(author.name);
    setEditedSurname(author.surname);
  };

  const handleSaveClick = (id) => {
    onEdit(id, editedName, editedSurname);
    setEditingAuthorId(null);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Surname</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {authors.map((author) => (
          <tr key={author.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              {editingAuthorId === author.id ? (
                <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
              ) : (
                author.name
              )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {editingAuthorId === author.id ? (
                <input type="text" value={editedSurname} onChange={(e) => setEditedSurname(e.target.value)} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"/>
              ) : (
                author.surname
              )}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {editingAuthorId === author.id ? (
                <button onClick={() => handleSaveClick(author.id)} className="px-2 py-1 bg-green-500 hover:bg-green-700 text-white font-bold rounded-md">Save</button>
              ) : (
                <button onClick={() => handleEditClick(author)} className="px-2 py-1 bg-yellow-300 hover:bg-yellow-500 text-white font-bold rounded-md">Edit</button>
              )}
              <button onClick={() => onDelete(author.id)} className="px-2 py-1 bg-red-500 hover:bg-red-700 text-white font-bold rounded-md">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AuthorList;
