/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';

const RestaurantForm = ({ addRestaurant, currentRestaurant, clearCurrent }) => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (currentRestaurant) {
      setName(currentRestaurant.name);
      setPlace(currentRestaurant.place);
      setDescription(currentRestaurant.description);
      setImage(currentRestaurant.image);
      setNumber(currentRestaurant.number);
    }
  }, [currentRestaurant]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant({ name, place, description, image, number });
    clearForm();
    clearCurrent();
  };

  const clearForm = () => {
    setName('');
    setPlace('');
    setDescription('');
    setImage('');
    setNumber('');
  };

  return (
    <form className="p-4 bg-white shadow-md rounded w-full" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Restaurant Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Place</label>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full sm:w-auto">
        {currentRestaurant ? 'Update Restaurant' : 'Add Restaurant'}
      </button>
      {currentRestaurant && (
        <button
          type="button"
          onClick={clearForm}
          className="ml-0 sm:ml-2 mt-2 sm:mt-0 px-4 py-2 bg-gray-500 text-black rounded w-full sm:w-auto"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default RestaurantForm;
