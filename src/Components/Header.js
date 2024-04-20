import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Header() {
    const { loggedIn, logout } = useAuth();

    const handleLogout = () => {
        logout();
    }

    return (
        <div>
            <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">YugiBuzz</Link>
            <nav className="flex">
                <Link to="/" href="#home" className="text-lg text-white hover:text-gray-300 mr-4 transition-all">Home</Link>
                <Link to="/shop" href="#shop" className="text-lg text-white hover:text-gray-300 mr-4 transition-all">Shop</Link>
                
                {loggedIn ? (
                    <div>
                        {/* <Link to="/logout" href="#logout" className="text-lg text-white hover:text-gray-300 transition-all">Logout</Link> */}
                        <button onClick={handleLogout} className="text-lg text-white hover:text-gray-300 transition-all">Logout</button>
                    </div>
                ) : (
                    <Link to="/login" href="#login" className="text-lg text-white hover:text-gray-300 transition-all">Login</Link>
                )}
            </nav>
            </header>
        </div>
    )
}

export default Header
