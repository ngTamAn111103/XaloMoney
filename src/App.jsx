import { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import SignUp from "./pages/signUp";
import Login from "./pages/login";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Route cho trang Login */}
          <Route path="/signup" element={<SignUp />} /> {/* Route cho trang SignUp */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
