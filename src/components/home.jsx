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

class Home extends React.Component {
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
  
  constructor(props){
    super(props);
  
    this.state = {
      loading: true
    };
  }

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }
    Aos.init({interval: 1000});
    var FontAwesome = require('react-fontawesome');
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <Navbar className="customized-nav" expand="lg">
          <Navbar.Brand href="#home">
              <img src={Logo} style={{ width: 200, marginTop: -7 }}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#combo">MENU</Nav.Link>
              <Nav.Link href="#footer" style={{ marginRight: "100px"}}>CONTACT</Nav.Link>
              <Nav.Link href="https://www.doordash.com/store/Wong-s-Chinese-Seafood-Restaurant-Langley-City-399169/en-CA/?ignore_splash_experience=true&utm_source=Google&utm_medium=GPA_Ads&utm_campaign=CX_CA_SE_GP_GO_ACQ_CCAXXX__+&gclid=CjwKCAiAudD_BRBXEiwAudakXxNkd1vSghsudJYS8s-4nY1gwSAx-7dnwJAOBQVQsMfzdHWSzZCiLxoCIFAQAvD_BwE"><FaConciergeBell/></Nav.Link>
              <Nav.Link href="https://www.google.com/maps/place/Wong's/@49.10522,-122.658446,15z/data=!4m2!3m1!1s0x0:0x539161c0ae40d832?sa=X&ved=2ahUKEwiu6oKk0YbuAhWHq54KHQJqDzEQ_BIwCnoECBQQBQ"><FaMapMarkerAlt/></Nav.Link>
              <Nav.Link href="#footer"><FaPhoneAlt/></Nav.Link>
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
