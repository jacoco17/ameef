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
import { useInView } from 'react-intersection-observer';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../assets/premium-blog.css';

const blogData = [
  {
    day: 1,
    title: "Starting My Journey",
    summary: "My first day exploring new frontend technologies and setting up the development environment.",
    coverImage: "/blog/day1-cover.jpg",
    content: "Today marks the beginning of my journey in frontend development. I spent the day setting up my development environment and exploring the latest technologies in the frontend ecosystem. React continues to be the backbone of my projects, but I'm excited to integrate new tools and libraries that can enhance user experiences.",
    images: [
      { src: "/blog/day1-1.jpg", alt: "Setting up workspace", caption: "My organized development workspace" },
      { src: "/blog/day1-2.jpg", alt: "Code editor", caption: "Writing my first components" },
      { src: "/blog/day1-3.jpg", alt: "Project planning", caption: "Planning the architecture of the project" }
    ]
  },
  {
    day: 2,
    title: "Component Architecture",
    summary: "Designing a scalable component architecture and implementing best practices.",
    coverImage: "/blog/day2-cover.jpg",
    content: "Today I focused on designing a scalable component architecture for my latest project. I implemented best practices such as atomic design principles and created a component library that can be reused across multiple projects. This approach not only improves efficiency but also maintains consistency throughout the application.",
    images: [
      { src: "/blog/day2-1.jpg", alt: "Component diagram", caption: "Component hierarchy diagram" },
      { src: "/blog/day2-2.jpg", alt: "Design system", caption: "Building the design system" },
      { src: "/blog/day2-3.jpg", alt: "Testing components", caption: "Testing components in Storybook" }
    ]
  },
  {
    day: 3,
    title: "Responsive Design Challenges",
    summary: "Tackling responsive design challenges and ensuring cross-device compatibility.",
    coverImage: "/blog/day3-cover.jpg",
    content: "Responsive design was the main focus today. I encountered several challenges when trying to make the application look perfect across all device sizes. After experimenting with different approaches, I settled on using a combination of CSS Grid and Flexbox, along with carefully crafted media queries to ensure the best experience on all devices.",
    images: [
      { src: "/blog/day3-1.jpg", alt: "Mobile design", caption: "Mobile design iterations" },
      { src: "/blog/day3-2.jpg", alt: "Tablet layout", caption: "Optimizing for tablet view" },
      { src: "/blog/day3-3.jpg", alt: "Responsive testing", caption: "Testing on multiple devices" }
    ]
  },
  {
    day: 4,
    title: "Animation and Micro-interactions",
    summary: "Adding subtle animations and micro-interactions to enhance user experience.",
    coverImage: "/blog/day4-cover.jpg",
    content: "Today I delved into the world of animations and micro-interactions. I believe that subtle animations can greatly enhance user experience when used appropriately. I implemented various effects using CSS transitions and the Framer Motion library, focusing on making the interactions feel natural and purposeful rather than distracting.",
    images: [
      { src: "/blog/day4-1.jpg", alt: "Animation storyboard", caption: "Planning the animation sequences" },
      { src: "/blog/day4-2.jpg", alt: "Interaction design", caption: "Designing micro-interactions" },
      { src: "/blog/day4-3.jpg", alt: "Animation testing", caption: "Testing animation performance" }
    ]
  },
  {
    day: 5,
    title: "Performance Optimization",
    summary: "Optimizing application performance for faster load times and smoother interactions.",
    coverImage: "/blog/day5-cover.jpg",
    content: "Performance optimization was on the agenda today. I ran various audits using Lighthouse and identified several areas for improvement. By implementing code splitting, lazy loading, and optimizing images, I managed to significantly reduce the initial load time. I also addressed some rendering performance issues by memoizing components and optimizing state updates.",
    images: [
      { src: "/blog/day5-1.jpg", alt: "Performance metrics", caption: "Analyzing performance metrics" },
      { src: "/blog/day5-2.jpg", alt: "Code optimization", caption: "Optimizing render performance" },
      { src: "/blog/day5-3.jpg", alt: "Load time improvement", caption: "Before and after load time comparison" }
    ]
  },
  {
    day: 6,
    title: "Accessibility Improvements",
    summary: "Making the application more accessible and inclusive for all users.",
    coverImage: "/blog/day6-cover.jpg",
    content: "Accessibility was the focus of day 6. I conducted a thorough audit of the application using various tools and manual testing. I implemented numerous improvements including proper ARIA attributes, keyboard navigation, sufficient color contrast, and screen reader compatibility. Ensuring the application is usable by everyone regardless of ability is not just good practice but essential for creating truly inclusive web experiences.",
    images: [
      { src: "/blog/day6-1.jpg", alt: "Accessibility testing", caption: "Testing with screen readers" },
      { src: "/blog/day6-2.jpg", alt: "Color contrast", caption: "Ensuring proper color contrast" },
      { src: "/blog/day6-3.jpg", alt: "Keyboard navigation", caption: "Implementing keyboard navigation" }
    ]
  },
  {
    day: 7,
    title: "Final Touches and Deployment",
    summary: "Adding the finishing touches and deploying the application to production.",
    coverImage: "/blog/day7-cover.jpg",
    content: "The final day was all about polishing the application and preparing it for deployment. I addressed the remaining bugs, added some final UI refinements, and conducted thorough testing across different browsers and devices. The deployment process involved setting up CI/CD pipelines to ensure smooth updates in the future. It's incredibly satisfying to see the project come to life and be available to users worldwide.",
    images: [
      { src: "/blog/day7-1.jpg", alt: "Final testing", caption: "Final cross-browser testing" },
      { src: "/blog/day7-2.jpg", alt: "Deployment setup", caption: "Setting up the deployment pipeline" },
      { src: "/blog/day7-3.jpg", alt: "Launch celebration", caption: "Celebrating the successful launch" }
    ]
  }
];

// Fallback image when blog images aren't available
const fallbackImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
];

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
    if (src.startsWith('http')) return src;
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
            My 7-day development journey documenting the process of building web applications
          </Typography>
        </Box>

        {/* Blog Grid - Updated to match projects layout */}
        <div className="blog-grid">
          {blogData.map((blog, index) => (
            <Card 
              key={blog.day}
              className={`blog-card ${inView ? 'fade-in' : ''}`}
              onClick={() => handleOpenModal(blog)}
              elevation={0}
              style={{ transitionDelay: `${index * 0.1}s` }}
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
                  className="blog-read-more" 
                  endIcon={<ChevronRightIcon />}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
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