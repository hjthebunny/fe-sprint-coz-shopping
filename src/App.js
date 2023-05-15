import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import Bookmark from "./pages/Bookmark";


import './App.css';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleChangeValue = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>

      <Header handleButtonClick={handleChangeValue} />
      {isOpen ? <Nav /> : null}
      <Routes>

        <Route path="/" component={Main} />
        <Route path="/products/list" component={ProductList} />
        <Route path="/bookmark" component={Bookmark} />

      </Routes>
      <Footer />
    </Router>

  );
}
export default App;
