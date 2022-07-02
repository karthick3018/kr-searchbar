import * as React from "react";
import { propTypes } from "./searchTypes";

const SearchBar = ({ name, placeholder, type, value, onChange }: propTypes) => {
  return (
    <div>
      <p>Search</p>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
