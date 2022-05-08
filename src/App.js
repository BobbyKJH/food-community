import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import MemberShip from "./pages/MemberShip";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<MemberShip />} />
      <Route path="/joinMembership" element={<Join />} />
    </Routes>
  );
}

export default App;
