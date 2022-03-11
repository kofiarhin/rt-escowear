import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchField}`);
  };
  return (
    <div className="search">
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Search Item"
          onChange={(e) => setSearchField(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
