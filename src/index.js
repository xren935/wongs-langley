import React, { useEffect } from 'react';
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
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';

const trackingcode = "UA-187230407-1";
ReactGA.initialize(trackingcode);
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(
  <React.StrictMode>
    <Home />
    <ScrollToTop />
    <CarouselGallery />
    <About />
    <Gallery />
    <Combo />
    <Menu />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
// export default Index;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
