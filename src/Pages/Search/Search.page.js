import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { flattenData } from "../../Component/helper/helper";
import Card from "../../Component/Card/Card.component";
const SearchPage = () => {
  const { search } = useParams();
  const { data } = useSelector((state) => state.dataReducer);

  const transformed = flattenData(data);

  const items = transformed.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      {items.length > 0 ? (
        <div className="wrapper">
          {items.map((item) => (
            <Card item={item} type={item.category} key={item.name} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchPage;
