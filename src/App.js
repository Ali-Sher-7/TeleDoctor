import "./App.css";
import "../src/assits/css/main.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import TermsAndCondition from "./assits/genericComponents/TermsAndCondition";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
