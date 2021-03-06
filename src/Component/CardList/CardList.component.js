import { useSelector } from "react-redux";
import Loading from "../../Loading/Loading.component";
import Card from "../Card/Card.component";
import "./cardlist.styles.css";
// cardlist
const CardList = ({ type = "hoodies" }) => {
  const { data, isPending } = useSelector((state) => state.dataReducer);
  const storeData = data[type];

  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        <div className="main-wrapper">
          <h1 className="title"> {type} </h1>

          <div className="card-wrapper">
            {storeData.map((item) => (
              <Card item={item} key={item.name} type={type} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardList;
