import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import '../assets/premium-skills.css';

// Skill data
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 85 },
      { name: "Material UI", level: 75 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "Firebase", level: 75 }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 80 },
      { name: "Figma", level: 65 },
      { name: "VS Code", level: 90 },
      { name: "Webpack", level: 60 }
    ]
  }
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Box component="section" id="skills" className="skills-section" ref={ref}>
      <Container>
        {/* Section Heading */}
        <Box className="skills-header">
          <Typography variant="h2" component="h2" className="skills-title">
            Skills
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Grid container spacing={4} className="skills-container">
          {skills.map((category, index) => (
            <Grid 
              item 
              xs={12} 
              md={4} 
              key={category.category}
              className={`skill-category ${inView ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Box className="skill-category-header">
                <Typography className="skill-category-title">
                  {category.category}
                </Typography>
              </Box>
              
              <Box className="skill-list">
                {category.items.map((skill) => (
                  <Box className="skill-item" key={skill.name}>
                    <Box className="skill-info">
                      <Typography className="skill-name">{skill.name}</Typography>
                      <Typography className="skill-percentage">{skill.level}%</Typography>
                    </Box>
                    <Box className="skill-bar-bg">
                      <Box 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 