import { FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-slate-950 px-6 pt-24"
        >
            {/* Background Glow */}
            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
                        Experience
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        My{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                            Journey
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-purple-500" />

                </motion.div>

                {/* Timeline */}
                <div className="relative mx-auto max-w-4xl">

                    {/* Timeline Line */}
                    <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-purple-500 via-purple-500/40 to-transparent md:block" />

                    {/* Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="relative md:pl-16"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-400 md:flex">
                            <span className="h-3 w-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 sm:p-9">

                            {/* Top */}
                            <div className="flex flex-col justify-between gap-5 sm:flex-row">

                                <div>
                                    <p className="text-sm font-medium text-purple-400">
                                        MERN Stack Training
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-white">
                                        MERN Stack Developer Trainee
                                    </h3>

                                    <p className="mt-2 text-lg text-gray-300">
                                        CodeSquadz IT Training Company
                                    </p>
                                </div>

                                <div className="space-y-2 text-sm text-gray-400">

                                    <p className="flex items-center gap-2">
                                        <FiCalendar className="text-purple-400" />
                                        6 Months
                                    </p>

                                    <p className="flex items-center gap-2">
                                        <FiMapPin className="text-purple-400" />
                                        India
                                    </p>

                                </div>

                            </div>

                            {/* Description */}
                            <p className="mt-7 leading-7 text-gray-400">
                                Completed a 6-month MERN Stack development training program
                                focused on building practical web applications using modern
                                frontend and backend technologies.
                            </p>

                            {/* Skills Learned */}
                            <div className="mt-7">

                                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                                    What I Worked With
                                </h4>

                                <div className="grid gap-3 sm:grid-cols-2">

                                    {[
                                        "React.js & Modern UI Development",
                                        "JavaScript & ES6+",
                                        "Node.js & Express.js",
                                        "MongoDB & Mongoose",
                                        "REST APIs & Axios",
                                        "JWT Authentication",
                                        "Git & GitHub",
                                        "Responsive Web Design",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
                                        >
                                            <FiCheckCircle className="shrink-0 text-purple-400" />

                                            <span className="text-sm text-gray-400">
                                                {item}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Experience;