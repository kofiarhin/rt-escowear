import "./app.styles.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((result) => console.log(result["shoes"]));
  }, []);
  return (
    <div>
      <h1 className="title">Escowear</h1>
    </div>
  );
};

export default App;
