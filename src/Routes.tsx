import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Employees from "./pages/Employees/Employees";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
};