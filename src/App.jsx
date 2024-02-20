import HomePage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nurses from "./Features/Nurses/Nurses";
import NurseProfile from "./Features/Nurses/NurseProfile";
import { NurseProvider } from "./Context/NurseContext";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { UserProvider } from "./Context/UserContext";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <NurseProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nurse" element={<Nurses />} />
            <Route path="/nurse/:nurseid" element={<NurseProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
          </Routes>
        </UserProvider>
      </NurseProvider>
    </BrowserRouter>
  );
}

export default App;
