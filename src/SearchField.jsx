import React from "react";

const SearchField = (props) => {
  const { input, setInput, onSearch } = props;

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchField;
