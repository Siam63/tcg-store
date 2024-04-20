import React, { useState, useEffect } from 'react';
import Items from './Items.js';

function Shop() {
    return (
        <div>
            <h1>Items from MongoDB</h1>
            <div>
                <Items />
            </div>
        </div>
    )
}

export default Shop
