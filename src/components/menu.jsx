import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/menu.css";
import Aos from "aos";
import "aos/dist/aos.css";

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
    };
  }


  render() {
    var appetizers = ['Crisp Egg Roll', 'Honey B.B.Q. Pork', 'Chinese Sausages', 'Deep Fried Wontons', 'Tofu with Pepper Salt', 'Deep Fried Chicken Wings', 'Honey Garlic Chicken Wings', 'Golden Fried Dumplings'];
    var appetizersprices = [2.50, 10.00, 10.00, 11.00, 11.00, 12.00, 13.00, 11.00];
    var soups = ['Wonton Soup', 'Wor Wonton Soup', 'Hot and Sour Soup', 'Chicken Crean Corn Soup', 'Egg Swirl Soup'];
    var soupsprices = ['11 (Large) / $6 (Small)', '16 (Large) / $9 (Small)', '16 (Large) / $9 (Small)', '11 (Large) / $8 (Small)', '11 (Large) / $6 (Small)'];
    var wraps = ['Prok Lettuce Wrap', 'Beef Lettuce Wrap', 'Chicken Lettuce Wrap', 'Special Lettuce Wrap'];
    var wrapsprices = [16, 16, 16, 16];
    var hotpots = ['Beef Ginger, Green Onion Hot Pot', 'Beef Satay Hot Pot', 'Chicken Hot Pot', 'Vegetable & Tofu Hot Pot', 'Prawn Hot Pot'];
    var hotpotsprices = [16, 16, 16, 14, 16];
    var ribs = ['Sweet & Sour Pork', 'Dry Garlic Pork', 'Honey Garlic Pork', 'Honey Garlic Ribs', 'Dry Garlic Ribs'];
    var ribsprices = [15, 15, 15, 15, 15];
    var chops = ['Chicken Chop Suey', 'Beef Chop Suey', 'B.B.Q. Pork Chop Suey', 'Vegetables Chop Suey', 'Mushroom Chop Suey', 'Special Chop Suey', 'Bak Choy with Oyster Sauce', 'Prawn Chop Suey'];
    var chopsprices = [14, 15, 14, 14, 14, 14, 14, 16];
    var fooyoungs = ['Chicken Egg Foo Young', 'B.B.Q. Pork Egg Foo Young', 'Mushrooms Egg Foo Young', 'Special Foo Young', 'Shrimp Egg Foo Young'];
    var fooyoungsprices = [12, 12, 12, 13, 13];
    var friedrices = ['B.B.Q. Pork Fried Rice', 'Chicken Fried Rice', 'Beef Fried Rice', 'Vegetables Fried Rice', 'Mushroom Fried Rice', 'Shrimps Fried Rice', 'Special Fried Rice', 'Chicken Mushroom Fried Rice', 'Curry Beef Fried Rice', 'Curry Chicken Fried Rice', 'Beef Tomato Fried Rice'];
    var friedricesprices = [11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12];
    var chickens = ['Almond Chicken', 'Lemon Chicken', 'Sweet & Sour Chicken', 'Chicken with Curry Sauce (Hot)', 'Chicken with Black Bean Sauce (Hot)', 'Chicken in Szechuan Sauce (Hot)', 'Almond Guy Ding', 'Cashew Guy Ding', 'Gung Bo Guy Ding (Hot)', 'Chicken with Bok Choy', 'Chicken with Broccoli'];
    var chickensprices = [15, 15, 15, 14, 14, 14, 14, 14, 14, 14, 14];
    var beefs = ['Beef with Broccoli', 'Beef with Bok Choy', 'Beef Green Beans Black Bean Sauce', 'Green Beans with Pepper Salt', 'Beef with Snow Peas', 'Beef with Curry Sauce (Hot)', 'Beef with Black Bean Sauce', 'Beef with Szechuan Sauce (Hot)', 'Beef with Black Pepper Sauce (Hot)', 'Ginger Fried Shredded Beef (Hot)', 'Beef with Fresh Tomato'];
    var beefsprices = [15, 15, 16, 16, 16, 15, 15, 15, 15, 16, 15];
    var seafoods = ['Deep Fried Prawns', 'Prawns with Broccoli', 'Prawns with Bok Choy', 'Prawns with Snow Peas', 'Prawns with Black Bean Sauce', 'Prawns in Szechuan Sauce', 'Prawns with Curry Sauce (Hot)', 'Prawns (Shell in) in Pepper Salt (Hot)', 'Deep Fried Squid in Pepper Sauce (Hot)', 'Squid with Black Bean Sauce (Hot)', 'Squid with Curry Sauce (Hot)', 'Scallops with Snow Peas', 'Scallops with Vegetable'];
    var seafoodsprices = [16, 16, 16, 17, 16, 16, 16, 17, 17, 16, 16, 17, 16];
    var chowmeins = ['Chicken Chow Mein', 'Beef Chow Mein', 'B.B.Q. Pork Chow Mein', 'Mushroom Chow Mein', 'Vegetables Chow Mein', 'Shrimps Chow Mein', 'Special Chow Mein', 'Chicken Mushroom Chow Mein', 'Curry Chicken Chow Mein', 'Curry Beef Chow Mein', 'Chicken Tomato Chow Mein', 'Beef Tomato Chow Mein', 'Shanghai Chow Mein', 'Singapore Fried Rice Noodle', 'Beef Chow Fun', 'Beef and Vegetables Chow Fun', ' Beef Chow Fun with Black Bean Sauce'];
    var chowmeinsprices = [11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 12, 13, 13, 13, 13, 14];
    var crispchowmeins = ['Cantonese Chow Mein (Crispy)', 'Ginger Beef Chow Mein (Crispy)', 'Chicken Chow Mein (Crispy)', 'Beef Chow Mein (Crispy)', 'Prawn Chow Mein (Crispy)'];
    var crispchowmeinsprices = [16, 16, 16, 16, 17];
    var sides = ['Sweet and Sour Sauce', 'Curry Sauce', 'Lemon Sauce', 'Black Bean Sauce', 'Steamed Rice', 'French Fries', 'Seasame Seed', 'Hot Sauce', 'Hot Oil', 'Canned Pop'];
    var sidesprices = [3, 3, 3, 3, 3, 6, 1, 1, 1, 2.5];

    function getItemList(items, prices){
      var itemList = items.map(function(item, index){
        const price = prices[index]; 
        return <div>
                <section>
                  <h5 key={index}>{item}</h5>
                  <span>......................................................................................................................................................................................................................................................................................</span>
                  <h5 key={index}>${price}</h5>
                </section>
              </div>
      });
      return itemList;
    }

    var appetizerList = getItemList(appetizers, appetizersprices);
    var soupList = getItemList(soups, soupsprices);
    var wrapList = getItemList(wraps, wrapsprices);
    var hotpotList = getItemList(hotpots, hotpotsprices);
    var ribList = getItemList(ribs, ribsprices);
    var chopList = getItemList(chops, chopsprices);
    var fooyoungList = getItemList(fooyoungs, fooyoungsprices);
    var friedriceList = getItemList(friedrices, friedricesprices);
    var chickenList = getItemList(chickens, chickensprices);
    var beefList = getItemList(beefs, beefsprices);
    var seafoodList = getItemList(seafoods, seafoodsprices);
    var chowmeinList = getItemList(chowmeins, chowmeinsprices);
    var crispchowmeinList = getItemList(crispchowmeins, crispchowmeinsprices);
    var sideList = getItemList(sides, sidesprices);

    return (
        <div className="menu" id="menu">
          <h3>Menu</h3>
          <div className="content">
            <h3 className="subtitle">Appetizers</h3>
            {appetizerList}
            <h3 className="subtitle">Soup</h3>
            {soupList}
            <h3 className="subtitle">Lettuce Wrap</h3>
            {wrapList}
            <h3 className="subtitle">Hot Pot</h3>
            {hotpotList}
            <h3 className="subtitle">Pork & Ribs</h3>
            {ribList}
            <h3 className="subtitle">Chop Suey</h3>
            {chopList}
            <h3 className="subtitle">Foo Young</h3>
            {fooyoungList}
            <h3 className="subtitle">Fried Rice</h3>
            {friedriceList}
            <h3 className="subtitle">Chicken</h3>
            {chickenList}
            <h3 className="subtitle">Beef</h3>
            {beefList}
            <h3 className="subtitle">Seafood</h3>
            {seafoodList}
            <h3 className="subtitle">Chow Mein</h3>
            {chowmeinList}
            <h3 className="subtitle">Chow Mein (Soft Noodles)</h3>
            {chowmeinList}
            <h5><i>Add Black Bean Sauce for $1</i></h5>
            <h3 className="subtitle">Chow Mein (Cripsy Noodles)</h3>
            {crispchowmeinList}
            <h5><i>Add Black Bean Sauce for $1</i></h5>
            <h3 className="subtitle">Side Order</h3>
            {sideList}
          </div>
        </div>
    );
  }
}

export default Menu;
