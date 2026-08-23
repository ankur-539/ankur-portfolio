import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiMapPin,
} from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-purple-500" />

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            I'm currently looking for an entry-level Web Developer or
            MERN Stack Developer opportunity. Feel free to reach out.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >

            <h3 className="text-2xl font-bold text-white">
              Contact Information
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              Have a project, job opportunity or just want to connect?
              You can reach me through any of the platforms below.
            </p>

            {/* Email */}
            <a
              href="mailto:ankurweb539@gmail.com"
              className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition hover:border-purple-500/40 hover:bg-purple-500/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <FiMail size={21} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-sm font-medium text-white sm:text-base">
                  ankurweb539@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ankur539"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition hover:border-purple-500/40 hover:bg-purple-500/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <FiLinkedin size={21} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  LinkedIn
                </p>

                <p className="mt-1 text-sm font-medium text-white sm:text-base">
                  linkedin.com/in/ankur539
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ankur-539"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition hover:border-purple-500/40 hover:bg-purple-500/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <FiGithub size={21} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  GitHub
                </p>

                <p className="mt-1 text-sm font-medium text-white sm:text-base">
                  github.com/ankur-539
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <FiMapPin size={21} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 font-medium text-white">
                  India
                </p>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >

            <h3 className="text-2xl font-bold text-white">
              Send Me a Message
            </h3>

            <form
              action="https://formsubmit.co/ankurweb539@gmail.com"
              method="POST"
              className="mt-7 space-y-5"
            >

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

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 font-semibold text-white transition hover:bg-purple-500"
              >
                Send Message
                <FiSend />
              </button>

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;