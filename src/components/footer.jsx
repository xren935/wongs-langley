import React, { Component } from 'react';
import { FaGoogle, FaMapMarkerAlt, FaConciergeBell } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import '../static/footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (  
            <footer class="site-footer" id="footer">
                <div class="container">
                    <div class="row" style={{paddingLeft: "46px"}}>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <h6><b>Address</b></h6>
                            <ul class="footer-links">
                            <li><u><a href="https://www.google.com/maps/place/Wong's/@49.10522,-122.658446,15z/data=!4m2!3m1!1s0x0:0x539161c0ae40d832?sa=X&ved=2ahUKEwjv-vHWy4buAhUKsJ4KHSNQB1cQ_BIwCnoECBYQBQ">20349 Fraser Hwy, Langley City, BC V3A 4E8</a></u></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <h6><b>Opening Hours</b></h6>
                            <ul class="footer-links">
                            <li>Monday: Closed</li>
                            <li>Tuesday: 11:30AM - 9PM</li>
                            <li>Wednesday: 11:30AM - 9PM</li>
                            <li>Thursday: 11:30AM - 9PM</li>
                            <li>Friday: 11:30AM - 9PM</li>
                            <li>Saturday: 12- 9PM</li>
                            <li>Sunday: 4 - 8PM</li>
                            </ul>
                        </div> 
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <h6><b>Contact Information</b></h6>
                            <ul class="footer-links">
                            <li>(604) 532-6938</li>
                            <li><a href="https://www.zomato.com/vancouver/wongs-chinese-restaurant-city-of-langley-langley/menu"><u>Our Zomato Page</u></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <a href="https://www.zomato.com/vancouver/wongs-chinese-restaurant-city-of-langley-langley/menu" class="copyright-text">Copyright &copy; Wong's Chinese 2020</a>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                            <li><a class="google" href="https://www.google.com/search?q=wongs+chinese+restarutn&oq=wongs+chinese+restarutn&aqs=chrome..69i57j0i13l2j46i13i175i199l2j0i13j46i13i175i199l2.3308j0j4&sourceid=chrome&ie=UTF-8"><FaGoogle /></a></li>
                            <li><a class="twitter" href="https://www.google.com/maps/place/Wong's/@49.10522,-122.658446,15z/data=!4m2!3m1!1s0x0:0x539161c0ae40d832?sa=X&ved=2ahUKEwiLqIWC0IbuAhVnJzQIHVl5BZAQ_BIwCnoECBcQBQ"><FaMapMarkerAlt /></a></li>
                            <li><a class="insta" href="https://www.doordash.com/store/Wong-s-Chinese-Seafood-Restaurant-Langley-City-399169/en-CA/?ignore_splash_experience=true&utm_source=Google&utm_medium=GPA_Ads&utm_campaign=CX_CA_SE_GP_GO_ACQ_CCAXXX__+&gclid=CjwKCAiAudD_BRBXEiwAudakXxNkd1vSghsudJYS8s-4nY1gwSAx-7dnwJAOBQVQsMfzdHWSzZCiLxoCIFAQAvD_BwE"><FaConciergeBell /></a></li>   
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;