import {
    FiMail,
    FiGithub,
    FiLinkedin,
    FiMapPin,
    FiSend,
} from "react-icons/fi";

import { motion } from "framer-motion";

function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-slate-950 px-6 py-24"
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
                        Contact Me
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Let's{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-purple-500" />

                    <p className="mx-auto mt-6 max-w-2xl text-gray-400">
                        Have a project, opportunity or just want to say hello?
                        Feel free to get in touch with me.
                    </p>
                </motion.div>

                {/* Contact Layout */}
                <div className="grid gap-8 lg:grid-cols-2">

                    {/* Left Side */}
                    <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
>

                        <h3 className="text-2xl font-bold text-white">
                            Get in touch
                        </h3>

                        <p className="mt-4 leading-7 text-gray-400">
                            I'm currently looking for an entry-level web development
                            opportunity. If you have an interesting project or job
                            opportunity, I'd love to hear from you.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-8 space-y-5">

                            {/* Email */}
                            <a
                                href="mailto:ankurweb539@gmail.com"
                                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-purple-500/40 hover:bg-purple-500/5"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                    <FiMail size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-gray-200 group-hover:text-purple-400">
                                        ankurweb539@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                    <FiMapPin size={21} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Location
                                    </p>

                                    <p className="mt-1 text-sm font-medium text-gray-200">
                                        Meerut, India
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Social Links */}
                        <div className="mt-8">

                            <p className="mb-4 text-sm text-gray-500">
                                Connect with me
                            </p>

                            <div className="flex gap-3">

                                <a
                                    href="https://github.com/ankur-539"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-gray-300 transition hover:bg-purple-500/20 hover:text-purple-400"
                                >
                                    <FiGithub size={20} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/ankur539"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-gray-300 transition hover:bg-purple-500/20 hover:text-purple-400"
                                >
                                    <FiLinkedin size={20} />
                                </a>

                            </div>

                        </div>

                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
>

                        <form
                            action="https://formsubmit.co/ankurweb539@gmail.com"
                            method="POST"
                            className="space-y-5"
                        >

                            {/* Hidden Settings */}
                            <input
                                type="hidden"
                                name="_subject"
                                value="New Portfolio Contact"
                            />

                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            />

                            {/* Name */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition focus:border-purple-500"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition focus:border-purple-500"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Enter subject"
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition focus:border-purple-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    required
                                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 text-white outline-none placeholder:text-gray-600 transition focus:border-purple-500"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-500"
                            >
                                Send Message
                                <FiSend size={18} />
                            </button>

                        </form>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}

export default Contact;