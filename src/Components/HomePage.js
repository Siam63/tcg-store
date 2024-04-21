import React from 'react';

function HomePage() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-lg text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to your One-Stop-Shop for Yugioh Cards!</h1>
                <p className="text-lg text-gray-600 mb-8">Discover a wide range of products at exceptional prices.</p>
            </div>

            <div className="max-w-lg w-full rounded-lg overflow-hidden shadow-lg">
                <img className="w-full" src="https://source.unsplash.com/8ibSN-7uwy0/800x400" alt="Clothing" />
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">Shop Clothing</h2>
                    <p className="text-gray-700 mb-4">Browse our latest collection of trendy clothing.</p>
                    <a href="/shop" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full inline-block shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        Explore Yugioh Singles
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
