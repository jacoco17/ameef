import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Modal,
  IconButton,
  Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../assets/premium-blog.css';
import { blogData, fallbackImages } from '../data/blogData';

const Blog = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const getImage = (src, index, day) => {
    // Try to use the provided image path, fall back to placeholder if it fails
    if (src && src.startsWith('http')) return src;
    // Use fallback image based on day index if image doesn't load
    return fallbackImages[(day - 1) % fallbackImages.length];
  };

  return (
    <Box component="section" id="blog" className="blog-section" ref={ref}>
      <Container maxWidth="xl">
        <Box className="blog-header">
          <Typography variant="h2" className="blog-title">
            Blog
          </Typography>
          <Typography className="blog-subtitle">
            My development journey documenting the process of building web applications
          </Typography>
        </Box>

        {/* Blog Grid - Updated to match projects layout */}
        <div className={`blog-grid ${inView ? 'animated' : ''}`}>
          {blogData.map((blog, index) => (
            <div 
              key={blog.day}
              className={`blog-item delay-${index * 200}`}
            >
              <Card 
                className="blog-card"
                elevation={0}
              >
                <Box className="blog-card-media-container">
                  <CardMedia
                    component="img"
                    className="blog-card-media"
                    image={getImage(blog.coverImage, 0, blog.day)}
                    alt={blog.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImages[(blog.day - 1) % fallbackImages.length];
                    }}
                  />
                  <Box className="blog-day-badge">Day {blog.day}</Box>
                </Box>
                <CardContent className="blog-card-content">
                  <Typography variant="h6" className="blog-card-title">
                    {blog.title}
                  </Typography>
                  <Typography className="blog-card-summary">
                    {blog.summary}
                  </Typography>
                  <Button 
                    component={Link}
                    to={`/blog/${blog.day}`}
                    className="blog-read-more" 
                    endIcon={<ChevronRightIcon />}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Blog Detail Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        className="blog-modal"
      >
        <Box className="blog-modal-content">
          {selectedBlog && (
            <>
              <Box className="blog-modal-header">
                <Box>
                  <Typography variant="overline" className="blog-modal-day">
                    Day {selectedBlog.day}
                  </Typography>
                  <Typography variant="h4" className="blog-modal-title">
                    {selectedBlog.title}
                  </Typography>
                </Box>
                <IconButton 
                  onClick={handleCloseModal}
                  className="blog-modal-close"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              
              <Divider className="blog-modal-divider" />
              
              <Box className="blog-modal-body">
                <Typography className="blog-modal-content-text">
                  {selectedBlog.content}
                </Typography>
                
                <Box className="blog-modal-images">
                  <Typography variant="h6" className="blog-images-title">
                    Photo Gallery
                  </Typography>
                  <Grid container spacing={3}>
                    {selectedBlog.images.map((image, index) => (
                      <Grid item xs={12} sm={4} key={index}>
                        <Box className="blog-image-container">
                          <img 
                            src={getImage(image.src, index, selectedBlog.day)}
                            alt={image.alt}
                            className="blog-detail-image"
                            onError={(e) => {
                              e.target.onerror = null;
                              // Use different fallback images based on index
                              const fallbackIndex = (selectedBlog.day + index) % fallbackImages.length;
                              e.target.src = fallbackImages[fallbackIndex];
                            }}
                          />
                          <Typography className="blog-image-caption">
                            {image.caption}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Blog; 