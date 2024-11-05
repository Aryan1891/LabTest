import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  const [login, setLogin] = useState(false);

  const handleLoginToggle = () => {
    setLogin(!login);
  };

  if (!login) {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" />} /> 
          </Routes>
        </Router>
      </div>
    );
  }

  return (
    <div>
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/login">
                  <button onClick={handleLoginToggle}>
                    {login ? 'Logout' : 'Login'}
                  </button>
                </a>
              </li>
              <li>
                <a href="/signup">Signup</a>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;