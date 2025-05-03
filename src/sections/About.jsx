import React, { useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, Chip, Button, Divider } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SpeedIcon from '@mui/icons-material/Speed';
import { useInView } from 'react-intersection-observer';
import '../assets/premium-about.css';

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Skills array for the chip display
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Material UI',
    'Tailwind CSS',
    'Git & GitHub',
    'Responsive Design',
    'REST APIs',
  ];

  const qualities = [
    {
      icon: <CodeIcon />,
      title: "Clean Code",
      description: "Writing maintainable, well-structured code that follows best practices and industry standards."
    },
    {
      icon: <DesignServicesIcon />,
      title: "UI/UX Focus",
      description: "Creating intuitive interfaces with attention to detail and exceptional user experiences."
    },
    {
      icon: <SpeedIcon />,
      title: "Performance",
      description: "Optimizing for speed and efficiency to deliver fast-loading and responsive applications."
    }
  ];

  return (
    <Box component="section" id="about" className="section-about" ref={sectionRef}>
      <Container maxWidth="lg">
        <Box className="about-section-header">
          <Box className="about-section-tag">
            <Box className="about-line"></Box>
            <Typography 
              variant="overline"
              className="about-tag-text"
            >
              ABOUT ME
            </Typography>
          </Box>
          
          <Typography variant="h2" className="about-main-heading">
            Crafting Digital Experiences
          </Typography>
          
          <Typography variant="subtitle1" className="about-subtitle">
            Developer with a passion for creating premium web applications
          </Typography>
        </Box>

        <Grid container spacing={4} className="about-main-content">
          {/* Full width content column */}
          <Grid item xs={12}>
            <Box className={`about-content ${inView ? 'fade-in' : ''}`}>
              <Typography className="about-bio" variant="body1">
                Hello! I'm <span className="highlight">Ameef</span>, a passionate frontend developer with a keen eye for design 
                and a strong focus on creating intuitive, responsive, and accessible websites. 
                With several years of experience in web development, I specialize in 
                building exceptional digital experiences using modern technologies.
              </Typography>

              <Typography className="about-bio" variant="body1">
                My approach combines technical expertise with creative problem-solving
                to deliver solutions that not only meet but exceed client expectations.
                I'm constantly learning and adapting to the ever-evolving landscape of
                web development to ensure that I can provide cutting-edge solutions.
              </Typography>
              
              <Box className="about-qualities-container">
                {qualities.map((quality, index) => (
                  <Box key={index} className="about-quality-card">
                    <Box className="quality-icon">{quality.icon}</Box>
                    <Typography variant="h6" className="quality-title">{quality.title}</Typography>
                    <Typography variant="body2" className="quality-description">{quality.description}</Typography>
                  </Box>
                ))}
              </Box>

              <Divider className="about-divider" />

              <Typography className="skills-title" variant="h6">
                Technologies I work with:
              </Typography>

              <Box className="skills-container">
                {skills.map((skill, index) => (
                  <Box key={index} className="skill-chip">
                    {skill}
                  </Box>
                ))}
              </Box>

              <Button 
                component="a"
                className="resume-button"
                endIcon={<ArrowOutwardIcon />}
                href="/resume.pdf"
                target="_blank"
              >
                View Resume
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 