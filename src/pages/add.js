import React from "react";
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const add = () => {
  const [menu, setMenu] = useState({
    name:"",
    price: "",
    cover:"",
  });

const navigate = useNavigate()

  const handleChange = (e) =>{
    setMenu(prev=>({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/book", menu)
      navigate("/book")
    }catch(err){
      console.log(err)

    }
  }

  console.log(menu)
  return (
    <div className="form">
      <h1>Add new Menu Items</h1>

      <input type="text"
       placeholder="name"
        onChange={handleChange} 
        name="name"
         />
      <input type="number"
       placeholder="price" 
       onChange={handleChange} 
       name="price"
        />
      <input type="text"
       placeholder="cover" 
       onChange={handleChange} 
       name="cover"
        />
        <button className="formButton" onClick={handleClick}> Add</button>
    </div>
  )
}

export default add
