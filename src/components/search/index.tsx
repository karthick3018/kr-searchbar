import * as React from "react";
import { PropTypes } from "./searchTypes";

const SearchBar = <T,>({
  name,
  placeholder,
  type,
  value,
  onChange,
  prefixImage: PrefixImage,
}: PropTypes<T>) => {
  const PrefixComponent = !PrefixImage?.src
    ? (PrefixImage as React.ElementType)
    : null;
  return (
    <div>
      <p>Search</p>
      <div>
        {PrefixImage?.src ? (
          <figure>
            <img {...PrefixImage} loading="lazy" alt="prefix icon" />
          </figure>
        ) : (
          <PrefixComponent />
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
