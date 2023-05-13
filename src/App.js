import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>

      </Routes>
      <Footer />
    </Router>

  );
}
export default App;
