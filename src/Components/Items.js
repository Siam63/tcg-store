import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Cart from './Cart';

function Items() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartMinimized, setIsCartMinimized] = useState(false);
  const { loggedIn } = useAuth();

  useEffect(() => {
      fetchData();
  }, []);

  useEffect(() => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(subtotal);
  }, [cartItems]);

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

  const addToCart = (item) => {
    if(cartItems.some(cartItem => cartItem._id === item._id)){
      alert("Item is already in the cart!");
    }else{
      setCartItems([...cartItems, item]);
    }
    setTotal(total => total + item.price);
    console.log(total);
  };

  const removeFromCart = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  };

  const toggleCartMinimize = () => {
    setIsCartMinimized(!isCartMinimized);
  }

  return (
    <div className="mr-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
        {items.map((item, index) => (
          <div key={index} className="shadow-md border p-2 m-5">
            <div className="flex justify-center mb-5">
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
              <button className="rounded-md mt-2 bg-green-600 text-white p-2 hover:bg-green-700 transition-all" onClick={() => addToCart(item)}>Add to Cart</button>
              
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

      <div className={`fixed top-16 right-0 h-full w-1/4 bg-gray-100 bg-opacity-90 p-4 overflow-y-auto transition-all ${isCartMinimized ? 'w-16' : ''}`}>
        {isCartMinimized ? '' : 
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length > 0 ? <p>Total Items: {cartItems.length}</p> : ''}
          </div>
        }
        
        <button onClick={toggleCartMinimize} className="absolute top-2 right-2 focus:outline-none">
          {isCartMinimized ? (
            
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              {cartItems.length > 0 ? <h3 className="ml-1">({cartItems.length})</h3> : ''}
            </div>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
            </svg>
          )}
        </button>
        {!isCartMinimized && (
          <>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <div className="p-2 my-2 border-solid rounded-lg border-2 bg-slate-100 border-gray-600 opacity-90">
                    <li key={index}>
                      <div className="flex">
                        <p>{item.name}</p>
                      </div>
                      <img src={item.picture} alt="card-image" className="mt-1.5 transition-all object-contain h-10 w-10"/>
                      <div className="flex justify-between">
                        <button className="text-sm rounded-md mt-2 bg-red-600 text-white p-2 hover:bg-red-700 transition-all" onClick={() => removeFromCart(index)}>Remove</button>
                        <p className="font-bold ml-5 mt-4">${item.price}</p>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            )}
            <div className="font-bold w-1/5 p-2 my-2 mr-2 fixed bottom-0 bg-white justify-center opacity-90 rounded-lg">
              <div className="flex justify-center">
                <button className="rounded-md mr-4 bg-green-600 text-white p-2 hover:bg-green-700 transition-all">Checkout</button>
                <p className="text-xs mt-3">Subtotal: ${total.toFixed(2)}</p>
              </div>
            </div>
          </>
        )}        
      </div>
    </div>
  )
}

export default Items
