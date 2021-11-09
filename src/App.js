import "./App.css";
import Dashboard from "./pages/dashboard";
import Loader from "./pages/dashboard/Loader";
import Orders from "./pages/orders";
import Menu from "./pages/menu";
import Settings from "./pages/settings";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./reducers";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);
  return null;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
