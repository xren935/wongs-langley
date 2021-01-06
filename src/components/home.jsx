import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import '../static/home.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from '../static/img/logo.png';
import { FaConciergeBell, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import { HashRouter as Router, Switch, Route, withRouter, Link} from 'react-router-dom';
import About from './about';

class Home extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
     
    };
  }


  render() {
    Aos.init({interval: 1000});
    var FontAwesome = require('react-fontawesome');
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <Navbar className="customized-nav" expand="lg">
          {/* <Navbar.Logo></Navbar.Logo> */}
          <Navbar.Brand href="#home">
              <img src={Logo} style={{ width: 200, marginTop: -7 }}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#menu">MENU</Nav.Link>
              <Nav.Link href="#link" style={{ marginRight: "100px"}}>CONTACT</Nav.Link>
              <Nav.Link><FaConciergeBell/></Nav.Link>
              <Nav.Link><FaMapMarkerAlt/></Nav.Link>
              <Nav.Link><FaPhoneAlt/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       
    </div>
      )}
    </Spring>
    );
  }
}

export default Home;
