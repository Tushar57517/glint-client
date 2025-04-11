import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Waiting from "./components/Waiting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Waiting />} />
      </Routes>
    </Router>
  );
}

export default App;
