import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecentlyAdded from './pages/RecentlyAdded';
import TopRated from './pages/TopRated';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recent" element={<RecentlyAdded />} />
          <Route path="/top-rated" element={<TopRated />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;