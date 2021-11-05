import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../static/combo.css";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";

var familydinner = [
  "Dinner For Two",
  "Dinner For Three",
  "Dinner For Four",
  "Dinner For Six (Large Order)",
  "Dinner For Eight (Large Order)",
];
var familyprices = [30, 45, 60, 90, 110];
var familyitems = [
  "2 Egg Rolls, Beef Chop Suey, Sweet & Sour Pork, Chicken Chow Mein",
  "3 Egg Rolls, Beef Chop Suey, Sweet & Sour Pork, Chicken Chow Mein, Pork Fried Rice",
  "4 Egg Rolls, Special Chop Suey, Sweet & Sour Pork, Chicken Chow Mein, Pork Fried Rice, Almond Chicken",
  "6 Egg Rolls, Deep Fried Prawn, Chicken Chow Mein, Special Chop Suey, Almond Guy Ding, Pork Fried Rice, Almond Chicken, Sweet & Sour Pork",
  "8 Egg Rolls, Deep Fried Prawn, Chicken Chow Mein, Special Chop Suey, Almond Guy Ding, Pork Fried Rice, Almond Chicken, Sweet & Sour Pork, Chicken Egg Foo Young",
];

var forone = [
  "Combination A",
  "Combination B",
  "Combination C",
  "Combination D",
];
var foroneprices = [13, 13, 16, 13];
var foroneitems = [
  "Pork Fried Rice, Chicken Chow Mein, Sweet & Sour Pork",
  "Chicken Chow Mein, Chicken Chop Suey, Sweet & Sour Chicken",
  "Chicken Chow Mein, Chicken Chop Suey, Sweet & Sour Pork, Deep Fried Prawns",
  "Pork Fried Rice, Sweet & Sour Pork, Almond Chicken",
];

class Combo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    Aos.init({ interval: 1000 });

    function getItemList(items, prices, details) {
      var itemList = items.map(function (item, index) {
        const price = prices[index];
        const detail = details[index];
        return (
          <div>
            <section>
              <h5 key={index}>{item}</h5>
              <span>
                ......................................................................................................................................................................................................................................................................................
              </span>
              <h5 key={index}>${price}</h5>
            </section>
            <p key={index}>{detail}</p>
          </div>
        );
      });
      return itemList;
    }

    var familyList = getItemList(familydinner, familyprices, familyitems);
    var foroneList = getItemList(forone, foroneprices, foroneitems);

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div className="combo" id="combo">
              <div className="content">
                <br></br>
                <br></br>
                FREE HOME DELIVERY (within 4km and a minimum order of $40)
                <br></br>
                PICK-UP ORDER: 10% OFF (pay with cash and a minimum order of
                $40)
                <br></br>
                5% OFF (pay with a credit or debit card and a minimum order of
                $40)
                <h3>Combo</h3>
                <h3 className="subtitle">Lunch Special</h3>
                <br></br>
                <h4>Available 11:30 AM - 3:00 PM</h4>
                <h4 style={{ color: "#e68a00" }}>Create your own combo!</h4>
                <h4 style={{ color: "#e68a00" }}>
                  <b>3 items - $10.50</b>
                </h4>
                <h4 style={{ color: "#e68a00" }}>
                  <b>4 items - $13.00</b>
                </h4>
                <br></br>
                <h4>Choose from:</h4>
                <ul style={{ fontSize: "20px", listStyle: "none" }}>
                  <li>Pork Fried Rice</li>
                  <li>Mushroom Chow Mein</li>
                  <li>Vegetable Chop Suey</li>
                  <li>Sweet & Sour Pork</li>
                  <li>Sweet & Sour Chicken</li>
                  <li>Almond Chicken</li>
                  <li>Deep Fried Prawns</li>
                  <li>Chicken with Black Bean Sauce</li>
                  <li>Egg Roll</li>
                  <li>Beef with Brocooli</li>
                  <li>Almond Guy Ding</li>
                  <li>Dry Ribs</li>
                </ul>
                <h3 className="subtitle">Special Family Dinner</h3>
                <br></br>
                {familyList}
                <h3 className="subtitle">Special Family Dinner</h3>
                {foroneList}
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Combo;
