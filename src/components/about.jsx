import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import tables from '../static/img/tables.png';

const description = "Wong's Chinese Restaurant is a family owned Chinese food restaurant located in Langley, BC. We have a variety of dishes of different tastes. Wheter you're craving for chow mein or a colourful stir-fry dish, you can always find your favourite Chinese food here. Our services include dine-in, take-out, and free delivery within 5km and a minimum order of $35. In addition, we also offer catering for large scaled events (contact us for more details)."

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
        <div className="about">
            <div className="background"></div>
            <div id="description">
              <h3>About Us</h3>
               {description}
              <br></br>
              <a type="button" href="https://www.google.com/maps/place/Wong's/@49.1038822,-122.6589204,14.64z/data=!4m5!3m4!1s0x0:0x539161c0ae40d832!8m2!3d49.10522!4d-122.658446" class="btn btn-outline-secondary btn-lg btn-iconed btn-rounded">
                <i class="fa fa-arrow-right"></i> 
                <span class="spn">Direction</span>
              </a>
            </div> 
        </div>
    );
  }
}

export default About;
