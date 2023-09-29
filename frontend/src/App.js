import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavbarComp from "./pages/commons/NavbarComp";
import Footer from "./pages/commons/Footer";
import MaybeShowNavbarComp from "./pages/commons/MaybeShowNavbarComps";
import MaybeShowFooter from "./pages/commons/MaybeShowFooter";


function App() {
  return (
<Router>
      <div className="App">
        <MaybeShowNavbarComp>
          <NavbarComp />
        </MaybeShowNavbarComp>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <MaybeShowFooter>
          <Footer />
        </MaybeShowFooter>
      </div>
    </Router>
  );
}

export default App;
