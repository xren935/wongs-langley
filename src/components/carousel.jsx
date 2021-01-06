import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/carousel.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from 'react-bootstrap/Carousel'
import bento0 from '../static/img/bento0.png'; 
import bento1 from '../static/img/bento1.png'; 
import bento2 from '../static/img/bento2.png'; 

class CarouselGallery extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
     
    };
  }
  
  render() {
    return (
        <div className="customized-carousel-gallery" style={{height: "100vh"}}>
            <Carousel style={{height: "100%"}}>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bento0}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome To</h3>
                    <br></br>
                    <h1>Wong's Chinese Restaurant</h1>
                    <br></br>
                    <h4><i>a Chinese food restaurant located in Langley, BC</i></h4>
                    <a id="direction-btn" type="button" href="https://www.google.com/maps/place/Wong's/@49.1038822,-122.6589204,14.64z/data=!4m5!3m4!1s0x0:0x539161c0ae40d832!8m2!3d49.10522!4d-122.658446" class="btn btn-outline-secondary btn-lg btn-iconed btn-rounded">
                        <i class="fa fa-arrow-right"></i> 
                        <span class="spn">Direction</span>
                    </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bento1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome To</h3>
                    <br></br>
                    <h1>Wong's Chinese Restaurant</h1>
                    <br></br>
                    <h4><i>a Chinese food restaurant located in Langley, BC</i></h4>
                    <a id="direction-btn" type="button" href="https://www.google.com/maps/place/Wong's/@49.1038822,-122.6589204,14.64z/data=!4m5!3m4!1s0x0:0x539161c0ae40d832!8m2!3d49.10522!4d-122.658446" class="btn btn-outline-secondary btn-lg btn-iconed btn-rounded">
                        <i class="fa fa-arrow-right"></i> 
                        <span class="spn">Direction</span>
                    </a>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bento2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome To</h3>
                    <br></br>
                    <h1>Wong's Chinese Restaurant</h1>
                    <br></br>
                    <h4><i>a Chinese food restaurant located in Langley, BC</i></h4>
                    <a id="direction-btn" type="button" href="https://www.google.com/maps/place/Wong's/@49.1038822,-122.6589204,14.64z/data=!4m5!3m4!1s0x0:0x539161c0ae40d832!8m2!3d49.10522!4d-122.658446" class="btn btn-outline-secondary btn-lg btn-iconed btn-rounded">
                        <i class="fa fa-arrow-right"></i> 
                        <span class="spn">Direction</span>
                    </a>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }
}

export default CarouselGallery;
