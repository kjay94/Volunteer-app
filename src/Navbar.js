import React from 'react';

function Navbar({ isLoggedIn, onToggleLogin }) {
  return (
    <nav>
      <h1>Volunteer Organization</h1>
      {!isLoggedIn && (
        <button onClick={onToggleLogin}>
          {onToggleLogin ? 'Close Login' : 'Log in for more features'}
        </button>
      )}
    </nav>
  );
}

export default Navbar;
