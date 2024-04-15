import React from "react";
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";
import Cart from "./Cart";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
             
            />
            
          );
         
        })}
      </div>
    </div>
  );
}

export default Menu;
