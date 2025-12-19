
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} DevNetwork Blog. Được xây dựng với đam mê và Code.
            </p>
            <div className="flex justify-center gap-6 text-slate-400">
              <a href="#" className="hover:text-brand transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="hover:text-brand transition-colors text-sm">Terms of Service</a>
              <a href="#" className="hover:text-brand transition-colors text-sm">Github Source</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
