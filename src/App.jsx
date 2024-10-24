import { useState } from 'react';
import './App.css';
import Weather from './Weather/Weather';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div id="root">
        <Weather />
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ajeet Kumar. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
