import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
    const projects = [
        {
            title: "Task Management App",
            description: "A comprehensive task management system to seamlessly organize, track, and manage your daily tasks effectively.",
            techStack: ["MongoDB", "Express", "React", "Node.js", "MySQL", "XAMPP"],
            link: "#",
            github: "#"
        },
        {
            title: "Invoice Management",
            description: "An efficient invoice generation and tracking system built with robust backend logic.",
            techStack: ["PHP", "Laravel", "MySQL"],
            link: "#",
            github: "#"
        },
        {
            title: "Creative Agency Design",
            description: "A modern and visually striking web design for creative agencies.",
            techStack: ["React", "CSS", "Vite"],
            link: "https://internship-third-design-3xkl.vercel.app/",
            github: "#"
        },
        {
            title: "Foodie Delivery App",
            description: "A responsive and dynamic food delivery application frontend, offering a great user experience and visual appeal.",
            techStack: ["React", "Tailwind CSS"],
            link: "https://foodie-fifth-project-design.vercel.app/",
            github: "#"
        },
        {
            title: "Car Rental Service",
            description: "A sleek car rental website design featuring modern UI components and seamless navigation.",
            techStack: ["React", "Vite", "Tailwind"],
            link: "https://car-rental-website-design-gules.vercel.app/",
            github: "#"
        },
        {
            title: "First Website Design",
            description: "A simple and elegant first website design project demonstrating core web layout principles.",
            techStack: ["React", "CSS"],
            link: "https://internship-first-website-design.vercel.app/",
            github: "#"
        },
        {
            title: "Coco Development Group",
            description: "A professional corporate website design crafted for Coco Development Group.",
            techStack: ["React", "Tailwind CSS"],
            link: "#",
            github: "#"
        },
        {
            title: "Dashboard Design",
            description: "A clean, responsive dashboard UI demonstrating data visualization layouts and modern admin panel design.",
            techStack: ["React", "Tailwind", "Netlify"],
            link: "https://meek-quokka-d8d4c4.netlify.app/",
            github: "#"
        }
    ];

    return (
        <div className="bg-gray-950 pt-16 pb-20 text-white">
            {/* Heading */}
            <div className="text-center mb-12 px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    <span className="text-3xl sm:text-5xl font-serif font-extrabold text-blue-600 mb-3">
                        Projects
                    </span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                    Some of my recent work, showcasing a variety of frontend designs and full-stack applications.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-8 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-3xl border-2 border-gray-800 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-2 p-8 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-3 text-white">
                                {project.title}
                            </h2>
                            <p className="text-gray-300 text-justify mb-5">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-700 text-blue-400 text-sm font-medium rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-auto border-t border-gray-700 pt-5">
                            {project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors"
                                >
                                    <FaExternalLinkAlt /> <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
