import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import profileImage from "../assets/pro.png";

function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-slate-950"
        >
            {/* Background Glow */}
            <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

            <div className="absolute right-10 top-40 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

            {/* Content */}
            <div className="relative mx-auto flex min-h-screen max-w-7xl px-6 pt-24 items-center">
                <div className="grid w-full items-center md:grid-cols-[0.9fr_1.1fr] lg:gap-4">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <p className="mb-4 text-lg text-gray-300">
                            Hello, I'm 👋
                        </p>

                        <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                                Ankur Kumar
                            </span>
                        </h1>

                        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                            <span className="text-green-400">MERN</span> Stack Developer
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                            I build responsive, user-friendly and scalable web applications
                            using the MERN stack and modern technologies.
                        </p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >

                            <a
                                href="#projects"
                                className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-500"
                            >
                                View My Work
                                <FiArrowRight />
                            </a>

                            <a
                                href="/resume/Ankur-Kumar-Resume.pdf"
                                download="Ankur-Kumar-Resume.pdf"
                                className="flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:border-purple-500 hover:bg-purple-500/10"
                            >
                                Download Resume
                                <FiDownload />
                            </a>

                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="mt-8 flex gap-4"
                        >

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-gray-300 transition hover:bg-purple-500/20 hover:text-purple-400"
                            >
                                <FiGithub size={20} />
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-gray-300 transition hover:bg-purple-500/20 hover:text-purple-400"
                            >
                                <FiLinkedin size={20} />
                            </a>

                            <a
                                href="#contact"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-gray-300 transition hover:bg-purple-500/20 hover:text-purple-400"
                            >
                                <FiMail size={20} />
                            </a>

                        </motion.div>

                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative h-[430px] w-full sm:h-[500px] md:h-[560px] lg:h-[620px]"
                    >

                        {/* Purple Glow */}
                        <div
                            className="
                            absolute
                            left-1/2
                            top-[45%]
                            -translate-x-1/2
                            -translate-y-1/2
                            h-[280px]
                            w-[280px]
                            rounded-full
                            bg-purple-700/35
                            blur-[70px]

                            sm:h-[340px]
                            sm:w-[340px]

                            md:h-[400px]
                            md:w-[400px]

                            lg:h-[450px]
                            lg:w-[450px]
                            "
                        />

                        {/* Purple Circle */}
                        <div
                            className=" absolute
                            left-1/2
                            top-[50%]
                            -translate-x-1/2
                            -translate-y-1/2

                            h-[260px]
                            w-[260px]

                            rounded-full
                            border
                            border-purple-500/70
                            bg-purple-600/10

                            shadow-[0_0_60px_rgba(124,58,237,0.25)]

                            sm:h-[320px]
                            sm:w-[320px]

                            md:h-[380px]
                            md:w-[380px]

                            lg:h-[430px]
                            lg:w-[430px]
                            "
                        />

                        {/* Profile Image */}
                        <img
                            src={profileImage}
                            alt="Ankur Kumar"
                            className="
                            absolute
                            bottom-16
                            sm:bottom-8
                            left-1/2
                            z-10
                            -translate-x-1/2

                            w-[330px]
                            max-w-none

                            sm:w-[390px]
                            md:w-[450px]
                            lg:w-[520px]
                            xl:w-[560px]

                            object-cover
                            "
                        />

                        {/* Bottom Black Shadow */}
                        <div
                            className="
                            absolute
                            bottom-16
                            sm:bottom-8
                            left-0
                            z-20
                            h-32
                            w-screen
                            bg-gradient-to-t
                            from-slate-950
                            via-slate-950/70
                            to-transparent
                            pointer-events-none 
                            "
                        />

                    </motion.div>
                </div>
            </div>
        </section >
    );
}

export default Hero;
