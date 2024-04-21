import React, { useState } from 'react';
import axios from 'axios';

function AddItem() {
    const [formData, setFormData] = useState({
        name: '',
        condition: '',
        price: '',
        picture: ''
    });

    const { name, condition, price, picture } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const newItem = {
                name,
                condition,
                price: Number(price),
                picture
            };
            const res = await axios.post('http://localhost:3002/api/items', newItem);
            console.log(res.data);
        }catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Condition:</label>
          <input
            type="text"
            name="condition"
            value={condition}
            onChange={handleChange}
            className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Picture URL:</label>
          <input
            type="text"
            name="picture"
            value={picture}
            onChange={handleChange}
            className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          Submit
        </button>
      </form>
    </div>
    )
}

export default AddItem
