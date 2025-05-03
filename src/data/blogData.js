// Blog Data
export const blogData = [
  {
    day: 1,
    title: "Starting My Journey",
    summary: "My first day exploring new frontend technologies and setting up the development environment.",
    coverImage: "/blog/day1-cover.jpg",
    content: "Today marks the beginning of my journey in frontend development. I spent the day setting up my development environment and exploring the latest technologies in the frontend ecosystem. React continues to be the backbone of my projects, but I'm excited to integrate new tools and libraries that can enhance user experiences.",
    images: [
      { src: "/blog/day1-1.jpg", alt: "Setting up workspace", caption: "My organized development workspace" },
      { src: "/blog/day1-2.jpg", alt: "Code editor", caption: "Writing my first components" },
      { src: "/blog/day1-3.jpg", alt: "Project planning", caption: "Planning the architecture of the project" },
      { src: "/blog/day1-4.jpg", alt: "React documentation", caption: "Studying the latest React features" },
      { src: "/blog/day1-5.jpg", alt: "Dev tools", caption: "Setting up developer tools and extensions" },
      { src: "/blog/day1-6.jpg", alt: "Initial commit", caption: "Making the first commit to the repository" }
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
      { src: "/blog/day2-3.jpg", alt: "Testing components", caption: "Testing components in Storybook" },
      { src: "/blog/day2-4.jpg", alt: "Component props", caption: "Defining component props and interfaces" },
      { src: "/blog/day2-5.jpg", alt: "Component library", caption: "Organizing the component library" },
      { src: "/blog/day2-6.jpg", alt: "Documentation", caption: "Documenting component usage and examples" }
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
      { src: "/blog/day3-3.jpg", alt: "Responsive testing", caption: "Testing on multiple devices" },
      { src: "/blog/day3-4.jpg", alt: "Desktop layout", caption: "Fine-tuning the desktop experience" },
      { src: "/blog/day3-5.jpg", alt: "CSS Grid implementation", caption: "Implementing CSS Grid layouts" },
      { src: "/blog/day3-6.jpg", alt: "Media queries", caption: "Setting up breakpoints with media queries" }
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
      { src: "/blog/day4-3.jpg", alt: "Animation testing", caption: "Testing animation performance" },
      { src: "/blog/day4-4.jpg", alt: "Framer Motion", caption: "Implementing animations with Framer Motion" },
      { src: "/blog/day4-5.jpg", alt: "CSS transitions", caption: "Fine-tuning CSS transitions" },
      { src: "/blog/day4-6.jpg", alt: "Animation principles", caption: "Applying animation principles for natural movement" }
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
      { src: "/blog/day5-3.jpg", alt: "Load time improvement", caption: "Before and after load time comparison" },
      { src: "/blog/day5-4.jpg", alt: "Code splitting", caption: "Implementing code splitting strategies" },
      { src: "/blog/day5-5.jpg", alt: "Image optimization", caption: "Optimizing images for faster loading" },
      { src: "/blog/day5-6.jpg", alt: "Lighthouse audit", caption: "Reviewing Lighthouse audit results" }
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
      { src: "/blog/day6-3.jpg", alt: "Keyboard navigation", caption: "Implementing keyboard navigation" },
      { src: "/blog/day6-4.jpg", alt: "ARIA attributes", caption: "Adding appropriate ARIA attributes" },
      { src: "/blog/day6-5.jpg", alt: "Focus states", caption: "Designing clear focus states" },
      { src: "/blog/day6-6.jpg", alt: "Semantic HTML", caption: "Using semantic HTML elements" }
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
      { src: "/blog/day7-3.jpg", alt: "Launch celebration", caption: "Celebrating the successful launch" },
      { src: "/blog/day7-4.jpg", alt: "Bug fixes", caption: "Addressing last-minute bug fixes" },
      { src: "/blog/day7-5.jpg", alt: "Documentation", caption: "Updating the project documentation" },
      { src: "/blog/day7-6.jpg", alt: "User feedback", caption: "Collecting initial user feedback" }
    ]
  }
];

// Fallback images when blog images aren't available
export const fallbackImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
]; 