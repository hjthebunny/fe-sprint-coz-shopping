import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import Bookmark from "./pages/Bookmark/Bookmark";
import './App.css';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products/list' element={<ProductListPage />} />
        <Route path='/bookmark' element={<Bookmark />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
