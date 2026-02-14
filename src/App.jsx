import { useState } from "react";
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

function App() {
  const [footerPage, setFooterPage] = useState(null);

  const handleFooterClick = (page) => {
    setFooterPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToMain = () => {
    setFooterPage(null);
  };

  if (footerPage) {
    return (
      <>
        <div className="main">
          <Navbar />
          <div style={{ paddingTop: "80px" }}>
            <button
              onClick={handleBackToMain}
              style={{
                position: "fixed",
                top: "100px",
                left: "20px",
                zIndex: 1000,
                padding: "12px 24px",
                background: "#ffffff",
                color: "#000000",
                border: "none",
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              ← Back
            </button>
            <FooterPages page={footerPage} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="main">
        <Navbar />
        <Startpage />
        <LatestNews />
        <LAmainsonIterator />
        <IteratorSports />
        {/* <Bugattisur/> */}
        {/* <Animation/> */}
        <IteratorBugattiLive />
        <Footer onFooterClick={handleFooterClick} />
      </div>
    </>
  );
}

export default App;
