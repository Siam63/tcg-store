import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertUser, setAlertUser] = useState('');
  const { loggedIn, login } = useAuth();

  useEffect(() => {
      console.log(loggedIn);
  }, [loggedIn]);

  const handleLogin = () => {
    if(username === "" || password === ""){
        setAlertUser("Please fill out all fields!");
    }else if(username !== "siam1000" || password !== "password123"){
        alert('Invalid login token! Check the username and/or password.');
    }else if(username === "siam1000" && password === "password123"){
        console.log('Logged in successfully');
        setAlertUser('Successfully logged in as admin.');
        login();
    }else{
        setAlertUser('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-8">Enter Admin Credentials</h2>
        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-700 text-lg">Username</label>
          <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 text-lg" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-lg">Token</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 text-lg" />
        </div>

        {(username === "" || password === "") &&
            <div>
                <h3 className="mb-2 text-red-600 text-sm">{alertUser}</h3>
            </div>
        }

        {loggedIn ? (
            <div>  
                <div>
                    <h3 className="mb-4 text-green-600 text-sm">{alertUser}</h3>
                </div>
                {/* <Link to="/" className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 text-lg">Logout</Link> */}
            </div>
        ) : (
          <button onClick={handleLogin} className="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 text-lg">Login</button>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
