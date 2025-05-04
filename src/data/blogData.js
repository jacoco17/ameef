// Blog Data with correct image paths that actually exist in the filesystem
export const blogData = [
  {
    day: 1,
    title: "Starting My Journey",
    summary: "My first day exploring new frontend technologies and setting up the development environment.",
    coverImage: "/Main-img/1.jpg",
    content: "Today marks the beginning of my journey in frontend development. I spent the day setting up my development environment and exploring the latest technologies in the frontend ecosystem. React continues to be the backbone of my projects, but I'm excited to integrate new tools and libraries that can enhance user experiences.",
    images: [
      { src: "/Day 1/1.jpg", alt: "Graduation photo", caption: "Celebrating my graduation in Computer Science" },
      { src: "/9c4519c1-0888-471a-a3bc-6a5755558d26.jpg", alt: "Setting up workspace", caption: "My organized development workspace" },
      { src: "/Day 1/2.jpg", alt: "Code editor", caption: "Writing my first components" },
      { src: "/Day 1/3.jpg", alt: "Project planning", caption: "Planning the architecture of the project" },
      { src: "/Day 1/4.jpg", alt: "React documentation", caption: "Studying the latest React features" },
      { src: "/Day 1/5.jpg", alt: "Dev tools", caption: "Setting up developer tools and extensions" },
    ]
  },
  {
    day: 2,
    title: "Component Architecture",
    summary: "Designing a scalable component architecture and implementing best practices.",
    coverImage: "/Main-img/2.jpg",
    content: "Today I focused on designing a scalable component architecture for my latest project. I implemented best practices such as atomic design principles and created a component library that can be reused across multiple projects. This approach not only improves efficiency but also maintains consistency throughout the application.",
    images: [
      { src: "/Day 2/1.jpg", alt: "SBECC Team Photo", caption: "Western Mindanao State University team gathering at SBECC" },
      { src: "/Day 2/2.jpg", alt: "Vessel Traffic Management", caption: "Presentation on Vessel Traffic Management System" },
      { src: "/Day 2/3.jpg", alt: "VTMS Display", caption: "Vessel Traffic Management System display monitor" },
      { src: "/Day 2/4.jpg", alt: "Subic Bay View", caption: "Panoramic view of Subic Bay and the port" },
      { src: "/Day 2/5.jpg", alt: "Convention Hall", caption: "Historical exhibit at Convention Hall C" },
      { src: "/Day 2/6.jpg", alt: "SBECC Exterior", caption: "Outside view of the exhibition center facilities" },
      { src: "/Day 2/7.jpg", alt: "Philippine Flag Monument", caption: "Philippine flag monument at Subic Bay Freeport Zone" }
    ]
  },
  {
    day: 3,
    title: "Responsive Design Challenges",
    summary: "Tackling responsive design challenges and ensuring cross-device compatibility.",
    coverImage: "/Main-img/3.jpg",
    content: "Responsive design was the main focus today. I encountered several challenges when trying to make the application look perfect across all device sizes. After experimenting with different approaches, I settled on using a combination of CSS Grid and Flexbox, along with carefully crafted media queries to ensure the best experience on all devices.",
    images: [
      { src: "/Day 3/1.jpg", alt: "Mobile design", caption: "Mobile design iterations" },
      { src: "/Day 3/2.jpg", alt: "Tablet layout", caption: "Optimizing for tablet view" },
      { src: "/Day 3/3.jpg", alt: "Responsive testing", caption: "Testing on multiple devices" },
      { src: "/Day 3/4.jpg", alt: "Desktop layout", caption: "Fine-tuning the desktop experience" },
      { src: "/Day 3/5.jpg", alt: "CSS Grid implementation", caption: "Implementing CSS Grid layouts" },
      { src: "/Day 3/6.jpg", alt: "Media queries", caption: "Setting up breakpoints with media queries" }
    ]
  },
  {
    day: 4,
    title: "Animation and Micro-interactions",
    summary: "Adding subtle animations and micro-interactions to enhance user experience.",
    coverImage: "/Main-img/4.jpg",
    content: "Today I delved into the world of animations and micro-interactions. I believe that subtle animations can greatly enhance user experience when used appropriately. I implemented various effects using CSS transitions and the Framer Motion library, focusing on making the interactions feel natural and purposeful rather than distracting.",
    images: [
      { src: "/Day 4/1.jpg", alt: "Animation storyboard", caption: "Planning the animation sequences" },
      { src: "/Day 4/2.jpg", alt: "Interaction design", caption: "Designing micro-interactions" },
      { src: "/Day 4/3.jpg", alt: "Animation testing", caption: "Testing animation performance" },
      { src: "/Day 4/4.jpg", alt: "Framer Motion", caption: "Implementing animations with Framer Motion" },
      { src: "/Day 4/5.jpg", alt: "CSS transitions", caption: "Fine-tuning CSS transitions" },
      { src: "/Day 4/6.jpg", alt: "Animation principles", caption: "Applying animation principles for natural movement" }
    ]
  },
  {
    day: 5,
    title: "Performance Optimization",
    summary: "Optimizing application performance for faster load times and smoother interactions.",
    coverImage: "/Main-img/5.jpg",
    content: "Performance optimization was on the agenda today. I ran various audits using Lighthouse and identified several areas for improvement. By implementing code splitting, lazy loading, and optimizing images, I managed to significantly reduce the initial load time. I also addressed some rendering performance issues by memoizing components and optimizing state updates.",
    images: [
      { src: "/Day 5/1.jpg", alt: "Performance metrics", caption: "Analyzing performance metrics" },
      { src: "/Day 5/2.jpg", alt: "Code optimization", caption: "Optimizing render performance" },
      { src: "/Day 5/3.jpg", alt: "Load time improvement", caption: "Before and after load time comparison" },
      { src: "/Day 5/4.jpg", alt: "Code splitting", caption: "Implementing code splitting strategies" },
      { src: "/Day 5/5.jpg", alt: "Image optimization", caption: "Optimizing images for faster loading" },
      { src: "/Day 5/6.jpg", alt: "Lighthouse audit", caption: "Reviewing Lighthouse audit results" }
    ]
  },
  {
    day: 6,
    title: "Accessibility Improvements",
    summary: "Making the application more accessible and inclusive for all users.",
    coverImage: "/Main-img/6.jpg",
    content: "Accessibility was the focus of day 6. I conducted a thorough audit of the application using various tools and manual testing. I implemented numerous improvements including proper ARIA attributes, keyboard navigation, sufficient color contrast, and screen reader compatibility. Ensuring the application is usable by everyone regardless of ability is not just good practice but essential for creating truly inclusive web experiences.",
    images: [
      { src: "/Day 6/1.jpg", alt: "Accessibility testing", caption: "Testing with screen readers" },
      { src: "/Day 6/2.jpg", alt: "Color contrast", caption: "Ensuring proper color contrast" },
      { src: "/Day 6/3.jpg", alt: "Keyboard navigation", caption: "Implementing keyboard navigation" },
      { src: "/Day 6/4.jpg", alt: "ARIA attributes", caption: "Adding appropriate ARIA attributes" },
      { src: "/Day 6/5.jpg", alt: "Focus states", caption: "Designing clear focus states" },
      { src: "/Day 6/6.jpg", alt: "Semantic HTML", caption: "Using semantic HTML elements" }
    ]
  },
  {
    day: 7,
    title: "Final Touches and Deployment",
    summary: "Adding the finishing touches and deploying the application to production.",
    coverImage: "/Main-img/7.jpg",
    content: "The final day was all about polishing the application and preparing it for deployment. I addressed the remaining bugs, added some final UI refinements, and conducted thorough testing across different browsers and devices. The deployment process involved setting up CI/CD pipelines to ensure smooth updates in the future. It's incredibly satisfying to see the project come to life and be available to users worldwide.",
    images: [
      { src: "/Day 7/1.jpg", alt: "Final testing", caption: "Final cross-browser testing" },
      { src: "/Day 7/2.jpg", alt: "Deployment setup", caption: "Setting up the deployment pipeline" },
      { src: "/Day 7/3.jpg", alt: "Launch celebration", caption: "Celebrating the successful launch" },
      { src: "/Day 7/4.jpg", alt: "Bug fixes", caption: "Addressing last-minute bug fixes" },
      { src: "/Day 7/5.jpg", alt: "Documentation", caption: "Updating the project documentation" },
      { src: "/Day 7/6.jpg", alt: "User feedback", caption: "Collecting initial user feedback" }
    ]
  },
  {
    day: 8,
    title: "State Management Deep Dive",
    summary: "Exploring modern state management patterns and implementing a robust state architecture.",
    coverImage: "/Main-img/8.jpg",
    content: "Today I took a deep dive into modern state management patterns. As applications grow in complexity, having a well-structured approach to state becomes crucial. I compared different libraries and approaches including Redux, Zustand, Jotai, and React's built-in Context API. After careful consideration, I implemented a hybrid solution that utilizes Context for global UI state and a more specialized library for complex data management. This approach provides the right balance of simplicity, performance, and developer experience.",
    images: [
      { src: "/Day 8/1.jpg", alt: "State architecture", caption: "Designing the state architecture diagram" },
      { src: "/Day 8/2.jpg", alt: "Redux vs alternatives", caption: "Comparing Redux with modern alternatives" },
      { src: "/Day 8/3.jpg", alt: "Context implementation", caption: "Implementing React Context providers" },
      { src: "/Day 8/4.jpg", alt: "State debugging", caption: "Setting up debugging tools for state inspection" },
      { src: "/Day 8/5.jpg", alt: "Immutable patterns", caption: "Working with immutable state patterns" },
      { src: "/Day 8/5.jpg", alt: "Performance testing", caption: "Testing state management performance" }
    ]
  },
  {
    day: 9,
    title: "API Integration and Data Fetching",
    summary: "Building robust API integration with error handling, caching, and optimistic updates.",
    coverImage: "/Main-img/9.jpg",
    content: "API integration was the focus of today's work. I implemented a comprehensive data fetching strategy that includes proper loading states, error handling, retry mechanisms, and caching. Using React Query, I was able to significantly improve the user experience with background updates and optimistic UI changes. I also added a mock API service for development and testing purposes, allowing the team to work efficiently without depending on the backend being available. The resulting data layer is both robust and flexible, making future feature development much smoother.",
    images: [
      { src: "/Day 9/1.jpg", alt: "API architecture", caption: "Designing the API integration architecture" },
      { src: "/Day 9/2.jpg", alt: "React Query setup", caption: "Setting up React Query for data fetching" },
      { src: "/Day 9/3.jpg", alt: "Error handling", caption: "Implementing comprehensive error handling" },
      { src: "/Day 9/4.jpg", alt: "Loading states", caption: "Designing loading state skeletons" },
      { src: "/Day 9/5.jpg", alt: "Cache strategy", caption: "Developing the caching strategy" },
      { src: "/Day 9/6.jpg", alt: "Mock services", caption: "Building mock API services for development" }
    ]
  }
];

// Gallery images for each day - these are used in the photo gallery section
export const galleryImages = {
  1: [
    "/Day 1/1.jpg",
    "/9c4519c1-0888-471a-a3bc-6a5755558d26.jpg",
    "/Day 1/2.jpg",
    "/Day 1/3.jpg",
    "/Day 1/4.jpg",
  
    
  ],
  2: [
    "/sbecc-group.jpg",
    "/sbecc-presentation.jpg",
    "/vtms-monitor.jpg",
    "/subic-view.jpg",
    "/sbecc-hall.jpg",
    "/subic-parking.jpg",
    "/philippine-flag.jpg"
  ],
  3: [
    "/Day 3/IMG_0408.jpg",
    "/Day 3/IMG_0282.jpg"
  ],
  4: [
    "/Day 4/IMG_7477.jpg",
    "/Day 4/IMG_7479.jpg",
    "/Day 4/IMG_7516.jpg"
  ],
  5: [
    "/Day 5/IMG_0411.jpg",
    "/Day 5/IMG_0606.jpg",
    "/Day 5/IMG_7751.jpg",
    "/Day 5/IMG_7777.jpg",
    "/Day 5/IMG_7858.jpg",
    "/Day 5/IMG_0411(3).jpg"
  ],
  6: [
    "/Day 6/IMG_0418.jpg",
    "/Day 6/IMG_8511.jpg",
    "/Day 6/IMG_8780.jpg",
    "/Day 6/IMG_8817.jpg",
    "/Day 6/IMG_8869.jpg",
    "/Day 6/IMG_6906.jpg"
  ],
  7: [
    "/Day 7/IMG_7031.jpg",
    "/Day 7/IMG_8895.jpg",
    "/Day 7/IMG_8902.jpg"
  ],
  8: [
    "/Day 8/IMG_9141.jpg",
    "/Day 8/IMG_8117.jpg",
    "/Day 8/IMG_8145.jpg"
  ],
  9: [
    "/Day 9/IMG_9663.jpg",
    "/Day 9/IMG_6447.jpg",
    "/Day 9/IMG_9006.jpg"
  ]
};