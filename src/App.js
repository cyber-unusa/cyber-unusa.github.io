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
import Dashboard from "./Components/pages/Dashboard.jsx";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/member" element={<Member />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/cyber-mart" element={<CyberMart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cooming" element={<CoomingSoon />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
