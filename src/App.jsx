/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import RestaurantForm from './Components/RestaurantForm';
import RestaurantList from './Components/RestaurantList';
import './App.css';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const addRestaurant = (restaurant) => {
    if (editIndex !== null) {
      const updatedRestaurants = [...restaurants];
      updatedRestaurants[editIndex] = restaurant;
      setRestaurants(updatedRestaurants);
      setEditIndex(null);
    } else {
      setRestaurants([restaurant, ...restaurants]);
    }
  };

  const deleteRestaurant = (index) => {
    setRestaurants(restaurants.filter((_, i) => i !== index));
  };

  const editRestaurant = (index) => {
    setCurrentRestaurant(restaurants[index]);
    setEditIndex(index);
  };

  const clearCurrent = () => {
    setCurrentRestaurant(null);
  };

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">Restaurant Details</h1>
      <div className="w-full max-w-4xl flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 p-2">
          <RestaurantForm addRestaurant={addRestaurant} currentRestaurant={currentRestaurant} clearCurrent={clearCurrent} />
        </div>
        <div className="w-full sm:w-1/2 p-2">
          <RestaurantList restaurants={restaurants} deleteRestaurant={deleteRestaurant} editRestaurant={editRestaurant} />
        </div>
      </div>
    </div>
  );
};

export default App;
