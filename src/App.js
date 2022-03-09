import "./app.styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from "./Component/CardList/CardList.component";
import Home from "./Pages/Home/Home.page.component";
import Details from "./Pages/Details/Details.page";
import Header from "./Component/Header/Header.component";
import SideNav from "./Component/SideNav/SideNav.component";
import { useSelector } from "react-redux";
const App = () => {
  const { showSideNav } = useSelector((state) => state.generalReducer);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        {showSideNav ? <SideNav /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:type/:name" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
