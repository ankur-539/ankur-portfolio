import {
    FiGithub,
    FiExternalLink,
} from "react-icons/fi";

import { motion } from "framer-motion";

const projects = [
    {
        title: "AI Mock Interview Platform",
        description:
            "AI-powered interview platform for practicing technical interviews, answering questions and receiving AI-based evaluation.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        image: "/projects/ai-interview.png",
        github: "https://github.com/ankur-539/ai-mock-interview",
        live: "https://ai-mock-interview-539.netlify.app/",
        type: "Full Stack",
    },

    {
        title: "Weather App",
        description:
            "Responsive weather application that displays current weather conditions and forecast information using a weather API.",
        tech: ["React", "JavaScript", "Axios", "Weather API"],
        image: "/projects/weather.png",
        github: "https://github.com/ankur-539/appweather",
        live: "https://weatherapp-by-ankur.onrender.com/",
        type: "React",
    },

    {
        title: "W3Schools Clone",
        description:
            "Responsive educational website clone built to practice frontend development, layouts and responsive UI design.",
        tech: ["React", "JavaScript", "CSS"],
        image: "/projects/w3schools.png",
        github: "https://github.com/ankur-539/w3sxhoolclone",
        live: "https://w3sxhoolclone.onrender.com/",
        type: "Frontend",
    },

    {
        title: "SBI Website Clone",
        description:
            "Responsive banking website clone created to practice website layouts, UI components and frontend interactions.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/projects/sbi.png",
        github: "https://github.com/ankur-539",
        live: "https://ankur-539.netlify.app/",
        type: "Frontend",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-slate-950 px-6 pt-24"
        >
            {/* Background Glow */}
            <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-12 text-center">

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
                        My Projects
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Some Things I've{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                            Built
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-purple-500" />

                </div>

                {/* Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10"
                        >

                            {/* Image */}
                            <div className="relative h-44 overflow-hidden bg-slate-900 ">

                                <img
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                                <span className="absolute right-3 top-3 rounded-full border border-purple-400/30 bg-purple-600/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                    {project.type}
                                </span>

                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-5">

                                <h3 className="text-lg font-semibold text-white transition group-hover:text-purple-400">
                                    {project.title}
                                </h3>

                                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                                    {project.description}
                                </p>

                                {/* Tech */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-gray-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-5">

                                    {project.live !== "#" ? (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-1.5 text-xs font-medium text-purple-400 transition hover:text-purple-300"
                                        >
                                            Live Demo
                                            <FiExternalLink size={14} />
                                        </a>
                                    ) : (
                                        <span className="text-xs text-gray-600">
                                            Live Demo Soon
                                        </span>
                                    )}

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-medium text-gray-300 transition hover:text-white"
                                    >
                                        <FiGithub size={15} />
                                        GitHub
                                    </a>

                                </div>

                            </div>
                        </article>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}

export default Projects;