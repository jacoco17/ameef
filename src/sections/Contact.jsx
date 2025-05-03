import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/premium-contact.css';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Box component="section" id="contact" className="contact-section" ref={ref}>
      <Container>
        {/* Section Heading */}
        <Box className="contact-header">
          <Typography variant="h2" component="h2" className="contact-title">
            Get In Touch
          </Typography>
          <Typography className="contact-subtitle">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </Typography>
        </Box>
        
        {/* Contact Content */}
        <Box className="contact-container">
          {/* Contact Info */}
          <Box className="contact-info">
            <Typography className="contact-text">
              I'm currently available for freelance work and open to new opportunities. 
              If you have a project that you want to get started or need help with 
              something, feel free to get in touch with me.
            </Typography>
            
            <Box className="contact-methods">
              <Box className="contact-method">
                <Box className="contact-icon">
                  <EmailIcon />
                </Box>
                <Box className="contact-detail">
                  <Typography className="contact-label">Email</Typography>
                  <Typography className="contact-value">ameef@example.com</Typography>
                </Box>
              </Box>
              
              <Box className="contact-method">
                <Box className="contact-icon">
                  <PhoneIcon />
                </Box>
                <Box className="contact-detail">
                  <Typography className="contact-label">Phone</Typography>
                  <Typography className="contact-value">+63 912 345 6789</Typography>
                </Box>
              </Box>
              
              <Box className="contact-method">
                <Box className="contact-icon">
                  <LocationOnIcon />
                </Box>
                <Box className="contact-detail">
                  <Typography className="contact-label">Location</Typography>
                  <Typography className="contact-value">Manila, Philippines</Typography>
                </Box>
              </Box>
            </Box>
            
            <Box className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <GitHubIcon />
              </a>
            </Box>
          </Box>
          
          {/* Contact Form */}
          <Box className="contact-form-container">
            <Typography className="form-title">Send Message</Typography>
            
            <form className="contact-form">
              <Box className="form-field">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="form-input" 
                  required 
                />
              </Box>
              
              <Box className="form-field">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="form-input" 
                  required 
                />
              </Box>
              
              <Box className="form-field">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="form-input" 
                />
              </Box>
              
              <Box className="form-field">
                <textarea 
                  placeholder="Your Message" 
                  className="form-input" 
                  required
                ></textarea>
              </Box>
              
              <button type="submit" className="submit-button">
                <span>Send Message</span>
              </button>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 