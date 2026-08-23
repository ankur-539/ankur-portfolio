import { motion } from "framer-motion";

function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-slate-950 px-6 pt-24"
        >
            {/* Background Glow */}
            <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
                        About Me
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Get to know me
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-purple-500" />
                </motion.div>

                {/* About Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="grid items-center gap-12 md:grid-cols-2"
                >

                    {/* Left - About Card */}
                    <div className="relative">

                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl" />

                        {/* <div className="relative sm:h-[400px] md:h-[360px] lg:h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10"> */}
                        <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:h-[320px] sm:p-10">
                            <div className="h-full overflow-y-auto pr-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-500/50">

                                <p className="text-lg leading-8 text-gray-300">
                                    I'm{" "}
                                    <span className="font-semibold text-white">
                                        Ankur Kumar
                                    </span>
                                    , a BCA graduate and{" "}
                                    <span className="font-semibold text-purple-400">
                                        MERN Stack Developer
                                    </span>
                                    {" "}passionate about building modern, responsive and user-friendly
                                    web applications.
                                </p>

                                <p className="mt-6 text-lg leading-8 text-gray-400">
                                    I have hands-on experience with{" "}
                                    <span className="text-gray-200">
                                        React.js, JavaScript, Node.js, Express.js and MongoDB
                                    </span>
                                    , along with REST APIs, JWT authentication and Git/GitHub.
                                </p>

                                <p className="mt-6 text-lg leading-8 text-gray-400">
                                    During my MERN Stack training at{" "}
                                    <span className="text-purple-400">
                                        CodeSquadz IT Training Company
                                    </span>
                                    , I worked on practical projects and developed a strong
                                    understanding of full-stack web development.
                                </p>

                                <p className="mt-6 text-lg leading-8 text-gray-400">
                                    I'm currently looking for an{" "}
                                    <span className="text-white font-medium">
                                        entry-level Web Developer / MERN Stack Developer opportunity
                                    </span>
                                    {" "}where I can contribute my skills, work on real-world projects
                                    and continue growing as a developer.
                                </p>

                            </div>

                        </div>
                    </div>

                    {/* Right - Quick Info */}
                    <div className="grid gap-5 sm:grid-cols-2">

                        {/* Card 1 */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-500/40">
                            <p className="text-sm text-gray-500">
                                Education
                            </p>

                            <h3 className="mt-2 text-xl font-semibold text-white">
                                BCA Graduate
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                Chaudhary Charan Singh University, Meerut
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-500/40">
                            <p className="text-sm text-gray-500">
                                Specialization
                            </p>

                            <h3 className="mt-2 text-xl font-semibold text-white">
                                MERN Stack
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                React, Node, Express & MongoDB
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-500/40">
                            <p className="text-sm text-gray-500">
                                Training
                            </p>

                            <h3 className="mt-2 text-xl font-semibold text-white">
                                6 Months
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                MERN Stack Development Training
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-purple-500/40">
                            <p className="text-sm text-gray-500">
                                Looking For
                            </p>

                            <h3 className="mt-2 text-xl font-semibold text-white">
                                Web Developer Role
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                Open to entry-level opportunities
                            </p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section >
    );
}

export default About;