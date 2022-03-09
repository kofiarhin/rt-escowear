import "./app.styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from "./Component/CardList/CardList.component";
import Home from "./Pages/Home/Home.page.component";
import Details from "./Pages/Details/Details.page";
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:type/:name" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
