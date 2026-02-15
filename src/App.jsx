import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Startpage from "./components/startpage/Startpage";
import LatestNews from "./components/latestenews/LatestNews";
import "../src/App.css";
import LaMaisonbugati from "./components/maisonbugatti/LaMaisonbugati";
import LAmainsonIterator from "./components/maisonbugatti/LAmainsonIterator";
import IteratorSports from "./components/sportscar/IteratorSports";
import Bugattisur from "./components/bugattisur/Bugattisur";
import Animation from "./components/animation/Animation";
import IteratorBugattiLive from "./components/bugatiLive/IteratorBugattiLive";
import Footer from "./components/footer/Footer";
import FooterPages from "./components/footerpages/FooterPages";
import ScrollToTop from "./components/ScrollToTop";

// Home Page Component
const Home = () => (
  <>
    <Startpage />
    <LatestNews />
    <LAmainsonIterator />
    <IteratorSports />
    <IteratorBugattiLive />
  </>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="main">
        <Navbar />
        <div style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* LA MARQUE */}
            <Route path="/discover" element={<FooterPages page="discover" />} />
            <Route path="/careers" element={<FooterPages page="careers" />} />
            <Route path="/newsroom" element={<FooterPages page="newsroom" />} />
            <Route path="/classics" element={<FooterPages page="classics" />} />
            <Route path="/contact" element={<FooterPages page="contact" />} />
            {/* HYPER SPORTS CARS */}
            <Route
              path="/tourbillon"
              element={<FooterPages page="tourbillon" />}
            />
            <Route path="/mistral" element={<FooterPages page="mistral" />} />
            <Route path="/bolide" element={<FooterPages page="bolide" />} />
            <Route path="/chiron" element={<FooterPages page="chiron" />} />
            {/* CUSTOMER SERVICE */}
            <Route
              path="/individual-service"
              element={<FooterPages page="individual-service" />}
            />
            <Route
              path="/maintenance"
              element={<FooterPages page="maintenance" />}
            />
            <Route
              path="/service-partner"
              element={<FooterPages page="service-partner" />}
            />
            <Route path="/passport" element={<FooterPages page="passport" />} />
            {/* LIFESTYLE */}
            <Route
              path="/art-of-living"
              element={<FooterPages page="art-of-living" />}
            />
            <Route path="/apparel" element={<FooterPages page="apparel" />} />
            <Route path="/watches" element={<FooterPages page="watches" />} />
            <Route
              path="/collectibles"
              element={<FooterPages page="collectibles" />}
            />
            <Route path="/store" element={<FooterPages page="store" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
