import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import '../assets/premium-hero.css';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const imageRef = useRef(null);
  
  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (window.innerWidth / 2 - clientX) / 25;
      const yPos = (window.innerHeight / 2 - clientY) / 25;
      
      imageRef.current.style.transform = `translate(${xPos}px, ${yPos}px) scale(1.02)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <Box component="section" id="hero" className="hero-section" ref={ref}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Left Column - Text Content */}
          <Grid item xs={12} md={6}>
            <Box className={`hero-content ${inView ? 'animated' : ''}`}>
              <Box className="hero-subtitle">
                <Box className="hero-line"></Box>
                <Typography className="hero-overline">
                  Frontend Developer
                </Typography>
              </Box>
              
              <Typography variant="h1" className="hero-title">
                Hello, I'm Ameef
              </Typography>
              
              <Typography variant="h2" className="hero-title-secondary">
                Building Digital Experiences
              </Typography>
              
              <Typography className="hero-description">
                I'm a passionate frontend developer specializing in creating 
                exceptional digital experiences with modern web technologies.
                I focus on building intuitive, responsive, and accessible websites.
              </Typography>
              
              <Box className="hero-buttons">
                <Button 
                  variant="contained" 
                  href="#contact"
                  className="hero-button primary"
                >
                  Contact Me
                </Button>
                <Button 
                  variant="outlined" 
                  href="#projects"
                  className="hero-button secondary"
                >
                  View Projects
                </Button>
              </Box>
            </Box>
          </Grid>
          
          {/* Right Column - Image */}
          <Grid item xs={12} md={6}>
            <Box 
              className={`hero-image-container ${inView ? 'animated' : ''}`}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Box 
                className="hero-image-frame"
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(50, 69, 99, 0.2)',
                  overflow: 'hidden',
                  width: '340px',
                  height: '420px',
                  background: 'linear-gradient(135deg, #324563, #00cfff)',
                  padding: '8px'
                }}
              >
                <Box 
                  className="hero-image-wrapper" 
                  ref={imageRef}
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#fff'
                  }}
                >
                  <Box 
                    component="img"
                    src="/profile.png"
                    alt="Ameef - Frontend Developer"
                    className="hero-image"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block'
                    }}
                    onError={(e) => {
                      console.log('Image failed to load');
                      e.target.onerror = null;
                      e.target.src = '/src/assets/profile.png';
                    }}
                  />
                </Box>
                <Box 
                  className="hero-decorations"
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(0, 207, 255, 0.2)',
                    filter: 'blur(30px)'
                  }}
                />
                <Box 
                  className="hero-decorations-2"
                  sx={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'rgba(50, 69, 99, 0.15)',
                    filter: 'blur(40px)'
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 