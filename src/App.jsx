import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '/context/ThemeContext';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './index.css';

// This component wraps the entire application with routing and theme context.
const App = () => {
  return (
    <Router>
      {/* Theme Context Provider (created before on index.css) */}
      <ThemeProvider>
        {/* To set the Navbar on all pages */}
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* To set the Footer on all pages */}
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;