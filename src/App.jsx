import { Routes, Route } from "react-router";
import AllProduct from "./pages/AllProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllProduct />} />
    </Routes>
  );
}

export default App;
