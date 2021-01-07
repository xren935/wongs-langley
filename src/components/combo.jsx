import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import '../static/combo.css';
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";

var familydinner = ['Dinner For Two', 'Dinner For Three', 'Dinner For Four', 'Dinner For Six (Large Order)', 'Dinner For Eight (Large Order)']
var familyprices = [30, 45, 60, 90, 115];
var familyitems = ['2 Egg Rolls, Beef Chop Suey, Sweet & Sour Pork, Chicken Chow Mein', '3 Egg Rolls, Beef Chop Suey, Sweet & Sour Pork, Chicken Chow Mein, Pork Fried Rice', '4 Egg Rolls, Special Chop Suey, Sweet & Sour Pork, Chicken Chow Mein, Pork Fried Rice, Almond Chicken', '6 Egg Rolls, Deep Fried Prawn, Chicken Chow Mein, Special Chop Suey, Almond Guy Ding, Pork Fried Rice, Almond Chicken, Sweet & Sour Pork', '8 Egg Rolls, Deep Fried Prawn, Chicken Chow Mein, Special Chop Suey, Almond Guy Ding, Pork Fried Rice, Almond Chicken, Sweet & Sour Pork, Chicken Egg Foo Young'];

var forone = ['Combination A', 'Combination B', 'Combination C', 'Combination D'];
var foroneprices = [13, 13, 16, 13]; 
var foroneitems = ['Pork Fried Rice, Chicken Chow Mein, Sweet & Sour Pork', 'Chicken Chow Mein, Chicken Chop Suey, Sweet & Sour Chicken', 'Chicken Chow Mein, Chicken Chop Suey, Sweet & Sour Pork, Deep Fried Prawns', 'Pork Fried Rice, Sweet & Sour Pork, Almond Chicken'];

class Combo extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
     
    };
  }


  render() {
    Aos.init({interval: 1000});
    
    function getItemList(items, prices, details){
        var itemList = items.map(function(item, index){
          const price = prices[index]; 
          const detail = details[index];
          return <div>
                  <section>
                    <h5 key={index}>{item}</h5>
                    <span>......................................................................................................................................................................................................................................................................................</span>
                    <h5 key={index}>${price}</h5>
                  </section>
                  <p key={index}>{detail}</p>
                </div>
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
                    <h3>Combo</h3>
                    <h3 className="subtitle">Special Family Dinner</h3>
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
