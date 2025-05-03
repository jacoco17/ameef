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
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tag: 'React',
    tech: ['React', 'Redux', 'Material UI', 'Chart.js'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 2,
    name: 'Travel Companion App',
    desc: 'Mobile-friendly travel app that helps users discover attractions, restaurants, and hotels based on geolocation.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80',
    tag: 'Full Stack',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 3,
    name: 'Portfolio Website',
    desc: 'A modern, responsive portfolio website with dark mode and smooth animations built with React.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
    tag: 'UI/UX',
    tech: ['React', 'CSS3', 'Framer Motion'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 4,
    name: 'Task Management System',
    desc: 'Collaborative task management application with team features, notifications, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    tag: 'Web App',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 5,
    name: 'Fitness Tracker',
    desc: 'A fitness tracking application that allows users to set goals, track workouts, and monitor progress over time.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tag: 'Mobile App',
    tech: ['React Native', 'Redux', 'Firebase'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 6,
    name: 'Weather App',
    desc: 'Weather application with 7-day forecast, real-time updates, and location-based weather information.',
    image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tag: 'API',
    tech: ['JavaScript', 'OpenWeather API', 'CSS3'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 7,
    name: 'Chat Application',
    desc: 'Real-time chat application with private messaging, group chats, and media sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tag: 'WebSocket',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 8,
    name: 'Recipe Finder',
    desc: 'Recipe search application that helps users discover dishes based on available ingredients with filtering options.',
    image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80',
    tag: 'Web App',
    tech: ['React', 'Redux', 'Spoonacular API'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
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
              <Box className="project-tag-small">{project.tag}</Box>
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