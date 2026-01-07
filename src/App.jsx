import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      {/* The Navbar sits outside Routes so it stays visible on all pages */}

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;