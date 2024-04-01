import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import InternationalTransfer from "./pages/InternationalTransfer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/international-transfer" element={<InternationalTransfer />} />
      </Routes>
    </Router>
  );
}

export default App;
