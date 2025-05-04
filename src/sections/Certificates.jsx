import React from 'react';
import { Box, Typography, Container, Chip } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import VerifiedIcon from '@mui/icons-material/Verified';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import '../assets/premium-certificates.css';

const certificates = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'December 2023',
    description: 'Comprehensive course covering modern full-stack development with React, Node.js, Express, and MongoDB.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://example.com/certificate/123',
  },
  {
    id: 2,
    title: 'Advanced React & Redux',
    issuer: 'Coursera',
    date: 'October 2023',
    description: 'Deep dive into advanced React patterns, Redux state management, and modern JavaScript features.',
    skills: ['React', 'Redux', 'JavaScript', 'Hooks'],
    link: 'https://example.com/certificate/456',
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    issuer: 'Google',
    date: 'August 2023',
    description: 'Comprehensive course on user interface design principles, user experience, and interaction design.',
    skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
    link: 'https://example.com/certificate/789',
  },
  {
    id: 4,
    title: 'DevOps & CI/CD Pipeline',
    issuer: 'AWS',
    date: 'June 2023',
    description: 'Industry-standard certification for implementing DevOps practices and continuous integration/deployment.',
    skills: ['Docker', 'Jenkins', 'AWS', 'Git'],
    link: 'https://example.com/certificate/101',
  },
  {
    id: 5,
    title: 'Data Structures & Algorithms',
    issuer: 'Stanford',
    date: 'March 2023',
    description: 'In-depth course on computer science fundamentals, focusing on efficient algorithm design and implementation.',
    skills: ['DSA', 'Problem Solving', 'Python', 'Big O'],
    link: 'https://example.com/certificate/112',
  },
  {
    id: 6,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'January 2023',
    description: 'Comprehensive certification covering HTML5, CSS3, and modern responsive design techniques.',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
    link: 'https://example.com/certificate/131',
  }
];

export default function Certificates() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box component="section" id="certificates" className="certificates-section" ref={ref}>
      <Container maxWidth="xl">
        {/* Section Heading */}
        <Box className="certificates-header">
          <Typography variant="h2" component="h2" className="certificates-title">
            Certificates
          </Typography>
          <Typography className="certificates-subtitle">
            Here are some of my professional certifications and course completions. Each represents a milestone in my continuous learning journey.
          </Typography>
        </Box>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <Box 
              key={certificate.id}
              className={`certificate-card ${inView ? 'fade-in' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Box className="certificate-header">
                <Box className="certificate-issuer-badge">
                  <SchoolIcon fontSize="small" />
                  <span>{certificate.issuer}</span>
                </Box>
              </Box>
              <Box className="certificate-content">
                <Typography className="certificate-title">
                  {certificate.title}
                </Typography>
                <Typography className="certificate-date">
                  <CalendarTodayIcon fontSize="small" /> {certificate.date}
                </Typography>
                <Typography className="certificate-description">
                  {certificate.description}
                </Typography>
                <Box className="certificate-skills">
                  {certificate.skills.map((skill) => (
                    <Chip 
                      key={skill} 
                      label={skill} 
                      className="certificate-skill-chip"
                      size="small"
                    />
                  ))}
                </Box>
                <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                  <VerifiedIcon fontSize="small" /> View Certificate <OpenInNewIcon className="certificate-link-icon" fontSize="small" />
                </a>
              </Box>
            </Box>
          ))}
        </div>
      </Container>
    </Box>
  );
} 