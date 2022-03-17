import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { flattenData } from "../../Component/helper/helper";
import Card from "../../Component/Card/Card.component";
import "./search-page.styles.css";

// search page
const SearchPage = () => {
  const { search } = useParams();
  const { data } = useSelector((state) => state.dataReducer);

  const transformed = flattenData(data);

  const items = transformed.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-page">
      <div className="container">
        <h1 className="title">Search Result for: {search} </h1>
        <div className="container">
          {items.length > 0 ? (
            <div className="wrapper">
              {items.map((item) => (
                <Card item={item} type={item.category} key={item.name} />
              ))}
            </div>
          ) : (
            <div className="feedback">
              <h1 className="title">Search Nof found </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
