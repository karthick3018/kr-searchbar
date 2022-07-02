import * as React from "react";
import SearchBar from "./search";
import "./../assets/scss/App.scss";

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };
  return (
    <div>
      <SearchBar
        name="search"
        placeholder="Search here"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
