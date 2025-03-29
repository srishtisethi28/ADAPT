import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { PlaceOrder } from "./Pages/PlaceOrder";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import LoginPopup from "./Components/LoginPopup";
import Shop from "./Pages/Shop";
import MainHeade from "./Pages/MainHeade";
import NotFound from "./Pages/NotFound";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className="bg-black ">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<MainHeade />}>
            <Route index element={<Home setShowFooter={setShowFooter} showFooter={showFooter} />} />
            <Route path="/shop" element={<Shop setShowFooter={setShowFooter} showFooter={showFooter} />} />
            <Route path="/cart" element={<Cart setShowFooter={setShowFooter} showFooter={showFooter} />} />
            <Route path="/order" element={<PlaceOrder setShowFooter={setShowFooter} showFooter={showFooter} />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </div>
      {showFooter ? <Footer /> : <></>}
    </>
  );
}

export default App;
