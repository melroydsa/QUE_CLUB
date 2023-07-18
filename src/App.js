import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/pages/Home';
import Membership from './components/pages/Membership';
import Booking from './components/pages/Booking';
import Resources from './components/pages/Resources';
import Events from './components/pages/Events';
import Forum from './components/pages/Forum';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/QUE_CLUB" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
