import React from 'react';
import { Box, Typography, Container, Chip } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../assets/premium-projects.css';

// Placeholder image for projects
const placeholderImg = 'https://via.placeholder.com/600x400/f9fafc/32456399?text=Project';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Dashboard',
    desc: 'A comprehensive admin dashboard for e-commerce platforms with sales analytics and inventory management.',
    image: placeholderImg,
    tag: 'React',
    tech: ['React', 'Redux', 'Material UI', 'Chart.js'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 2,
    name: 'Travel Companion App',
    desc: 'Mobile-friendly travel app that helps users discover attractions, restaurants, and hotels based on geolocation.',
    image: placeholderImg,
    tag: 'Full Stack',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 3,
    name: 'Portfolio Website',
    desc: 'A modern, responsive portfolio website with dark mode and smooth animations built with React.',
    image: placeholderImg,
    tag: 'UI/UX',
    tech: ['React', 'CSS3', 'Framer Motion'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 4,
    name: 'Task Management System',
    desc: 'Collaborative task management application with team features, notifications, and progress tracking.',
    image: placeholderImg,
    tag: 'Web App',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 5,
    name: 'Fitness Tracker',
    desc: 'A fitness tracking application that allows users to set goals, track workouts, and monitor progress over time.',
    image: placeholderImg,
    tag: 'Mobile App',
    tech: ['React Native', 'Redux', 'Firebase'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 6,
    name: 'Weather App',
    desc: 'Weather application with 7-day forecast, real-time updates, and location-based weather information.',
    image: placeholderImg,
    tag: 'API',
    tech: ['JavaScript', 'OpenWeather API', 'CSS3'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 7,
    name: 'Chat Application',
    desc: 'Real-time chat application with private messaging, group chats, and media sharing capabilities.',
    image: placeholderImg,
    tag: 'WebSocket',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/example',
  },
  {
    id: 8,
    name: 'Recipe Finder',
    desc: 'Recipe search application that helps users discover dishes based on available ingredients with filtering options.',
    image: placeholderImg,
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