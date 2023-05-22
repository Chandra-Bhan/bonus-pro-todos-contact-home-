import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Navbar from "./components/Navbar.";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#eff1f2", height: "100vh" }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
