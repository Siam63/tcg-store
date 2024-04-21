import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios';

function ViewItem() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const { loggedIn } = useAuth();

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        console.log(loggedIn);
        try {
            const response = await axios.get(`http://localhost:3002/api/items/${id}`);
            setItem(response.data);
        } catch (error) {
            console.error('Error fetching item details:', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            {item ? (
                <div className="scale-125 max-w-md p-16 bg-white rounded-md shadow-md">
                    <img src={item.picture} alt={item.name} className="transition-all hover:scale-110 mx-auto mb-4 rounded-md" />
                    <h1 className="text-2xl font-bold text-center">{item.name}</h1>
                    <p className="text-center my-2">Condition: {item.condition}</p>
                    <p className="text-center font-bold">${item.price} USD</p>
                    <div className="flex justify-evenly mt-4">
                        <a href={'/shop'} className="hover:cursor-pointer ml-2 text-xl rounded-md bg-gray-200 p-2 hover:bg-gray-300 transition-all">Back</a>
                        <button className="hover:cursor-pointer ml-2 text-xl rounded-md bg-gray-200 p-2 hover:bg-gray-300 transition-all">Add to Cart</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ViewItem;
