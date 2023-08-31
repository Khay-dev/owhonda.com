import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import WorkA from "./Services/WorkA";
import WorkB from "./Services/WorkB";
import WorkC from "./Services/WorkC";
import WorkD from "./Services/WorkD";
import WorkE from "./Services/WorkE";
import WorkF from "./Services/WorkF";
import WorkG from "./Services/WorkG";

import ScrollToTop from "./components/Scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Work" element={<Work />} />
                <Route path="/Work1" element={<WorkA />} />
                <Route path="/Work2" element={<WorkB />} />{" "}
                <Route path="/Work3" element={<WorkC />} />{" "}
                <Route path="/Work4" element={<WorkD />} />{" "}
                <Route path="/Work5" element={<WorkE />} />{" "}
                <Route path="/Work6" element={<WorkF />} />{" "}
                <Route path="/Work7" element={<WorkG />} />
            </Routes>
        </Router>
    );
}

export default App;
