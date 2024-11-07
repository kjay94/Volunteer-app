import React, { useState } from 'react';
import './App.css';
import Home from './home';
import Login from './Login';
import Navbar from './Navbar';
import { useAuth } from './useAuth';

function App() {
  const isLoggedIn = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const handleToggleLogin = () => setShowLogin((prev) => !prev);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onToggleLogin={handleToggleLogin} />
      <main>
        <Home />
        {!isLoggedIn && showLogin && <Login />}
      </main>
    </div>
  );
}

export default App;
