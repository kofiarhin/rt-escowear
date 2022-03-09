import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_store_data } from "../../redux/action/data.actions";
import Loading from "../../Loading/Loading.component";
import Card from "../Card/Card.component";
import "./cardlist.styles.css";
// cardlist
const CardList = ({ type = "hoodies" }) => {
  const dispatch = useDispatch();
  const { data, isPending } = useSelector((state) => state.dataReducer);
  const storeData = data[type];

  useEffect(() => {
    dispatch(get_store_data());
  }, []);
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
