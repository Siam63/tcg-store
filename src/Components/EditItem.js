import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditItem() {
    const { id } = useParams();
    const [item, setItem] = useState({
        name: '',
        condition: '',
        price: 0,
        picture: ''
    });

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        try {
            const res = await axios.get(`http://localhost:3002/api/getItem/${id}`);
            setItem(res.data);
        } catch (error) {
            console.error('Error fetching item:', error);
        }
    };

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3002/api/edit/${id}`, item);
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Edit Item</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input type="text" name="name" value={item.name} onChange={handleChange} className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Condition:</label>
                    <input type="text" name="condition" value={item.condition} onChange={handleChange} className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                    <input type="number" name="price" value={item.price} onChange={handleChange} className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Picture URL:</label>
                    <input type="text" name="picture" value={item.picture} onChange={handleChange} className="px-4 py-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"/>
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="w-1/2 bg-indigo-500 text-white py-3 px-6 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        Update
                    </button>
                    <button type="button" onClick={() => window.history.back()}className="w-1/2 ml-4 bg-gray-400 text-white py-3 px-6 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-100">
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditItem;
