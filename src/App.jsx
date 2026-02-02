import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import NavBar from './components/NavBar';
import SliceOfTheMarket from './pages/SliceOfTheMarket';
import PieShop from './pages/PieShop';
import EarningAnalysis from './pages/EarningAnalysis';
import LoginPage from './pages/Login';
import CreateDemo from './pages/CreateDemo';
import Referalls from './pages/Referalls';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      {/* The Navbar sits outside Routes so it stays visible on all pages */}

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/SliceOfTheMarket" element={<SliceOfTheMarket />} />
        <Route path="/PieProShop" element={<PieShop />} />
        <Route path="/EarningAnalysis" element={<EarningAnalysis />} />
        <Route path='/CreateDemo' element={<CreateDemo />} />

        <Route path="/referals" element={<Referalls />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;