import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import DetailCar from "./pages/DetailCar";

function App() {
  return (
    <div className="bg-slate-100">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/detail-car" element={<DetailCar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
