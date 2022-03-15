import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeSideNav } from "../../redux/action/general.actions";

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchField}`);
    dispatch(removeSideNav());
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
