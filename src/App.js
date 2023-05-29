import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

import './App.css';

const Main = lazy(() => import('./pages/Main/Main'));
const ProductListPage = lazy(() => import('./pages/ProductListPage/ProductListPage'));
const Bookmark = lazy(() => import('./pages/Bookmark/Bookmark'));

function App() {

  return (
    <Router>
      <Header />
      <Suspense fallback={(<div className="loading">Loading...</div>)}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/products/list' element={<ProductListPage />} />
          <Route path='/bookmark' element={<Bookmark />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
