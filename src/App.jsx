import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import NavBar from './components/NavBar';
import SliceOfTheMarket from './pages/SliceOfTheMarket';
import PieShop from './pages/PieShop';

function App() {
  return (
    <BrowserRouter>
      {/* The Navbar sits outside Routes so it stays visible on all pages */}

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/SliceOfTheMarket" element={<SliceOfTheMarket />} />
        <Route path="/PieProShop" element={<PieShop />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;