import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
              <img src={item.picture} alt="card-image" className="transition-all object-contain h-40 w-full"/>
              <div className="hover:cursor-pointer">
                <Link to={`/items/${item._id}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <h1 className="font-bold text-md justify-center text-center">{item.name}</h1>
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
                  <svg onClick={() => handleRemove(item._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:cursor-pointer w-8 h-8 mt-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  
                  <Link to={`/edit/${item._id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:cursor-pointer ml-4 w-8 h-8 mt-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </Link>
                </div> : <></>
              }
            </div>
          </div>
        ))}
      </div>
  )
}

export default Items
