import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MemberShip from "./pages/MemberShip";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<MemberShip />} />
    </Routes>
  );
}

export default App;
