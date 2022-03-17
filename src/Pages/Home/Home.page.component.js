import CardList from "../../Component/CardList/CardList.component";
import { useParams } from "react-router-dom";
const Home = () => {
  const { type } = useParams();
  return (
    <div className="container">
      <CardList type={type} />
    </div>
  );
};

export default Home;
