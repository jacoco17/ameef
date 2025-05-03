import React, { useEffect } from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Blog from './sections/Blog';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './premium-ui.css';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="premium-app">
      <CssBaseline />
      <Header />
      <Box className="premium-content">
        <div className="premium-gradient-bg"></div>
        <div className="premium-pattern-overlay"></div>
        <Container maxWidth="lg" className="premium-container">
          <Hero />
          <div className="premium-section-divider"></div>
          <About />
          <div className="premium-section-divider"></div>
          <Blog />
          <div className="premium-section-divider"></div>
          <Education />
          <div className="premium-section-divider"></div>
          <Skills />
          <div className="premium-section-divider"></div>
          <Projects />
          <div className="premium-section-divider"></div>
          <Contact />
        </Container>
      </Box>
    </div>
  );
}

export default App;
