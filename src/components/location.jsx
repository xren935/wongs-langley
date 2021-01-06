import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/location.css";
import Aos from "aos";
import "aos/dist/aos.css";


class Location extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
        <div className="location" id="location">
            <h3>Location</h3>
        </div>
    );
  }
}

export default Location;
