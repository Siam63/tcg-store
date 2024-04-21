import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';

function Items() {
  const [items, setItems] = useState([]);
  const { loggedIn } = useAuth();

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      try{
          const res = await axios.get('http://localhost:3002/api/items');
          setItems(res.data);
      }catch(error){
          console.error('Error fetching data', error);
      }
  }

  const handleRemove = async (id) => {
    try{
      await axios.delete(`http://localhost:3002/api/items/${id}`);
      setItems(items.filter(item => item._id !== id));
    }catch (error) {
      console.error('Error removing item ', error);
    }
  }

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
        {items.map((item, index) => (
          <div key={index} className="shadow-md border p-2 m-5">
            <div className="flex justify-center mb-5">
              {console.log(item.picture)}
              <img src={item.picture} alt="card-image" className="object-contain h-40 w-full"/>
            </div>
            <div className="flex justify-center">
              <h1 className="font-bold text-lg">{item.name}</h1>
            </div>
            <div className="p-2 flex justify-center">
              <p>{item.condition}</p>
            </div>
            <div className="mt-2 flex justify-center">
              <p>${item.price} USD</p>
            </div>
            <div className="flex justify-evenly">
              <button className="rounded-md mt-2 bg-green-600 text-white p-2 hover:bg-green-700 transition-all">Add to Cart</button>
              {loggedIn ? 
                <div className="flex ml-5">
                  <button onClick={() => handleRemove(item._id)} className="rounded-md mt-2 bg-red-200 p-2 hover:bg-red-300 transition-all">Remove</button>
                  <button className="ml-2 rounded-md mt-2 bg-gray-200 p-2 hover:bg-gray-300 transition-all">Edit</button>
                </div> : <></>
              }
            </div>
          </div>
        ))}
      </div>
  )
}

export default Items
