import React from 'react'

function HomePage() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <div>
                <h1 className="flex justify-center text-center text-4xl font-bold mb-8">Welcome to your One-Stop-Shop for Yugioh Cards!</h1>
            </div>
            <p className="text-lg mb-8">Discover a wide range of products at exceptional prices.</p>

            <div className="flex justify-center bg-slate-200 ">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2 justify-center flex text-center">Shop Clothing</h2>
                    <p className="text-gray-700 mb-4">Browse our latest collection of trendy clothing.</p>
                    <a href="/shop" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Explore Yugioh Singles
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomePage
