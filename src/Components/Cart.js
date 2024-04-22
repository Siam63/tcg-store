import React, { useState } from 'react';

function Cart() {
    const [items, setItems] = useState([]);

    const removeFromCart = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                {items.map((item, index) => (
                    <li key={index}>
                    {item.name} - ${item.price}
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}

export default Cart
