import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo / About */}
          <div className="text-center md:text-left">

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500 bg-purple-500/10 font-bold text-purple-400">
                AK
              </div>

              <span className="text-lg font-semibold text-white">
                Ankur Kumar
              </span>
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
              MERN Stack Developer passionate about building modern,
              responsive and user-friendly web applications.
            </p>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/ankur-539"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-gray-400 transition hover:bg-purple-500/20 hover:text-purple-400"
            >
              <FiGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/ankur539"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-gray-400 transition hover:bg-purple-500/20 hover:text-purple-400"
            >
              <FiLinkedin size={19} />
            </a>

            <a
              href="mailto:ankurweb539@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-gray-400 transition hover:bg-purple-500/20 hover:text-purple-400"
            >
              <FiMail size={19} />
            </a>

            <a
              href="#home"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 text-white transition hover:bg-purple-500"
            >
              <FiArrowUp size={19} />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ankur Kumar. All rights reserved.
          </p>

          <p className="mt-2 text-xs text-gray-600">
            Built with React, Tailwind CSS & ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;