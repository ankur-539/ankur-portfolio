import { FiCalendar, FiBookOpen, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

function Education() {
    return (
        <section
            id="education"
            className="relative overflow-hidden bg-slate-950 px-6 pt-24"
        >
            {/* Background Glow */}
            <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

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
                        Education
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        My{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-purple-500" />

                </motion.div>

                {/* Education Card */}
                <div className="mx-auto max-w-4xl">

                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 sm:p-10"
                    >
                        {/* Glow */}
                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl transition group-hover:bg-purple-600/20" />

                        <div className="relative">

                            {/* Top */}
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

                                <div className="flex gap-5">

                                    {/* Icon */}
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                                        <FiBookOpen size={26} />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-purple-400">
                                            Bachelor's Degree
                                        </p>

                                        <h3 className="mt-1 text-2xl font-bold text-white">
                                            Bachelor of Computer Applications
                                        </h3>

                                        <p className="mt-2 text-lg text-gray-300">
                                            Chaudhary Charan Singh University, Meerut
                                        </p>
                                    </div>

                                </div>

                                {/* Duration */}
                                <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
                                    <FiCalendar className="text-purple-400" />
                                    BCA
                                </div>

                            </div>

                            {/* Divider */}
                            <div className="my-7 h-px bg-white/10" />

                            {/* Details */}
                            <div className="grid gap-4 sm:grid-cols-2">

                                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                                    <p className="text-sm text-gray-500">
                                        Degree
                                    </p>

                                    <p className="mt-1 font-medium text-white">
                                        Bachelor of Computer Applications
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                                    <p className="text-sm text-gray-500">
                                        Field
                                    </p>

                                    <p className="mt-1 font-medium text-white">
                                        Computer Applications
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                                    <p className="text-sm text-gray-500">
                                        University
                                    </p>

                                    <p className="mt-1 font-medium text-white">
                                        CCS University
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                                    <p className="text-sm text-gray-500">
                                        Location
                                    </p>

                                    <p className="mt-1 flex items-center gap-2 font-medium text-white">
                                        <FiMapPin className="text-purple-400" />
                                        Meerut, India
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Education;