import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
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
            </Routes>
        </Router>
    );
}

export default App;
