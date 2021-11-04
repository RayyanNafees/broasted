import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import Menu from "./pages/menu";
import Settings from "./pages/settings";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, lazy } from "react";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);
  return null;
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
