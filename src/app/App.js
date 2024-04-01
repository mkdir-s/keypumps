import { Routes, Route, useLocation } from "react-router-dom";

import './App.scss';


import HomePage from "../pages/home/HomePage";
import FilterPage from "../pages/filter/FilterPage";
import AboutPage from "../pages/about/AboutPage";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductPage from "../pages/product/ProductPage";
import ArticlesPage from "../pages/articles/ArticlesPage";
import ArticlePage from "../pages/article/ArticlePage";
import FaqPage from "../pages/faq/FaqPage";
import DeliveryPage from "../pages/delivery/DeliveryPage";
import OrderPage from "../pages/order/OrderPage";


import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobFooter from "../components/MobFooter/MobFooter";

import Mobmenu from "../components/Mobmenu/Mobmenu";
import { useEffect, useRef, useState } from "react";
import Arrow from '../assets/arrow-top.svg';



const App = () => {

    const location = useLocation();
    const app = useRef();
    const [showScrollToTop, setShowScrollToTop] = useState(false);


    useEffect(() => {
        if(app.current) {          
            app.current.scrollTop = 0
        }
    }, [app, location])

    const handleScroll = () => {
      const scrollY = app.current.scrollTop;
      if (scrollY > 100) {
          setShowScrollToTop(true);
      } else {
          setShowScrollToTop(false);
      }
  };

  const scrollToTop = () => {
      app.current.scrollTo({ top: 0, behavior: 'smooth' });
  };


    return (
        <div ref={app}  className="App" onScroll={handleScroll}>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/catalog/:categoryTitle" element={<FilterPage/>}/>
                <Route path="/catalog" element={<CatalogPage/>}/>
                <Route path="/articles" element={<ArticlesPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/delivery" element={<DeliveryPage/>}/>
                <Route path="/faq" element={<FaqPage/>}/>
                <Route path="/order" element={<OrderPage/>}/>
                <Route path="/catalog/:category/:title" element={<ProductPage/>}/>
                <Route path="/articles/:article" element={<ArticlePage/>}/>
            </Routes>
            <Footer/>
            <MobFooter /> 
            {showScrollToTop && (
                <div className="app-arrow" onClick={scrollToTop}>
                    <img src={Arrow} alt="scroll-to-top" />
                </div>
            )}
        </div>
    )
}

export default App;
