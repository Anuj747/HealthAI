import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FloatingChat from "./components/FloatingChat";
import Home from "./pages/Home";
import MBBSChat from "./pages/MBBSChat";
import BAMSChat from "./pages/BAMSChat";
import BDSChat from "./pages/BDSChat";
import Tracker from "./pages/Tracker";
import History from "./pages/History";
import About from "./pages/About"; // ✅ Add this import

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/mbbs" element={<MBBSChat />} />
          <Route path="/bams" element={<BAMSChat />} />
          <Route path="/bds" element={<BDSChat />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} /> {/* ✅ Add this route */}
        </Routes>
      </div>
      <FloatingChat />
    </>
  );
}

export default App;
