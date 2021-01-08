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

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount(){
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 3500));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    return(
      <div className="root">
      <ScrollToTop />
      <Home />
      <CarouselGallery />
      <About />
      <Gallery />
      <Combo />
      <Menu />
      <Footer />
      </div>
    );
    }
}
export default App; 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
