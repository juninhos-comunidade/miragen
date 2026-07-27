import "./App.css";
import { Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import AnalisePage from "./pages/AnalisePage/AnalisePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {


  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/analise" element={<AnalisePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;