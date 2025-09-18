import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./basicpage";
// import ProductsPage from "./basicpage";

const App: React.FC = () => {
  console.log("hi");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
