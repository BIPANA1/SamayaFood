import React from "react";

function MenuItem({ image, name, price, cart}){
    const  onClick =  (e) => {
        cart((pre)=> [...pre, {name:name, image:image, price: price}])
    }
    return(
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1>{name}</h1>
            <p>${price}</p>
            <button onClick={onClick}>Add to cart</button>
        </div>
    )
}
export default MenuItem;