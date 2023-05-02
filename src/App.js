import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Portfolio from "./Pages/Portfolio";
import ArcticFX from "./Pages/ArcticFX";
import NightSky from "./Pages/NightSky";

import "./scss/index.scss";
import "./scss/background.scss";
import "./scss/projects.scss";
import "./scss/info.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/ArcticFX" element={<ArcticFX />} />
          <Route path="/NightSky" element={<NightSky />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
