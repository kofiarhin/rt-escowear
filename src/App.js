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
const App = () => {
  const { showSideNav } = useSelector((state) => state.generalReducer);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        {showSideNav ? <SideNav /> : null}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home/:type" element={<Home />} />
          <Route path="/details/:type/:name" element={<Details />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
