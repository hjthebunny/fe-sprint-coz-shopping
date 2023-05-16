import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import ProductListPage from "./pages/ProductListPage";
import Bookmark from "./pages/Bookmark";
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/products/list' element={<ProductList />} /> */}
        {/*<Route path='/bookmark' component={<Bookmark />} /> */}
      </Routes>
      <Footer />
    </Router>

  );
}
export default App;
