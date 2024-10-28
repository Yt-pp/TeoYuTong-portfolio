'use client'
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

export const Projects: React.FC = (): JSX.Element => {
  const projects = [
    {
      title: "Cafe Application",
      description: "A simple cafe ordering app where users can browse the menu, place orders, and view their cart.",
      technologies: "HTML, Bootstrap, CSS, JavaScript",
      repo: "https://github.com/Yt-pp/SimpleCafeApp"
    },
    {
      title: "Campaign Project",
      description: "A campaign website for managing and tracking annoucnement,campaigns and poll.",
      technologies: "Vue3, Bootstrap, Node.js",
      repo: "https://github.com/Yt-pp/Campaign-Public"
    },
    {
      title: "Music Frontend with Spotify Integration",
      description: "A mobile frontend project integrated with Spotify's backend API, allowing users to browse and play music playlists.",
      technologies: "React Native",
      repo: "https://github.com/Yt-pp/reactnativeApp"
    },
    {
      title: "Movie CRUD API with File Upload Functionality",
      description: "A backend API that performs movie-related CRUD operations with file upload functionality.",
      technologies: "Spring Boot (Java)",
      repo: "https://github.com/Yt-pp/MovieAPI"
    },
    {
      title: "Chatbot AI Project",
      description: "A chatbot AI interface that interacts with users and provides responses dynamically.",
      technologies: "Vite.js, React.js, Node.js",
      repo: "https://github.com/Yt-pp/ChatBotAI"
    }
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: sectionRef.current,
              opacity: [0, 1], // Fade in effect
              translateY: [-20, 0], // Move up effect
              duration: 1000,
              easing: "easeOutQuad",
            });
            anime({
              targets: ".project-card",
              opacity: [0, 1],
              delay: anime.stagger(200),
              duration: 800,
              easing: "easeOutCubic"
            });
          } else {
            anime({
              targets: sectionRef.current,
              opacity: 0,
              duration: 300, // Quickly fade out when scrolling out of view
              easing: "easeOutQuad",
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);



  return (
    <section ref={sectionRef} id="projects" className="bg-[#252525] py-10 mx-12">
      <div className="text-center mb-10">
        <h1 className="text-[50px] text-white">My Projects</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card p-6 bg-[#353535] rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-[1.015]"
          >
            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
            <p className="text-gray mb-2">{project.description}</p>
            <p className="text-gray-300"><strong>Technologies:</strong> {project.technologies}</p>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-[#FFC0CB] text-black py-2 px-4 rounded hover:bg-[#e7aeb6] transition duration-200"
            >
              View Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
