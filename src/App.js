import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./app.styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from "./Component/CardList/CardList.component";
import { useSelector } from "react-redux";
import Home from "./Pages/Home/Home.page.component";
import Details from "./Pages/Details/Details.page";
import Header from "./Component/Header/Header.component";
import SideNav from "./Component/SideNav/SideNav.component";
import Footer from "./Component/Footer/Footer.component";
import Landing from "./Pages/Landing/Landing.page";
import SearchPage from "./Pages/Search/Search.page";
import { getStoreData } from "./redux/action/data.actions";
import Playground from "./Pages/Playground/Playground.page";

// App
const App = () => {
  const { showSideNav } = useSelector((state) => state.generalReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoreData());
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        {showSideNav ? <SideNav /> : null}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home/:type" element={<Home />} />
          <Route path="/details/:type/:name" element={<Details />} />
          <Route path="/search/:search" element={<SearchPage />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
