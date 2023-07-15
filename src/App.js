import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/Home";
import Membership from "./components/pages/Membership";
import Booking from "./components/pages/Booking";
import Resources from "./components/pages/Resouces";
import Events from "./components/pages/Events";
import Forum from "./components/pages/Forum"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Membership" element={<Membership/>} />
          <Route path="/Booking" element={<Booking/>} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Resources" element={<Resources/>} />
          <Route path="/Forum" element={<Forum/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
