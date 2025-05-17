import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import VideosPage from './pages/VideosPage';
import TrueCrimePage from './pages/TrueCrimePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/true-crime" element={<TrueCrimePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;