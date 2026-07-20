import "./App.css";
import { Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage/HomePage";
import AnalisePage from "./pages/AnalisePage/AnalisePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analise" element={<AnalisePage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </>
  );
}

export default App;