import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
