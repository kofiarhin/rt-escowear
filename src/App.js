import "./app.styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from "./Component/CardList/CardList.component";
import Home from "./Pages/Home/Home.page.component";
import Details from "./Pages/Details/Details.page";
import Header from "./Component/Header/Header.component";
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:type/:name" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
