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
    var appetizers = ['春卷 Crisp Egg Roll', '蜜味叉烧 Honey B.B.Q. Pork', '腊肠 Chinese Sausages', '炸云吞 Deep Fried Wontons', '椒盐豆腐 Tofu with Pepper Salt', '酥炸鸡翅 Deep Fried Chicken Wings', '蜜味蒜子鸡翅 Honey Garlic Chicken Wings', '锅贴 Golden Fried Dumplings'];
    var appetizersprices = [2.50, 10.00, 10.00, 10.00, 10.00, 12.00, 13.00, 11.00];
    var soups = ['云吞汤 Wonton Soup', '窝云汤 Wor Wonton Soup', '酸辣汤 Hot and Sour Soup', '鸡茸栗米汤 Chicken Crean Corn Soup', '蛋花汤 Egg Swirl Soup'];
    var soupsprices = ['11 (Large) / $6 (Small)', '16 (Large) / $9 (Small)', '16 (Large) / $9 (Small)', '11 (Large) / $6 (Small)', '11 (Large) / $6 (Small)'];
    var wraps = ['猪肉生菜包 Prok Lettuce Wrap', '牛肉生菜包 Beef Lettuce Wrap', '鸡肉生菜包 Chicken Lettuce Wrap', '招牌生菜包 Special Lettuce Wrap'];
    var wrapsprices = [16, 16, 16, 16];
    var hotpots = ['姜葱牛肉煲 Beef Ginger, Green Onion Hot Pot', '沙爹牛肉煲 Beef Satay Hot Pot', '鸡煲 Chicken Hot Pot', '蔬菜煲 Vegetable & Tofu Hot Pot', '虾煲 Prawn Hot Pot'];
    var hotpotsprices = [16, 16, 16, 14, 16];
    var ribs = ['咕噜肉 Sweet & Sour Pork', '蒜子干肉 Dry Garlic Pork', '蜜味蒜子肉 Honey Garlic Pork', '蜜味蒜子骨 Honey Garlic Ribs', '蒜子肉 Dry Garlic Ribs'];
    var ribsprices = [14, 14, 15, 15, 14];
    var chops = ['鸡球杂菜 Chicken Chop Suey', '牛肉杂菜 Beef Chop Suey', '叉烧杂菜 B.B.Q. Pork Chop Suey', '清炒杂菜 Vegetables Chop Suey', '蘑菇芙蓉 Mushroom Chop Suey', '招牌杂菜 Special Chop Suey', '蚝油白菜 Bak Choy with Oyster Sauce', '虾仁杂菜 Prawn Chop Suey'];
    var chopsprices = [13, 14, 13, 13, 13, 13, 13, 15];
    var fooyoungs = ['鸡丝芙蓉 Chicken Egg Foo Young', '叉烧芙蓉 B.B.Q. Pork Egg Foo Young', '蘑菇芙蓉 Mushrooms Egg Foo Young', '招牌芙蓉 Special Foo Young', '虾仁芙蓉 Shrimp Egg Foo Young'];
    var fooyoungsprices = [12, 12, 12, 13, 13];
    var friedrices = ['叉烧炒饭 B.B.Q. Pork Fried Rice', '鸡丝炒饭 Chicken Fried Rice', '牛肉炒饭 Beef Fried Rice', '什菜炒饭 Vegetables Fried Rice', '蘑菇炒饭 Mushroom Fried Rice', '虾仁炒饭 Shrimps Fried Rice', '招牌炒饭 Special Fried Rice', '蘑菇鸡丝炒饭 Chicken Mushroom Fried Rice', '咖喱牛肉炒饭 Curry Beef Fried Rice', '咖喱鸡肉炒饭 Curry Chicken Fried Rice', '鲜茄牛肉炒饭 Beef Tomato Fried Rice'];
    var friedricesprices = [11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12];
    var chickens = ['杏仁酥鸡 Almond Chicken', '柠檬软鸡 Lemon Chicken', '甜酸鸡球 Sweet & Sour Chicken', '咖喱鸡片 Chicken with Curry Sauce (Hot)', '豉汁鸡片 Chicken with Black Bean Sauce (Hot)', '四川鸡片 Chicken in Szechuan Sauce (Hot)', '杏仁鸡丁 Almond Guy Ding', '腰果鸡丁 Cashew Guy Ding', '宫保鸡丁 Gung Bo Guy Ding (Hot)', '白菜鸡丁 Chicken with Bok Choy', '百加利鸡片 Chicken with Broccoli'];
    var chickensprices = [14, 14, 14, 13, 13, 13, 14, 14, 13, 13, 13];
    var beefs = ['百加利牛肉 Beef with Broccoli', '白菜牛肉 Beef with Bok Choy', '豉汁牛肉四季豆 Beef Green Beans Black Bean Sauce', '椒盐四季豆 Green Beans with Pepper Salt', '雪豆牛肉 Beef with Snow Peas', '咖喱牛肉 Beef with Curry Sauce (Hot)', '豉汁牛肉 Beef with Black Bean Sauce', '四川牛肉 Beef with Szechuan Sauce (Hot)', '黑椒牛肉 Beef with Black Pepper Sauce (Hot)', '干炸牛柳丝 Ginger Fried Shredded Beef (Hot)', '鲜茄牛肉 Beef with Fresh Tomato'];
    var beefsprices = [14, 14, 15, 15, 15, 14, 14, 14, 14, 15, 14];
    var seafoods = ['酥炸虾球 Deep Fried Prawns', '虾球加百加利 Prawns with Broccoli', '白菜虾球 Prawns with Bok Choy', '雪豆虾球 Prawns with Snow Peas', '豉汁虾球 Prawns with Black Bean Sauce', '四川虾球 Prawns in Szechuan Sauce', '咖喱虾球 Prawns with Curry Sauce (Hot)', '椒盐虾 Prawns (Shell in) in Pepper Salt (Hot)', '椒盐鲜鱿 Deep Fried Squid in Pepper Sauce (Hot)', '豉汁鲜鱿 Squid with Black Bean Sauce (Hot)', '咖喱鲜鱿 Squid with Curry Sauce (Hot)', '雪豆带子 Scallops with Snow Peas', '带子杂菜 Scallops with Vegetable']
    var seafoodsprices = [15, 15, 15, 16, 15, 15, 15, 16, 16, 15, 15, 16, 15];
    var chowmeins = ['鸡丝炒面 Chicken Chow Mein', '牛肉炒面 Beef Chow Mein', '叉烧炒面 B.B.Q. Pork Chow Mein', '蘑菇炒面 Mushroom Chow Mein', '什菜炒面 Vegetables Chow Mein', '虾仁炒面 Shrimps Chow Mein', '招牌炒面 Special Chow Mein', '蘑菇鸡丝炒面 Chicken Mushroom Chow Mein', '咖喱鸡丝炒面 Curry Chicken Chow Mein', '咖喱牛肉炒面 Curry Beef Chow Mein', '鲜茄鸡丝炒面 Chicken Tomato Chow Mein', '鲜茄牛肉炒面 Beef Tomato Chow Mein', '上海粗炒 Shanghai Chow Mein', '星洲炒米 Singapore Fried Rice Noodle', '干炒牛河 Beef Chow Fun', '时菜牛河 Beef and Vegetables Chow Fun', '豉椒牛河 Beef Chow Fun with Black Bean Sauce'];
    var chowmeinsprices = [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 13, 11, 13, 13, 13];
    var crispchowmeins = ['广东炒面 Cantonese Chow Mein (Crispy)', '牛丝炒面 Ginger Beef Chow Mein (Crispy)', '鸡丝炒面 Chicken Chow Mein (Crispy)', '牛肉炒面 Beef Chow Mein (Crispy)', '虾仁炒面 Prawn Chow Mein (Crispy)'];
    var crispchowmeinsprices = [14, 14, 14, 14, 15];
    var sides = ['甜酸汁 Sweet and Sour Sauce', '咖喱汁 Curry Sauce', '柠檬汁 Lemon Sauce', '豉汁 Black Bean Sauce', '白饭 Steamed Rice', '炸薯条 French Fries', '芝麻 Seasame Seed', '辣椒酱 Hot Sauce', '辣椒油 Hot Oil', '罐装汽水 Canned Pop'];
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
