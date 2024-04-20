import React, { useState, useEffect } from 'react';
import prods from '../products.json';
import { useAuth } from '../AuthContext';

function Items() {
  const [products, setProducts] = useState([]);
  const { loggedIn } = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setProducts(prods);
  };

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
        {products.map((item, index) => (
          <div key={index} className="shadow-md border p-2 m-5">
            <div className="flex justify-center mb-5">
              <img src={item.url} alt="card-image" className="object-contain h-40 w-full"/>
            </div>
            <div className="flex justify-center">
              <h1 className="font-bold text-lg">{item.title}</h1>
            </div>
            <div className="p-2 flex justify-center">
              <p>{item.condition}</p>
            </div>
            <div className="mt-2 flex justify-center">
              <p>${item.price} USD</p>
            </div>
            <div className="flex justify-evenly">
              <button className="rounded-md mt-2 bg-slate-200 p-2 hover:bg-slate-300 transition-all">Add to Cart</button>
              {loggedIn ? 
                <div className="flex ml-5">
                  <button className="rounded-md mt-2 bg-red-100 p-2 hover:bg-slate-300 transition-all">Remove Item</button>
                </div> : <></>
              }
            </div>
          </div>
        ))}
      </div>
  )
}

export default Items