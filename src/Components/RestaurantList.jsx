/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/RestaurantList.jsx
import React from 'react';

const RestaurantList = ({ restaurants, deleteRestaurant, editRestaurant }) => {
  return (
    <div className="p-4">
      {restaurants.map((restaurant, index) => (
        <div key={index} className="mb-4 p-4 bg-gray-100 shadow-md rounded flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-lg font-bold">{restaurant.name}</h3>
            <p>{restaurant.place}</p>
            <p>{restaurant.description}</p>
            <img src={restaurant.image} alt={restaurant.name} className="w-16 h-16" />
            <p>{restaurant.number}</p>
          </div>
          <div className="flex">
            <button
              onClick={() => editRestaurant(index)}
              className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteRestaurant(index)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
