import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/gallery.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Card, Button } from 'react-bootstrap';
import snspork from '../static/img/sweetnsourpork.png'; 
import beefbroc from '../static/img/beefwithbroccoli.png';
import chowmein from '../static/img/chowmein.png'; 
import rice from '../static/img/rice.png'; 
import friedchicken from '../static/img/friedchicken.png';

const snsporkDesc = "Made with juicy pieces of pork tenderloin, bell peppers, onion, and pineapple.";
const friedChickenDesc = "Chinese-style fried chicken. Pair it up with your favourite sauce!";
const beefbrocDesc = "Made with fresh broccoli, tender nutrition-packed beef, and our house special sauce(containig soy sauce and garlic).";
const chowmeinDesc = "Classic chicken chow mein containing chicken breast strips and chow mein noodles.";
const riceDesc = "Fried rice with chunks of Chinese sausage, peas, and carrots."

class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
    };
  }

  render() {
    var names = ['Sweet and Sour Pork', 'Fried Chicken', 'Beef & Broccoli', 'Chow Mein', 'Fried Rice', 'Another Item', 'Another Item', 'Another Item'];
    var imgnames = [snspork, friedchicken, beefbroc, chowmein, rice, snspork, friedchicken, beefbroc];
    var descriptions = [snsporkDesc, friedChickenDesc, beefbrocDesc, chowmeinDesc, riceDesc, snsporkDesc, snsporkDesc, snsporkDesc];
    var namesList = names.map(function(name, index){
        const currimg = imgnames[index];
        const currdesc = descriptions[index];
        return  <div class="col-md-3">
                <Card>
                <Card.Img variant="top" src={currimg}/>
                <Card.Body>
                    <Card.Title key={index}>{name}</Card.Title>
                    <Card.Text>
                      {currdesc}
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
    });

    return (
        <div className="gallery">
            <h3>Popular Items</h3>
            <div className="items">
                <div class="row">
                {namesList}
                </div>
            </div>
        </div>
    );
  }
}

export default Gallery;
