import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiRedux } from "react-icons/si";

const skills = [
    {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
    },
    {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
    },
    {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
    },
    {
        name: "React.js",
        icon: FaReact,
        color: "text-cyan-400",
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
    },
    {
        name: "Express.js",
        icon: SiExpress,
        color: "text-white",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-400",
    },
    {
        name: "Git & GitHub",
        icon: FaGitAlt,
        color: "text-orange-500",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-400",
    },
    {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "text-purple-500",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
    },
    {
        name: "Redux",
        icon: SiRedux,
        color: "text-purple-400",
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-slate-950 px-6 pt-24"
        >
            {/* Background Glow */}
            <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
                        My Skills
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Skills &{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-purple-500" />
                </div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                >

                    {skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                            <div
                                key={skill.name}
                                className="group flex min-h-[130px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-purple-500/[0.06] hover:shadow-lg hover:shadow-purple-500/10"
                            >
                                <Icon
                                    className={`text-4xl transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                                />

                                <p className="mt-4 text-center text-sm font-medium text-gray-300 transition group-hover:text-white">
                                    {skill.name}
                                </p>
                            </div>
                        );
                    })}

                </motion.div>
            </div>
        </section>
    );
}

export default Skills;