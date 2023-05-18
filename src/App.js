import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import Bookmark from "./pages/Bookmark/Bookmark";
import './App.css';
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const [bookmarkData, setBookmarkData] = useState([])

  useEffect(() => {
    axios.get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then(res => setData(res.data))
      .catch(error => console.log(error))

    const bookmarkData = JSON.parse(localStorage.getItem('bookmark')) || [];
    setBookmarkData(bookmarkData);
  }, [])

  const bookmarkHandler = (product) => {
    const updatedBookmarkData = [...bookmarkData];
    const index = updatedBookmarkData.findIndex(item => item.id === product.id);

    if (index === -1) {
      const obj = {
        id: product.id,
        type: product.type,
        title: product.title,
        sub_title: product.sub_title,
        brand_name: product.brand_name,
        price: product.price,
        discountPercentage: product.discountPercentage,
        image_url: product.image_url,
        brand_image_url: product.brand_image_url,
        follower: product.follower,
        isBookmarked: true,
      };
      updatedBookmarkData.push(obj);
    } else {
      updatedBookmarkData.splice(index, 1);
    }

    setBookmarkData(updatedBookmarkData);
    localStorage.setItem('bookmark', JSON.stringify(updatedBookmarkData));
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main data={data} bookmarkData={bookmarkData} setBookmarkData={setBookmarkData} bookmarkHandler={bookmarkHandler} />} />
        <Route path='/products/list' element={<ProductListPage bookmarkHandler={bookmarkHandler} bookmarkData={bookmarkData} data={data} />} />
        <Route path='/bookmark' element={<Bookmark bookmarkHandler={bookmarkHandler} bookmarkData={bookmarkData} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
