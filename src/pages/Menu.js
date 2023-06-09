import React,{useState} from 'react';
import "./css/Menu.css";
import { Menulist } from './Menulist';
import MenuItem from './Menuitem';
const Menu = () => {
  
  const [cart, setCart] = useState([]);
  return (
  <div className="menu">
    {cart.map((i)=> <div> {i.name}</div>)}
    <h1 className='h1-items'>Choose & Enjoy</h1>
    <h2 className='h2-items'> Menu That Fits Your Pallate</h2>
    <div className='menuList'>{Menulist.map((menuItem,key) =>{
        return <MenuItem 
        key={key}
        cart={setCart}
        image={menuItem.image} 
        name={menuItem.name}
         price={menuItem.price}
          />
          
    })}
      
    </div>





  </div>

  
  );
};

export default Menu;
