import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Certificates from './pages/Certificates';
import ScrollToTop from './components/ScrollToTop';

import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';

// Setup for AnimatePresence requires access to location
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const titles: { [key: string]: string } = {
      '/': 'Trang chủ | BBaoHG',
      '/about': 'Giới thiệu | BBaoHG',
      '/blog': 'Blog | BBaoHG',
      '/certificates': 'Chứng chỉ | BBaoHG',
    };

    // Set title for static routes
    if (titles[location.pathname]) {
      document.title = titles[location.pathname];
    }
    // Reset or specific handling for other routes could go here
    // For specific blog posts, the BlogPost component will handle it
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/blog" element={
          <PageTransition>
            <Blog />
          </PageTransition>
        } />
        <Route path="/blog/:id" element={
          <PageTransition>
            <BlogPost />
          </PageTransition>
        } />
        <Route path="/certificates" element={
          <PageTransition>
            <Certificates />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} BBaoHG Blog. Crafting knowledge for the network age.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
