import React from 'react';
import { Box, Typography, Container, Chip } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../assets/premium-projects.css';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Dashboard',
    desc: 'A comprehensive admin dashboard for e-commerce platforms with sales analytics and inventory management.',
    image: 'project-img/sidework1.png',

    tech: ['React', 'Redux', 'Material UI', 'Chart.js'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 2,
    name: 'Travel Companion App',
    desc: 'Mobile-friendly travel app that helps users discover attractions, restaurants, and hotels based on geolocation.',
    image: 'project-img/sidework2.png',

    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 3,
    name: 'Portfolio Website',
    desc: 'A modern, responsive portfolio website with dark mode and smooth animations built with React.',
    image: 'project-img/work1.png',

    tech: ['React', 'CSS3', 'Framer Motion'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 4,
    name: 'Task Management System',
    desc: 'Collaborative task management application with team features, notifications, and progress tracking.',
    image: 'project-img/work2.jpg',
  
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 5,
    name: 'Fitness Tracker',
    desc: 'A fitness tracking application that allows users to set goals, track workouts, and monitor progress over time.',
    image: 'project-img/work3.png',

    tech: ['React Native', 'Redux', 'Firebase'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 6,
    name: 'Weather App',
    desc: 'Weather application with 7-day forecast, real-time updates, and location-based weather information.',
    image: 'project-img/work4.png',

    tech: ['JavaScript', 'OpenWeather API', 'CSS3'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  }
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box component="section" id="projects" className="projects-section" ref={ref}>
      <Container maxWidth="xl">
        {/* Section Heading */}
        <Box className="projects-header">
          <Typography variant="h2" component="h2" className="projects-title">
            Projects
          </Typography>
          <Typography className="projects-subtitle">
            Here are some of my recent projects. Each one was built with a focus on solving real-world problems with clean, efficient code.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Box 
              key={project.id}
              className={`project-card-small ${inView ? 'fade-in' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-overlay"></div>
              </div>
              <Typography className="project-title-small">
                {project.name}
              </Typography>
              <Typography className="project-description-small">
                {project.desc}
              </Typography>
              <Box className="project-tech-small">
                {project.tech.map((item) => (
                  <Chip 
                    key={item} 
                    label={item} 
                    className="project-tech-chip"
                    size="small"
                  />
                ))}
              </Box>
              <Box className="project-links-small">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-small">
                  <GitHubIcon fontSize="small" /> GitHub
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-small">
                  <OpenInNewIcon fontSize="small" /> Live Demo
                </a>
              </Box>
            </Box>
          ))}
        </div>
      </Container>
    </Box>
  );
} 