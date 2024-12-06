import React from "react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import LoginForm from "./Components/LoginForm";
import Privacy from "./Components/Privacy";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css"
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/privacy" element={<Privacy/>}></Route>
          <Route path="/loginform" element={<LoginForm/>}></Route>
          <Route path="/contactform" element={<Contact/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
