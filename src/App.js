import "./App.css";

import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import Menu from "./pages/menu";
import Settings from "./pages/settings";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
