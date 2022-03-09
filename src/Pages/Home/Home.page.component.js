import CardList from "../../Component/CardList/CardList.component";
import { useParams } from "react-router-dom";
const Home = () => {
  const { type } = useParams();
  return (
    <div>
      <CardList type={type} />
    </div>
  );
};

export default Home;
