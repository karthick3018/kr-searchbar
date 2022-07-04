import * as React from "react";
import { propTypes } from "./searchTypes";

const SearchBar = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  prefixImage,
}: propTypes) => {
  return (
    <div>
      <p>Search</p>
      <div>
        {prefixImage?.src ? (
          <figure>
            <img {...prefixImage} loading="lazy" />
          </figure>
        ) : (
          ""
        )}
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
