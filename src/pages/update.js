import React, { useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";
import './css/update.css';
const Update = () => {
  const [menu, setMenu] = useState({
    name:"",
    price: "",
    cover:"",
  });

const navigate = useNavigate()
const location = useLocation()

const bookId = location.pathname.split("/")[2]; 

console.log(location.pathname.split("/")[2])

  const handleChange = (e) =>{
    setMenu(prev=>({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/book/"+ bookId, menu)
      navigate("/book")
    }catch(err){
      console.log(err)

    }
  }

  console.log(menu)
  return (
    <div className='form'>
      <h1>Update Menu Items</h1>
      <input type='text'
       placeholder='name'
        onChange={handleChange} 
        name="name"
         />
      <input type='number'
       placeholder='price' 
       onChange={handleChange} 
       name="price"
        />
      <input type='text'
       placeholder='cover' 
       onChange={handleChange} 
       name="cover"
        />
        <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update;
