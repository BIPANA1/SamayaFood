import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
const Book = () => {
    const[menu, setmenu] =useState([])

    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try{
              const res= await axios.get("http://localhost:8800/book");
              setmenu(res.data);
             
            }catch(err){
                console.log(err)
            }
        };
        fetchAllBooks(); 
    }, []);

    const handleDelete = async (id) =>{
      try{
        await axios.delete("http://localhost:8800/book/"+ id)
        window.location.reload()
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div>
      <h1 className="h1-book">Samaya Menu Update</h1>
      <div className="books">
        {menu.map((book) => (
          <div className="book" key={book.id}>
           {book.cover && <img src={book.cover} alt="" />}
           <h2>{book.name}</h2>
           <span>{book.price}</span>
           <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
           <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
            </div>
        ))}
      </div>
    <button className="button"><Link to="/add">Add new Item</Link></button>
    </div>
  );
};

export default Book;
