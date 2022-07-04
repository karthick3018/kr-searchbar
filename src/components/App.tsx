import * as React from "react";
import SearchBar from "./search";
import "./../assets/scss/App.scss";

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };
  const imageProps = {
    src: "https://source.unsplash.com/user/c_v_r/100x100",
    alt: "user",
  };
  return (
    <div>
      <SearchBar
        name="search"
        placeholder="Search here"
        value={searchQuery}
        onChange={handleChange}
        prefixImage={imageProps}
      />
    </div>
  );
};

export default App;
