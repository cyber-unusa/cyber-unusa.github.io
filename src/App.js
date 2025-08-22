import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./Components/pages/About";
import Home from "./Components/pages/Home";
import Member from "./Components/pages/Member";
import Login from "./Components/pages/Login";
import { Services } from "./Components/pages/Services";
import CoomingSoon from "./Components/UI/CoomingSoon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/member" element={<Member />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cooming" element={<CoomingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
