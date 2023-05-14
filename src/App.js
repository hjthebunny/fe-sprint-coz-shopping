import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>

      </Routes>
      <Footer />
    </Router>

  );
}
export default App;
