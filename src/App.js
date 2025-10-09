import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./Components/pages/About";
import Home from "./Components/pages/Home";
import Member from "./Components/pages/Member";
import Login from "./Components/pages/Login";
import { CyberMart } from "./Components/pages/CyberMart";
import CoomingSoon from "./Components/UI/CoomingSoon";
import { ToastContainer } from "react-toastify";
import { AppContextProvider } from "./context/appContext.jsx";
import ResetPassword from "./Components/pages/ResetPassword.jsx";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/member" element={<Member />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/cyber-mart" element={<CyberMart />} />
          <Route path="/cooming" element={<CoomingSoon />} />
        </Routes>
      </AppContextProvider>
    </div>
  );
}

export default App;
