import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './components/scrollToTop';
import Home from './components/home';
import CarouselGallery from './components/carousel';
import About from './components/about';
import Gallery from './components/gallery';
import Combo from './components/combo';
import Menu from './components/menu';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ScrollToTop />
    <Home />
    <CarouselGallery />
    <About />
    <Gallery />
    <Combo />
    <Menu />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
