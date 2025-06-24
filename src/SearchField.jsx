import React from "react";


const SearchField = (props) => {
  return <div>
    <form onSubmit  = {handleSubmit} >
    <input type  = "text"
    placeholder = "Search..."
    value = {input}
    onChange = {(e) => props.onSearch(e)}/>
    <button type = "submit" >Search</button>
    </form>
  </div>;
};

export default SearchField;
