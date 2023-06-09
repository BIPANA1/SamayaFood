import React from "react";
import '../pages/css/SearchBar.css'
function SearchBar({placeholder,data}){

    return( 
       
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={'placeholder'}/>
                <div className="searchIcon"></div>

            </div>
            </div>
      
    )
}
export default SearchBar