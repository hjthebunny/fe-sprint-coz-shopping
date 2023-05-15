import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import Bookmark from "./pages/Bookmark";
import './App.css';

// fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=10')
//   .then((res) => res.json())
//   .then((data) => console.log(data));

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/products/list' element={<ProductList />} />
        <Route path='/bookmark' component={<Bookmark />} /> */}

      </Routes>
      <Footer />
    </Router>

  );
}
export default App;
