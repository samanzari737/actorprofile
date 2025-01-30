import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { AssociatedAgencies } from "./component/accosiated";
import { Dashboard } from "./component/dashboard";
import { Setting } from "./component/settings";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accosiated" element={<AssociatedAgencies />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default App;
