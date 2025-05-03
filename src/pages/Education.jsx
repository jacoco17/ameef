import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Stack } from '@mui/material';

const educationData = [
  {
    school: 'Western Mindanao State University',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7e/WMSU_Logo.png',
    degree: 'BS in Information Technology • 2021 – Present',
    details: 'Mobile and Web hybrid development and database management',
  },
  {
    school: 'Filipino Turkish Tolerance School',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/2b/FTTS_Logo.png',
    degree: 'Junior & Senior High School – HUMSS Strand • 2015 – 2021',
    details: '95% with High Honor | Athletic Award',
  },
  {
    school: 'Bongao Adventist Elementary School',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Adventist_Logo.png',
    degree: 'Elementary • 2012 – 2015',
    details: 'Silver Medalist | Excellence Award, Best in Math',
  },
  {
    school: 'Notre Dame of Bongao',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Notre_Dame_Logo.png',
    degree: 'Kindergarten & Elementary • 2008 – 2012',
    details: 'Top 3 Student in class',
  },
];

export default function Education() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h3" fontWeight={700} color="white" align="center" gutterBottom>
        Education
      </Typography>
      <Stack spacing={4} sx={{ mt: 4 }}>
        {educationData.map((edu) => (
          <Card
            key={edu.school}
            sx={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.02)',
              boxShadow: 'none',
              borderRadius: 3,
              px: 3,
              py: 2,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <Avatar src={edu.logo} alt={edu.school} sx={{ width: 56, height: 56, mr: 3, bgcolor: 'white' }} />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight={600} color="#90caf9">
                {edu.school}
              </Typography>
              <Typography variant="subtitle2" color="#b0b3c6">
                {edu.degree}
              </Typography>
              <Typography variant="body2" color="#e0e0e0">
                {edu.details}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
} 