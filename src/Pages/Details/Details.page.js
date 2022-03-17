import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Item from "../../Component/Item/Item.component";
import "./details.styles.css";
import Loading from "../../Loading/Loading.component";
const Details = () => {
  const { name, type } = useParams();
  const { data, isPending } = useSelector((state) => state.dataReducer);
  let item;
  if (!isPending) {
    item = data[type].find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
  }

  return (
    <div className="details">
      <div className="container">
        {!isPending ? <Item item={item} type={type} /> : <Loading />}
      </div>
    </div>
  );
};
export default Details;
